#pragma strict

static var currentScore : int = 0;
var score : GUIText;

function Update () {
score.text = "Score: " + currentScore;

}