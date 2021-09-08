var track,trackImg
var car,carImg
var gamestate = "start"

function preload()
{
    trackImg = loadImage("track1.png")
    carImg = loadImage("car.png.png")
}

function setup()
{
    createCanvas(400,600)
    track = createSprite(200,300,400,600)
    track.addImage("track",trackImg)
    track.scale = 3

    car = createSprite(60,550)
    car.addImage("car",carImg)
    car.scale = 0.2

}

function draw()
{
    background("green")
    if (gamestate==="start")
    {
        background("black")
        fill("white")
        textSize(25)
        text("CAR RACING GAME",80,300)
        textSize(20)
        text("PRESS SPACE TO START",50,350)
        if(keyDown("space"))
        {
            gamestate = "play"
        }
    }
if (gamestate === "play")
{
    track.velocity = 5
    if(keyDown("left"))
    {
        car.x-=15
    }
    if (keyDown("right"))
    {
        car.x+=15
    }
    if (track.y > 380)
    {
        track.y = height/2
    }
    drawSprites()
}








    
}
