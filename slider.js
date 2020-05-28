const imageArr = ['./1.jpeg', './2.jpeg', './3.jpeg', './4.jpeg', './5.jpeg', './6.jpeg','./7.jpeg',]


const image = document.getElementById('image')

const nextButton = document.getElementById('next')
nextButton.addEventListener('click', next)
const previousButton = document.getElementById('previous')
previousButton.addEventListener('click', previous)
const playPauseButton = document.getElementById('playPause')
playPauseButton.addEventListener('click', playPause)

let i = 0;
let bool = true;

function next() {
    ++i;
    if(i===imageArr.length){
        i=0
    }
    image.src = imageArr[i]
}

function previous() {

    --i;
    if(i<0){
        i=imageArr.length-1
    }
    image.src = imageArr[i];
}

function playPause() {
    if (bool) {
        id = setInterval(next, 1500)
        bool = false
    } else {
        clearInterval(id)
        bool = true;
    }

}
