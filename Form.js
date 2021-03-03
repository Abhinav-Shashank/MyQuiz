class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
  
      this.resetB = createButton("Reset Game Stats")
    }
    hide(){
      
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.greeting.hide();
    }
  
    display(){
      this.title.html("The Quiz");
      this.title.position(200, 0);
  
      this.input.position(100, 200);
      this.button.position(250, 200);
  
      this.resetB.position(900, 200);


  2
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name + " The Quiz will start soon...")
        this.greeting.position(300, 200);
        
      });
  
  
      this.resetB.mousePressed(()=>{
  
        player.updateCount(0);
        game.update(0);
        database.ref("/").update({
  
          players : null
        })
      })
    }
  }
  