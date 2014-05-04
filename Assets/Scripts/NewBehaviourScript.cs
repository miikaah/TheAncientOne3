using UnityEngine;
using System.Collections;

public class NewBehaviourScript : MonoBehaviour {

public Transform target;
public float moveSpeed=0.5f;
public int rotationSpeed;
	private GameObject obj;
public int maxdistance;
private Transform myTransform;

void Awake()
{
	myTransform = transform;
	obj=GameObject.FindWithTag ("Player");
		target = obj.transform;
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
