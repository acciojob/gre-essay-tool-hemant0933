//your code here
var textContainer = document.getElementById('evaluatedText')
var display = document.getElementById('wordCount') 

var words = textContainer.value.split(' ').length;
// display.innerHTML = 'words'
textContainer.addEventListener('input' , countWords);
function countWords(){
    display.innerHTML = 'words';
}