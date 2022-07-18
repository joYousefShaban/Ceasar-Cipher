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
}

function PlainChange(PlainText){
    var slideNumber = document.getElementById("slideNumber");
    slideNumber=slideNumber.innerHTML;
    var CipherText="";
    for (var i = 0; i < PlainText.length; i++) {
        var temp=PlainText.charAt(i).charCodeAt(0)+parseInt(slideNumber);
        if (temp > 90)
            temp -= 26;
        CipherText+=String.fromCharCode(temp);
      }
    console.log(CipherText);
}