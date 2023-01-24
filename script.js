//your code here
var textContainer = document.getElementById('evaluatedText')
var display = document.getElementById('wordCount') 


textContainer.addEventListener('input' , countWords);
function countWords(){
    
    display.innerHTML = textContainer.value.split(" ").length-1;
    if(textContainer.value == ''){
        display.innerHTML = '0';
    }
}