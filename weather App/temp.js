const container = document.querySelector(".container");

const search = document.querySelector(".search-box button");

const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener("click", () => {
  const APIKey = "745d9767c1ac178d73b5cfd81baccab1";
  const city = document.querySelector(".search-box input").Value;
  alert("hdsdsh");

  if (city == " ") return;

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=matric&appid=${APIKey}"
  )
    .then((response) => response.json())
    .then((json) => {
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "weatherphoto/clear.png";
          break;

        case "Rain":
          image.src = "weatherphoto/rain.png";
          break;

        case "Snow":
          image.src = "weatherphoto/snow.png";
          break;

        case "Clouds":
          image.src = "weatherphoto/clouds.png";
          break;
        case "Mist":
          image.src = "weatherphoto/mist.png";
          break;
        case "Haze":
          image.src = "weatherphoto/mist.png";
          break;
        default:
          image.src = "weatherphoto/cloud.png";
          break;
      }

      temperature.innerHTML = "${parseInt(json.main.temp)}<span>°C</span>";
      description.innerHTML = "${json.weather[0].description}";
      humidity.innerHTML = "${json.main.humidity}%";
      wind.innerHTML = "${parseInt(json.wind.speed)}Km/h";
    });
});
