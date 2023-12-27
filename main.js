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




for (i=0 ; i < 256 ; i++){
    let grid = document.createElement("div"); 
    grid.className = "grid"
    grid.addEventListener("mouseenter",function(){
        grid.style.backgroundColor="black"
    })
    sketchBox.append(grid)
}



// Adding the divs to html file
container.append(sketchBox);
document.body.append(container);