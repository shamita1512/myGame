var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15,ball16;
var ball1img;
var play;
var hole,holeImg,hole2,hole3,hole4;
// var grp1 = new Group();
// var grp2 = new Group();
// var grp3 = new Group();
// var grp4 = new Group();
// var grp5 = new Group();
// var grp6 = new Group();
// var grp7 = new Group();
function preload(){
//   ball1img = loadImage("ball1.png");
//   holeImg = loadImage("hole.png");
 }
function setup() {
  createCanvas(1200,600);
  hole = createSprite(115,208,80,80);
  hole.shapeColor = "brown";

  hole2 = createSprite(213,209,80,80);
  hole2.shapeColor= "brown";

  hole3 = createSprite(314,210,80,80);
  hole3.shapeColor= "brown";

  hole4 = createSprite(417,209,80,80);
  hole4.shapeColor= "brown";
  //hole.addImage("hole",holeImg)
  ball1 = createSprite(108, 97, 20, 20);
  ball1.shapeColor= "red";

  ball2 = createSprite(138, 102, 20, 20);
  ball2.shapeColor= "red";

  ball3 = createSprite(96, 122, 20, 20);
  ball3.shapeColor= "red";

  ball4 = createSprite(122, 128, 20, 20);
  ball4.shapeColor= "red";


  ball5 = createSprite(208, 97, 20, 20);
  ball5.shapeColor= "red";

  ball6 = createSprite(238, 102, 20, 20);
  ball6.shapeColor= "red";

  ball7 = createSprite(196, 122, 20, 20);
  ball7.shapeColor= "red";

  ball8 = createSprite(222, 128, 20, 20);
  ball8.shapeColor= "red";


  ball9 = createSprite(308,97, 20, 20);
  ball9.shapeColor= "red";

  ball10 = createSprite(338, 102, 20, 20);
  ball10.shapeColor= "red";

  ball11 = createSprite(296,122, 20, 20);
  ball11.shapeColor= "red";

  ball12 = createSprite(322, 128, 20, 20);
  ball12.shapeColor= "red";


  ball13 = createSprite(408, 97, 20, 20);
  ball13.shapeColor= "red";

  ball14 = createSprite(438, 102, 20, 20);
  ball14.shapeColor= "red";

  ball15 = createSprite(396, 122, 20, 20);
  ball15.shapeColor= "red";

  ball16 = createSprite(422, 128, 20, 20);
  ball16.shapeColor = "red";


  ball17 = createSprite(100, 200, 20, 20);
  ball17.shapeColor= "black";

  ball18 = createSprite(138, 201, 20, 20);
  ball18.shapeColor= "black";

  ball19 = createSprite(96, 230, 20, 20);
  ball19.shapeColor= "black";

  ball20 = createSprite(122, 230, 20, 20);
  ball20.shapeColor= "black";


  ball21 = createSprite(200, 200, 20, 20);
  ball21.shapeColor= "green";

  ball22 = createSprite(238, 201, 20, 20);
  ball22.shapeColor= "green";

  ball23 = createSprite(196, 230, 20, 20);
  ball23.shapeColor= "green";

  ball24 = createSprite(222, 230, 20, 20);
  ball24.shapeColor= "green";


  ball25 = createSprite(300, 200, 20, 20);
  ball25.shapeColor= "yellow";
  
  ball26 = createSprite(338, 201, 20, 20);
  ball26.shapeColor= "yellow";

  ball27 = createSprite(296, 230, 20, 20);
  ball27.shapeColor= "yellow";

  ball28 = createSprite(322, 230, 20, 20);
  ball28.shapeColor= "yellow";


  ball29 = createSprite(400, 200, 20, 20);
  ball29.shapeColor= "white";

  ball30 = createSprite(438, 201, 20, 20);
  ball30.shapeColor= "white";

  ball31 = createSprite(396, 230, 20, 20);
  ball31.shapeColor= "white";

  ball32 = createSprite(422, 230, 20, 20);
  ball32.shapeColor = "white";

  //groups();

  
  //ball1.addImage("1",ball1img);
  
}

// function groups(){
//   grp1.add(ball1);
//   grp1.add(ball2);
//   grp1.add(ball3);
//   grp1.add(ball4);

//   grp2.add(ball5);
//   grp2.add(ball6);
//   grp2.add(ball7);
//   grp2.add(ball8);

//   grp3.add(ball9);
//   grp3.add(ball10);
//   grp3.add(ball11);
//   grp3.add(ball12);
  
//   grp4.add(ball13);
//   grp4.add(ball14);
//   grp4.add(ball15);
//   grp4.add(ball16);
//   grp4.add(ball17);
  
//   grp5.add(ball18);
//   grp5.add(ball19);
//   grp5.add(ball20);
//   grp5.add(ball21);
//   grp5.add(ball22);

//   grp6.add(ball23);
//   grp6.add(ball24);
//   grp6.add(ball25);
//   grp6.add(ball26);
//   grp6.add(ball27);

//   grp7.add(ball28);
//   grp7.add(ball29);
//   grp7.add(ball30);
//   grp7.add(ball31);
//   grp7.add(ball32);
// }

function draw() {
  background("blue");  
  fill("white");
  text(mouseX+","+mouseY,200,20);
  
  distribute();
  drawSprites();
}

function distribute(){
    if(mousePressedOver(hole)){
      ball17.x = 216;
      ball17.y = 194;
      ball18.x = 320;
      ball18.y = 189;
      ball19.x = 418;
      ball19.y = 202;
      ball20.x = 417;
      ball20.y = 108;

    }
    if(mousePressedOver(hole2)){
      ball21.x = 320;
      ball21.y = 189;
      ball22.x = 418;
      ball22.y = 202;
      ball23.x = 417;
      ball23.y = 108;
      ball24.x = 315;
      ball24.y = 108;

    }
    if(mousePressedOver(hole3)){
      ball25.x = 418;
      ball25.y = 202;
      ball26.x = 418;
      ball26.y = 108;
      ball27.x = 315;
      ball27.y = 108;
      ball28.x = 218;
      ball28.y = 106;

    }
    if(mousePressedOver(hole4)){
      ball29.x = 418;
      ball29.y = 108;
      ball30.x = 315;
      ball30.y = 108;
      ball31.x = 218;
      ball31.y = 106;
      ball32.x = 116;
      ball32.y = 106;

    }
  
  
  
  
}

