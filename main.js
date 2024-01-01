
const sketchBox = document.querySelector(".sketchBox");
let width = sketchBox.style.width = "560px";
let height = sketchBox.style.height = "560px";

// function gridsDim(){
    width = Number(width.replace("px",""));
    height = Number(height.replace("px",""));

    let boxWidth = (width - 60) ;
    let boxHeight = (height - 60) ;

    let sixteenDim = (((boxWidth) /16) );

    // return  sixteenDim
// }


function createGrid(){
    const color = document.querySelector(".color")
    const random = document.querySelector(".random");
    const earse = document.querySelector(".earse");
    const reset = document.querySelector(".reset");
    let mouse = false;
        
    for (let i = 0 ; i < 256 ; i++){
        
        const grid = document.createElement("div");
        grid.className = "grid";
        grid.style.width = `${sixteenDim}px`;
        grid.style.height = `${sixteenDim}px`;
        sketchBox.append(grid);
        


        function hovering(){
                
            color.addEventListener("click",function(){
                sketchBox.addEventListener('mousedown',function(){
                    mouse = false 
                    grid.onmouseenter=function(){grid.style.backgroundColor='#DC8686'}});
                
                sketchBox.addEventListener('mouseup',function(){
                    grid.onmouseenter=function(){} });
                });
        }   
            
        function earsing(){
            
                earse.addEventListener("click", function(){
                    sketchBox.addEventListener('mousedown',function(){grid.onmouseenter=function(){
                        grid.style.backgroundColor='white'}});
                    sketchBox.addEventListener('mouseup',function(){grid.onmouseenter=function(){}})})
        }
        
        function reseting(){
            reset.addEventListener("click",function(){
                grid.style.backgroundColor="lightgray";
                hovering()
            })
        }

        function randomColor(){
            let col = ["#FCF5ED","#F4BF96","#CE5A67","#1F1717","#92C7CF","#607274","#3876BF","#FF6969","#F4E869","#9BB8CD","#B4BDFF","#363062"];
            let random_color = col[Math.floor(Math.random() * (col.length))];
            
            random.addEventListener("click",function(){
                
                sketchBox.addEventListener('mousedown',function(){
                    grid.onmouseenter=function(){
                    grid.style.backgroundColor = random_color;}});
            
                sketchBox.addEventListener('mouseup',function(){
                    grid.onmouseenter=function(){} });
            })
        }

        hovering()
        earsing()
        reseting()
        randomColor()
    }
}

createGrid()