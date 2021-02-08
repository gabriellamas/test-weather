function GET_WEATHER(lat, long) {
  return {
    url: `http://localhost:3333/weather?lat=${lat}&long=${long}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export default GET_WEATHER;
