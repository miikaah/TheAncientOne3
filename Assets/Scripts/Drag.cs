﻿using UnityEngine;
using System.Collections;

[RequireComponent(typeof(SphereCollider))]

public class Drag : MonoBehaviour {
	
	private Vector3 screenPoint; 
	private Vector3 offset; 
	private float _lockedYPosition;
	
	void OnMouseDown() {
		//screenPoint = Camera.main.WorldToScreenPoint(gameObject.transform.position); // I removed this line to prevent centring
		_lockedYPosition = screenPoint.y;
		offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z));
		Screen.showCursor = false;
	}
	
	void OnMouseDrag()
	{
		Vector3 curScreenPoint = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z);
		Vector3 curPosition = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
		curPosition.x = _lockedYPosition;
		transform.position = curPosition;
	}
	
	void OnMouseUp()
	{
		Screen.showCursor = true;
	}
}