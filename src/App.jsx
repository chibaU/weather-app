import React from "react";
import { FaCloud, FaSun } from "react-icons/fa";
import { FiCloudLightning } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
const App = () => {
  return (
    <main className="flex justify-center items-center p-12">
      <article className="bg-linear-to-br from-indigo-600 to-blue-300  rounded-xl p-1">
        {/* Header: Location and Time */}
        <header className=" p-6 text-center flex flex-col items-center text-white">
          <address className="flex flex-row   items-center">
            <ImLocation aria-hidden="true" /> Colombo
          </address>
          <time
            className="leading-tight text-gray-300"
            dateTime="2025-12-05T08:41"
          >
            Thu 5 December 8:41 am
          </time>
        </header>

        {/* Main Content: Current Temperature and Status */}
        <section className=" flex flex-col justify-center items-center gap-4 text-white">
          <div className="flex flex-row ">
            <FaCloud className="text-7xl " aria-label="Cloudy icon" />
            <span className="text-7xl">27°</span>
          </div>

          <div className="text-center">
            <p className="text-lg">
              <span>34°/26°</span> Feels like 30°
            </p>
            <h1 className="font-bold text-lg">Cloudy</h1>
          </div>
        </section>

        {/* Footer/Sidebar: Hourly Forecast */}
        <footer className=" p-6 text-white">
          <h2 className="text-xs ">Today</h2>
          <ol className="flex flex-row gap-4 bg-white/20 px-6 py-2 rounded-xl">
            <li className="flex flex-col items-center justify-center text-center gap-2 text-xs ">
              <time>8:30 am</time>
              <FaCloud className="text-base" />
              <span>27°</span>
            </li>
            <li className="flex flex-col items-center justify-center text-center gap-2 text-xs ">
              <time>11:30 am</time>
              <FaSun className="text-base" />
              <span>29°</span>
            </li>
            <li className="flex flex-col items-center justify-center text-center gap-2 text-xs ">
              <time>3:30 pm</time>
              <FaCloud className="text-base" />
              <span>27°</span>
            </li>
            <li className="flex flex-col items-center justify-center text-center gap-2 text-xs ">
              <time>7:30 pm</time>
              <FiCloudLightning className="text-base" />
              <span>20°</span>
            </li>
          </ol>
        </footer>
      </article>
    </main>
  );
};

export default App;
