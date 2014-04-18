#pragma strict

private var object : Transform;
private var offSet : Vector3;
private var dist : float;
var root : Transform;
var timer : float;
var timereset : float;


function Update () {
	
	var ray = camera.ScreenPointToRay(Input.mousePosition);
	
	if (Input.GetButtonDown("Fire1")) {
		if (!object) {
			var hit : RaycastHit;
			
			if (Physics.Raycast(ray, hit, Mathf.Infinity) && (hit.collider.tag == "Draggable")) 
			{	
				object = hit.transform; // i think this is the problem
				offSet = object.position-hit.point;
				dist = (ray.origin - hit.point).magnitude;
			}
			

		}
	}
	
	else if (Input.GetButtonUp("Fire1")) 
	{
		object = null;
	}
	if (object) 
	{
		timer -= Time.deltaTime;
		if (timer<=0){
			timer = timereset;
		 	object = null;
		}
		object.position = ray.GetPoint(dist) + offSet;
		
		
	}
}

/*function getLength(object : Transform) : float
{
	var length : float;
	var rootx : float = root.transform.position.x - object.transform.position.x;
	var rooty : float = root.transform.position.y - object.transform.position.y;
	var rootz : float = root.transform.position.z - object.transform.position.z;
	
	length = Mathf.Sqrt((rootx*rootx)+(rooty*rooty)+(rootz*rootz));
	return length;
}*/