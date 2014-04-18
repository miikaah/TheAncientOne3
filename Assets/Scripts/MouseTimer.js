#pragma strict
var aika : int;


function Update () {
	while (Input.GetButtonDown("Fire1")){
	aika -= Time.deltaTime;
	if (aika <= 0) {
	//InputBroker.SetKeyUp("Fire1");
		}
	}

}