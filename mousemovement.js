console.log("sadfasdfsadf");
function onMouseMove(event) {
  var xShift = event.clientX;
  var yShift = event.clientY;
  console.log("X:" + xShift);
  console.log("Y:" + yShift);
}
$(document).ready(function() {
  $(document).on("mousemove", onMouseMove);
  console.log($(document));
});
