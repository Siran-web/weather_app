# ⛅ Weather App

This is a simple weather forecasting app built using **React + Vite**, which fetches real-time weather data using an API.  
The app provides **current weather details**, shows different **backgrounds for conditions** (sunny, cloudy, rainy, etc.), and delivers a clean UI experience.  

---

## 📌 Features

- 🌍 Get real-time weather updates for any city  
- 🌡️ Displays temperature, humidity, and condition  
- 🎨 Dynamic background images based on weather  
- ⚡ Built with **React + Vite** for fast performance  
- 📱 Responsive UI with **Tailwind CSS**  

---

## 🏗️ Tech Stack

- React  
- Vite  
- Tailwind CSS  
- JavaScript (ES6+)  
- OpenWeather API (or similar)  
- Node.js (for local dev server)  

---

## 📂 Project Structure
```
my-project/
├── public/ # Static assets
├── src/
│ ├── assest/ # Weather images (sunny, cloudy, etc.)
│ ├── component/ # Weather components (UI logic)
│ │ ├── weather.jsx
│ │ ├── weatherApp.jsx
│ │ └── style.css
│ ├── context/ # Context API for weather state management
│ │ └── weatherContext.jsx
│ ├── App.jsx # Main app component
│ ├── main.jsx # React entry point
│ ├── index.css # Global styles
│ └── ...
├── .env # API key & configs
├── index.html # Root HTML
├── package.json # Dependencies & scripts
├── tailwind.config.js # Tailwind setup
├── vite.config.js # Vite setup
└── postcss.config.js # PostCSS config
```


---

## 🔧 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Siran-web/weather_app.git
cd weather_app/my-project
```

### 2. Add API key
```
Create a .env file inside my-project/ and add:
VITE_WEATHER_API_KEY=your_api_key_here
```

### 3. Install dependencies
```
npm install
```

### 4. Run in development mode
```
npm run dev
```
Now open the local server (default: http://localhost:5173
).

## 🌟 Example Usage

- Enter a city name → get current weather info
- UI updates background image depending on weather (☀️ sunny, 🌧 rainy, ☁️ cloudy)
- Temperature & humidity displayed with neat styling


## ✅ Future Enhancements

- 🌐 Add 5-day forecast
- 📍 Detect location automatically using Geolocation API
- 🎛 Add dark/light theme toggle
- 📊 Show wind speed, sunrise/sunset info
