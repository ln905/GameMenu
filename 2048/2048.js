//game
document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector ('.grid')
    const scoreDisplay = document.getElementById('score')
    const width = 4
    let squares = []
    let score = 0
    const modal_container = document.getElementById('modal-container')
    const restart = document.getElementById('restart');
document.getElementById('play').addEventListener('click', createBoard)


//create a playing board
function createBoard () {
    for(let i=0; i < 16; i++) {
        square = document.createElement('div')
        square.innerHTML = 0
        gridDisplay.appendChild(square)
        squares.push(square)
    }
    generate()
    generate()
    hidethenumber()
    document.addEventListener('keyup',control)
    document.getElementById('play').removeEventListener('click',createBoard)
}  

//generate a number randomly
function generate() {
    let randomNumber = Math.floor(Math.random() * squares.length)
    if (squares[randomNumber].innerHTML == 0) {
        squares[randomNumber].innerHTML = 2
        checkForGameOver()
    } else generate()
}

//make the zeros become hidden 
function hidethenumber() {
    for (let i=0; i<16; i++){
    if (squares[i].innerHTML==0){
        squares[i].innerHTML = ''
        squares[i].style.backgroundColor = '#0b5461'
        }else if (squares[i].innerHTML==2){
            squares[i].style.backgroundColor='#e1f3f3'
            squares[i].style.color ='#204a49'
            squares[i].style.fontSize = '7vh'
        }else if (squares[i].innerHTML==4){
            squares[i].style.backgroundColor='#a4e0de'
            squares[i].style.color='#204a49'
            squares[i].style.fontSize = '7vh'
        }else if (squares[i].innerHTML==8){
            squares[i].style.backgroundColor='#01cbcd'
            squares[i].style.color = '#caf8ff'
            squares[i].style.fontSize = '7vh'
        }else if (squares[i].innerHTML==16){
            squares[i].style.backgroundColor='#0aacbb'
            squares[i].style.color = '#caf8ff'  
            squares[i].style.fontSize = '6vh'         
        }else if (squares[i].innerHTML==32){
            squares[i].style.backgroundColor='#048e90'
            squares[i].style.color = '#caf8ff'  
            squares[i].style.fontSize = '6vh'      
        }else if (squares[i].innerHTML==64){
            squares[i].style.backgroundColor='#05767c'
            squares[i].style.color = '#caf8ff'
            squares[i].style.fontSize = '6vh'   
        }else if (squares[i].innerHTML==128){
            squares[i].style.backgroundColor='#0573a8'
            squares[i].style.color = '#caf8ff'  
            squares[i].style.fontSize = '5vh'
        }else if (squares[i].innerHTML==256){
            squares[i].style.backgroundColor='#0073cb'
            squares[i].style.color = '#caf8ff' 
            squares[i].style.fontSize = '5vh'
        }else if (squares[i].innerHTML==512){
            squares[i].style.backgroundColor='#0086e4'
            squares[i].style.color = '#caf8ff'
            squares[i].style.fontSize = '5vh'
        }else if (squares[i].innerHTML==1024){
            squares[i].style.backgroundColor='#0066a8'
            squares[i].style.color = '#caf8ff'
            squares[i].style.fontSize = '4vh'
        } else if (squares[i].innerHTML==2048){
            squares[i].style.backgroundColor='#16549d'
            squares[i].style.color = '#caf8ff'
            squares[i].style.fontSize = '4vh'
        } 
    }
}

//swipe right
function moveRight(){
    for (let i=0; i<16; i++){
        if (i%4===0){
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+1].innerHTML
            let totalThree = squares[i+2].innerHTML
            let totalFour = squares[i+3].innerHTML
            let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
        //onsole.log(row)
            let filteredRow = row.filter(num => num)
        //console.log(filteredRow)
            let missing = 4 - filteredRow.length
            let zeros = Array(missing).fill(0)
        //console.log(zeros)
            let newRow =zeros.concat(filteredRow)
        //console.log(newRow)

            squares[i].innerHTML = newRow[0]
            squares[i+1].innerHTML = newRow[1]
            squares[i+2].innerHTML = newRow[2]
            squares[i+3].innerHTML = newRow[3]
        }    
    }
}


//swipe left
function moveLeft(){
    for (let i=0; i<16; i++){
        if (i%4===0){
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+1].innerHTML
            let totalThree = squares[i+2].innerHTML
            let totalFour = squares[i+3].innerHTML
            let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
        //console.log(row)
            let filteredRow = row.filter(num => num)
        //console.log(filteredRow)
            let missing = 4 - filteredRow.length
            let zeros = Array(missing).fill(0)
        //console.log(zeros)
            let newRow =filteredRow.concat(zeros)
        //console.log(newRow)
            squares[i].innerHTML = newRow[0]
            squares[i+1].innerHTML = newRow[1]
            squares[i+2].innerHTML = newRow[2]
            squares[i+3].innerHTML = newRow[3]
        }    
    }
}


//swipe down
function moveDown(){
    for (let i=0; i<4; i++){
        let totalOne = squares[i].innerHTML
        let totalTwo = squares[i+width].innerHTML
        let totalThree = squares[i+(width*2)].innerHTML
        let totalFour = squares[i+(width*3)].innerHTML
        let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

        let filteredColumn = column.filter(num => num)
        let missing = 4 - filteredColumn.length
        let zeros = Array(missing).fill(0)
        let newColumn = zeros.concat(filteredColumn)

        squares[i].innerHTML = newColumn[0]
        squares[i+width].innerHTML = newColumn[1]
        squares[i+(width*2)].innerHTML = newColumn[2]
        squares[i+(width*3)].innerHTML = newColumn[3]
    }
}


//swipe dup
function moveUp(){
    for (let i=0; i<4; i++){
        let totalOne = squares[i].innerHTML
        let totalTwo = squares[i+width].innerHTML
        let totalThree = squares[i+(width*2)].innerHTML
        let totalFour = squares[i+(width*3)].innerHTML
        let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

        let filteredColumn = column.filter(num => num)
        let missing = 4 - filteredColumn.length
        let zeros = Array(missing).fill(0)
        let newColumn = filteredColumn.concat(zeros)

        squares[i].innerHTML = newColumn[0]
        squares[i+width].innerHTML = newColumn[1]
        squares[i+(width*2)].innerHTML = newColumn[2]
        squares[i+(width*3)].innerHTML = newColumn[3]
    }
}


//combine
function combineRow() {
    for (let i = 0; i < 15; i++) {
        if (squares[i].innerHTML === squares[i+1].innerHTML){
            let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
            squares[i].innerHTML = combinedTotal
            squares[i+1].innerHTML = 0
            //score
            score += combinedTotal
            scoreDisplay.innerHTML = score
        }
    }
    checkForWin()
}

function combineColumn() {
    for (let i = 0; i < 12; i++) {
        if (squares[i].innerHTML === squares[i+width].innerHTML){
            let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+width].innerHTML)
            squares[i].innerHTML = combinedTotal
            squares[i+width].innerHTML = 0
            //score
            score += combinedTotal
            scoreDisplay.innerHTML = score
        }
    }
    checkForWin()
}

//assign keycode
function control(e) {
    if (e.keyCode ===39){
        keyRight()
        hidethenumber()
    } else if (e.keyCode === 37){
        keyLeft()
        hidethenumber()
    } else if (e.keyCode === 38){
        keyUp()
        hidethenumber()
    } else if (e.keyCode === 40){
        keyDown()
        hidethenumber()
    }
}

function keyRight() {
    moveRight()
    combineRow()
    moveRight()
    generate()
}

function keyLeft() {
    moveLeft()
    combineRow()
    moveLeft()
    generate()
}

function keyDown() {
    moveDown()
    combineColumn()
    moveDown()
    generate()
}

function keyUp() {
    moveUp()
    combineColumn()
    moveUp()
    generate()
}


// check for the number 2048 in the squares to win
function checkForWin() {
    for (let i=0; i<squares.length; i++) {
        if (squares[i].innerHTML == 2048) {
            winAlert()
            document.removeEventListener('keyup',control)
        }
    }
}

// check if there are no moves on the board to lose
function checkForGameOver() {
    let zeros = 0
    let err = 0
    for (let i=0; i<squares.length; i++) {
        if (squares[i].innerHTML==0){
            zeros++
        }
    }
    if (zeros===0) {
    for (let i=0; i<squares.length; i++){    
        if (i==0
            && squares[i].innerHTML!== squares[i+1].innerHTML
            && squares[i].innerHTML !== squares[i+width].innerHTML){
            console.log('1')
            err = err +1
        }
        if (i==1
            &&squares[i].innerHTML!== squares[i+1].innerHTML
            && squares[i].innerHTML !== squares[i-1].innerHTML
            && squares[i].innerHTML !== squares[i+width].innerHTML){
            err = err +1
            console.log('2')
        }
        if (i==2
            && squares[i].innerHTML!== squares[i+1].innerHTML
            && squares[i].innerHTML !== squares[i-1].innerHTML
            && squares[i].innerHTML !== squares[i+width].innerHTML){
            console.log('3')
            err = err +1
        }
        if (i==3
            && squares[i].innerHTML!== squares[i-1]
            && squares[i].innerHTML !== squares[i+width].innerHTML){
            console.log('4')
            err = err +1
        }
        if (i==4
            && squares[i].innerHTML!== squares[i+1]
            && squares[i].innerHTML !== squares[i+width].innerHTML
            && squares[i].innerHTML !== squares[i-width].innerHTML){
            console.log('5')
            err = err +1
        }
        if(i==5
            && squares[i].innerHTML!== squares[i+1].innerHTML
            && squares[i].innerHTML !== squares[i-1].innerHTML
            && squares[i].innerHTML !== squares[i+width].innerHTML
            && squares[i].innerHTML !== squares[i-width].innerHTML){
            console.log('6')
            err = err +1
        }
        if(i==6
            && squares[i].innerHTML!== squares[i+1].innerHTML
            && squares[i].innerHTML !== squares[i-1].innerHTML
            && squares[i].innerHTML !== squares[i+width].innerHTML
            && squares[i].innerHTML !== squares[i-width].innerHTML){
            console.log('7')
            err = err +1
        }
        if (i==7
            && squares[i].innerHTML!== squares[i-1].innerHTML
            && squares[i].innerHTML !== squares[i+width].innerHTML
            && squares[i].innerHTML !== squares[i-width].innerHTML){
            console.log('8')
            err = err +1
        }
        if (i==8
            && squares[i].innerHTML!== squares[i+1]
            && squares[i].innerHTML !== squares[i+width].innerHTML
            && squares[i].innerHTML !== squares[i-width].innerHTML){
            console.log('9')
            err = err +1
            }
        if (i==9
            && squares[i].innerHTML !== squares[i+1].innerHTML
            && squares[i].innerHTML !== squares[i-1].innerHTML
            && squares[i].innerHTML !== squares[i+width].innerHTML
            && squares[i].innerHTML !== squares[i-width].innerHTML){
            console.log('10')
            err = err +1
        }
        if (i==10
            && squares[i].innerHTML!== squares[i+1].innerHTML
            && squares[i].innerHTML !== squares[i-1].innerHTML
            && squares[i].innerHTML !== squares[i+width].innerHTML
            && squares[i].innerHTML !== squares[i-width].innerHTML){
            console.log('11')
            err = err +1
            }
        if (i==11
            && squares[i].innerHTML!== squares[i-1].innerHTML
            && squares[i].innerHTML !== squares[i-width].innerHTML
            && squares[i].innerHTML !== squares[i+width].innerHTML){
            console.log('12')
            err = err +1
        }
        if (i==12
            && squares[i].innerHTML!== squares[i+1].innerHTML
            && squares[i].innerHTML !== squares[i-width].innerHTML){
            console.log('13')
            err = err +1
        }
        if (i==13
            && squares[i].innerHTML!== squares[i+1].innerHTML
            && squares[i].innerHTML!== squares[i-1].innerHTML
            && squares[i].innerHTML!== squares[i-width].innerHTML){
            console.log('14')
            err = err +1
        }
        if (i==14
            && squares[i].innerHTML!== squares[i+1].innerHTML
            && squares[i].innerHTML!== squares[i-1].innerHTML
            && squares[i].innerHTML!== squares[i-width].innerHTML){
            console.log('15')
            err = err +1    
        }
        if (i==15
            && squares[i].innerHTML!== squares[i-1].innerHTML
            && squares[i].innerHTML!== squares[i-width].innerHTML){
            console.log('16')
            err = err +1
        }
        console.log(err)
        if (err ===16){
            gameOveralert()
        }
    }}                               
}

function gameOveralert() {
    document.getElementById('win-result').innerHTML = '????YOU LOSE!????'
    document.getElementById('score-result').innerHTML = 'Your score is: ' + score
    document.removeEventListener('keyup',control)
    modal_container.classList.add('show');
    restart.addEventListener('click', () => {
    modal_container.classList.remove('show');
    restartgame()
    })
}

function winAlert() {
    document.getElementById('win-result').innerHTML = '????YOU WIN!????'
    document.getElementById('score-result').innerHTML = 'Your score is: ' + score
    document.removeEventListener('keyup',control)
    modal_container.classList.add('show');
    restart.addEventListener('click', () => {
    modal_container.classList.remove('show')
    restartgame()
    })
}

function restartgame() {
    for (let i=0; i<squares.length; i++){
        squares[i].innerHTML = ''
        }
    generate()
    generate()
    hidethenumber()
    document.addEventListener('keyup',control)
    score = 0
    scoreDisplay.innerHTML = score
}

})
