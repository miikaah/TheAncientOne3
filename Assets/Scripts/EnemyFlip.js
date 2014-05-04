#pragma strict
var lasku: float = 0;
var current: float;
var prev : float;
var testi : int = 0; 

function Start () {
 wait();
}

function Update () {
current = transform.position.x;
lasku = prev-current;
if (lasku>0){transform.localRotation.y = 0;}
if (lasku<0){transform.localRotation.y = 180;}
}

function wait(){
while(true){
prev = transform.position.x;
yield WaitForSeconds(1);
testi++;}
}