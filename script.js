let targetNum = document.getElementById("targetNum")
let playerNum = document.getElementById("playerNum")
let wins = document.getElementById("wins")
let losses = document.getElementById("losses")

const btns = Array.from(document.getElementsByClassName("btn"))

const colors = "red blue green gold yellow seagreen teal pink tomato lightgray gray lightBlue".split(" ")

let winner = 0
let loss = 0

const getRandomRange = (max,min) => Math.floor(Math.random() * (max - min + 1) + min)

const handleClick = (e) =>  {
    let target = parseInt(targetNum.innerText.match(/\d+/)[0])
    let num = parseInt(e.target.innerText)
    let player = parseInt(playerNum.innerText.match(/\d+/)[0])
    let play = player+=num
    playerNum.innerText = `Score: ${play}`
    if(play > target){
        loss ++
        losses.innerText =`Losses: ${loss}`
        losses.style.color = "red"
        playGame()
    }
    if (play === target){
        winner ++
        wins.innerText = `Wins: ${winner}`
        wins.style.color = "green"
        playGame()
    }
}

btns.forEach(e => e.addEventListener("click", (e)=> handleClick(e)))

const playGame = () => {
    let target = getRandomRange(100,20)
    targetNum.innerText = `Target: ${target}`
    playerNum.innerText = `Player: 0`

    let randomNums = new Set()
    while(randomNums.size !== 3){
        randomNums.add(getRandomRange(10,2))
    }
    let randomColors = new Set()
    while(randomColors.size !==3){
        randomColors.add(colors[getRandomRange(colors.length-1,0)])
    }
    btns.forEach((e,i)=> e.innerText = Array.from(randomNums)[i])
    btns.forEach((e,i)=> e.style.backgroundColor = Array.from(randomColors)[i])
}
playGame()