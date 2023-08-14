# Weather-App

It is an interactive weather dashboard that allows users to add cities and view real-time weather information. The dashboard will have an input field and an "Add" button, and users will be able to add cities to a dynamically generated list of weather cards. Each card will display specific weather information, including an image corresponding to the weather condition (rainy, sunny, cloudy, windy). The application should provide a responsive and interactive user experience.
Used the following OpenWeatherMap API endpoint: https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric.

Features:

1.Add City: Implemented an input field and an "Add" button to allow users to add cities. Validated the input to ensure that it's not empty and that the city hasn't been added before.

2.Weather Cards: Dynamically generated weather cards for each added city, displaying:
Weather icon corresponding to the condition (rainy, sunny, cloudy, windy)
City name, temperature (high, low, current), and weather condition
All other data received from the API (e.g., humidity, pressure, wind speed)

3.Sorting: Maintained the cities in an array and sort them by temperature from lowest to highest every time a city is added.

4.Responsive Design: Ensured that the dashboard is fully responsive and displayed properly on both desktop and mobile devices.
