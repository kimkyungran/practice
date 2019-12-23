// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector(".form");

function handleChange() {
  const selected = select.value;
  console.log(selected);

  localStorage.setItem("country", selected);
}

function loadCountries() {
  const selected = localStorage.getItem("country");

  if (selected) {
    constoption = document.querySelector(`option[value="${selected}"]`);

    option.selected = true;
  }
}
loadCountries();
select.addEventListener("change", handleChange);
