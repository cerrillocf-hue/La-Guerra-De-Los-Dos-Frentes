class Correr extends Phaser.Scene {
    constructor() {
        super("Correr");
    }


    create() {
        // Fondo de la escena correr
        this.add.image(400, 300, "fondo_calle");


        // Sprite de Alex corriendo
        this.alex = this.add.sprite(200, 300, "alex");


        // Sprite de Marco corriendo
        this.marco = this.add.sprite(150, 300, "marco");


        // Texto inicial
        this.dialogo = this.add.text(400, 100, "¡Rápido   Alex, vamos a llegar tarde al colegio!", {
            fontSize: "20px",
            color: "#ffffff",
            wordWrap: { width: 600 }
        }).setOrigin(0.5);


        // Animación de movimiento hacia la derecha
        this.tweens.add({
            targets: [this.alex, this.marco],
            x: 800,
            duration: 4000,
            ease: "Linear",
            onComplete: () => {
                this.dialogo.setText("¡Uf! Falta poco para llegar...");
            }
        });


        // Avanzar de escena con ENTER
        this.input.keyboard.once("keydown-ENTER", () => {
            this.scene.start("Respuesta");
        });
    }
}
