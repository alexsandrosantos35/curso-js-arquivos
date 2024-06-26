let title = document.getElementById("title");

title.addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
})

title.addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
})