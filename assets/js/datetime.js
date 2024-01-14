document.addEventListener('DOMContentLoaded', (event) => {
  function updateTimes() {
    const now = new Date();

    const timeFormats = {
      'San Francisco': { locale: 'en-US', options: { timeZone: 'America/Los_Angeles', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: undefined } },
      'London': { locale: 'en-GB', options: { timeZone: 'Europe/London', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: undefined } },
      'New Delhi': { locale: 'en-IN', options: { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: undefined } },
      'Beijing': { locale: 'zh-CN', options: { timeZone: 'Asia/Shanghai', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: undefined } },
      'Seoul': { locale: 'ko-KR', options: { timeZone: 'Asia/Seoul', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: undefined } },
      'Sydney': { locale: 'en-AU', options:{ timeZone: 'Australia/Sydney', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: undefined } },
      'New York': { locale: 'en-US', options: { timeZone: 'America/New_York', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: undefined } }
      };

    for (const [city, { locale, options }] of Object.entries(timeFormats)) {
      try {
        const cityTime = new Date().toLocaleString(locale, { timeZone: options.timeZone, ...options });
        const hour = new Date().toLocaleString(locale, { timeZone: options.timeZone, hour: 'numeric', hour12: false });
        let icon = '🌙'; // Default icon for late night
        
        if (hour >= 5 && hour < 12) {
          icon = '🌅'; // Morning icon
        } else if (hour >= 12 && hour < 17) {
          icon = '☀️'; // Afternoon icon
        } else if (hour >= 17 && hour < 22) {
          icon = '🌇'; // Evening icon
        }

        document.getElementById(`time-${city.replace(/ /g, '')}`).innerHTML = `${city} Time: ${icon} ${cityTime}`;
      } catch (e) {
        console.error(`Error with locale ${locale} and options`, options, e);
        document.getElementById(`time-${city.replace(/ /g, '')}`).innerHTML = `${city} Time: 🌙 Invalid Date`;
      }
    }
  }

  // Update the time every minute
  updateTimes();
  setInterval(updateTimes, 60000);
});
