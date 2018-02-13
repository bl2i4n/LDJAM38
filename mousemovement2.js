  <script>
  console.log("sadfasdfsadf");
  function onMouseMove(event) {
    var xShift = event.clientX;
    console.log("X:" + xShift);
  }
  $(document).ready(function() {
    $(document).on("mousemove", onMouseMove);
    console.log($(document));
  });

  </script>

  //testing x movement
  // do the same for y