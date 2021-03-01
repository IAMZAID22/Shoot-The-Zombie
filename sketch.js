//impotant
var player, gun, dir = "right",
  gunheld = "pistol",
  level = 0,
  ground,
  reload = 15

var time = 0,
  time1 = 0

//gun Images right
var awmr, scarr, umpr, pisr, shor

//gun Images left
var awml, scarl, umpl, pisl, shol

//gameState
var gameState = "menu"

//objects
var object1, object2, object3

//buttons
var play, retry, pause

//levels
var l1, l2, l3, l4, l5

//level Image
var lvl1, lvl2, lvl3, lvl4, lvl5

//gun icon images
var i1shImg, i2shImg, i3shImg, i4shImg, i5shImg

//gun icon 
var i1, i2, i3, i4, i5

var pis = 1,
  sho = 0,
  ump = 0,
  sca = 0,
  awm = 0

var b1, b1, b2, b3, b4

var reloader1, reloadc = 0

var e1, e2, e3, e4

var c1, c2, c3

var erImg, elImg, bGrp

var en1 = 0,
  en2 = 0,
  en3 = 0,
  en4

var h1, bg

var hp1 = 3,
  hp2 = 3,
  hp3 = 3,
  hp4 = 3

var r, l, hp, bar

var ex1, ex2, ex3, ex4, ex5

function preload() {

  //guns
  awmr = loadImage("Guns/awm right.png")
  scarr = loadImage("Guns/right scar.png")
  umpr = loadImage("Guns/right ump.png")
  pisr = loadImage("Guns/right usp.png")
  shor = loadImage("Guns/shotgun right.png")
  awml = loadImage("Guns/awm left.png")
  scarl = loadImage("Guns/left scar.png")
  umpl = loadImage("Guns/left ump.png")
  pisl = loadImage("Guns/left usp.png")
  shol = loadImage("Guns/shotgun left.png")

  //buttons
  play = loadImage("Buttons/play.png")
  retry = loadImage("Buttons/retry.png")
  pause = loadImage("Buttons/pause.png")
  home = loadImage("Buttons/home.png")
  resume = loadImage("Buttons/resume.png")

  //levels
  lvl1 = loadImage("Levels/level1.png")
  lvl2 = loadImage("Levels/level2.png")
  lvl3 = loadImage("Levels/level3.png")
  lvl4 = loadImage("Levels/level4.png")
  lvl5 = loadImage("Levels/level5.png")
  lvl6 = loadImage("Levels/level6.png")
  lvl7 = loadImage("Levels/level7.png")
  lvl8 = loadImage("Levels/level8.png")
  lvl9 = loadImage("Levels/level9.png")
  lvl10 = loadImage("Levels/level10.png")

  gro = loadImage("ground.png")

  //icons
  i1Img = loadImage("pistol icon.png")
  i2Img = loadImage("shotgun icon.png")
  i3Img = loadImage("ump icon.png")
  i4Img = loadImage("scar icon.png")
  i5Img = loadImage("awm icon.png")

  plImg = loadImage("platform1.png")
  recImg = loadImage("reloadcount.png")

  elImg = loadImage("enemyleft.png")
  erImg = loadImage("enemyright.png")
  r = loadImage("playerright.png")
  l = loadImage("playerleft.png")

  ex = loadImage("barrel.png")

  ex1 = loadImage("exp1.png")
  ex2 = loadImage("exp2.png")
  ex3 = loadImage("exp3.png")
  ex4 = loadImage("exp4.png")
  ex5 = loadImage("exp5.png")
  
  s1 = loadSound("click.wav")
  s2 = loadSound("die.wav")
  s3 = loadSound("explosion.wav")
  s4 = loadSound("shoot.wav")
  
  m1 = loadSound("music.wav")
}

function setup() {
  createCanvas(600, 400)

  hp = 10

  bar1 = createSprite(700, 205)
  bar1.addImage(ex)
  bar1.visible = false
  bar1.scale = 0.7

  bar2 = createSprite(700, 205)
  bar2.addImage(ex)
  bar2.visible = false
  bar2.scale = 0.7

  co1 = createSprite(100, 100, 150, 150)
  co1.visible = false

  co2 = createSprite(100, 100, 150, 150)
  co2.visible = false


  player = createSprite(150, 250, 50, 50)
  player.addImage(r)
  player.scale = 0.3

  object1 = createSprite(300, 200)
  object1.addImage(play)
  object1.scale = 0.8

  object2 = createSprite(300, 150)
  object2.addImage(retry)
  object2.scale = 0.6
  object2.visible = false

  object3 = createSprite(320, 40)
  object3.addImage(pause)
  object3.scale = 0.05
  object3.visible = false
  
  object4 = createSprite(300, 300)
  object4.addImage(home)
  object4.scale = 0.7
  object4.visible = false
  
  object5 = createSprite(300, 250)
  object5.addImage(resume)
  object5.scale = 0.7
  object5.visible = false

  ground = createSprite(300, 380, 600, 50)
  ground.addImage(gro)

  bg = createSprite(300, 165, 720, 290)
  bg.visible = false

  pl1 = createSprite(650, 291)
  pl1.addImage(plImg)

  pl2 = createSprite(1150, 291)
  pl2.addImage(plImg)

  pl3 = createSprite(1650, 291)
  pl3.addImage(plImg)

  pl4 = createSprite(2350, 291)
  pl4.addImage(plImg)

  i1 = createSprite(50, 370)
  i1.addImage(i1Img)
  i1.scale = 0.6

  i2 = createSprite(180, 365 + 5)
  i2.addImage(i2Img)
  i2.scale = 0.6

  i3 = createSprite(300, 365 + 5)
  i3.addImage(i3Img)
  i3.scale = 0.6

  i4 = createSprite(430, 365 + 5)
  i4.addImage(i4Img)
  i4.scale = 0.6

  i5 = createSprite(550, 365 + 5)
  i5.addImage(i5Img)
  i5.scale = 0.6

  t1 = createSprite(0, 0, 1, 10)
  t1.visible = true
  t2 = createSprite(0, 0, 1, 10)
  t2.visible = true

  gun = createSprite(150, 250)
  gun.addImage(pisr)

  re = createSprite(530, 300)
  re.addImage(recImg)
  re.scale = 1.1
  re.visible = false

  lv1 = createSprite(50, 150)
  lv1.addImage(lvl1)
  lv1.scale = 0.6
  lv1.visible = false

  lv2 = createSprite(180, 150)
  lv2.addImage(lvl2)
  lv2.scale = 0.6
  lv2.visible = false

  lv3 = createSprite(300, 150)
  lv3.addImage(lvl3)
  lv3.scale = 0.6
  lv3.visible = false

  lv4 = createSprite(430, 150)
  lv4.addImage(lvl4)
  lv4.scale = 0.6
  lv4.visible = false

  lv5 = createSprite(550, 150)
  lv5.addImage(lvl5)
  lv5.scale = 0.6
  lv5.visible = false

  lv6 = createSprite(50, 250)
  lv6.addImage(lvl6)
  lv6.scale = 0.6
  lv6.visible = false

  lv7 = createSprite(180, 250)
  lv7.addImage(lvl7)
  lv7.scale = 0.6
  lv7.visible = false

  lv8 = createSprite(300, 250)
  lv8.addImage(lvl8)
  lv8.scale = 0.6
  lv8.visible = false

  lv9 = createSprite(430, 250)
  lv9.addImage(lvl9)
  lv9.scale = 0.6
  lv9.visible = false

  lv10 = createSprite(550, 250)
  lv10.addImage(lvl10)
  lv10.scale = 0.6
  lv10.visible = false

  reloader1 = createSprite(100, 0, 10, 100)
  reloader1.visible = false

  e1 = createSprite(650, 200, 50, 50)
  e1.addImage(elImg)
  e1.scale = 0.3

  e2 = createSprite(1150, 200, 50, 50)
  e2.addImage(elImg)
  e2.scale = 0.3

  e3 = createSprite(1650, 200, 50, 50)
  e3.addImage(elImg)
  e3.scale = 0.3

  e4 = createSprite(1650, 200, 50, 50)
  e4.addImage(elImg)
  e4.scale = 0.3

  c1 = createSprite(200, 200, 150, 50)
  c1.visible = false
  c2 = createSprite(200, 200, 150, 50)
  c2.visible = false
  c3 = createSprite(200, 200, 150, 50)
  c3.visible = false
  c4 = createSprite(200, 200, 150, 50)
  c4.visible = false

  b1 = createSprite(200, 200, 10, 4)
  b1.shapeColor = "yellow"
  b1.visible = false

  h1 = createSprite(10, 0, 1, 15)
  h1.visible = false

  bGrp = new Group()
}

function draw() {
  background(0, 11, 24)

  if(player.x !== 150&&gameState === "play"){
    textSize(35)
    textFont('Georgia');
    fill("black")
    text("You're postion has been changed", 20, 280)
    player.x = 150
    player.y = 100
  }
  
  if(mousePressedOver(object3)&&gameState === "play"){
    gameState = "pause"
    bar1.visible = false
    bar2.visible = false
    object4.visible = true
    s1.play()
  }
  
  if(gameState === "died"){
    object2.visible = true
  }
  else{
    object2.visible = false
  }
  
  if(mousePressedOver(object4)&&gameState === "pause"){
    gameState = "levels"
    object4.visible = false
    s1.play()
  }
  
  if(gameState === "died"&&mousePressedOver(object2)){
    gameState = "play"
    s1.play()
    if(level === 1){
      bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    level = 1
    e4.y = 900
    gameState = "play"
    e1.x = 650
    e1.y = 100
    e1.visible = true
    e2.x = 1150
    e2.y = 100
    e2.visible = true
    e3.x = 1650
    e3.y = 100
    e3.visible = true
    pl1.x = 650
    pl2.x = 1150
    pl3.x = 1650
    pl3.x = 2350
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    bar1.y = 900
    sho = 0
    ump = 0
    sca = 0
    awm = 0
    }
    if(level === 2){
      bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e1.x = 600
    e4.y = 900
    e1.y = 100
    e1.visible = true
    e2.x = 750 + 200
    e2.y = 100
    e2.visible = true
    e3.x = 800 + 200
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 650
    pl1.y = 291
    pl2.x = 850
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 291
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 2
    pl4.x = 2000
    bar1.visible = true
    bar1.x = 700 + 200
    bar1.y = 205
    pl4.visible = true
    sho = 1
    ump = 0
    sca = 0
    awm = 0
    }
    if(level === 3){
      bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e1.x = 400
    e4.y = 900
    e1.y = 100
    e1.visible = true
    e2.x = 700 + 200
    e2.y = 100
    e2.visible = true
    e3.x = 800 + 200
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 850
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 291
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 3
    pl4.x = 2000
    bar1.visible = true
    bar1.x = 450 + 200
    bar1.y = 295
    pl4.visible = true
    sho = 1
    ump = 0
    sca = 0
    awm = 0
    }
    if(level === 4){
      bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 450
    e4.y = 100
    e1.x = 400
    e1.y = 100
    e1.visible = true
    e2.x = 700 + 200
    e2.y = 100
    e2.visible = true
    e3.x = 800 + 200
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 850
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 291
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 4
    pl4.x = 2000
    bar1.visible = true
    bar1.x = 450 + 200
    bar1.y = 295
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 0
    awm = 0
    }
    if(level === 5){
      bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 800 + 100
    e4.y = 250
    e1.x = 250
    e1.y = 100
    e1.visible = true
    e2.x = 300
    e2.y = 100
    e2.visible = true
    e3.x = 800 + 200
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 750
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 291
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 5
    pl4.x = 2000
    bar1.visible = true
    bar1.x = 200
    bar1.y = 295
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 0
    awm = 0
    }
    if(level === 6){
      bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 500
    e4.y = 100
    e1.x = 350
    e1.y = 100
    e1.visible = true
    e2.x = 400
    e2.y = 100
    e2.visible = true
    e3.x = 450
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 550
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 291
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 6
    pl4.x = 1500
    bar1.visible = true
    bar1.x = 700
    bar1.y = 295
    bar2.x = 900
    bar2.y = 295
    bar2.visible = true
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 1
    awm = 0
    }
    if(level === 7){
      bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 1250
    e4.y = 100
    e1.x = 250
    e1.y = 100
    e1.visible = true
    e2.x = 750
    e2.y = 100
    e2.visible = true
    e3.x = 850
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 750
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 900
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 7
    pl4.x = 1500
    bar1.visible = true
    bar1.x = 880
    bar1.y = 295
    bar2.x = 980
    bar2.y = 295
    bar2.visible = true
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 1
    awm = 0
    }
    if(level === 8){
      bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 1050
    e4.y = 100
    e1.x = 300
    e1.y = 100
    e1.visible = true
    e2.x = 440
    e2.y = 100
    e2.visible = true
    e3.x = 650
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 750
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 900
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 8
    pl4.x = 1500
    bar1.visible = true
    bar1.x = 530
    bar1.y = 295
    bar2.x = 900
    bar2.y = 295
    bar2.visible = true
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 1
    awm = 1
    }
    if(level === 9){
      bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 750
    e4.y = 100
    e1.x = 300
    e1.y = 100
    e1.visible = true
    e2.x = 450
    e2.y = 100
    e2.visible = true
    e3.x = 600
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 600
    pl2.y = 291
    pl3.x = 800
    pl3.y = 291
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 9
    pl4.x = 1500
    bar1.visible = true
    bar1.x = 250
    bar1.y = 295
    bar2.x = 1200
    bar2.y = 495
    bar2.visible = true
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 1
    awm = 1
    }
    if(level === 10){
      bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 1000
    e4.y = 100
    e1.x = 200
    e1.y = 100
    e1.visible = true
    e2.x = 430
    e2.y = 100
    e2.visible = true
    e3.x = 650
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 300
    pl1.y = 291
    pl2.x = 590
    pl2.y = 291
    pl3.x = 790
    pl3.y = 900
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 10
    pl4.x = 1500
    bar1.visible = true
    bar1.x = 270
    bar1.y = 205
    bar2.x = 900
    bar2.y = 295
    bar2.visible = true
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 1
    awm = 1
    }
  }
  
  if(gameState === "play"){
    object3.visible = true
  }
  else{
    object3.visible = false
  }
  
  explosion()

  co1.x = bar1.x
  co1.y = bar1.y

  co2.x = bar2.x
  co2.y = bar2.y

  if(gameState === "play"){
    m1.play()
  }
  
  else{
    m1.stop()
  }
  
  if (level < 2) {
    bar1.visible = true
  } else {
    bar1.visible = false
  }

  if (level === 6 && gameState === "play") {
    bar2.visible = true
  } else {
    bar2.visible = false
  }

  if (level === 7 && gameState === "play") {
    bar2.visible = true
  } else {
    bar2.visible = false
  }
  
  if (level === 8 && gameState === "play") {
    bar2.visible = true
  } else {
    bar2.visible = false
  }
  
  if (level === 9 && gameState === "play") {
    bar2.visible = true
  } else {
    bar2.visible = false
  }
  
  if (level === 10 && gameState === "play") {
    bar2.visible = true
  } else {
    bar2.visible = false
  }
  
  if (player.isTouching(pl4) && level === 1) {
    gameState = "levels"
    pl4.visible = false
    bar1.visible = false
  }
  if (player.isTouching(pl4) && level === 2) {
    gameState = "levels"
    pl4.visible = false

  }

  if (player.isTouching(pl4) && level === 3) {
    gameState = "levels"
    pl4.visible = false

  }

  if (player.isTouching(pl4) && level === 4) {
    gameState = "levels"
    pl4.visible = false

  }

  if (player.isTouching(pl4) && level === 6) {
    gameState = "levels"
    pl4.visible = false

  }
  if (player.isTouching(pl4) && level === 7) {
    gameState = "levels"
    pl4.visible = false

  }
  if (player.isTouching(pl4) && level === 8) {
    gameState = "levels"
    pl4.visible = false

  }
  if (player.isTouching(pl4) && level === 9) {
    gameState = "levels"
    pl4.visible = false

  }
  if (player.isTouching(pl4) && level === 10) {
    gameState = "levels"
    pl4.visible = false

  }
  if (gameState === "died") {
    bar1.visible = false
  } else {
    bar1.visible = true
  }
  if (mousePressedOver(lv1) && gameState === "levels") {
    s1.play()
    bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    level = 1
    e4.y = 900
    gameState = "play"
    e1.x = 650
    e1.y = 100
    e1.visible = true
    e2.x = 1150
    e2.y = 100
    e2.visible = true
    e3.x = 1650
    e3.y = 100
    e3.visible = true
    pl1.x = 650
    pl2.x = 1150
    pl3.x = 1650
    pl3.x = 2350
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    bar1.y = 900
    sho = 0
    ump = 0
    sca = 0
    awm = 0
  }



  if (mousePressedOver(lv2) && gameState === "levels") {
    s1.play()
    bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e1.x = 600
    e4.y = 900
    e1.y = 100
    e1.visible = true
    e2.x = 750 + 200
    e2.y = 100
    e2.visible = true
    e3.x = 800 + 200
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 650
    pl1.y = 291
    pl2.x = 850
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 291
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 2
    pl4.x = 2000
    bar1.visible = true
    bar1.x = 700 + 200
    bar1.y = 205
    pl4.visible = true
    sho = 1
    ump = 0
    sca = 0
    awm = 0
  }

  if (mousePressedOver(lv3) && gameState === "levels") {
   s1.play()
    bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e1.x = 400
    e4.y = 900
    e1.y = 100
    e1.visible = true
    e2.x = 700 + 200
    e2.y = 100
    e2.visible = true
    e3.x = 800 + 200
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 850
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 291
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 3
    pl4.x = 2000
    bar1.visible = true
    bar1.x = 450 + 200
    bar1.y = 295
    pl4.visible = true
    sho = 1
    ump = 0
    sca = 0
    awm = 0
  }

  if (mousePressedOver(lv4) && gameState === "levels") {
    s1.play()
    bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 450
    e4.y = 100
    e1.x = 400
    e1.y = 100
    e1.visible = true
    e2.x = 700 + 200
    e2.y = 100
    e2.visible = true
    e3.x = 800 + 200
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 850
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 291
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 4
    pl4.x = 2000
    bar1.visible = true
    bar1.x = 450 + 200
    bar1.y = 295
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 0
    awm = 0
  }

  if (mousePressedOver(lv5) && gameState === "levels") {
    s1.play()
    bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 800 + 100
    e4.y = 250
    e1.x = 250
    e1.y = 100
    e1.visible = true
    e2.x = 300
    e2.y = 100
    e2.visible = true
    e3.x = 800 + 200
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 750
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 291
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 5
    pl4.x = 2000
    bar1.visible = true
    bar1.x = 200
    bar1.y = 295
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 0
    awm = 0
  }

  if (mousePressedOver(lv6) && gameState === "levels") {
    s1.play()
    bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 500
    e4.y = 100
    e1.x = 350
    e1.y = 100
    e1.visible = true
    e2.x = 400
    e2.y = 100
    e2.visible = true
    e3.x = 450
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 550
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 291
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 6
    pl4.x = 1500
    bar1.visible = true
    bar1.x = 700
    bar1.y = 295
    bar2.x = 900
    bar2.y = 295
    bar2.visible = true
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 1
    awm = 0
  }

  if (mousePressedOver(lv7) && gameState === "levels") {
    s1.play()
    bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 1250
    e4.y = 100
    e1.x = 250
    e1.y = 100
    e1.visible = true
    e2.x = 750
    e2.y = 100
    e2.visible = true
    e3.x = 850
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 750
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 900
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 7
    pl4.x = 1500
    bar1.visible = true
    bar1.x = 880
    bar1.y = 295
    bar2.x = 980
    bar2.y = 295
    bar2.visible = true
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 1
    awm = 0
  }

  if (mousePressedOver(lv8) && gameState === "levels") {
    s1.play()
    bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 1050
    e4.y = 100
    e1.x = 300
    e1.y = 100
    e1.visible = true
    e2.x = 440
    e2.y = 100
    e2.visible = true
    e3.x = 650
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 750
    pl2.y = 291
    pl3.x = 1050
    pl3.y = 900
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 8
    pl4.x = 1500
    bar1.visible = true
    bar1.x = 530
    bar1.y = 295
    bar2.x = 900
    bar2.y = 295
    bar2.visible = true
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 1
    awm = 1
  }
  
  if (mousePressedOver(lv9) && gameState === "levels") {
    s1.play()
    bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 750
    e4.y = 100
    e1.x = 300
    e1.y = 100
    e1.visible = true
    e2.x = 450
    e2.y = 100
    e2.visible = true
    e3.x = 600
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 400
    pl1.y = 291
    pl2.x = 600
    pl2.y = 291
    pl3.x = 800
    pl3.y = 291
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 9
    pl4.x = 1500
    bar1.visible = true
    bar1.x = 250
    bar1.y = 295
    bar2.x = 1200
    bar2.y = 495
    bar2.visible = true
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 1
    awm = 1
  }

  if (mousePressedOver(lv10) && gameState === "levels") {
    s1.play()
    bar1.scale = 0.7
    bar2.scale = 0.7
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 3
    e4.x = 1000
    e4.y = 100
    e1.x = 200
    e1.y = 100
    e1.visible = true
    e2.x = 430
    e2.y = 100
    e2.visible = true
    e3.x = 650
    e3.y = 100
    e3.visible = true
    gameState = "play"
    pl1.x = 300
    pl1.y = 291
    pl2.x = 590
    pl2.y = 291
    pl3.x = 790
    pl3.y = 900
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
    level = 10
    pl4.x = 1500
    bar1.visible = true
    bar1.x = 270
    bar1.y = 205
    bar2.x = 900
    bar2.y = 295
    bar2.visible = true
    pl4.visible = true
    sho = 1
    ump = 1
    sca = 1
    awm = 1
  }
  
  if (player.isTouching(e1)&&hp1 > 0) {
    gameState = "died"
    e1.visible = false
    e2.visible = false
    e3.visible = false
    e4.visible = false
    bar1.visible = false
    bar2.visible = false
    s2.play()
    e1.y = 900
    e2.y = 900
    e3.y = 900
    e4.y = 900
  }

  if (player.isTouching(e2)&&hp3 > 0) {
    gameState = "died"
    e1.visible = false
    e2.visible = false
    e3.visible = false
    e4.visible = false
    bar1.visible = false
    bar2.visible = false
    s2.play()
    e1.y = 900
    e2.y = 900
    e3.y = 900
    e4.y = 900
  }

  if (player.isTouching(e3)&&hp2 > 0) {
    gameState = "died"
    e1.visible = false
    e2.visible = false
    e3.visible = false
    e4.visible = false
    bar1.visible = false
    bar2.visible = false
    s2.play()
    e1.y = 900
    e2.y = 900
    e3.y = 900
    e4.y = 900
  }

  if (player.isTouching(e4)&&hp4 > 0) {
    gameState = "died"
    e1.visible = false
    e2.visible = false
    e3.visible = false
    e4.visible = false
    bar1.visible = false
    bar2.visible = false
    s2.play()
    e1.y = 900
    e2.y = 900
    e3.y = 900
    e4.y = 900
  }

  if (gunheld === "pistol" && b1.isTouching(e1)) {
    hp1 = hp1 - 0.5
  }
  if (gunheld === "shot" && b1.isTouching(e1)) {
    hp1 = hp1 - 1.5
  }
  if (gunheld === "ump" && b1.isTouching(e1)) {
    hp1 = hp1 - 1
  }
  if (gunheld === "scar" && b1.isTouching(e1)) {
    hp1 = hp1 - 2
  }
  if (gunheld === "awm" && b1.isTouching(e1)) {
    hp1 = hp1 - 3
  }

  if (gunheld === "pistol" && b1.isTouching(e2)) {
    hp3 = hp3 - 0.5
  }
  if (gunheld === "shot" && b1.isTouching(e2)) {
    hp3 = hp3 - 1.5
  }
  if (gunheld === "ump" && b1.isTouching(e2)) {
    hp3 = hp3 - 1
  }
  if (gunheld === "scar" && b1.isTouching(e2)) {
    hp3 = hp3 - 2
  }
  if (gunheld === "awm" && b1.isTouching(e2)) {
    hp3 = hp3 - 3
  }

  if (gunheld === "pistol" && b1.isTouching(e3)) {
    hp2 = hp2 - 0.5
  }
  if (gunheld === "shot" && b1.isTouching(e3)) {
    hp2 = hp2 - 1.5
  }
  if (gunheld === "ump" && b1.isTouching(e3)) {
    hp2 = hp2 - 1
  }
  if (gunheld === "scar" && b1.isTouching(e3)) {
    hp2 = hp2 - 2
  }
  if (gunheld === "awm" && b1.isTouching(e3)) {
    hp2 = hp2 - 3
  }

  if (gunheld === "pistol" && b1.isTouching(e4)) {
    hp4 = hp4 - 0.5
  }
  if (gunheld === "shot" && b1.isTouching(e4)) {
    hp4 = hp4 - 1.5
  }
  if (gunheld === "ump" && b1.isTouching(e4)) {
    hp4 = hp4 - 1
  }
  if (gunheld === "scar" && b1.isTouching(e4)) {
    hp4 = hp4 - 2
  }
  if (gunheld === "awm" && b1.isTouching(e4)) {
    hp4 = hp4 - 3
  }

  c1.x = e1.x - 105
  c2.x = e2.x - 105
  c3.x = e3.x - 105
  c4.x = e4.x - 105
  c1.y = e1.y
  c2.y = e2.y
  c3.y = e3.y
  c4.y = e4.y

  ai()

  if (reload === 0) {
    reloading()
  }

  if (h1.isTouching(bg) && h1.velocityY === 0) {
    h1.y = 0
  }

  if (h1.isTouching(ground)) {
    h1.y = 0
    h1.velocityY = 0
  }

  if (gameState === "play") {
    gun.visible = true
    player.visible = true
    ground.visible = true
    i1.visible = true
    i2.visible = true
    i3.visible = true
    i4.visible = true
    i5.visible = true
    pl1.visible = true
    pl2.visible = true
    pl3.visible = true
  } else {
    gun.visible = false
    player.visible = false
    ground.visible = false
    i1.visible = false
    i2.visible = false
    i3.visible = false
    i4.visible = false
    i5.visible = false
    pl1.visible = false
    pl2.visible = false
    pl3.visible = false
  }



  if (keyDown("up") && gameState === "play" && player.y > 220) {
    player.velocityY = -13
  }
  player.velocityY = player.velocityY + 0.8
  e1.velocityY = e1.velocityY + 0.8
  e2.velocityY = e2.velocityY + 0.8
  e3.velocityY = e3.velocityY + 0.8
  e4.velocityY = e4.velocityY + 0.8

  //text
  showtext()

  //guns
  guns()

  if (mousePressedOver(object1) && gameState === "menu") {
    gameState = "levels"
    object1.visible = false
s1.play()
  }

  if (gameState === "levels") {
    lv1.visible = true
    lv2.visible = true
    lv3.visible = true
    lv4.visible = true
    lv5.visible = true
    lv6.visible = true
    lv7.visible = true
    lv8.visible = true
    lv9.visible = true
    lv10.visible = true
  } else {
    lv1.visible = false
    lv2.visible = false
    lv3.visible = false
    lv4.visible = false
    lv5.visible = false
    lv6.visible = false
    lv7.visible = false
    lv8.visible = false
    lv9.visible = false
    lv10.visible = false
  }

  if (gameState === "play") {
    e1.visible = true
    e2.visible = true
    e3.visible = true
    e4.visible = true
  } else {
    e1.visible = false
    e2.visible = false
    e3.visible = false
    e4.visible = false
  }


  if (keyDown("right") && level === 1 && gameState === "play") {
    pl1.x = pl1.x - 4
    pl2.x = pl2.x - 4
    pl3.x = pl3.x - 4
    pl4.x = pl4.x - 4
    e1.x = e1.x - 4
    e2.x = e2.x - 4
    e3.x = e3.x - 4
    player.addImage(r)
    dir = "right"
  }

  if (keyDown("left") && level === 1 && gameState === "play") {
    pl1.x = pl1.x + 4
    pl2.x = pl2.x + 4
    pl3.x = pl3.x + 4
    pl4.x = pl4.x + 4
    e1.x = e1.x + 4
    e2.x = e2.x + 4
    e3.x = e3.x + 4
    player.addImage(l)
    dir = "left"

  }

  if (keyDown("right") && level === 2 && gameState === "play") {

    pl1.x = pl1.x - 4
    pl2.x = pl2.x - 4
    pl3.x = pl3.x - 4
    pl4.x = pl4.x - 4
    e1.x = e1.x - 4
    e2.x = e2.x - 4
    e3.x = e3.x - 4
    bar1.x = bar1.x - 4
    player.addImage(r)
    dir = "right"
  }

  if (keyDown("left") && level === 2 && gameState === "play") {
    pl1.x = pl1.x + 4
    pl2.x = pl2.x + 4
    pl3.x = pl3.x + 4
    pl4.x = pl4.x + 4
    e1.x = e1.x + 4
    e2.x = e2.x + 4
    e3.x = e3.x + 4
    bar1.x = bar1.x + 4
    player.addImage(l)
    dir = "left"
  }

  if (keyDown("right") && level === 3 && gameState === "play") {

    pl1.x = pl1.x - 4
    pl2.x = pl2.x - 4
    pl3.x = pl3.x - 4
    pl4.x = pl4.x - 4
    e1.x = e1.x - 4
    e2.x = e2.x - 4
    e3.x = e3.x - 4
    bar1.x = bar1.x - 4
    player.addImage(r)
    dir = "right"
  }

  if (keyDown("left") && level === 3 && gameState === "play") {
    pl1.x = pl1.x + 4
    pl2.x = pl2.x + 4
    pl3.x = pl3.x + 4
    pl4.x = pl4.x + 4
    e1.x = e1.x + 4
    e2.x = e2.x + 4
    e3.x = e3.x + 4
    bar1.x = bar1.x + 4
    player.addImage(l)
    dir = "left"

  }

  if (keyDown("right") && level === 4 && gameState === "play") {

    pl1.x = pl1.x - 4
    pl2.x = pl2.x - 4
    pl3.x = pl3.x - 4
    pl4.x = pl4.x - 4
    e1.x = e1.x - 4
    e2.x = e2.x - 4
    e3.x = e3.x - 4
    e4.x = e4.x - 4
    bar1.x = bar1.x - 4
    player.addImage(r)
    dir = "right"
  }

  if (keyDown("left") && level === 4 && gameState === "play") {
    pl1.x = pl1.x + 4
    pl2.x = pl2.x + 4
    pl3.x = pl3.x + 4
    pl4.x = pl4.x + 4
    e1.x = e1.x + 4
    e2.x = e2.x + 4
    e3.x = e3.x + 4
    e4.x = e4.x + 4
    bar1.x = bar1.x + 4
    player.addImage(l)
    dir = "left"

  }

  if (keyDown("right") && level === 5 && gameState === "play") {

    pl1.x = pl1.x - 4
    pl2.x = pl2.x - 4
    pl3.x = pl3.x - 4
    pl4.x = pl4.x - 4
    e1.x = e1.x - 4
    e2.x = e2.x - 4
    e3.x = e3.x - 4
    e4.x = e4.x - 4
    bar1.x = bar1.x - 4
    player.addImage(r)
    dir = "right"
  }

  if (keyDown("left") && level === 5 && gameState === "play") {
    pl1.x = pl1.x + 4
    pl2.x = pl2.x + 4
    pl3.x = pl3.x + 4
    pl4.x = pl4.x + 4
    e1.x = e1.x + 4
    e2.x = e2.x + 4
    e3.x = e3.x + 4
    e4.x = e4.x + 4
    bar1.x = bar1.x + 4
    player.addImage(l)
    dir = "left"

  }

  if (keyDown("right") && level === 6 && gameState === "play") {

    pl1.x = pl1.x - 4
    pl2.x = pl2.x - 4
    pl3.x = pl3.x - 4
    pl4.x = pl4.x - 4
    e1.x = e1.x - 4
    e2.x = e2.x - 4
    e3.x = e3.x - 4
    e4.x = e4.x - 4
    bar1.x = bar1.x - 4
    bar2.x = bar2.x - 4
    player.addImage(r)
    dir = "right"
  }

  if (keyDown("left") && level === 6 && gameState === "play") {
    pl1.x = pl1.x + 4
    pl2.x = pl2.x + 4
    pl3.x = pl3.x + 4
    pl4.x = pl4.x + 4
    e1.x = e1.x + 4
    e2.x = e2.x + 4
    e3.x = e3.x + 4
    e4.x = e4.x + 4
    bar1.x = bar1.x + 4
    bar2.x = bar2.x + 4
    player.addImage(l)
    dir = "left"

  }

  if (keyDown("right") && level === 7 && gameState === "play") {

    pl1.x = pl1.x - 4
    pl2.x = pl2.x - 4
    pl3.x = pl3.x - 4
    pl4.x = pl4.x - 4
    e1.x = e1.x - 4
    e2.x = e2.x - 4
    e3.x = e3.x - 4
    e4.x = e4.x - 4
    bar1.x = bar1.x - 4
    bar2.x = bar2.x - 4
    player.addImage(r)
    dir = "right"
  }

  if (keyDown("left") && level === 7 && gameState === "play") {
    pl1.x = pl1.x + 4
    pl2.x = pl2.x + 4
    pl3.x = pl3.x + 4
    pl4.x = pl4.x + 4
    e1.x = e1.x + 4
    e2.x = e2.x + 4
    e3.x = e3.x + 4
    e4.x = e4.x + 4
    bar1.x = bar1.x + 4
    bar2.x = bar2.x + 4
    player.addImage(l)
    dir = "left"

  }
  
  if (keyDown("right") && level === 8 && gameState === "play") {

    pl1.x = pl1.x - 4
    pl2.x = pl2.x - 4
    pl3.x = pl3.x - 4
    pl4.x = pl4.x - 4
    e1.x = e1.x - 4
    e2.x = e2.x - 4
    e3.x = e3.x - 4
    e4.x = e4.x - 4
    bar1.x = bar1.x - 4
    bar2.x = bar2.x - 4
    player.addImage(r)
    dir = "right"
  }

  if (keyDown("left") && level === 8 && gameState === "play") {
    pl1.x = pl1.x + 4
    pl2.x = pl2.x + 4
    pl3.x = pl3.x + 4
    pl4.x = pl4.x + 4
    e1.x = e1.x + 4
    e2.x = e2.x + 4
    e3.x = e3.x + 4
    e4.x = e4.x + 4
    bar1.x = bar1.x + 4
    bar2.x = bar2.x + 4
    player.addImage(l)
    dir = "left"

  }

  if (keyDown("right") && level === 9 && gameState === "play") {

    pl1.x = pl1.x - 4
    pl2.x = pl2.x - 4
    pl3.x = pl3.x - 4
    pl4.x = pl4.x - 4
    e1.x = e1.x - 4
    e2.x = e2.x - 4
    e3.x = e3.x - 4
    e4.x = e4.x - 4
    bar1.x = bar1.x - 4
    bar2.x = bar2.x - 4
    player.addImage(r)
    dir = "right"
  }

  if (keyDown("left") && level === 9 && gameState === "play") {
    pl1.x = pl1.x + 4
    pl2.x = pl2.x + 4
    pl3.x = pl3.x + 4
    pl4.x = pl4.x + 4
    e1.x = e1.x + 4
    e2.x = e2.x + 4
    e3.x = e3.x + 4
    e4.x = e4.x + 4
    bar1.x = bar1.x + 4
    bar2.x = bar2.x + 4
    player.addImage(l)
    dir = "left"

  }
  
  if (keyDown("right") && level === 10 && gameState === "play") {

    pl1.x = pl1.x - 4
    pl2.x = pl2.x - 4
    pl3.x = pl3.x - 4
    pl4.x = pl4.x - 4
    e1.x = e1.x - 4
    e2.x = e2.x - 4
    e3.x = e3.x - 4
    e4.x = e4.x - 4
    bar1.x = bar1.x - 4
    bar2.x = bar2.x - 4
    player.addImage(r)
    dir = "right"
  }

  if (keyDown("left") && level === 10 && gameState === "play") {
    pl1.x = pl1.x + 4
    pl2.x = pl2.x + 4
    pl3.x = pl3.x + 4
    pl4.x = pl4.x + 4
    e1.x = e1.x + 4
    e2.x = e2.x + 4
    e3.x = e3.x + 4
    e4.x = e4.x + 4
    bar1.x = bar1.x + 4
    bar2.x = bar2.x + 4
    player.addImage(l)
    dir = "left"

  }

  
  if (keyDown("space") && gameState === "play" && reload > 0 && h1.y === 0) {
    h1.velocityY = 12
    b1.x = gun.x
    b1.y = gun.y
    b1.visible = true
    reload = reload - 1
    s4.play()
    if (gunheld === "pistol") {
      if (dir === "right") {
        b1.velocityX = 3

      }
      if (dir === "left") {
        b1.velocityX = -2
      }
    }

    if (gunheld === "shot") {
      if (dir === "right") {
        b1.velocityX = 4
      }
      if (dir === "left") {
        b1.velocityX = -4
      }
    }

    if (gunheld === "ump") {
      if (dir === "right") {
        b1.velocityX = 5
      }
      if (dir === "left") {
        b1.velocityX = -5
      }
    }

    if (gunheld === "scar") {
      if (dir === "right") {
        b1.velocityX = 6
      }
      if (dir === "left") {
        b1.velocityX = -6
      }
    }

    if (gunheld === "awm") {
      if (dir === "right") {
        b1.velocityX = 7
      }
      if (dir === "left") {
        b1.velocityX = -7
      }
    }

  }
  if (b1.x > player.x + 150 || b1.x < player.x - 150 && gunheld === "pistol") {
    b1.x = 900
    b1.y = 900
    b1.visible = false
    b1.velocityY = 0
    h1.velocityY = 0
  }

  if (b1.x > player.x + 170 || b1.x < player.x - 170 && gunheld === "shot") {
    b1.x = 900
    b1.y = 900
    b1.visible = false
    b1.velocityY = 0
    h1.velocityY = 0
  }

  if (b1.x > player.x + 200 || b1.x < player.x - 200 && gunheld === "ump") {
    b1.x = 900
    h1.velocityY = 0
    b1.y = 900
    b1.visible = false
    b1.velocityY = 0
  }

  if (b1.x > player.x + 250 || b1.x < player.x - 250 && gunheld === "scar") {
    b1.x = 900
    b1.y = 900
    h1.velocityY = 0
    b1.visible = false
    b1.velocityY = 0
  }

  if (b1.x > player.x + 380 || b1.x < player.x - 380 && gunheld === "awm") {
    b1.x = 900
    h1.velocityY = 0
    b1.y = 900
    b1.visible = false
    b1.velocityY = 0
  }

  if (b1.isTouching(e1)) {
    b1.x = 900
    h1.velocityY = 0
    b1.y = 900
    b1.visible = false
    b1.velocityY = 0
  }
  if (b1.isTouching(e2)) {

    h1.velocityY = 0
    b1.x = 900
    b1.y = 900
    b1.visible = false
    b1.velocityY = 0
  }
  if (b1.isTouching(e3)) {

    h1.velocityY = 0
    b1.x = 900
    b1.y = 900
    b1.visible = false
    b1.velocityY = 0
  }

  if (b1.isTouching(e4)) {

    h1.velocityY = 0
    b1.x = 900
    b1.y = 900
    b1.visible = false
    b1.velocityY = 0
  }

  if (hp3 === 0&&gameState === "play") {
    e2.visible = false
  }

  if (hp2 === 0&&gameState === "play") {
    e3.visible = false
  }

  if (hp1 === 0&&gameState === "play") {
    e1.visible = false
  }

  if (hp4 === 0&&gameState === "play") {
    e4.visible = false
  }

  if(mousePressedOver(lv1)&&gameState === "levels"){
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 4
  }
  if(mousePressedOver(lv2)&&gameState === "levels"){
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 4
  }
  if(mousePressedOver(lv3)&&gameState === "levels"){
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 4
  }
  if(mousePressedOver(lv4)&&gameState === "levels"){
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 4
  }
  if(mousePressedOver(lv5)&&gameState === "levels"){
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 4
  }
  
  if(mousePressedOver(lv6)&&gameState === "levels"){
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 4
  }
  if(mousePressedOver(lv7)&&gameState === "levels"){
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 4
  }
  if(mousePressedOver(lv8)&&gameState === "levels"){
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 4
  }
  if(mousePressedOver(lv9)&&gameState === "levels"){
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 4
  }
  if(mousePressedOver(lv10)&&gameState === "levels"){
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 4
  }
  
  if(gameState === "levels"){
    hp1 = 3
    hp2 = 3
    hp3 = 3
    hp4 = 4
  }
  
  
  if (time === 1) {
    bar1.addImage(ex1)
    bar1.scale = 2
  }
  if (time === 2) {
    bar1.addImage(ex2)
    bar1.scale = 2
  }
  if (time === 3) {
    bar1.addImage(ex3)
    bar1.scale = 2
  }
  if (time === 4) {
    bar1.addImage(ex4)
    bar1.scale = 2
  }
  if (time === 5) {
    bar1.addImage(ex5)
    bar1.scale = 2
  }
  if (time === 6) {
    bar1.visible = false
    bar1.addImage(ex)
    bar1.y = 900
  }

  if (time1 === 1) {
    bar2.addImage(ex1)
    bar2.scale = 2
  }
  if (time1 === 2) {
    bar2.addImage(ex2)
    bar2.scale = 2
  }
  if (time1 === 3) {
    bar2.addImage(ex3)
    bar2.scale = 2
  }
  if (time1 === 4) {
    bar2.addImage(ex4)
    bar2.scale = 2
  }
  if (time1 === 5) {
    bar2.addImage(ex5)
    bar2.scale = 2
  }
  if (time1 === 6) {
    bar2.visible = false
    bar2.addImage(ex)
    bar2.y = 900
  }
  player.collide(ground)
  player.collide(pl1)
  player.collide(pl2)
  player.collide(pl3)
  player.collide(pl4)
  bar1.collide(player)
  bar1.collide(e1)
  bar1.collide(e2)
  bar1.collide(e3)
  e1.collide(ground)
  e1.collide(pl1)
  e1.collide(pl2)
  e1.collide(pl3)
  e4.collide(ground)
  e4.collide(pl1)
  e4.collide(pl2)
  e4.collide(pl3)
  e2.collide(ground)
  e2.collide(pl1)
  e2.collide(pl2)
  e2.collide(pl3)
  e3.collide(ground)
  e3.collide(pl1)
  e3.collide(pl2)
  e3.collide(pl3)
  e3.collide(pl4)

  drawSprites();
}

function showtext() {
  if (gameState === "menu") {
    textSize(55)
    fill("white")
    textFont('Helvetica');
    text("Shoot the Zombies", 80, 80)
  }

  if (gameState === "levels") {
    textSize(45)
    fill("white")
    textFont('Helvetica');
    text("Select a Level", 150, 80)
  }

  if (gameState === "s") {
    textSize(45)
    fill("white")
    textFont('Helvetica');
    text("Select a Level", 150, 80)
  }

  if (level === 1 && gameState === "play") {
    textSize(15)
    fill("white")
    textFont('Helvetica');
    text("Shoot the zombies with the space bar", 30-20, 30)
    text("Press right or left arrow to move", 30-20, 50)
    text("You wil die if you touch zombies", 30-20, 70)
    text("Press up arrow to jump", 30-20, 90)
  }

  if (level === 2 && gameState === "play") {
    textSize(15)
    fill("white")
    textFont('Helvetica');
    text("You can shoot the red explosion", 30-20, 30)
    text("barrel to kill zombies but it might", 30-20, 50)
    text("kill you too if you get in its", 30-20, 70)
    text("range so shoot it from a distance", 30-20, 90)
    text("Press (2) to switch a gun", 30-20, 110)
  }

  if (level === 4 && gameState === "play") {
    textSize(15)
    fill("white")
    textFont('Helvetica');
    text("Press (3) to switch a gun", 30-20, 30)
  }

  if (level === 6 && gameState === "play") {
    textSize(15)
    fill("white")
    textFont('Helvetica');
    text("You can shoot the red explosion", 30-20, 30)
    text("barrel to kill zombies but it might", 30-20, 50)
    text("kill you too if you get in its", 30-20, 70)
    text("range so shoot it from a distance", 30-20, 90)
    text("Press (4) to switch a gun", 30-20, 110)
  }

  if (level === 8 && gameState === "play") {
    textSize(15)
    fill("white")
    textFont('Helvetica');
    text("You can shoot the red explosion", 30-20, 30)
    text("barrel to kill zombies but it might", 30-20, 50)
    text("kill you too if you get in its", 30-20, 70)
    text("range so shoot it from a distance", 30-20, 90)
    text("Press (5) to switch a gun", 30-20, 110)
  }

  if (gameState === "play") {
    textSize(25)
    fill("white")
    textFont('Helvetica');
    text("Bullets left:" + reload, 420, 80)
    text("Level:" + level, 450, 50)
  }
  if (reload === 0) {
    textSize(35)
    fill("white")
    textFont('Helvetica');
    text("Reloading!", 250, 200)
  }

  if (gameState === "died") {
    textSize(35)
    fill("white")
    textFont('Helvetica');
    text("You died!", 220, 80)
  }
  
  if (gameState === "pause") {
    textSize(35)
    fill("white")
    textFont('Helvetica');
    text("Paused", 230, 50)
  }

}

function guns() {

  //gun position
  if (gunheld === "pistol") {
    if (dir === "right") {
      gun.x = player.x + 22
      gun.y = player.y
      gun.addImage(pisr)
      gun.scale = 0.6
    }

    if (dir === "left") {
      gun.x = player.x - 22
      gun.y = player.y
      gun.addImage(pisl)
      gun.scale = 0.6
    }
  }

  if (gunheld === "scar") {
    if (dir === "right") {
      gun.x = player.x + 20
      gun.y = player.y
      gun.addImage(scarr)
      gun.scale = 0.4
    }

    if (dir === "left") {
      gun.x = player.x - 20
      gun.y = player.y
      gun.addImage(scarl)
      gun.scale = 0.4
    }
  }

  if (gunheld === "awm") {
    if (dir === "right") {
      gun.x = player.x + 25
      gun.y = player.y
      gun.addImage(awmr)
      gun.scale = 0.2
    }

    if (dir === "left") {
      gun.x = player.x - 25
      gun.y = player.y
      gun.addImage(awml)
      gun.scale = 0.2
    }
  }

  if (gunheld === "ump") {
    if (dir === "right") {
      gun.x = player.x + 20
      gun.y = player.y
      gun.addImage(umpr)
      gun.scale = 0.4
    }

    if (dir === "left") {
      gun.x = player.x - 20
      gun.y = player.y
      gun.addImage(umpl)
      gun.scale = 0.4
    }
  }

  if (gunheld === "shot") {
    if (dir === "right") {
      gun.x = player.x + 20
      gun.y = player.y - 5
      gun.addImage(shor)
      gun.scale = 0.3
    }

    if (dir === "left") {
      gun.x = player.x - 20
      gun.y = player.y - 5
      gun.addImage(shol)
      gun.scale = 0.3
    }
  }

  //switch guns
  if (keyDown("1") && gameState === "play" && pis === 1) {
    gunheld = "pistol"
    reload = 15
  }
  if (keyDown("2") && gameState === "play" && sho === 1) {
    gunheld = "shot"
    reload = 2
  }
  if (keyDown("3") && gameState === "play" && ump === 1) {
    gunheld = "ump"
    reload = 25
  }
  if (keyDown("4") && gameState === "play" && sca === 1) {
    gunheld = "scar"
    reload = 30
  }
  if (keyDown("5") && gameState === "play" && awm === 1) {
    gunheld = "awm"
    reload = 7
  }

}

function reloading() {
  reloadc = 5

  reloader1.velocityY = 12
  if (reloader1.y > 1500) {
    reloader1.y = 0
    reloadc = 0
    reloader1.velocityY = 0
  }

  if (reloadc === 0) {
    if (gunheld === "pistol") {
      reload = 15
    }
    if (gunheld === "shot") {
      reload = 2
    }
    if (gunheld === "ump") {
      reload = 25
    }
    if (gunheld === "scar") {
      reload = 30
    }
    if (gunheld === "awm") {
      reload = 7
    }
  }
}

function ai() {


  if (player.isTouching(c1)&&hp1 > 0) {
    en1 = 1
  }
  if (en1 === 1&&hp1 > 0) {
    if (player.x > e1.x) {
      c1.x = e1.x + 105
      e1.x = e1.x + 2
      e1.addImage(erImg)
    }
    if (player.x < e1.x) {
      c1.x = e1.x - 105
      e1.x = e1.x - 2
      e1.addImage(elImg)
    }

    if (player.y < e1) {
      e1.velocityY = -15
    }
  }

  //
  if (player.isTouching(c2)&&hp3 > 0) {
    en2 = 1
  }
  if (en2 === 1&&hp3 > 0) {
    if (player.x > e2.x) {
      c2.x = e2.x + 105
      e2.x = e2.x + 2
      e2.addImage(erImg)
    }
    if (player.x < e2.x) {
      c2.x = e2.x - 105
      e2.x = e2.x - 2
      e2.addImage(elImg)
    }

    if (player.y < e2) {
      e2.velocityY = -15
    }
  }

  if (player.isTouching(c3)&&hp2 > 0) {
    en3 = 1
  }
  if (en3 === 1&&hp2 > 0) {
    if (player.x > e3.x) {
      c3.x = e3.x + 105
      e3.x = e3.x + 2
      e3.addImage(erImg)
    }
    if (player.x < e3.x) {
      c3.x = e3.x - 105
      e3.x = e3.x - 2
      e3.addImage(elImg)
    }

    if (player.y < e3) {
      e3.velocityY = -15
    }
  }

  if (player.isTouching(c4)&&hp4 > 0) {
    en4 = 1
  }
  if (en4 === 1&&hp4 > 0) {
    if (player.x > e4.x) {
      c4.x = e4.x + 105
      e4.x = e4.x + 2
      e4.addImage(erImg)
    }
    if (player.x < e4.x) {
      c4.x = e4.x - 105
      e4.x = e4.x - 2
      e4.addImage(elImg)
    }

    if (player.y < e4) {
      e4.velocityY = -15
    }
  }
}

function explosion() {

  t1.x = 0
  if (b1.isTouching(bar1)) {
    bar1.addImage(ex1)
    t1.velocityY = 100
    b1.y = 900
    s3.play()
  }
  if (t1.y > 400) {
    t1.y = 0
    time = time + 1
  }

  if (e1.isTouching(co1) && time > 0) {
    e1.y = 900
  }
  if (e2.isTouching(co1) && time > 0) {
    e2.y = 900
  }
  if (e3.isTouching(co1) && time > 0) {
    e3.y = 900
  }
  if (player.isTouching(co1) && time > 0) {
    gameState = "died"
  }

  t2.x = 0
  if (b1.isTouching(bar2)) {
    bar2.addImage(ex1)
    t2.velocityY = 100
    b1.y = 900
    s3.play()
  }
  if (t2.y > 400) {
    t2.y = 0
    time1 = time1 + 1
  }

  if (e1.isTouching(co2) && time > 0) {
    e1.y = 900
  }
  if (e2.isTouching(co2) && time > 0) {
    e2.y = 900
  }
  if (e3.isTouching(co2) && time > 0) {
    e3.y = 900
  }
  if (player.isTouching(co2) && time > 0) {
    gameState = "died"
  }

}
