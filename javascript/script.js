function dis(val) 
{ 
    document.getElementById("result").value+=val ;
} 
function solve(val){
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
}
function cln(){
    document.getElementById("result").value=" ";
}