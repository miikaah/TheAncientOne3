using UnityEngine;
using System.Collections;

public class NewBehaviourScript : MonoBehaviour {


public Transform target;
public float moveSpeed=0.5f;
public int rotationSpeed;
public int maxdistance;
private Transform myTransform;
	public float  lasku;
	private float current;
	private float update;
	private Quaternion temp;

   

void Awake()
{
	myTransform = transform;
}


void Start ()
{
	
	maxdistance = 0;
}


void Update ()
{

		current = myTransform.position.x;



		if (Vector3.Distance(target.position, myTransform.position) > maxdistance)
		{
			// Get a direction vector from us to the target
			Vector3 dir = target.position - myTransform.position;
			
			// Normalize it so that it's a unit direction vector
			dir.Normalize();




			update = myTransform.position.x;

			//lasku= current - update;



		


			if(lasku < 0) {
				temp = myTransform.localRotation;
				temp.y = myTransform.localRotation.y +180;
				myTransform.localRotation = temp;}


			else{
				temp = myTransform.localRotation;
				temp.y = myTransform.localRotation.y +360;
				myTransform.localRotation = temp;}

			// Move ourselves in that direction
			myTransform.position += dir * moveSpeed * Time.deltaTime;
		}
} 
}
