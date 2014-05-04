using UnityEngine;
using System.Collections;

public class NewBehaviourScript : MonoBehaviour {

public Transform target;
public float moveSpeed=0.5f;
public int rotationSpeed;
public int maxdistance;
private Transform myTransform;

void Awake()
{
	myTransform = transform;
}
	
void Update ()
{

		if (Vector3.Distance(target.position, myTransform.position) > maxdistance)
		{
			Vector3 dir = target.position - myTransform.position;

			dir.Normalize();
			myTransform.position += dir * moveSpeed * Time.deltaTime;
		}
} 
}
