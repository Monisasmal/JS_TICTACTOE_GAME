let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mpeg")
let gameOver = new Audio("gameover.mpeg")
let turn = "X";
let isgameover = false;

// To change the Turn

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// To win the Game

const checkWin = () => {
    let boxtext = document.getElementsByClassName('box-text');
    let wins = [
        [0, 1, 2, -1, 4, 0],
        [3, 4, 5, -1, 12, 0],
        [6, 7, 8, -1, 20, 0],
        [0, 3, 6, -10, 13, 90],
        [1, 4, 7, -2, 12, 90],
        [2, 5, 8, 6, 12, 90],
        [0, 4, 8, -2, 12, 45],
        [2, 4, 6, -2.5, 12.5, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[0]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = "YAY "+ boxtext[e[0]].innerText + " WON 👏"
            isgameover = "ture"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
            document.querySelector(".line").style.width  = "28vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
             gameOver.play();
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.box-text');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn For" + turn;
            }

        }
    })
})

// logic for Reset Button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.box-text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = "false"
    document.getElementsByClassName('info')[0].innerText = "Turn For" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector(".line").style.width  = "0"

})