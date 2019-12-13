function ready(){
    console.log("Page Ready");

    mySelect.onclick () {
        myFunction()
        let x = document.getElementById("happy"); 
        let y = document.getElementById("mySelect").value;
        document.getElementById("demo").innerHTML = "You selected: " + y;
        if (y === "Happy") {
            playHappy() 
                x.play(); 
            };
        };

    good.onclick = function playHappy() {}
       

    


document.addEventListener("DOMContentLoaded", ready);