window.onscroll = function() {
  let el = document.getElementById('checker');

  if (window.pageYOffset > 10) {
    el.style.paddingTop = "10px";
    el.style.boxShadow = "1px 1px 10px #333";
  } else {
    el.style.paddingTop = "40px";
    el.style.boxShadow = "none";
  }
};

document.querySelector('#copytoclipboard').addEventListener('click', function(event) {
	var copyText = document.getElementById('embedcode').textContent;
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", copyText);
  x.setAttribute("id", "trata");
  document.body.appendChild(x);
  x.select();
  x.setSelectionRange(0, 99999);
	document.execCommand('copy');
  var tratata = document.getElementById('trata');
  x.parentNode.removeChild(x);

  var myTooltipEl = document.getElementById('copytoclipboard')
  var tooltip = new bootstrap.Tooltip(myTooltipEl)
  tooltip.hide()

});
