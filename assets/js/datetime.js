document.addEventListener('DOMContentLoaded', (event) => {
  function updateTimes() {
    const now = new Date();

    const timeFormats = {
      'San Francisco': { locale: 'en-US', options: { timeZone: 'America/Los_Angeles' } },
      'London': { locale: 'en-GB', options: { timeZone: 'Europe/London' } },
      'New Delhi': { locale: 'en-IN', options: { timeZone: 'Asia/Kolkata' } },
      // 'Beijing': { locale: 'zh-CN', options: { timeZone: 'Asia/Shanghai' } },
      // 'Taipei': {  locale: 'zh-TW',  options: { timeZone: 'Asia/Taipei' }},
      // 'Seoul': { locale: 'ko-KR', options: { timeZone: 'Asia/Seoul' } },
      'Sydney': { locale: 'en-AU', options: { timeZone: 'Australia/Sydney' } },
      'New York': { locale: 'en-US', options: { timeZone: 'America/New_York' } },
      'Nairobi': { locale: 'en-KE', options: { timeZone: 'Africa/Nairobi' } },
      'Pretoria': { locale: 'en-ZA', options: { timeZone: 'Africa/Johannesburg' } },
      // 'Rome': { locale: 'it-IT', options: { timeZone: 'Europe/Rome' } },
      // 'Paris': { locale: 'fr-FR', options: { timeZone: 'Europe/Paris' } },
      // 'Cairo': { locale: 'ar-EG', options: { timeZone: 'Africa/Cairo' } },
      // 'Brasilia': { locale: 'pt-BR', options: { timeZone: 'America/Sao_Paulo' } },
      // 'Mexico City': { locale: 'es-MX', options: { timeZone: 'America/Mexico_City' } },
      // 'Tokyo': { locale: 'ja-JP', options: { timeZone: 'Asia/Tokyo' } },
      'Singapore': { locale: 'en-SG', options: { timeZone: 'Asia/Singapore' } },
    };

    for (const [city, { locale, options }] of Object.entries(timeFormats)) {
      try {
 
        const cityTimeOptions = {
          ...options,
          weekday: 'long',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        };
        const cityTime = new Date().toLocaleString(locale, cityTimeOptions);
        const hour = new Date().toLocaleString(locale, { timeZone: options.timeZone, hour: 'numeric', hour12: false });
        const hourInt = parseInt(hour, 10); 
        let icon = '🌙'; // Default icon for late night
        if (hourInt >= 5 && hourInt < 12) {
          icon = '🌅'; // Morning icon
        } else if (hourInt >= 12 && hourInt < 17) {
          icon = '☀️'; // Afternoon icon
        } else if (hourInt >= 17 && hourInt < 22) {
          icon = '🌇'; // Evening icon
        }
        let formattedCityName = city.replace(/ /g, '');
        document.getElementById(`time-${city.replace(/ /g, '')}`).innerHTML = `<b>${city}</b> Time: ${icon} ${cityTime}`;
      } catch (e) {
        console.error(`Error with locale ${locale} and options`, cityTimeOptions, e);
        document.getElementById(`time-${formattedCityName}`).innerHTML = `<b>${city}</b> Time: 🌙 Invalid Date`;
      }
    }
  }

  // Update the time every minute
  updateTimes();
  setInterval(updateTimes, 1000);
});



