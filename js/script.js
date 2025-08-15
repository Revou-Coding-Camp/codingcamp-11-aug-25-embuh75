// Uncomment to automatically trigger welcome message
welcomeSpeech();

/**
 * Prompts the user for their name and displays it in the greeting element.
 * If the user enters a name, it updates the content of the element with id 'user-greeting'.
 * If no name is provided, the greeting remains unchanged.
 */
function welcomeSpeech() {
    let userName = prompt("What is your name?");
    if (userName != '') {
        document.getElementById('user-greeting').textContent = userName;
    }
}

/**
 * Handles the message sending functionality.
 * Retrieves the message from the input field with id 'user-message'.
 * Displays an alert with the message if one is provided,
 * otherwise shows an error message asking the user to enter text.
 */
function sendMessage() {
    let message = document.getElementById('user-message').value;
    if (message != '') {
        alert("Message sent: " + message);
    } else {
        alert("Please enter a message before sending.");
    }
}

$(document).ready(function () {
    $("#leftPaneButton").click(function () {
        $("#leftPane").animate({ width: 0 }, 1000);
        $("#rightPane").animate({ width: "100%" }, 1000);
    });

    $("#rightPaneButton").click(function () {
        $("#leftPane").animate({ width: "100%" }, 1000);
        $("#rightPane").animate({ width: 0 }, 1000);
    });
});

$(document).ready(function () {
    // Klik gambar untuk buka modal
    $(".grid img").click(function () {
        let imgSrc = $(this).attr("src");
        $("#modalImage").attr("src", imgSrc);
        $("#imageModal").removeClass("hidden").addClass("flex");
    });

    // Klik close untuk tutup modal
    $("#closeModal").click(function () {
        $("#imageModal").addClass("hidden").removeClass("flex");
    });

    // Klik area luar gambar untuk tutup modal
    $("#imageModal").click(function (e) {
        if (e.target.id === "imageModal") {
            $(this).addClass("hidden").removeClass("flex");
        }
    });
});

document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggalLahir").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("pesan").value;

    // Tampilkan data di output box
    document.getElementById("currentTime").textContent = new Date().toString();
    document.getElementById("outNama").textContent = nama || "-";
    document.getElementById("outTanggal").textContent = tanggal || "-";
    document.getElementById("outGender").textContent = gender || "-";
    document.getElementById("outPesan").textContent = pesan || "-";
});

const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

function checkScreenSize() {
    const warning = document.getElementById('mobile-warning');
    if (window.innerWidth < 768) {
        warning.classList.remove('hidden');
    } else {
        warning.classList.add('hidden');
    }
}

window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);