class Preload extends Phaser.Scene {
    constructor() {
        super("Preload");
    }


    preload() {
        // Fondos
        this.load.image("fondo_menu", "assets/fondos/fondo_menu.png");
        this.load.image("fondo_pasillo_1", "assets/fondos/fondo_pasillo_1.png");
        this.load.image("fondo_pasillo_2", "assets/fondos/fondo_pasillo_2.png");
        // En Preload
        this.load.image("fondo_cuarto", "assets/fondos/fondo_cuarto.png");
        this.load.image("fondo_calle", "assets/fondos/fondo_calle.png");
        this.load.image("fondo_colegio", "assets/fondos/fondo_colegio.png");
 
        // Personajes normales
        this.load.image("marco", "assets/personajes/marco.png");
        this.load.image("renzo", "assets/personajes/renzo.png");
        this.load.image("alex", "assets/personajes/alex.png");
        this.load.image("samuel", "assets/personajes/samuel.png");


        // Personajes overworld
        this.load.image("marco_overworld", "assets/personajes/marco_overworld.png");
        this.load.image("renzo_overworld", "assets/personajes/renzo_overworld.png");
        this.load.image("alex_overworld", "assets/personajes/alex_overworld.png");
        this.load.image("samuel_overworld", "assets/personajes/samuel_overworld.png");
        this.load.image("axel_overworld", "assets/personajes/axel_overworld.png");
        this.load.image("tedd_overworld", "assets/personajes/tedd_overworld.png");

    }


    create() {
        this.scene.start("IntroScene");
    }
}


const game = new Phaser.Game(config);
