import React, { useState, useEffect, useRef } from 'react'

const Home = () => {
  const [bgOpacity, setBgOpacity] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    // The scrollable element is the <main> parent, not window
    const scrollParent = containerRef.current?.closest('main');
    if (!scrollParent) return;

    const handleScroll = () => {
      const scrollY = scrollParent.scrollTop;
      const fadeDistance = 600; // pixels to fully fade out
      const opacity = Math.max(1 - scrollY / fadeDistance, 0);
      setBgOpacity(opacity);
    };

    scrollParent.addEventListener('scroll', handleScroll);
    return () => scrollParent.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className='bg-green-50 border-l-4 border-green-600 rounded-lg p-6 max-w-2xl mx-auto mt-12'>
        <h2 className='text-2xl font-bold text-green-800 mb-4'>Opening Hours</h2>
        <div className='space-y-3 text-lg'>
          {Object.entries(hours).map(([day, times]) => {
            const displayTime = times.close 
              ? `${times.open} - ${times.close}` 
              : times.open;
            
            return (
              <div 
                key={day} 
                className='flex justify-between items-center py-2 border-b border-green-200'
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
      <div ref={containerRef} className='flex flex-col align-middle text-center w-full justify-center'>
        {/* Hero image that fades on scroll */}
        <div className='relative w-full -mt-4 -mx-4' style={{ width: 'calc(100% + 2rem)' }}>
          <img
            src={`${process.env.PUBLIC_URL}/GarrihysEdited-05.jpg`}
            alt="Garrihy's Aran View"
            className='w-full object-cover'
            style={{
              opacity: bgOpacity,
              transition: 'opacity 0.05s linear',
              maxHeight: '80vh',
            }}
          />
          
        </div>
        
        {/* Operating Hours Section */}
        <div className='p-4'>
          {generateOperatingHoursElement(operatingHours)}
        </div>
      </div>
    );
}

export default Home;