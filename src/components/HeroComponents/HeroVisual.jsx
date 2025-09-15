import React from "react";

const HeroVisual = () => {
  return (
    <div className="relative w-full lg:w-4/10">
      <div className="relative group">
        {/* Gradient Border Container */}
        <div className="absolute -inset-1 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

        {/* Main Content Box */}
        <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          {/* Chat Interface Mockup */}
          <div className="space-y-4">
            {/* Chat Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-600">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
                <span className="text-white font-medium">
                  Coffee Mustache Assistant
                </span>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Sample Question */}
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-slate-300 text-sm mb-2">You asked:</p>
              <p className="text-white">
                What's the best way to brew coffee at home?
              </p>
            </div>

            {/* Dummy Image Placeholder */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm">AI Generated Response</p>
              </div>
            </div>

            {/* Input Bar */}
            <div className="flex items-center space-x-3 pt-4">
              <div className="flex-1 bg-slate-700/50 rounded-full px-4 py-3 border border-slate-600">
                <p className="text-slate-400 text-sm">Type your message...</p>
              </div>
              <button className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
