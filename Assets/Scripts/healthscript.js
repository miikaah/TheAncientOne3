#pragma strict

    static var curHealth : int = 50;
    static var maxHealth : int = 100;
    var healthtext : GUIText;
    
    function Start () {
    Regenerate();
    }
     
    function Update () {
     
     
    healthtext.text =curHealth + " / " + maxHealth;
     
     
    if(curHealth <= 0 ) {
    curHealth = 0;
    Application.LoadLevel(2);
    
    }
     
    if(curHealth > 100) {
    curHealth = 100;
    }

  }
     
    function Regenerate () {
    var i: int;
    for(i=1;i>0;i++) {
    yield WaitForSeconds(1);
     
    if(curHealth < maxHealth) {
    curHealth++;
    }
     
     
    }
     
     
  }

