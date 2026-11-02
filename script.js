document.getElementById("f").addEventListener("submit", function (ev) {
  ev.preventDefault();
  var n = document.getElementById("n").value.trim();
  var p = document.getElementById("p").value.replace(/\D/g, "");
  var t = document.getElementById("t").value;
  var e = document.getElementById("e");

  if (n.length < 2) {
    e.textContent = "Naam likhiye.";
    return;
  }
  if (!/^[6-9]\d{9}$/.test(p)) {
    e.textContent = "10 ank ka sahi WhatsApp number likhiye.";
    return;
  }
  e.textContent = "";

  var msg =
    "Namaste, mera naam " + n + " hai. Mera business: " + t +
    ". WhatsApp number: " + p + ". Mujhe Sahyom AI bot ka trial chahiye.";
  window.location.href = "https://wa.me/919559124698?text=" + encodeURIComponent(msg);
});
