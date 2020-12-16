class Player{
    constractor(){}
    getcount(){
        var playercountref=database.ref('playercount');
        playercountref.on("value",function(data){
        playerCount=data.val();   
     })

      }

    updatecount(count){
        database.ref('/').update({
        playercount:count
        });
    }

    update(name){
        
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        });
    }

}