class EpilogoScene extends Phaser.Scene {
    constructor() {
        super({ key: 'EpilogoScene' });
    }


    create() {
        this.add.rectangle(400, 300, 800, 600, 0x2F4F4F);
        const cfg = dias_config[g.diaActual];
        const txt = cfg ? cfg.epilogo.texto : ["Final del día"];
        this.add.text(400, 100, '✨ EPÍLOGO DEL DÍA', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);


        const alex = this.add.rectangle(800, 350, 60, 100, 0x0000FF);
        this.tweens.add({
            targets: alex,
            x: 400,
            duration: 2000,
            ease: 'Power2',
            onComplete: () => this.mostrarTexto(txt, 0)
        });
    }


    mostrarTexto(txt, i) {
        if (i >= txt.length) {
            this.add.text(400, 550, '¡Gracias por jugar!', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5);
            this.input.keyboard.once('keydown-ENTER', () => {
                this.scene.start('Menu'); // aquí decide si regresas al menú o a otra escena
            });
            return;
        }
        if (this.textoActual) this.textoActual.destroy();
        this.textoActual = this.add.text(40, 500, txt[i], {
            fontSize: '24px',
            fill: '#fff',
            backgroundColor: '#000',
            padding: { x: 10, y: 5 }
        });
        this.add.text(40, 540, 'Presiona ENTER...', {
            fontSize: '20px',
            fill: '#999',
            backgroundColor: '#000',
            padding: { x: 5, y: 2 }
        });
        this.input.keyboard.once('keydown-ENTER', () => this.mostrarTexto(txt, i + 1));
    }
}
