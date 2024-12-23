// components/ResponsiveImageButtons.js
export default function ResponsiveImageButtons() {
    return (
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start w-full h-screen bg-gray-100 p-4">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-60 md:h-full bg-red-500 flex items-center justify-center">
          {/* Replace this div with an actual image */}
          <span className="text-white text-xl font-bold">Picture Area</span>
        </div>
  
        {/* Buttons Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4 items-center md:items-start mt-4 md:mt-0 p-4">
          <button className="w-3/4 md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
            Button 1
          </button>
          <button className="w-3/4 md:w-auto px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition">
            Button 2
          </button>
          <button className="w-3/4 md:w-auto px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition">
            Button 3
          </button>
          <button className="w-3/4 md:w-auto px-6 py-3 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 transition">
            Button 4
          </button>
          <button className="w-3/4 md:w-auto px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition">
            Button 5
          </button>
        </div>
      </div>
    );
  }
  