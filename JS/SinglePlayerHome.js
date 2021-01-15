class SinglePlayerHome{
      constructor(){
            this.level1 = createButton('LEVEL1')
            this.level2 = createButton('LEVEL2')
            this.back = createSprite(100, displayHeight - 200, 50,50)
            this.submit = createSprite(displayWidth - 100, displayHeight - 200, 50,50)
            this.backImg = loadImage("Images/backButton.png")

      }

        hide(){
            this.level2.hide();    
            this.level1.hide();   
            this.back.visible = false;
            this.submit.visible = false;               

        }

        display(){
        this.level1.position(displayWidth/2 - 100, displayHeight/2 - 100)  
        this.level2.position(displayWidth/2 - 100, displayHeight/2)
        
        
        this.level1.mousePressed(()=>{
            background("white")     
            this.hide();            
            level1Obj = new Level1();
            level1Obj.display()
            })
        }      
}