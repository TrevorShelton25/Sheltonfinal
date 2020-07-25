var profile = new Array("My name is Trevor Shelton and I am a senior majoring in Information Technology at the University of Alabama. ");
document.getElementById('profile').innerHTML = profile; 


var about = new Array("I am a major sports fan with golf and baseball being my two favorite sports. My favorite movie is Shawshank Redemption and my favorite music is Rock.");
    
document.getElementById('about').innerHTML = about; 
$(function () {
  $("#btnId").on("click", function (e) {
    e.preventDefault();
    var getInput = $("#textInputId").val();

    if (getInput) {
      $("#textInputId").val("");
      $("#userText").html("<p>" + getInput + "</p>");
    }
  });
});