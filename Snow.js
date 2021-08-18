class Snow{
     constructor(x, y, width, height)
      {
           var options = { 'restitution':0.8, 'friction':1.0, 'density':1.0 }
            this.x= x;
             this.y= y;
              this.width = width;
               this.height = height;
                this.body = Bodies.rectangle(x, y, width, height, options);
                 this.image = loadImage("snow4.webp"); 
                 World.add(world, this.body);
                 } 
                 display(){
                      var angle = this.body.angle;
                     push(); 
                     translate(this.body.position.x, this.body.position.y);
                      rotate(angle);
                       imageMode(CENTER);
                        image(this.image, 0, 0, this.width, this.height); 
                        pop();
                 }
                }