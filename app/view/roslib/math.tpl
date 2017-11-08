<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<script src="http://cdn.robotwebtools.org/EventEmitter2/current/eventemitter2.min.js"></script>
<script src="http://cdn.robotwebtools.orgroslibjs/current/roslib.js"></script>

<script>
  // Let's start by adding some vectors.
  var v1 = new ROSLIB.Vector3({
    x : 1,
    y : 2,
    z : 3
  });
  var v2 = v1.clone();
  v1.add(v2);
  console.log(v1);
  // Now let's play with some quaternions.
  var q1 = new ROSLIB.Quaternion({
    x : 0.1,
    y : 0.2,
    z : 0.3,
    w : 0.4
  });
  var q2 = q1.clone();
  q1.multiply(q2);
  q1.invert();
  console.log(q1);
  // Let's copy the results into a pose.
  var p = new ROSLIB.Pose({
    position : v1,
    orientation : q1
  });
  console.log(p);
  // Finally, let's play with some transforms.
  var tf = new ROSLIB.Transform({
    translation : v2,
    rotation : q2
  });
  p.applyTransform(tf);
  console.log(p);
</script>
</head>

<body>
  <h1>Simple Math Example</h1>
  <p>Check the JavaScript console for the output.</p>
</body>
</html>