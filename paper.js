class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
       
        this.image1=loadImage("paper.png");
        
   }
   display(){
    fill("navy");
   // stroke("lime")
    //strokeWeight(3);
    //ellipseMode(RADIUS);
    //ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    image(this.image1,this.body.position.x,this.body.position.y,50,50);
   }
}
