var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 140;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 900) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.center = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
function myFunction() {
    setTimeout(function(){ alert("You win"); }, 8000);
    document.getElementById("pithu").style.display = 'none';
    document.getElementById("new_image").style.display = 'inline-block';
  }