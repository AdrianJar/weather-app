import React, { useEffect } from 'react'
import { Wrapper } from './styled'
import Footer from './Footer'
import Weather from './Weather'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, selectWeatherStatus } from '../weatherAppSlice'
import Input from './Input'

const WeatherApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    const status = useSelector(selectWeatherStatus);

    switch (status) {
        case "initial":
            return null;

        case "loading":
            return null;

        case "error":
            return null;

        case "success":
            return (
                <Wrapper>
                    <Input />
                    <Weather />
                    <Footer />
                </Wrapper>
            )
        default:
            throw new Error(`incorrect status: ${status}`);
    }
}

export default WeatherApp