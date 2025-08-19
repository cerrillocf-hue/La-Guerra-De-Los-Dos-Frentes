class Despertar extends Phaser.Scene {
    constructor() {
        super("Despertar");
    }


    create() {
        // Fondo de la escena despertar
        this.add.image(400, 300, "fondo_cuarto");


        // Sprite de Marco
        this.marco = this.add.sprite(250, 300, "marco");


        // Sprite de Alex (jugador)
        this.alex = this.add.sprite(550, 300, "alex");


        // Texto inicial
        this.dialogo = this.add.text(400, 100, "¡Alex, despierta! Ya es tarde para ir al colegio.", {
            fontSize: "20px",
            color: "#ffffff",
            wordWrap: { width: 600 }
        }).setOrigin(0.5);


        // Interacción: continuar al siguiente diálogo
        this.input.keyboard.once("keydown-SPACE", () => {
            this.dialogo.setText("Marco: Vamos, levántate. Si llegamos tarde nos van a regañar.");
        });


        // Avanzar de escena con ENTER
        this.input.keyboard.once("keydown-ENTER", () => {
            this.scene.start("Correr");
        });
    }
}


