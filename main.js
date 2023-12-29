// Create link to add css file
const link = document.createElement("link")
link.rel = "stylesheet";
link.href = "style.css";
document.head.append(link)

// Create a div to contain the sketchbox
const container = document.createElement("div");
container.className = "container";

// Create the ScetchBox
const sketchBox = document.createElement("div");
sketchBox.className = "sketchBox";


let width = sketchBox.style.width = "480px";
let height = sketchBox.style.height = "480px";

width = Number(width.replace("px",""));
height = Number(height.replace("px",""));

let boxWidth = (width - 80) ;
let boxHeight = (height - 80) ;

let sixteenDim = (((boxWidth) /16) );
console.log(sixteenDim)

let mouse = false;

function createGrid(){
    
    const reset = document.createElement("button");
        reset.className = "reset";
        reset.textContent = "Reset";
        
    for (let i = 0 ; i < 256 ; i++){
        
        const grid = document.createElement("div");
        grid.className = "grid";
        grid.style.width = `${sixteenDim}px`;
        grid.style.height = `${sixteenDim}px`;
        sketchBox.append(grid)
        

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
    container.append(reset)
}
createGrid()


// Adding the divs to html file
container.append(sketchBox);
document.body.append(container);





























// let width = sketchBox.style.width = "480px";
// let height = sketchBox.style.height = "480px";

// width = Number(width.replace("px",""));
// height = Number(height.replace("px",""));

// let boxWidth = width;
// let boxHeight = height;

// let sixteenDim = ((boxWidth /16) - 2 );
// console.log(sixteenDim)


// function createGrids(){
    
//     let earse = document.createElement("button");
//     earse.className = "earse";
//     earse.textContent = "Earse";

    
//         let grid = document.createElement("div"); 
//         grid.className = "grid";
//         grid.style.width = `${sixteenDim}px`;
//         grid.style.height = `${sixteenDim}px`;
//         sketchBox.append(grid)
        
//         let mouse = false;
//         function mousedown()
//         {
//         mouse = true;
//         callEvent();
//         }
//         function mouseup()
//         {
//         mouse =false;
//         }
//         function callEvent()
//         {
//         if(mouse)
//         {
//             grid.style.backgroundColor = "gold";        
//             // it will continue executing until mouse is not released

//         setTimeout("callEvent()",1);
//         }
//         else
//         return;
//         }
//         console.log(i)
//     }
//     container.append(earse)


// createGrids()


