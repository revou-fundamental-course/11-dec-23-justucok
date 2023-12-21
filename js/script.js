document.addEventListener("DOMContentLoaded", function() {
    var username = window.prompt("Masukkan Nama anda:");
    var userElement = document.getElementById("user");
    userElement.textContent = username;
});

let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

document.addEventListener("DOMContentLoaded", showSlides);

function getValue() {
    var name = document.getElementById("nameInput").value;
    var message = document.getElementById("messageInput").value;
    var selectedDate = document.getElementById("ttlInput").value;
    var maleRadio = document.getElementById("maleRadio");
    var femaleRadio = document.getElementById("femaleRadio");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var formattedTime = hours + ":" + minutes + ":" + seconds;
    var selectedGender = "";

    if (name === "" || message === "" || selectedDate === "" || (!maleRadio.checked && !femaleRadio.checked)) {
        alert("Mohon isi semua input teks!");
        return;
    }

    if (maleRadio.checked) {
        selectedGender = maleRadio.value;
    } else if (femaleRadio.checked) {
        selectedGender = femaleRadio.value;
    }

    document.getElementById("displayValues").innerHTML = "Waktu Submit : " + formattedTime + "<br>" + "<br>" + "Nama : " + name + "<br>" +
        "Tanggal lahir : " + selectedDate + "<br>" +
        "Jenis Kelamin : " + selectedGender + "<br>" + "Pesan : " + message;
}