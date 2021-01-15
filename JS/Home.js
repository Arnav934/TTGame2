class Home {
      constructor(){
      this.singlePlayerButton = createButton('SINGLE-PLAYER')    
      this.multiPlayerButton = createButton('MULTI-PLAYER')
      }

      display(){
            background(bgImg)
      this.singlePlayerButton.position(displayWidth/2 - 100, displayHeight/2 - 100)  
      this.multiPlayerButton.position(displayWidth/2 - 100, displayHeight/2)  
     
            this.singlePlayerButton.mousePressed(()=>{
            background(singleBgImg)     
            this.singlePlayerButton.hide();    
            this.multiPlayerButton.hide();
            
            singlePlrHome.display()
            })
      }      
}