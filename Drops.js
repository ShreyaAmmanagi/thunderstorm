class Drop {
    constructor(x,y){
      var options = {
        restitution:1.2,
        friction:1,
        density:1.3,
        //isStatic:false
      }
      this.body = Bodies.circle(x,y,3,options)
      this.radius = 3;
      World.add(world,this.body)
    }

    update1(){
      if(this.body.position.y > height){
      Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,700)})
      }
    }
    display(){
       fill("blue")
       ellipseMode(RADIUS)
       ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
       
    }
}