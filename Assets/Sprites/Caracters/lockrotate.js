#pragma strict

var lockPos = 0;
 
function Update()
{
transform.rotation = Quaternion.Euler(lockPos, lockPos, transform.rotation.eulerAngles.z);
}