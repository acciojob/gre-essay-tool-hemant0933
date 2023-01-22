//your code here
var textContainer = document.getElementById('evaluatedText')
var display = document.getElementById('wordCount') 

// var words = textContainer.value.split(" ");
// display.innerHTML = 'words'
textContainer.addEventListener('input' , countWords);
function countWords(){
    display.innerHTML = textContainer.value.split(" ").length;
}