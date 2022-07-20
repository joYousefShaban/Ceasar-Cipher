window.onload = function () {
    var children = document.getElementById("cipherLetter").children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        var tag = document.createElement("p");
        var text = document.createTextNode(String.fromCharCode(65 + i));
        tag.appendChild(text);
        child.appendChild(tag);
    }
};

async function loadFile(file) {
    let text = await file.text();
    document.getElementById('output').textContent = text;
  }

  
function showVal(element) {
    var slideNumber = document.getElementById("slideNumber");
    slideNumber.innerHTML = element.value;

    var children = document.getElementById("cipherLetter").children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i].firstChild;
        var temp = 65 + i + parseInt(element.value);
        if (temp > 90)
            temp -= 26;
        child.innerHTML = String.fromCharCode(temp);
    }
    plainChange(document.getElementById("PlainText").value);
}

function spaceChange() {
    plainChange(document.getElementById("PlainText").value);
}

function symbolChange() {
    plainChange(document.getElementById("PlainText").value);
}

function plainChange(plainString) {
    var slideNumber = document.getElementById("slideNumber");
    slideNumber = slideNumber.innerHTML;
    var cipherText = "";
    for (var i = 0; i < plainString.length; i++) {
        var currentCharacter = plainString.charAt(i).charCodeAt(0);
        if (currentCharacter >= 65 && currentCharacter <= 90) {
            var newCharacter = currentCharacter + parseInt(slideNumber);
            if (newCharacter > 90)
                newCharacter -= 26;
            cipherText += String.fromCharCode(newCharacter);
        }
        else if (currentCharacter >= 97 && currentCharacter <= 122) {
            var newCharacter = currentCharacter + parseInt(slideNumber);
            if (newCharacter > 122)
                newCharacter -= 26;
            cipherText += String.fromCharCode(newCharacter);
        }
        else if (document.getElementById('cb1').checked && currentCharacter == 32)
            cipherText += String.fromCharCode(currentCharacter);
        else if (document.getElementById('cb2').checked && currentCharacter != 32)
            cipherText += String.fromCharCode(currentCharacter);
    }
    document.getElementById("CipherText").value = cipherText;
}

  function readFile(file) {
    var textFile = file.files[0];
    if (textFile) {
        var reader = new FileReader();
        reader.readAsText(textFile, "UTF-8");
        reader.onload = function (evt) {
            document.getElementById("PlainText").value = evt.target.result;
            document.getElementById("PlainText").oninput();
        }
        reader.onerror = function (evt) {
            alert("Error");
        }
    }
    }