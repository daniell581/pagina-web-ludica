
var anim ;
var buton_play;
var cssTexto1;
var dora;
var dora2;
var background;
var loading;
var Menu = {

   preload: function () {
      juego.load.spritesheet('btn1', 'img/btn-play.png', 318, 117);
      juego.load.spritesheet('bg', 'img/fondo.png', 1280, 720);
      juego.load.spritesheet('lg', 'img/loading.png', 1279, 720);
      juego.load.spritesheet('do', 'img/doramon.png', 106, 132);


   },
   create: function () {
      
      //juego.add.tileSprite(0,0,1280,720,'bg');

       juego.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

      juego.physics.startSystem(Phaser.Physics.ARCADE);
      loading = juego.add.image(0, 0, 'lg');
      background = juego.add.image(0, 0, 'bg');
      background.visible = false;
      anim = loading.animations.add(
         'mover',
         [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
         5,
         false
      );
     


      loading.animations.play('mover');

      buton_play = this.add.button(480, 250, 'btn1', funcion1, this, 1, 0, 2);

      buton_play.visible = false;


       dora = juego.add.sprite(103, 478, 'do');
      dora2 = juego.add.image(600, 200, 'do');
      dora.animations.add('mover', [0, 1, 2, 3, 4, 5], 10, true);
      dora.animations.add('quieto', [0], 1, true);

      dora.visible=false;

       cssTexto1 = { font: "48px Comic Sans MS", fill: "#FFFFFF", align: "center", backgroundColor: "transparent" };
      textotitulo = juego.add.text(500, 315, 'Bienvenido', cssTexto1);



      anim.onComplete.add(function () {
         loading.visible = false;      // oculta loading
         background.visible = true;    // muestra fondo
          textotitulo.visible = false;
         buton_play.visible = true;
          dora2.visible=false;

      }, this);


   },
   update: function () {



   }

};
function funcion1(){
   buton_play.visible=false;
   dora.visible=true;
      dora.animations.play('mover');
}





