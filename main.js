function repeatName() {
    var repeats = "anna";
    var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    var text = "";
    for (var a = 0; a < colors.length; a++) {
        text += "<p class='name' style='color:" + colors[a] + "'>" + repeats + "</p>";
        document.getElementById("nameId").innerHTML = text;
    }
}
repeatName();


function repeatSmiley() {
    var img = "";
    for (var a = 0; a < 15; a++) {
        img += "<img src='img/smiley.png' class='anna--smiley__img' alt='smiley face'>";
        document.getElementById("smiley").innerHTML = img;
    }
}
repeatSmiley();