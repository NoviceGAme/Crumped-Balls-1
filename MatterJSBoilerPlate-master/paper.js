class Paper {

constructor (x,y){

 var option ={
    restitution :0.3,
    friction:0.4,
    density :20.2

 }   
    this.ball = Bodies.circle(x,y,10,option)
   // this.r=10
    World.add (world,this.ball)



}
display(){
    fill("red")
    ellipseMode(CENTER)
    ellipse(this.ball.position.x,this.ball.position.y,50,50)
   

}





}

