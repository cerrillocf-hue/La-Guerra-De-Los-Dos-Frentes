class Llegada extends Phaser.Scene {
    constructor() {
        super("Llegada");
    }


    create() {
        // Fondo de la llegada al colegio
        this.add.image(400, 300, "fondo_colegio");


        // Sprite de Alex al llegar
        this.alex = this.add.sprite(300, 400, "alex");


        // Sprite de Marco al llegar
        this.marco = this.add.sprite(250, 400, "marco");


        // Texto de diálogo inicial
        this.dialogo = this.add.text(400, 100, "¡Llegamos justo a tiempo!", {
            fontSize: "20px",
            color: "#ffffff",
            wordWrap: { width: 600 }
        }).setOrigin(0.5);


        // Segundo texto de diálogo
        this.dialogo2 = this.add.text(400, 150, "Espero que no nos pongan un reporte por la demora...", {
            fontSize: "20px",
            color: "#ffffff",
            wordWrap: { width: 600 }
        }).setOrigin(0.5);


        // Instrucción para avanzar
        this.instruccion = this.add.text(400, 500, "Presiona ENTER para continuar", {
            fontSize: "18px",
            color: "#ffff00"
        }).setOrigin(0.5);
