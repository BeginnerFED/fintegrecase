//Combobox
const input = document.getElementById("combobox-input");
const dropdownList = document.querySelector(".dropdown-list");

input.addEventListener("focus", function () {
  dropdownList.style.display = "block";
  document.addEventListener("click", closeDropdown);
});

function closeDropdown(e) {
  if (
    !e.target.matches("#combobox-input") &&
    !e.target.closest(".dropdown-list")
  ) {
    dropdownList.style.display = "none";
    document.removeEventListener("click", closeDropdown);
  }
}

function selectItem(item) {
  input.value = item;
  dropdownList.style.display = "none";
}

input.addEventListener("input", function () {
  filterItems(input.value.toLowerCase());
});

function filterItems(filter) {
  const items = document.querySelectorAll(".dropdown-list li");
  items.forEach(function (item) {
    const text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
