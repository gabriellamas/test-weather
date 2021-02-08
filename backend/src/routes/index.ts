import { Router, Request, Response } from 'express';
import axios from 'axios';

const routes = Router();

routes.get('/weather', (request: Request, response: Response) => {
  const { lat, long } = request.query;

  async function getWeather(latitude: string, longitude: string) {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8d7cb7bafc4fc4c20910a589f5647d8d&units=metric`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(responseGet => response.send(responseGet.data))
      .catch(err => {
        response.json(err);
      });
  }

  getWeather(lat, long);
});

export default routes;
