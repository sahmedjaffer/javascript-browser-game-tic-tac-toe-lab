/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board = [],turn='X',winner='',tie=false;

/*------------------------ Cached Element References ------------------------*/
const sqr1 = document.querySelector("#square0");
const sqr2 = document.querySelector("#square1");
const sqr3 = document.querySelector("#square2");
const sqr4 = document.querySelector("#square3");
const sqr5 = document.querySelector("#square4");
const sqr6 = document.querySelector("#square5");
const sqr7 = document.querySelector("#square6");
const sqr8 = document.querySelector("#square7");
const sqr9 = document.querySelector("#square8");
const messageEl=document.querySelector("#message");
const squareEls=document.querySelectorAll(".sqr");
playerTurn(turn);
/*-------------------------------- Functions --------------------------------*/
function playerTurn(){
    messageEl.textContent=`${turn} turn`
    squareEls.forEach(sqrs => {
        sqrs.addEventListener('click', (event) => {
            messageEl.textContent=`${turn} turn`
           turn === 'X' ? turn ='O':turn='X';

/*               if (turn !== 'X' || turn === ""){
                    turn = 'X';
                    console.log(`u chose me ${turn}`);
                }else {
                    turn='O';
                    console.log(`u chose me ${turn}`);
                }   
                */ 
                sqrs.textContent=turn
               
        })
    })
   
}
/*----------------------------- Event Listeners -----------------------------*/



// squareEls.addEventListener('click', (event) => {
  
//     // shortcut if statement
//     (sqr1.textContent === '' || sqr1.textContent === null) && (sqr1.textContent=turn) ;
    

//     if (sqr1.textContent === '' && sqr2.textContent === '' && sqr3.textContent === ''){

//     }
//     });




