
function sendMail(){
    let parms={
        name:document.getElementById('name').value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    }

    emailjs.send("service_okzehia","template_g2mkrmb",parms).then(alert("email has sent"));
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('message').value='';

}

console.log("hdsfjshg");
