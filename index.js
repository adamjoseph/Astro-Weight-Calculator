//Main Div Element
var mainDiv = document.getElementById('main');

//Select Element that options will get appended to
var planetList = document.getElementById("planetSelect");

//Target button for onclick event
var calculateButton = document.querySelector('#submit');

// Reverse a string and append it to create title

function reverseString(text) {
  var stringArray = text.split("");
  var reverseArray = stringArray.reverse();
  var joinArray = reverseArray.join("");
  var title = document.createElement("span");

  document.getElementById("title").innerText = joinArray
}

reverseString('rotaluclaC thgieW ortsA');


//Loop Over Planet Array to generate options within select element

var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];


//Loop over Planets Array and create option for each planet
for(var i = 0; i < planets.length; i++) {
  var newOption = document.createElement("option");
  newOption.innerText = planets[i].planet;
  newOption.id = planets[i].planet; //not necessary, creates id for new option
  newOption.value = planets[i].gravity; //not necessary, creates value for new option
  planetList.appendChild(newOption);

};


//Create a function that will be called when the user clicks on the `button` element you added to your HTML.
calculateButton.onclick = function calculateWeight() {
  var userWeight = document.getElementById("weight").value;
  var selectIndex = document.getElementById('planetSelect').selectedIndex;
  var planetGravity = planets[selectIndex].gravity;
  var planetChoice = planets[selectIndex].planet;
  var spaceWeight = userWeight * planetGravity;

  //Append new paragraph to button
  var newParagraph = document.createElement('p');
  newParagraph.className = 'endWeight';
  newParagraph.innerText = "Your weight on " + planetChoice + " is " + spaceWeight + " lbs";
  mainDiv.appendChild(newParagraph);
  
};







