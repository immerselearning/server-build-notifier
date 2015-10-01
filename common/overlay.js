function add_overlay() {
  $("body").children().last().append(
    "<div id='server-build-overlay'>\n" +
    "    <h3>Pouet!</h3>\n" +
    "</div>"
  );
}

alert("It's alive!");
add_overlay();
