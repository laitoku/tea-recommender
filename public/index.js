function displayQuestion(answer) {
    document.getElementById('toppingsQuestion').style.display = "block";

    if (answer == 0) { // hide the div that is not selected
        document.getElementById('toppingsQuestion').style.display = "none";
    }
}

function displayTextureQuestion(answer) {
    document.getElementById('toppingTexture').style.display = "block";

    if (answer == 0) { // hide the div that is not selected
        document.getElementById('toppingTexture').style.display = "none";
    }
}