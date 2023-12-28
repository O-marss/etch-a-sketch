// Create link to add css file
let link = document.createElement("link")
link.rel = "stylesheet";
link.href = "style.css";
document.head.append(link)

// Create a div to contain the sketchbox
let container = document.createElement("div");
container.className = "container";

// Create the ScetchBox
let sketchBox = document.createElement("div");
sketchBox.className = "sketchBox";





function createGrids(){
    
    let earse = document.createElement("button");
    earse.className = "earse";
    earse.textContent = "Earse";

    for (i= 1; i < 257 ; i++){
        let grid = document.createElement("div"); 
        grid.className = "grid";
        sketchBox.append(grid)
    
        grid.addEventListener('mouseenter',function(){grid.style.backgroundColor='gold';})
        
        earse.addEventListener("click",function(){
            grid.style.backgroundColor="white";
        })
    }
    container.append(earse)
} 

createGrids()


// Adding the divs to html file
container.append(sketchBox);
document.body.append(container);