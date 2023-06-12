function updateBarcelonaTime() {
  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDateElement = barcelonaElement.querySelector(".date");
  let barcelonaTimeElement = barcelonaElement.querySelector(".time");
  let barcelonaTime = moment().tz("Europe/Barcelona");

  barcelonaDateElement.innerHTML = barcelonaTime.format("MMMM Do YYYY");
  barcelonaTimeElement.innerHTML = barcelonaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateBarcelonaTime();
setInterval(updateBarcelonaTime, 1000);

function updateParamariboTime() {
  let paramariboElement = document.querySelector("#paramaribo");
  let paramariboDateElement = paramariboElement.querySelector(".date");
  let paramariboTimeElement = paramariboElement.querySelector(".time");
  let paramariboTime = moment().tz("America/Paramaribo");

  paramariboDateElement.innerHTML = paramariboTime.format("MMMM Do YYYY");
  paramariboTimeElement.innerHTML = paramariboTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateParamariboTime();
setInterval(updateParamariboTime, 1000);
