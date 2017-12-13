jQuery(document).ready(function () {    
    Main.start();
});

var Main = {
    start: function(){
        this.buttonClick();  
        this.file();
    },
    
    buttonClick: function(){        
        $('#input-button').click(function(){
            Main.anim($('#input-button'), 'bounceIn');
            
            var text = $('#input-text').val();
            text  = text.split(' ');
            allText = [];
            for(var i=0; i<text.length; i++){
                allText.push( Main.cut(text[i]) );
            }
            
            Main.play(allText);
            Main.bg();
        });
    },
    
    cut: function(letter){
        return letter.split('');
    },
    
    countPlay: 0,
    play: function(letter){    
        //Белгілі интервал бойынша сөздерді таспаға жіберу
        var time = setInterval(function(){         
            Main.anim($('#input-button'), 'pulse');
            Main.playSound(letter[Main.countPlay]);
            Main.countPlay++;
            
            if(letter.length<=Main.countPlay){
                Main.countPlay = 0;
                clearInterval(time);                
            }
            
        }, 2000); //Әр бір буынның жылдамдығы
    },
    
    countPlaySound: 0,
    playSound: function(letter){     
        console.log(letter, letter.length);
        
        if(letter.length%2==0){
            for(var i=0; i<letter.length; i=i+2){
                if(i%2==0){
                    //Екі әріптен аудио таспаны ойнат
                    console.log(i);
                    console.log(letter[i], letter[i+1]);
                    
                    this.playTwice(letter[i] + letter[i+1], i*200);
                }
            }       
        }else{
            if(letter.length==3){
                //Үш әріптік сөздер                
                this.playTh(letter[0]+''+letter[1]+''+letter[2]);
                
            }else{
                //Ұзындығы тақ сан болатын сөздер
                for(var i=0; i<letter.length; i++){
                    if(i%2==0){                    
                        console.log(i);
                        var first = letter[i];
                        var second = letter[i+1];
                        var th = letter[i+2];
                        
                        if(letter.length-3>i){
                            this.playTwice(first + second, i*200);  
                        }else{
                            //мен бен пен дер лар лер тар тер 
                            this.playTwice(first + second + th, i*200);  
                            break;
                        }
                        
                    }                   
            }
                
            }
        }
    },
    
    //Екі әріптік функция
    playTwice: function(word, time){
        setTimeout(function(){
            var audio = new Audio('sounds/'+word+'.mp3');
            audio.play();
        }, time);
    },
    
    playTh: function(word){
        console.log('word: ' + word);
        var audio = new Audio('sounds/'+word+'.mp3');
        audio.play();
    },
    
    file: function(){
        $('#input-file').change(function(){
            console.log($(this));
        });
    },
    
    //Анимация
    anim: function(img, animType) {
        $(img).addClass("animated");
        $(img).addClass(animType);
        setTimeout(function () {
            $(img).removeClass("animated");
            $(img).removeClass(animType);
        }, 1000);
    },

    count: 1,

    bg: function(){
        if(this.count<=40){
            $('body').attr('style', 'background: url(images/bg/'+this.count+'.jpg) no-repeat center center;');
            this.count++;    
        }else{
            this.count = 1;
        }
        
    },
    
    
}
var Anim = {
    lib: function(img, animType) {
        $("start").addClass("animated");
        $("start").addClass("bounce");
        setTimeout(function () {
            $(img).removeClass("animated");
            $(img).removeClass("bounce");
        }, 1000);
    }}