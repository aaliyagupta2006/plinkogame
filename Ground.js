class Ground {
    constructor (x, y, w, h){
        var options = {
            isStatic: true      
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = w;
        this.h = h;
        
        World.add(world, this.body);
    }
    display () {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        var pos = this.body.position;
        rect(pos.x, pos.y, this.w, this.h);
        
    }
};