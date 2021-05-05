var mouseEvent = "empty";
var last_pos_of_x,last_pos_of_y;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "black";
var width_of_line = 1;
var radius = 5;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
      color = document.getElementById("color").value;
      width_of_line = document.getElementById("width").value;
      radius = document.getElementById("radius").value;
      mouseEvent= "mouseDown";
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseEvent= "mouseUP";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent= "mouseLeave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    var current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY-canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y =");
        console.log ("x= "+last_pos_of_x + "y= "+ last_pos_of_y);
        ctx.moveTo(last_pos_of_x,last_pos_of_y);

        console.log("current position of x and y =");
        console.log ("x= "+current_position_of_mouse_x + "y= "+ current_position_of_mouse_y);
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();

        
        
    }
    
    last_pos_of_x= current_position_of_mouse_x;
    last_pos_of_y = current_position_of_mouse_y;

    
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}