
let reset=document.querySelector(".reset")
let msg_container=document.querySelector(".msg-container")
let newGAme=document.querySelector(".new-game")


let msg=document.querySelector(".msg")

let turn0=true;

const winnpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetgame= ()=>{
     msg_container.classList.add("hide")
     for(b of boxes){
        turn0=true;
        b.disabled=false;

        b.innerText="";


     }
}
let boxes=document.querySelectorAll(".box")
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
       if(turn0){
        box.innerText="O"
        
        
        turn0=false
       }
       else{
        box.innerText="X";
        turn0=true;
       }
       box.disabled=true;
       checkwinner();

    })
})

const checkwinner= () =>{
   for(let pattern of winnpattern){
          let pos1=  boxes[pattern[0]].innerText;
          let pos2=  boxes[pattern[1]].innerText;
          let pos3= boxes[pattern[2]].innerText;

          if(pos1 !="" && pos2 !="" && pos3!="")
            if(pos1===pos2 && pos2 === pos3)
            {
              console.log(" congrats winner",pos1)
              showwinner(pos1)
            }

           
   }

  

}

const showwinner= (winner) =>{

   msg.innerText= `congrats winner  is ${winner}`
   msg_container.classList.remove("hide")
   for(b of boxes)
   {
    b.disabled=true;
   }


}



reset.addEventListener("click",resetgame);
newGAme.addEventListener("click",resetgame)


