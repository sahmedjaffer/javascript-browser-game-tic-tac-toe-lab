/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board = [],turn='O',winner='',tie=false;

/*------------------------ Cached Element References ------------------------*/
const sqr1 = document.getElementById("#0");
const sqr2 = document.getElementById("#1");
const sqr3 = document.getElementById("#2");
const sqr4 = document.getElementById("#3");
const sqr5 = document.getElementById("#4");
const sqr6 = document.getElementById("#5");
const sqr7 = document.getElementById("#6");
const sqr8 = document.getElementById("#7");
const sqr9 = document.getElementById("#8");
const messageEl=document.querySelector("#message");
const squareEls=document.querySelectorAll(".sqr");

playerTurn(turn);
/*-------------------------------- Functions --------------------------------*/
function playerTurn(){
    messageEl.textContent=`X turn`;
    let clicksTime=0;
    squareEls.forEach(sqrs => {
        sqrs.addEventListener('click', (event) => {
            messageEl.textContent=`${turn} turn`
                if (turn !== 'X' || turn === ""){
                    turn = 'X';
                    console.log(`u chose me ${turn}`);
                }else {
                    turn='O';
                    console.log(`u chose me ${turn}`);
                }   
                sqrs.textContent=turn;
                let clickedSqr =sqrs.id;
                
                    // console.log(clicksTime=1+parseInt(sqrs.id));
                    // document.getElementById(`#${sqrs.id}`).textContent = turn;
                    // console.log(document.getElementById(`#${sqrs.id}`).textContent);
                
                playedWin(clickedSqr);
                console.log(clickedSqr);
                board.push(clickedSqr);
                console.log(board);

               // console.log(sqrs.textContent.includes[clickedSqr])

    // console.log(sqr2.textContent);
    // console.log(sqr3.textContent);
    // console.log(sqr4.textContent);
    // console.log(sqr5.textContent);
    // console.log(sqr6.textContent);
    // console.log(sqr7.textContent);
    // console.log(sqr8.textContent);
    // console.log(sqr9.textContent);

                playedWin();
        })
  
    })

}

function sqrClickedNum(){


}

function playedWin(){
// if (sqr1.innerHTML.innerText === 'X' && sqr2.innerText === sqr1.innerText && sqr3.innerText === sqr1.innerText){
//     winner=true;
//     console.log('I am wining')
// }
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




