class Ground extends Base{
    constructor(x,y,width,height){
        super(x,y,width,height)
        this.image=loadImage("images/base.png");
    }
    display(){
        super.display();
    }
}