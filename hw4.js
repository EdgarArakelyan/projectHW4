let promptTextList = [];

function inputWord() {

    let promptText;
    let currWord = 1;
    while(true) {
        promptText = prompt ("Please enter word " + currWord);
        if(!promptText) {
            continue;
        }
        currWord ++;

        promptTextList.push(promptText);
        if(promptTextList.length >= 3) {
            break;
        }
    }

    let liHtml = "";
    for(let i = 0; i < promptTextList.length; i++) {
        liHtml += "<li>" + promptTextList[i] + "</li>";
    }

    document.getElementById("section-ul").innerHTML = liHtml;

    document.getElementById("strat-btn").style.display = 'none';
    document.getElementById("change-btn").style.display = 'block';


}

function changeWord() {
    let swapTextList = promptTextList.map(x => swapLetters(x));

    let liHtml = "";
    for(let i = 0; i < swapTextList.length; i++) {
        liHtml += "<li>" + swapTextList[i] + "</li>";
    }

    document.getElementById("second-section-ul").innerHTML = liHtml;

    document.getElementById("firstSec").style.display = 'none';
    document.getElementById("secondSec").style.display = 'block';
}

function swapLetters(word) {
    let swapWord;

    let firstLetter = word.substring(0, 1);
    let lastLetter = word.substring(word.length - 1, word.length);
    let middleWord = word.substring(1, word.length - 1);

    swapWord = lastLetter + middleWord + firstLetter;

    return swapWord;
}
