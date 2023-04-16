const PRAISE_RESPONCES = [
    "We are so proud of you hunny!",
    "You go sport!",
    "We have always belived in you!",
    "We really notice you sticking to your dreams!",
    "Oh my gosh! Let's display it on the fridge!",
    "We heard! There's a present waiting for you on the kitchen counter!"
]

function processPraise(){
    var elem = document.getElementById('praise')
    elem.innerHTML = PRAISE_RESPONCES[Math.floor(Math.random() * PRAISE_RESPONCES.length)]
    elem.style.display = null;

    document.getElementById('praise_reason').value = "";
    document.getElementById('praise_reason').focus();
}

document.getElementById("btn-get-praise").addEventListener('click', () => {
    processPraise();
});

document.getElementById('praise_reason').addEventListener('keydown', (event) => {
    if(event.key == "Enter"){
        processPraise();
    }
})

document.getElementById('praise').addEventListener('click', () => {
    var elem = document.getElementById('praise')

    elem.innerHTML = "";
    elem.style.display = "none";
    document.getElementById('praise_reason').focus();
})

document.getElementById('praise').style.display = "none";