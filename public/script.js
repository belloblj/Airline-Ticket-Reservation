document.addEventListener("DOMContentLoaded", () => {
  const roundTripCheckbox = document.getElementById("roundTrip");
  const returnDateContainer = document.getElementById("returnDateContainer");

  roundTripCheckbox.addEventListener("change", () => {
    if (roundTripCheckbox.checked) {
      returnDateContainer.style.display = "block";
    } else {
      returnDateContainer.style.display = "none";
    }
  });
});