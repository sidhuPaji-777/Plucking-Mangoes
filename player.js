class Player
{
    constructor(x, y, width, height)
    {
        var option = {
            'restitution' : 0.2,
            "isStatic": true
        }

        this.body = Bodies.rectangle(x, y, width, height, option);
        World.add(world,this.body);

        this.image = loadImage("images/boy.png");
        this.scale = 0.05;

        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.body.position;
        strokeWeight(0);
        fill(rgb(153, 255, 255));
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width+130, this.height+120);
    }
}