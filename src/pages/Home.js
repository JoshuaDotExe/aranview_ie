import React from 'react'

const Home = () => {
  // Operating hours data structure
  const operatingHours = {
    'mon': { open: '7:00 AM', close: '8:00 PM' },
    'tue': { open: '7:00 AM', close: '8:00 PM' },
    'wed': { open: '7:00 AM', close: '8:00 PM' },
    'thu': { open: '7:00 AM', close: '8:00 PM' },
    'fri': { open: '7:00 AM', close: '8:00 PM' },
    'sat': { open: '7:00 AM', close: '8:00 PM' },
    'sun': { open: '8:00 AM', close: '6:00 PM' }
  };

  // Day name mapping
  const dayNames = {
    'mon': 'Monday',
    'tue': 'Tuesday',
    'wed': 'Wednesday',
    'thu': 'Thursday',
    'fri': 'Friday',
    'sat': 'Saturday',
    'sun': 'Sunday'
  };

  // Function to generate operating hours element
  const generateOperatingHoursElement = (hours) => {
    return (
      <div className='max-w-2xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg'>
        <h2 className='text-3xl font-bold mb-6 text-gray-800'>Opening Hours</h2>
        <div className='space-y-3 text-lg'>
          {Object.entries(hours).map(([day, times]) => {
            const displayTime = times.close 
              ? `${times.open} - ${times.close}` 
              : times.open;
            
            return (
              <div 
                key={day} 
                className='flex justify-between items-center py-2 border-b border-gray-200'
              >
                <span className='font-semibold text-gray-700'>{dayNames[day]}</span>
                <span className='text-gray-600'>{displayTime}</span>
              </div>
            );
          })}
        </div>
        <p className='mt-4 text-sm text-gray-500 italic'>
          *Operating hours may vary during holidays
        </p>
      </div>
    );
  };

  return (
      <div className='flex flex-col align-middle p-4 text-center w-full justify-center'>
        <div>
          <h1>Home</h1>
          <p>Welcome to our website!</p>
        </div>
        
        {/* Operating Hours Section */}
        {generateOperatingHoursElement(operatingHours)}
      </div>
    );
}

export default Home;