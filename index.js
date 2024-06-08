alert("hello");

document.getElementById('btn').addEventListener("click", function() {
    document.querySelector(".result-box").classList.toggle('hidden');

    displayResultbox();

});

var resultBox = document.querySelector(".result-box");
var bigText = document.querySelector(".result-box h1");
console.log(bigText);

function displayResultbox() {
 
    var names = document.getElementById('name').value;
    var mails = document.getElementById('user-mail').value; 
    var concatenatedString = "Hello your thoughts are received " + names + " We will reach you soon , Thanks for reaching us.";


    var resultContent = document.createElement('h1');
    resultContent.textContent = concatenatedString;

    resultContent.className = "result-head";


    resultBox.innerHTML = '';
    resultBox.appendChild(resultContent);

    setTimeout(function() {
      resultBox.classList.add('hidden');
    }, 5000); 

}
