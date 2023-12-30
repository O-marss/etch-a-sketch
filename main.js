
const sketchBox = document.querySelector(".sketchBox");
let width = sketchBox.style.width = "480px";
let height = sketchBox.style.height = "480px";

// function gridsDim(){
    width = Number(width.replace("px",""));
    height = Number(height.replace("px",""));

    let boxWidth = (width - 80) ;
    let boxHeight = (height - 80) ;

    let sixteenDim = (((boxWidth) /16) );

    // return  sixteenDim
// }


function createGrid(){
    const reset = document.querySelector(".reset");
    let mouse = false;
        
    for (let i = 0 ; i < 256 ; i++){
        
        const grid = document.createElement("div");
        grid.className = "grid";
        grid.style.width = `${sixteenDim}px`;
        grid.style.height = `${sixteenDim}px`;
        sketchBox.append(grid);
        
        reset.addEventListener("click",function(){
            grid.style.backgroundColor="white";
            mouse = true;
        })

        if(mouse == false){
            sketchBox.addEventListener('mousedown',function(){grid.onmouseenter=function(){grid.style.backgroundColor='gold'}})
            sketchBox.addEventListener('mouseup',function(){grid.onmouseenter=function(){return true}})
        }
        else{
            mouse = true;
        } 
    }
}

createGrid()