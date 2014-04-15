using UnityEngine;
using System.Collections;

public class cloud : MonoBehaviour {

	// Use this for initialization
	void Start () {
		//var arvo = null;
	}
	
	// Update is called once per frame
	void Update () {
		//var arvo = null;
		transform.Translate(Vector3.left * Time.deltaTime/4, Space.World);
	}
}
