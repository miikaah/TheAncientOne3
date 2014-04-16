#pragma strict
var cloudPrefab01 : Transform;
var cloudPrefab02 : Transform;
var cloudPrefab03 : Transform;
var cloudPrefab04 : Transform;
var cloudPrefab05 : Transform;
var cloudPrefab06 : Transform;
var cloudList=[cloudPrefab01,cloudPrefab02,cloudPrefab03,cloudPrefab04,cloudPrefab05,cloudPrefab06];
var timeUpperLimit : float = 6.0;
private var timerReset : float = timeUpperLimit;

function Update () {
	timeUpperLimit -= Time.deltaTime;
	if(timeUpperLimit < 0)
	{
	var cloudPrefab = cloudList[Random.Range(0,6)];
	var position : Vector3 = Vector3(transform.position.x+7,Random.Range(0.8,3.6),8);
	var cloudInstance = Instantiate(cloudPrefab, position,Quaternion.identity);
	timeUpperLimit = Random.Range(1.5,timerReset);
	}

}