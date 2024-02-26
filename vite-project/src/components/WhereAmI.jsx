import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function WhereAmI() {
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [flagUrl, setFlagUrl] = useState(''); // Add a new state for the flag URL

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation("Your latitude: " + position.coords.latitude + ". Your longitude: " +  position.coords.longitude + ".");
      fetchCountry(position.coords.latitude, position.coords.longitude);
    });
  };

  const fetchCountry = (latitude, longitude) => {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
      .then(response => response.json())
      .then(data => {
        const countryCode = data.countryCode;
        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
          .then(response => response.json())
          .then(countryData => {
            const countryName = countryData[0].name.common;
            setCountry(countryName);
            setFlagUrl(countryData[0].flags.svg); // Set the flag URL
          })
          .catch(error => console.error("Error fetching country:", error));
      })
      .catch(error => console.error("Error fetching location:", error));
  };

  return (
    <div>
      <h3>Your location: </h3>
      <Button onClick={getLocation} variant="primary">Get location</Button>
      <div className="infolocation">
      <div>{location}</div>
      {country && (
        <div>
          <div>Your country: {country}</div>
        <div>{flagUrl && (<img className="locationimg" src={flagUrl} alt={`${country} flag`} width="50" />
            )}
            </div>
        </div>
      )}
      </div>
    </div>
  );
}