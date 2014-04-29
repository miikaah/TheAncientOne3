#pragma strict
private var state: int;
var object: Transform;

function Start () {
	state = 1;
}

function Update () {
	if (Input.GetAxis("Horizontal") >=0.1 || Input.GetAxis("Horizontal") <=-0.1){
		if(state == 1){
			object.transform.localPosition.y -= 0.005;
			if (object.transform.localPosition.y <= -0.13){
			object.transform.localPosition.y = -0.13;
			state = 0;
			}
		}
		if (state == 0){
			object.transform.localPosition.y += 0.005;
			if (object.transform.localPosition.y >= 0.13){
			object.transform.localPosition.y = 0.13;
			state = 1;
			}
		}
	}
}