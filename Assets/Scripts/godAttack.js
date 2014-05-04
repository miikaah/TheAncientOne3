#pragma strict

var gotHit1 : AudioClip;
var gotHit2 : AudioClip;
var gotHit3 : AudioClip;
private var randomize : int;
private var timer : float = 2;
private var timereset : float = 2;

function Update () {
	if(healthscript.curHealth <= 0) {
		//Destroy(this.gameObject);
	}
}

function OnTriggerStay (col : Collider) {
	timer -= Time.deltaTime;
		if (timer<=0){
			timer = timereset;
			if(col.gameObject.tag == "Enemy") {
				timer = timereset;
				randomize = Random.Range(1,4);
				if (randomize ==1){audio.PlayOneShot(gotHit1);}
				if (randomize ==2){audio.PlayOneShot(gotHit2);}
				if (randomize ==3){audio.PlayOneShot(gotHit3);}
				healthscript.curHealth -=10;
			}
 		}
}