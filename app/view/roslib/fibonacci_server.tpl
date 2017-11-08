<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<script src="http://cdn.robotwebtools.org/EventEmitter2/current/eventemitter2.min.js"></script>
<script src="http://cdn.robotwebtools.orgroslibjs/current/roslib.js"></script>

<script>
  // Connecting to ROS
  // -----------------
  var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
  });
  // If there is an error on the backend, an 'error' emit will be emitted.
  ros.on('error', function(error) {
    console.log(error);
  });
  // The ActionServer
  // ----------------
  this.fibonacciServer = new ROSLIB.SimpleActionServer({
    ros : ros,
    serverName : '/fibonacci',
    actionName : 'actionlib_tutorials/FibonacciAction'
  });
  this.canceled = false;
  var that=this;
  //handle fibonacci action request.
  this.fibonacciServer.on('goal', function(goalMessage) {
    console.log(goalMessage);
    fibonacciSequence = [];
    fibonacciSequence.push(0);
    fibonacciSequence.push(1);
    for (var i = 1; i < goalMessage.order; i++ ) {
      fibonacciSequence.push( fibonacciSequence[i] + fibonacciSequence[i-1] );
      if (that.canceled === true ) {
        console.log("Action server preempted");
        that.fibonacciServer.setPreempted();
      }
      console.log(fibonacciSequence);
      //send feedback
      var feedback = { sequence: fibonacciSequence };
      that.fibonacciServer.sendFeedback(fibonacciSequence);
    }
    //send result
    var result = { sequence: fibonacciSequence};
    that.fibonacciServer.setSucceeded(result);
  });
  this.fibonacciServer.on('cancel', function(goalMessage){
    that.canceled = true;
  });
</script>
</head>

<body>
  <h1>Fibonacci ActionClient Example</h1>
  <p>Run the following commands in the terminal then refresh this page. Check the JavaScript
    console for the output.</p>
  <ol>
    <li><tt>roscore</tt></li>
    <li><tt>roslaunch rosbridge_server rosbridge_websocket.launch</tt></li>
    <li><tt>refresh this page</tt></li>
    <li><tt>rosrun actionlib_tutorials fibonacci_client</tt></li>
  </ol>
</body>
</html>