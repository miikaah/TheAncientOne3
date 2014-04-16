using UnityEngine;
using System.Collections;

public class cloud : MonoBehaviour {

	public int speed = 4;

	// Use this for initialization
	void Start () {
		//var arvo = null;
	}
	
	// Update is called once per frame
	void Update () {
		//var arvo = null;
		transform.Translate(Vector3.left * Time.deltaTime/speed, Space.World);
	}
}
