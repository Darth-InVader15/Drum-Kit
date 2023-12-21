let currSet = document.querySelectorAll(".drum");
let n = currSet.length;

for (var i = 0; i < n; i++) {
    currSet[i].addEventListener("click", function(i) {
        return function() {
            // currSet[i].style.color = 'white'; // changes color of the button to white upon being clicked
            let tone1 = new Audio('/sounds/crash.mp3');
            switch (i) {
                case 0:
                    tone1 = new Audio('/sounds/crash.mp3');
                    break;

                case 1:
                    tone1 = new Audio('/sounds/kick-bass.mp3');
                    break;

                case 2:
                    tone1 = new Audio('/sounds/snare.mp3');
                    break;

                case 3:
                    tone1 = new Audio('/sounds/tom-1.mp3');
                    break;

                case 4:
                    tone1 = new Audio('/sounds/tom-2.mp3');
                    break;

                case 5:
                    tone1 = new Audio('/sounds/tom-3.mp3');
                    break;

                case 6:
                    tone1 = new Audio('/sounds/tom-4.mp3');
                    break;
            }
            tone1.play();
        };
    }(i));

    //alternatively we could just use 'this' word inside the for loop
    //the this operator would return the current tag which is being pressed, thus this.innerhtml would give us name of the button being pressed
}
