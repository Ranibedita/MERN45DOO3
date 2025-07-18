import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Project cards */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Movie Search App</h3>
            <p className="text-sm">React + API + Axios</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Weather App</h3>
            <p className="text-sm">OpenWeather API + Tailwind</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Todo App</h3>
            <p className="text-sm">React + LocalStorage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
