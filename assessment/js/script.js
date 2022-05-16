//open mail client and fill in details provided
function sendMail() {
    const isValidEmail = email.checkValidity();
    const isValidName = myName.checkValidity();
    const isValidText= myText.checkValidity();

    if( isValidEmail && isValidName && isValidText ) {
        var link = "mailto:test@mail.com"
        + "?cc=" + encodeURIComponent(document.getElementById('email').value)
        + "&subject=" + encodeURIComponent("Contactaanvraag van ") + document.getElementById('myName').value
        + "&body=" + encodeURIComponent(document.getElementById('myText').value)
        ; 
        window.location.href = link;
    }else{
        alert("Controleer de door u ingevulde gegevens.");
    }
    
}

//toggle visibility of contact div
function toggle() {
    var targetDiv = document.getElementById("contact__form");
    var btn = document.getElementById("toggle");

    if(targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        btn.innerText = "Contact";
        btn.style.marginTop = "25%";
    } else {
        targetDiv.style.display = "block";
        btn.innerText = "Sluit venster";
        btn.style.marginTop = "5px";
    }
}

//show top button when user scrolls down
function showTopBtn () {
    var mybutton = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
}

window.onscroll = function() {showTopBtn()};


function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }