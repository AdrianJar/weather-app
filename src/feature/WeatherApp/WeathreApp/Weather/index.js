import React from 'react'
import { useSelector } from 'react-redux'
import { selectWeatherDetails } from '../../weatherAppSlice';
import { City, Icon, Temp, WeatherWrapper, Wrapper, Details } from './styled';

const Weather = () => {

    const data = useSelector(selectWeatherDetails)
    const windSpeed = data.wind.speed*3.6;

    return (
        <Wrapper>
            <WeatherWrapper>
                <Icon>Sun</Icon>
                <Details>
                    <City>{data.name}</City>
                    <Temp>{data.main.temp.toFixed(1)}°C</Temp>
                </Details>
            </WeatherWrapper>


            <h2>Feels like {data.main.feels_like.toFixed(1)}°C</h2>
            <h2>{data.main.humidity}% humidity</h2>
            <h2>{windSpeed.toFixed(1)}KM/H</h2>
        </Wrapper>
    )
}

export default Weather