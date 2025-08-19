class OverworldScene extends Phaser.Scene {
    constructor() {
        super({ key: 'OverworldScene' });
    }


    create() {
        // Configuración del día actual
        const config = dias_config[g.diaActual] || null;


        if (config) {
            this.fondoKey = g.pasilloActual === 1 ? config.fondo_1 : config.fondo_2;
            this.personajesVisibles = g.pasilloActual === 1 ? config.personajes_1 : config.personajes_2;
            this.npcsNecesarios = config.npcs_necesarios;
            this.accionFinal = config.accion_final;
        } else {
            this.fondoKey = 'fondo_pasillo_1';
            this.personajesVisibles = [];
            this.npcsNecesarios = [];
            this.accionFinal = () => {};
        }


        // Fondo
        this.fondo = this.add.image(400, 300, this.fondoKey).setDisplaySize(800, 600);


        // Alex overworld
        this.alex = this.physics.add.sprite(100, 300, 'alex_overworld');
        this.alex.setCollideWorldBounds(true);


        // Velocidad y dirección
        this.velocidad = 200;
        this.direccion = 'derecha';


        // NPCs visibles
        this.npcs = this.personajesVisibles.map(npc => {
            let sprite = this.add.sprite(npc.x, npc.y, npc.sprite);
            sprite.setData('nombre', npc.nombre);
            sprite.setData('dialogos', npc.dialogos);
            sprite.setData('dialogo_actual', 0);
            return sprite;
        });


        // Input
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys('W,A,S,D,E,ENTER');


        // Estados de diálogo
        this.npcHablando = null;
        this.mostrarDialogo = false;
        this.textoDialogo = null;
        this.epilogoMostrado = false;
    }


    update() {
        let moviendo = false;
        this.alex.setVelocity(0);


        // Movimiento
        if (this.cursors.left.isDown || this.keys.A.isDown) {
            this.alex.setVelocityX(-this.velocidad);
            this.direccion = 'izquierda';
            moviendo = true;
        } else if (this.cursors.right.isDown || this.keys.D.isDown) {
            this.alex.setVelocityX(this.velocidad);
            this.direccion = 'derecha';
            moviendo = true;
        }
        if (this.cursors.up.isDown || this.keys.W.isDown) {
            this.alex.setVelocityY(-this.velocidad);
            moviendo = true;
        } else if (this.cursors.down.isDown || this.keys.S.isDown) {
            this.alex.setVelocityY(this.velocidad);
            moviendo = true;
        }


        // Cambiar pasillo
        if (g.pasilloActual === 1 && this.alex.x >= 780) {
            g.pasilloActual = 2;
            this.scene.restart();
        } else if (g.pasilloActual === 2 && this.alex.x <= 20) {
            g.pasilloActual = 1;
            this.scene.restart();
        }


        // Revisar cercanía con NPC
        let npcCercano = null;
        this.npcs.forEach(npc => {
            let dx = this.alex.x - npc.x;
            let dy = this.alex.y - npc.y;
            let distancia = Math.sqrt(dx*dx + dy*dy);
            if (distancia < 80) npcCercano = npc;
        });


        // Mostrar "Presiona E"
        if (npcCercano && !this.mostrarDialogo) {
            if (!this.textoAccion) {
                this.textoAccion = this.add.text(40, 540, `[E] Hablar con ${npcCercano.getData('nombre')}`, {
                    fontSize: '20px',
                    fill: '#fff',
                    backgroundColor: '#000',
                    padding: { x: 5, y: 2 }
                });
            }
            if (Phaser.Input.Keyboard.JustDown(this.keys.E)) {
                this.npcHablando = npcCercano;
                this.npcHablando.setData('dialogo_actual', 0);
                this.mostrarDialogo = true;
                if (this.textoAccion) { this.textoAccion.destroy(); this.textoAccion = null; }
                this.mostrarTexto();
            }
        } else {
            if (this.textoAccion) { this.textoAccion.destroy(); this.textoAccion = null; }
        }


        // Avanzar diálogo con ENTER
        if (this.mostrarDialogo && Phaser.Input.Keyboard.JustDown(this.keys.ENTER)) {
            let i = this.npcHablando.getData('dialogo_actual');
            let dialogos = this.npcHablando.getData('dialogos');


            if (i < dialogos.length) {
                this.mostrarTexto(dialogos[i]);
                this.npcHablando.setData('dialogo_actual', i + 1);
            } else {
                if (!g.npcsHablados.includes(this.npcHablando.getData('nombre'))) {
                    g.npcsHablados.push(this.npcHablando.getData('nombre'));
                }
                this.mostrarDialogo = false;
                this.npcHablando = null;
                if (this.textoDialogo) { this.textoDialogo.destroy(); this.textoDialogo = null; }
            }
        }


        // Epílogo si habló con todos
        if (!this.epilogoMostrado && g.npcsHablados.length === this.npcsNecesarios.length &&
            g.npcsHablados.every(n => this.npcsNecesarios.includes(n))) {
            this.epilogoMostrado = true;
            this.accionFinal();
        }
    }


    mostrarTexto(texto="") {
        if (this.textoDialogo) this.textoDialogo.destroy();
        this.textoDialogo = this.add.text(40, 500, texto, {
            fontSize: '20px',
            fill: '#fff',
            backgroundColor: '#000',
            padding: { x: 10, y: 5 }
        });
    }
}
