import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weatherDetails: null,
        status: "initial",
    },
    reducers: {
        fetchWeather: () => ({
            status: "loading",
            weatherDetails: null,
        }),
        fetchWeatherSuccess: (_, {payload: weatherDetails }) => ({
            status: "success",
            weatherDetails,
        }),
        fetchWeatherError: () => ({
            status: "error",
            weatherDetails: null,
        }),
    },
});

export const {
    fetchWeather,
    fetchWeatherSuccess,
    fetchWeatherError
} = weatherSlice.actions;

const selectWeatherState = state => state.weather;

export const selectWeatherDetails = state => selectWeatherState(state).weatherDetails
export const selectWeatherStatus = state => selectWeatherState(state).status

export default weatherSlice.reducer;