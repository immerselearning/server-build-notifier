function add_overlay() {
  $("body").children().last().append(
    `
      <div id='server-build-overlay'>
        <h3>Pouet!</h3>
      </div>
    `
  );
}

alert("It's alive!");
add_overlay();
