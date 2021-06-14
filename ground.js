class Ground
{
    constructor(x, y, width, height)
    {
        var option={
            // 'restitution' : 0.8,
             "isStatic": true
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        // this.shaperColor = "blue";
        
        this.width=width;
        this.height=height;
    }
    
    display()
    {
        var pos=this.body.position;
        rectMode(CENTER);
        fill("Yellow");
        stroke(rgb(61, 92, 92));
        strokeWeight("3");
        rect(pos.x,pos.y,this.width,this.height);
    }

}