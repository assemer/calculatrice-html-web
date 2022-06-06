const screen = document.getElementById("num");

starting = true;


function writeThis(btn) {
    if(starting)
    {
        clr();
        starting = false;    
    }
    screen.innerHTML += btn.innerHTML;
}

function calc()
{
    num = screen.innerHTML;
    if(num !== "")
    {
        screen.innerHTML = eval(num);
    }
    
}

function clr()
{
    screen.innerHTML = "";
}
function del()
{
    d = screen.innerHTML.split("")
    d[d.length-1] = "";
    screen.innerHTML = d.join("");
}