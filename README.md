# Weather App

A modern, responsive weather application built with React and Vite. This application displays current weather conditions, temperature, and hourly forecasts with a beautiful gradient interface.

## Features

- 🌤️ **Current Weather Display** - Shows real-time temperature and weather conditions
- 📍 **Location Information** - Displays the current location with an address
- ⏰ **Date & Time** - Shows the current date and time
- 📊 **Hourly Forecast** - View weather predictions for different times of the day
- 🎨 **Beautiful UI** - Modern gradient design with smooth, responsive layout
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## Tech Stack

- **React** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Icons** - Popular icon library with FontAwesome, Feather, and other icons

## Project Structure

```
weather-app/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles
│   ├── main.jsx        # Application entry point
│   └── assets/         # Images and other assets
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application for production:

```bash
npm run build
```

The built files will be output to the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Component Overview

### App Component

The main `App.jsx` component consists of three main sections:

1. **Header** - Displays location and current date/time
2. **Main Content** - Shows current temperature and weather conditions
3. **Footer** - Displays hourly forecast for the day

## Styling

The application uses Tailwind CSS with a beautiful gradient background (`from-indigo-600 to-blue-300`) and responsive layout using flexbox.

## Icons Used

- **Cloud Icon** (FaCloud) - For cloudy conditions
- **Sun Icon** (FaSun) - For sunny conditions
- **Lightning Cloud Icon** (FiCloudLightning) - For storm conditions
- **Location Icon** (ImLocation) - For location display

## Future Enhancements

- Real API integration for live weather data
- Multi-location support
- Extended forecast (5-day/weekly)
- Weather alerts and notifications
- Dark/Light theme toggle
- User preferences and settings

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please create an issue in the project repository.
