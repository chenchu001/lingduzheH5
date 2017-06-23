window.canPlaySound = true ;
function playSound(id,isbg){
    if(!playSound.list) playSound.list = [] ;
    var obj = $('#'+id)[0] ;
    if(!obj) return ;
    
    if(isbg) playSound.list.push(id) ;
    
    if(!window.canPlaySound) return false ;
    
    obj.play() ;
    obj.playing = true ;
} ;


function stopSound(id,ends){
    if(!playSound.list) return ; 
    var obj = $('#'+id)[0] ;
    if(!obj) return ;
    
    if(!playSound.endlist) playSound.endlist = {} ;
    for(var i=0;i<playSound.list.length;i++){
        if(ends) playSound.endlist[playSound.list[i]] = '1' ;
        break ;
    }
    
    obj.pause() ;
    obj.playing = false ;
} ;

function stopAllSound(){
    if(!playSound.list) return ;
    for(var i=0;i<playSound.list.length;i++){
        stopSound(playSound.list[i]) ;
    }
} ;


function playAllSound(){
    if(!playSound.list) return ;
    for(var i=0;i<playSound.list.length;i++){
        if(playSound.endlist && playSound.endlist[playSound.list[i]]) continue ;
        $('#'+playSound.list[i])[0].play() ;
    }
} ;
