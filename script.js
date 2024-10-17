// Get  the input form html from the page
var nameInput = document.getElementById("username");
var saveButton = document.getElementById("saveButton");
var clearButton = document.getElementById("clearButton");
var displayArea = document.getElementById("displayName");

//  saveName   function
function saveName() {
    var name = nameInput.value;
    localStorage.setItem("savedName", name);
    showName();
    alert("Name saved!");
}

// showName function 
function showName() {
    var savedName = localStorage.getItem("savedName");
    if (savedName) {
        displayArea.textContent = "Saved name: " + savedName;
    } else {
        displayArea.textContent = "No name saved";
    }
}

// clearName function
function clearName() {
    localStorage.removeItem("savedName");
    nameInput.value = "";
    showName();
    alert("Name cleared!");
}

//  events for buttons
saveButton.onclick = saveName;
clearButton.onclick = clearName;

// show on page loads
showName();
//window.onload = function() {
 //   showName();
//};