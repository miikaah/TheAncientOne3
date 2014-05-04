#pragma strict

var enemyHealth : int = 100;
var gotHit1 : AudioClip;
var gotHit2 : AudioClip;
var gotHit3 : AudioClip;
private var randomize : int;


function Update () {
	if(this.enemyHealth <= 0) {
		WaitForSeconds(1);
		Score.currentScore += 10;
		Destroy(this.gameObject);
	}
}

function OnTriggerEnter (col : Collider) {
randomize = Random.Range(1,4);
	if(col.gameObject.tag == "attackArea") {
		if (randomize ==1){audio.PlayOneShot(gotHit1);}
		if (randomize ==2){audio.PlayOneShot(gotHit2);}
		if (randomize ==3){audio.PlayOneShot(gotHit3);}
		this.enemyHealth -=50;
	}
 
}