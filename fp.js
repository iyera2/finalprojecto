function ready(){
    console.log("Page Ready");
    myGood.onclick = function(){
            i = 0;
            if (i === 0){
                var x = document.createElement("AUDIO"); // creates a new element to insert into page

                if (x.canPlayType("audio/mpeg")) {
                    x.setAttribute("src","happy.mp3"); // this is where the audio file goes
              
                x.setAttribute("autoplay", "autoplay"); //autoplays it, yes there is no pause button
                document.body.appendChild(x); // adds the  music to the document
            myImg.onclick = function(){ // created an onclick for the image so everytime it is onclick the image will change
                document.getElementById("myImg").src = "happy.gif";
        }
        document.body.style.backgroundColor = "#ffff99";
    }
        while (i < 1){
            i = i + 1
        }
            if (i === 1){
                myLess.onclick = function(){
                    var x = document.createElement("AUDIO");
            
                    if (x.canPlayType("audio/mpeg")) {
                        x.setAttribute("src","drake.mp3");
                     
                    x.setAttribute("autoplay", "autoplay");
                    document.body.appendChild(x);
               myImg.onclick = function(){
                   document.getElementById("myImg").src = "drake.gif";
               }   
            }
                 }
            }
            
        };
    } // repeition from here to down there

      mySad.onclick = function(){
         var x = document.createElement("AUDIO");

             if (x.canPlayType("audio/mpeg")) {
                 x.setAttribute("src","whenwe.mp3");
              
             x.setAttribute("autoplay", "autoplay");
             document.body.appendChild(x);
        myImg.onclick = function(){
            document.getElementById("myImg").src = "adell.gif";
        }
             
         };
         document.body.style.backgroundColor = "#0000cc"; 
     }

     myAngry.onclick = function(){
        var x = document.createElement("AUDIO");

        if (x.canPlayType("audio/mpeg")) {
            x.setAttribute("src","don'town.mp3");
         
        x.setAttribute("autoplay", "autoplay");
        document.body.appendChild(x);
   myImg.onclick = function(){
       document.getElementById("myImg").src = "random.gif";
   }   
}
document.body.style.backgroundColor = "#801a00";
     }

     myDeep.onclick = function(){
        var x = document.createElement("AUDIO");

        if (x.canPlayType("audio/mpeg")) {
            x.setAttribute("src","ben.mp3");
         
        x.setAttribute("autoplay", "autoplay");
        document.body.appendChild(x);
   myImg.onclick = function(){
       document.getElementById("myImg").src = "ben.gif";
   }   
}
document.body.style.backgroundColor = "#6600cc";
     }
     myLess.onclick = function(){
        var x = document.createElement("AUDIO");

        if (x.canPlayType("audio/mpeg")) {
            x.setAttribute("src","drake.mp3");
         
        x.setAttribute("autoplay", "autoplay");
        document.body.appendChild(x);
   myImg.onclick = function(){
       document.getElementById("myImg").src = "drake.gif";
   }   
}
document.body.style.backgroundColor = "#ffffff";
     }
}


document.addEventListener("DOMContentLoaded", ready); //gets the page ready to play