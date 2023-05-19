import React, { useEffect } from 'react'
import { Wrapper } from './styled'
import Footer from './Footer'
import Weather from './Weather'
import { useDispatch } from 'react-redux'
import { fetchWeather } from '../weatherAppSlice'

const WeatherApp = () => {
    
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchWeather());
    }, [dispatch]);
    
    return (
        <Wrapper>
            <Weather />
            <Footer />
        </Wrapper>
    )
}

export default WeatherApp