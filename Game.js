class Game{
    constractor(){}
    getstate(){
        var gamestateref=database.ref('gamestate');
        gamestateref.on("value",function(data){
        gameState=data.val();
              })

    }

    update(state){
        database.ref('/').update({
        gamestate:state
        });
    }

    start(){
        if(gameState===0){
            player=new Player();
            player.updatecount();
            form=new Form();
            form.display();
        }
    }

}