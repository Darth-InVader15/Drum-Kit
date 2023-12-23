let currSet = document.querySelectorAll(".drum");
let n = currSet.length;

for (var i = 0; i < n; i++) {
    currSet[i].addEventListener("click", function() {
        let button = this.innerHTML;
        soundAPTx(button);
    }); 
}

// Keyboard listener
document.addEventListener("keydown", function(event) {
    console.log(event.key);
    soundAPTx(event.key);
});

let soundAPTx = function(key) {
    let tone1; // Declare tone1 here

    switch (key) {
        case 'w':
            tone1 = new Audio('/sounds/crash.mp3');
            break;

        case 'a':
            tone1 = new Audio('/sounds/kick-bass.mp3');
            break;

        case 's':
            tone1 = new Audio('/sounds/snare.mp3');
            break;

        case 'd':
            tone1 = new Audio('/sounds/tom-1.mp3');
            break;

        case 'j':
            tone1 = new Audio('/sounds/tom-2.mp3');
            break;

        case 'k':
            tone1 = new Audio('/sounds/tom-3.mp3');
            break;

        case 'l':
            tone1 = new Audio('/sounds/tom-4.mp3');
            break;
    }

    if (tone1) {
        tone1.play();
    }
};
