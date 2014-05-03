     var target : Transform;
    var smoothTime = 0.3;
    var xOffset : float = 0.0;
    var yOffset : float = 0.0;
     
    private var thisTransform : Transform;
    private var velocity : Vector2;
     
     
    function Start()
    {
    thisTransform = transform;
    }
     
    function LateUpdate()
    {
     
    thisTransform.position.x = Mathf.Lerp( thisTransform.position.x, target.position.x + xOffset, Time.deltaTime * smoothTime);
     
    thisTransform.position.y = Mathf.Lerp( thisTransform.position.y, target.position.y + yOffset, Time.deltaTime * smoothTime);
     
    }