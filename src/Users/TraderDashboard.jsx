import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="h-16 flex items-center justify-center bg-blue-500 text-white">
          {/* Logo */}
          <img src="/dashboard-logo.png" alt="Dashboard Logo" className="h-8" />
          <span className="text-xl font-bold ml-2">Dashboard</span>
        </div>

        <nav className="mt-10">
          <a
            href="/dashboard"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
          >
            Dashboard
          </a>
          <a
            href="/portfolio"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
          >
            Portfolio
          </a>
          <a
            href="/trading"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
          >
            Trading
          </a>
          <a
            href="/settings"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
        
        {/* User Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold">Portfolio Value</h2>
            <p className="mt-4 text-4xl">$120,000</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold">Investments</h2>
            <p className="mt-4 text-4xl">$60,000</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold">Returns</h2>
            <p className="mt-4 text-4xl">+12%</p>
          </div>
        </div>

        {/* Add charts, recent activities, and more here */}
      </div>
    </div>
  );
};

export default Dashboard;
