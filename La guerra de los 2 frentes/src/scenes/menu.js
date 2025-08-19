class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");
    }


    create() {
        // Fondo
        this.add.image(400, 300, "fondo_menu");


        // Título
        this.add.text(400, 100, "La Guerra de los Dos Frentes", {
            fontSize: "32px",
            color: "#ffffff"
        }).setOrigin(0.5);


        // Botón Jugar
        let botonJugar = this.add.image(400, 250, "boton_jugar").setInteractive();
        botonJugar.on("pointerdown", () => {
            this.scene.start("Despertar");
        });


        // Botón Salir
        let botonSalir = this.add.image(400, 350, "boton_salir").setInteractive();
        botonSalir.on("pointerdown", () => {
            this.game.destroy(true);
        });
    }
}
 