function addEvent(object, evento, func, capt){
    if(object.attachEvent != null){
        object.attachEvent("on"+evento, func);
    }else if (object.addEventListener != null){
        object.addEventListener(evento, func, capt);
    }
}

function id(id){
    return document.getElementById(id);
}

function keyBoardDown(e){
    if(window.event)
        e = window.event;

    //Pedal Bumbo
    if(e.keyCode == 90){
        var crt1 = new Howl({
          urls: ['sons/bumbo.mp3']
        }).play();
    }else if(e.keyCode == 88){
        var crt2 = new Howl({
          urls: ['sons/bumbo.mp3']
        }).play();
    //Caixa
    }else if(e.keyCode == 67){
        var crt3 = new Howl({
          urls: ['sons/caixa1.mp3']
        }).play();
    }else if(e.keyCode == 86){
        var crt4 = new Howl({
          urls: ['sons/caixa1.mp3']
        }).play();
    //Tom1
    }else if(e.keyCode == 65){
        var crt5 = new Howl({
          urls: ['sons/ton1.mp3']
        }).play();
    }else if(e.keyCode == 83){
        var crt6 = new Howl({
          urls: ['sons/ton1.mp3']
        }).play();
    //Tom2
    }else if(e.keyCode == 68){
        var crt7 = new Howl({
          urls: ['sons/ton2.mp3']
        }).play();
    }else if(e.keyCode == 70){
        var crt8 = new Howl({
          urls: ['sons/ton2.mp3']
        }).play();
    //Surdo
    }else if(e.keyCode == 71){
        var crt9 = new Howl({
          urls: ['sons/surdo.mp3']
        }).play();
    }else if(e.keyCode == 72){
        var crt10 = new Howl({
          urls: ['sons/surdo.mp3']
        }).play();
    //Cimbal Aberto
    }else if(e.keyCode == 73){
        var crt11 = new Howl({
          urls: ['sons/cimbalFechado.mp3']
        }).play();
    //Cimbal Fechado
    }else if(e.keyCode == 74){
        var crt12 = new Howl({
          urls: ['sons/cimbalAberto.mp3']
        }).play();
    //Prato Splash
    }else if(e.keyCode == 82){
        var crt13 = new Howl({
          urls: ['sons/splash.mp3']
        }).play();
    //Prato Condução
    }else if(e.keyCode == 89){
        var crt14 = new Howl({
          urls: ['sons/pratoConducao.mp3']
        }).play();
    //Prato Shine
    }else if(e.keyCode == 84){
        var crt15 = new Howl({
          urls: ['sons/shine.mp3']
        }).play();
    }
}

function keyBoardUp(e){
    if (window.event)
        e = window.event;
}

addEvent(document, "keydown", keyBoardDown, false);
addEvent(document, "keyup", keyBoardUp, false);

function loadMusicIni(){
    var mega = new Howl({
        urls:['sons/musicas/megadeth.mp3'],
        autoplay: true,
        volume: 0.1,
        onload: function(){
            //alert('teste');
            obj2 = document.getElementById("main");
            obj2.style.display = 'block';
        }
    }).play();
}
function escMusica(){
    
}



loadMusicIni();