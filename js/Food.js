class Food{
    constructor(){
    this.foodstock=null;
 
    this.milkimage=loadImage("images/Milk.png");                                   
    }
  
  updatefoodstock(foodstock){
  this.foodstock=foodstock;
  }
  deductfoodstock(){
    if(this.foodstock>0){
      this.foodstock=this.foodstock-1;
    }
  }
  getfoodstock(){
    return this.foodstock;
  }
 
    display(){
        var xp=80;
        var yp=100;
        imageMode(CENTER);
        image(this.milkimage,300,300,50,50);
      if(this.foodstock>0){
      for(var i=0;i<this.foodstock;i++){
             if(i%10==0){
                  xp=80;
                  yp=yp+50;
             }
              
              
             
              image(this.milkimage,xp,yp,50,50);
              xp=xp+30;
        }
       
    }
  }
}
