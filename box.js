  
class Box  {
  constructor(x,y,width,height) {
  
    this.body = Bodies.rectangle(x,y,width,height);

    World.add(world, this.body);
  }
    display(){
     
        if(this.body.speed<3){
           display();
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 5; 
          tint(255, this.visibility);
          rectMode(CENTER);
          rect(this.body, this.body.position.x , this.body.position.y);
          pop();
        }
 
  
  }
}