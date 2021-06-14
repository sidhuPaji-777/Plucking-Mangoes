class Stone
{
    constructor(x,y,r)
    {
        var option = {
            'restitution' : 0,
            "isStatic": false,
            'friction': 1,
            'density':1.2
        }

        this.r = r;
        this.body=Bodies.circle(x,y,this.r,option);
        World.add(world,this.body);
        

        this.image = loadImage("images/stone.png");
    }
    
    display()
    {
        var pos=this.body.position;
        push();
        // translate(pos.x, pos.y);
        fill(rgb(153, 255, 255));
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r);  
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r*2, this.r*2);
        pop();
    }

}