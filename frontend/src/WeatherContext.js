import React, { useEffect, useState, createContext } from 'react';
import GET_WEATHER from './Api';

export const WeatherContext = createContext();

export const WeatherStorage = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [coords, setCoords] = useState(() => {
    if (window.localStorage.getItem('coords')) {
      return JSON.parse(window.localStorage.getItem('coords'));
    }
    return undefined;
  });

  const [weather, setWeather] = useState(() => {
    if (window.localStorage.getItem('weather')) {
      return JSON.parse(window.localStorage.getItem('weather'));
    }
    return undefined;
  });

  const getWeather = async (lat, long) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      const { url, options } = GET_WEATHER(lat, long);
      response = await fetch(url, options);
      if (response.ok) {
        json = await response.json();
        window.localStorage.setItem('weather', JSON.stringify(json));
        setWeather(json);
      }
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function getLocationAndWeather() {
      if (!navigator.geolocation) {
        setError('Geolocation is not supported by your browser');
      } else if (!coords) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            window.localStorage.setItem(
              'coords',
              JSON.stringify({ lat, long }),
            );
            setCoords({ lat, long });
            getWeather(lat, long);
          },
          (responseError) => {
            setCoords(false);
            // eslint-disable-next-line
            console.log(responseError);
          },
        );
      } else {
        getWeather(coords.lat, coords.long);
      }
    }
    getLocationAndWeather();
  }, [coords]);

  return (
    <WeatherContext.Provider
      value={{ getWeather, error, loading, weather, coords }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
