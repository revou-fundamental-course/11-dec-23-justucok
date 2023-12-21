document.addEventListener("DOMContentLoaded", function() {
    var username = window.prompt("Masukkan Nama anda:");
    var userElement = document.getElementById("user");
    userElement.textContent = username;
});

function getValue() {
    var name = document.getElementById("nameInput").value;
    var ttl = document.getElementById("ttlInput").value;
    var pesan = document.getElementById("messageInput").value;
    var cowo = document.getElementById("cowoRadio");
    var cewe = document.getElementById("ceweRadio");

    var Gender = "";

    if (cowo.checked) {
        Gender = cowo.value;
    } else if (cewe.checked) {
        Gender = cewe.value;
    }

    document.getElementById("displayName").textContent = "Nama : " + name;
    document.getElementById("displayTtl").textContent = "Tanggal Lahir : " + ttl;
    document.getElementById("displayGender").textContent = "Jenis Kelamin : " + Gender;
    document.getElementById("displayMessage").textContent = "Pesan : " + pesan;
}