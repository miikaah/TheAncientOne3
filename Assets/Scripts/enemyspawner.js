#pragma strict
var warrior: Transform;
var dice: float;
var WarriorIntance;
var position:Vector3;



var timeUpperLimit : float = 2.0;
private var timerReset : float = timeUpperLimit;

function Update () {
	dice=Random.Range(0,3);
	timeUpperLimit -= Time.deltaTime;
	
	
	
	if(timeUpperLimit < 0)
	{
	
	if(dice>1){
	position = Vector3(transform.position.x+7,Random.Range(-0.8,-2),-2);
	WarriorIntance= Instantiate(warrior, position,Quaternion.identity);
	
	}
	
		if(dice<=1){
	position= Vector3(transform.position.x-7,Random.Range(-0.8,-2),-2);
	WarriorIntance= Instantiate(warrior, position,Quaternion.identity);
	
	}
	timeUpperLimit = Random.Range(1.5,timerReset);
	}

}