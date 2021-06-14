class Mango
{
    constructor(x,y,r)
    {
        var option = {
            'restitution' : 0,
            "isStatic": true,
            'friction': 1,
        }
        
        this.body=Bodies.circle(x,y,r,option);
        World.add(world,this.body);
        
        this.r = r;

        this.image = loadImage("images/mango.png");

    }
    
    display()
    {
        var pos=this.body.position;
        fill("yellow");
        // fill(255,0,255);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r);   
        imageMode(CENTER);
        image(this.image, pos.x+13, pos.y, this.r*2-20, this.r*2-20);
    }

}