class IniDiaScene extends Phaser.Scene {
    constructor(){
        super({key:'IniDiaScene'});
    }


    create(){
        let fondoKey = g.pasilloActual===1 ? 'fondo_pasillo_1' : 'fondo_pasillo_2';
        this.add.image(400,300,fondoKey).setDisplaySize(800,600);


        this.add.image(400,300,'Renzo_overworld');


        this.add.text(40,500,'Renzo: ¿Qué? ¿Por qué llegaste corriendo?',{
            fontSize:'28px',fill:'#fff',backgroundColor:'#000',padding:{x:10,y:5}
        });


        this.add.text(40,540,'[Z] Defenderse    [X] Quedarse callado',{
            fontSize:'28px',fill:'#fff',backgroundColor:'#000',padding:{x:10,y:5}
        });


        this.input.keyboard.once('keydown-Z',()=>{
            g.respuestaAgresiva=true;
            this.scene.start('RespuestaScene');
        });


        this.input.keyboard.once('keydown-X',()=>{
            g.respuestaAgresiva=false;
            this.scene.start('RespuestaScene');
        });
    }
}
