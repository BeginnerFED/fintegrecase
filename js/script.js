//custom input

function formatGsm(input) {
  var cleaned = input.value.replace(/\D/g, "");

  var formatted =
    "(" +
    cleaned.substring(0, 3) +
    ") " +
    cleaned.substring(3, 6) +
    " " +
    cleaned.substring(6, 8) +
    " " +
    cleaned.substring(8, 10);

  input.value = formatted;
}

function formatBirthYear(input) {
  var cleaned = ("" + input.value).replace(/\D/g, "");
  if (cleaned.length > 4) {
    input.value = cleaned.slice(0, 4);
  }
}

function formatIBAN(input) {
  var cleaned = ("" + input.value).replace(/\D/g, "");
  var formatted = "TR";

  for (var i = 0; i < cleaned.length && i < 26; i++) {
    if (i === 2 || i === 6 || i === 10 || i === 14 || i === 18 || i === 22) {
      formatted += " ";
    }
    formatted += cleaned[i];
  }

  if (cleaned.length >= 26) {
    formatted += " " + cleaned.substr(26, 2);
  }

  input.value = formatted;
}

//CheckBox bug-fix
document
  .getElementById("metinLabel")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

document
  .getElementById("metinLabel2")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

document
  .getElementById("metinLabel3")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

//Modal
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  modal.classList.add("fade-in");
}

function closeModal(event) {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function stopPropagation(event) {
  event.stopPropagation();
}

window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Copy
function copyReferenceNumber() {
  var refNumber = document.getElementById("refNumber");
  var notification = document.getElementById("notification");

  var range = document.createRange();
  range.selectNode(refNumber);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");

  // Bildirim mesajını göster
  notification.style.display = "block";
  setTimeout(function () {
    notification.style.display = "none";
  }, 1500);
}

//Goback
function goBack() {
  window.history.back();
}

// Loader
function completeRefundRequest(event) {
  event.preventDefault();

  var requiredField1 = document.getElementById("tcNo").value;
  var requiredField2 = document.getElementById("onayCheckbox1").checked;

  if (!requiredField1 || !requiredField2) {
    return;
  }

  showLoader();

  setTimeout(function () {
    hideLoader();
    window.location.href = "./result.html";
  }, 3000);
}

function showLoader() {
  document.getElementById("loader").style.display = "inline-block";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}
