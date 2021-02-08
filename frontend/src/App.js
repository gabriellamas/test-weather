import React, { useContext } from 'react';
import { format, fromUnixTime } from 'date-fns';
import { FiRefreshCw } from 'react-icons/fi';
import cloud from './Assets/cloud.svg';
import sun from './Assets/sol.svg';
import styles from './app.module.css';
import { WeatherContext } from './WeatherContext';
import Card from './Components/Card';

const App = () => {
  const { getWeather, weather, error, loading, coords } = useContext(
    WeatherContext,
  );

  if (coords !== false) {
    return (
      <>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.global}>
          <div className={styles.sunAndCloudArea}>
            <img src={cloud} className={styles.cloud} alt="Cloud Weather" />
            <img src={sun} className={styles.sun} alt="Sun Weather" />
          </div>
          {coords && weather ? (
            <>
              <h1 className={styles.title}>
                Weather!
                <span>Platform Builders</span>
              </h1>
              {loading ? (
                <h2>Carregando...</h2>
              ) : (
                <>
                  <Card>
                    <img
                      className={styles.iconWeather}
                      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt="Weather Icon"
                    />
                    <div>
                      <h2>{weather.main.temp} °C</h2>
                      <p>{`Sensação: ${weather.main.feels_like}`} °C</p>
                      <p>{`Região: ${weather.name}`}</p>
                    </div>
                  </Card>
                  <Card className={styles.containerSunriseAndSunset}>
                    <div>
                      <p>
                        {`Sol nasce: ${format(
                          fromUnixTime(weather.sys.sunrise),
                          'HH:mm',
                        )}`}
                      </p>
                      <p>
                        {`Sol se põe: ${format(
                          fromUnixTime(weather.sys.sunset),
                          'HH:mm',
                        )}`}
                      </p>
                    </div>
                    <div>
                      <p>{`Humidade: ${weather.main.humidity}%`}</p>
                      <p>{`Data: ${format(new Date(), 'dd/MM/yyyy')}`}</p>
                    </div>
                  </Card>
                </>
              )}
              <button
                type="button"
                className={styles.btnLinkStyle}
                disabled={!!loading}
                onClick={() => getWeather(coords.lat, coords.long)}
              >
                Atualizar
                <FiRefreshCw />
              </button>
            </>
          ) : (
            <>
              <h1 className={styles.title}>
                Weather!
                <span>Platform Builders</span>
              </h1>
              <p>Permita que nosso app utilize sua localização</p>
            </>
          )}
        </div>
      </>
    );
  }
  if (coords === false) {
    return (
      <div className={styles.global}>
        <h1>:(</h1>
        <p>
          Você negou compartilhar sua localização, para utilizar esse app
          precisamos disso, se quiser liberar procure pelas instruções de
          localização do seu navegador
        </p>
      </div>
    );
  }
  return null;
};

export default App;
