class Player {
  constructor(){
    this.index = null;
    this.name = null;
    this.positionX = 0
    this.positionY = 0
  }
  
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  getDistance(){
    var distanceRef = database.ref("players\player"+ this.index)
    distanceRef.on('value', data => {
      var data = data.val()
      this.positionX = data.positionX
      this.positionY = data.positionY
      
    })
  }
  addPlayer(){
    var playerIndex = "players/player" + this.index;
    if(this.index === 1){
      this.positionX = width/2-100
    }
    else{
      this.positionX = width/2+100
    }
    database.ref(playerIndex).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }


  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
