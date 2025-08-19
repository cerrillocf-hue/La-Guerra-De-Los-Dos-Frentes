class RespuestaScene extends Phaser.Scene {
    constructor(){
        super({key:'RespuestaScene'});
    }


    create(){


        // Renzo  ya precargado
        this.add.image(400, 300, 'Renzo');


        // Línea de diálogo según la elección previa
        let linea = g.respuestaAgresiva
            ? 'Alex: Mira Renzo, no me hables. Estoy cansado.'
            : 'Alex: Fue una locura llegar a tiempo. Pero lo logramos.';


        // Texto de diálogo
        this.dialogoText = this.add.text(
            40,
            500,
            linea,
            { fontSize: '28px', fill: '#fff', backgroundColor: '#000', padding: { x: 10, y: 5 } }
        );


        // Indicador para avanzar
        this.add.text(
            40,
            540,
            'Presiona ENTER...',
            { fontSize: '28px', fill: '#fff', backgroundColor: '#000', padding: { x: 10, y: 5 } }
        );


        // Continuar al inicio del día libre (overworld)
        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.start('OverworldScene');
        });
    }
}
