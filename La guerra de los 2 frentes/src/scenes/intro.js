class IntroScene extends Phaser.Scene {
    constructor(){
        super({key:'IntroScene'});
        this.t=[
            "Antes de jugar te tengo que decir algo",
            "Gracias por jugar, significa mucho para mí",
            "¿Qué? ¿Esperabas más introducción?",
            "Este juego está hecho con 2 soles, no le pidas mucho"
        ];
        this.i=0;
    }


    create(){
        this.mostrar();
    }


    mostrar(){
        if(this.i>=this.t.length){
            this.scene.start('Menu');
            return;
        }
        const txt=this.add.text(400,300,this.t[this.i],{
            fontSize:'28px',
            fill:'#fff',
            align:'center'
        }).setOrigin(0.5).setAlpha(0);


        this.tweens.add({
            targets:txt,
            alpha:1,
            duration:1000,
            onComplete:()=>this.time.delayedCall(1500,()=>this.tweens.add({
                targets:txt,
                alpha:0,
                duration:1000,
                onComplete:()=>{
                    this.i++;
                    this.time.delayedCall(500,()=>this.mostrar());
                }
            }))
        });
    }
}


