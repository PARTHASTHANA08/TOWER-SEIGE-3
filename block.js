class BLOCK{
    constructor(x,y,width,height){
        var options = {
            friction:3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.Visibility = 255;
        }
        display(){
            console.log(this.body.speed);
            var pos = this.body.position;
            push();
            rectMode(CENTER);
            fill("red");
            rect(pos.x,pos.y,this.width,this.height);
            pop();
            if(this.body.speed > 2){ 
                push();
                this.Visibility = this.Visibility -10;
                tint(255,this.Visibility);
                fill("red");
                rect(pos.x,pos.y,this.width,this.height);
                pop();
            }     
        }
    score(){
        if(this.Visibility < 0 && this.Visibility >= -1000){
            score++;
        }
    }
    }