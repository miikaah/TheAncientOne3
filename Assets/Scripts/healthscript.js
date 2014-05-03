#pragma strict

    var curHealth : int = 100;
    var maxHealth : int = 100;
    var healthtext : GUIText;
    
    function Start () {
    Regenerate();
    }
     
    function Update () {
     
     
    healthtext.text = "Health: " + curHealth + " / " + maxHealth;
     
     
    if(curHealth < 0 ) {
    curHealth = 0;
    }
     
    if(curHealth > 100) {
    curHealth = 100;
    }

  }
     
    function Regenerate () {
    var i: int;
    for(i=1;i>0;i++) {
    yield WaitForSeconds(1);
     
    //if(curHealth < maxHealth) {
    if(curHealth > 0) {
    curHealth--;
    }
     
     
    }
     
     
  }

