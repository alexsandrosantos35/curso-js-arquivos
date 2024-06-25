let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    console.log("Clicou");

    console.log(this);

    this.style.color = "red"
});

let title = document.getElementById("title");

title.addEventListener("click", function() {
    let subtitle = document.querySelector(".subtitle");
    subtitle.style.display = "none";
})

let subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function() {
    console.log("Click duplo.")
})