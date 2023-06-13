function updateTime() {
  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDateElement = barcelonaElement.querySelector(".date");
  let barcelonaTimeElement = barcelonaElement.querySelector(".time");
  let barcelonaTime = moment().tz("Europe/Madrid");

  barcelonaDateElement.innerHTML = barcelonaTime.format("MMMM Do YYYY");
  barcelonaTimeElement.innerHTML = barcelonaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let paramariboElement = document.querySelector("#paramaribo");
  let paramariboDateElement = paramariboElement.querySelector(".date");
  let paramariboTimeElement = paramariboElement.querySelector(".time");
  let paramariboTime = moment().tz("America/Paramaribo");

  paramariboDateElement.innerHTML = paramariboTime.format("MMMM Do YYYY");
  paramariboTimeElement.innerHTML = paramariboTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let brasiliaElement = document.querySelector("#brasilia");
  let brasiliaDateElement = brasiliaElement.querySelector(".date");
  let brasiliaTimeElement = brasiliaElement.querySelector(".time");
  let brasiliaTime = moment().tz("America/Bahia");

  brasiliaDateElement.innerHTML = brasiliaTime.format("MMMM Do YYYY");
  brasiliaTimeElement.innerHTML = brasiliaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let almatyElement = document.querySelector("#almaty");
  let almatyDateElement = almatyElement.querySelector(".date");
  let almatyTimeElement = almatyElement.querySelector(".time");
  let almatyTime = moment().tz("Asia/Almaty");

  almatyDateElement.innerHTML = almatyTime.format("MMMM Do YYYY");
  almatyTimeElement.innerHTML = almatyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html" id="home-button">Go Back</a>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");

citySelectElement.addEventListener("change", updateCity);
