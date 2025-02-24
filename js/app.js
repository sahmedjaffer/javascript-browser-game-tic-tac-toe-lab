/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board = ['','','','','','','',''],turn='O',winner='',tie=false;

/*------------------------ Cached Element References ------------------------*/
const messageEl=document.querySelector("#message");
const squareEls=document.querySelectorAll(".sqr");
playerTurn(turn);
/*-------------------------------- Functions --------------------------------*/
function playerTurn(){
    messageEl.textContent=`X turn`

    squareEls.forEach(sqrs => {
        
        sqrs.addEventListener('click', (event) => {
        
            messageEl.textContent=`${turn} turn`
            if (sqrs.textContent ===''){
                if (turn !== 'X' ){
                    turn = 'X';
                    console.log(`u chose me ${turn}`);
                    board.splice(parseInt(sqrs.id),1,turn);
                    console.log(sqrs.id);

                }else {
                    turn='O';
                    console.log(`u chose me ${turn}`);
                    board.splice(parseInt(sqrs.id),1,turn);
                    console.log(sqrs.id);
                }   
                sqrs.textContent=turn;
                console.log(board);
                playedWin();
            }else {return}
    })
        
})
   
}

function playedWin(){
// if (sqr1.textContent === 'X' && sqr2.textContent === sqr1.textContent && sqr3.textContent === sqr1.textContent){
//     winner=true;
//     console.log('I am wining')

switch(board){
case  (board[0] === board[1] && board[1] === board[2]):
    winner=true;
    console.log('I am wining')
    break;
case  (board[0] === board[1] && board[1] === board[2]):
    winner=true;
    console.log('I am wining')
    break;
}


if (board[0] === board[1] && board[1] === board[2]){
    winner=true;
    console.log('I am wining')
}else if (board[0] === board[1] && board[1] === board[2]){
    winner=true;
    console.log('I am wining')
} else if (board[0] === board[1] && board[1] === board[2]){
    winner=true;
    console.log('I am wining')
} else if (board[1] === board[4] && board[4] === board[7]){
    winner=true;
    console.log('I am wining')
}else if (board[2] === board[5] && board[5] === board[8]){
    winner=true;
    console.log('I am wining')
}else if (board[2] === board[4] && board[4] === board[6]){
    winner=true;
    console.log('I am wining')
}else if (board[3] === board[4] && board[4] === board[5]){
    winner=true;
    console.log('I am wining')
}else if (board[6] === board[7] && board[7] === board[8]){
    winner=true;
    console.log('I am wining')
} else {
    tie = true
    console.log('I am tieing')

}



    // console.log(sqr1.textContent);
    // console.log(sqr2.textContent);
    // console.log(sqr3.textContent);
    // console.log(sqr4.textContent);
    // console.log(sqr5.textContent);
    // console.log(sqr6.textContent);
    // console.log(sqr7.textContent);
    // console.log(sqr8.textContent);
    // console.log(sqr9.textContent);

// if (){
// }

}
/*----------------------------- Event Listeners -----------------------------*/



// squareEls.addEventListener('click', (event) => {
  
//     // shortcut if statement
//     (sqr1.textContent === '' || sqr1.textContent === null) && (sqr1.textContent=turn) ;
    

//     if (sqr1.textContent === '' && sqr2.textContent === '' && sqr3.textContent === ''){

//     }
//     });




