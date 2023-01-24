//your code here
var textContainer = document.getElementById('evaluatedText')
var display = document.getElementById('wordCount') 


textContainer.addEventListener('input' , countWords);
function countWords(){
    let text = textContainer.value.trim();
   // display.innerHTML = textContainer.value.split(" ").length;
    ///if(textContainer.value == ''){
       // display.innerHTML = '0';
    //}
    let count = text.length > 0?text.split(" ").length: 0;
    display.innerHTML = count;
}