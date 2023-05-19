import { takeLatest, delay, call, put } from "redux-saga/effects";
import { fetchWeather, fetchWeatherError, fetchWeatherSuccess } from "./weatherAppSlice";
import axios from "axios";

export const getWeather = () =>
    axios.get(`${"http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d7edc521431838da1601cbfc37f26eab&units=metric"}`)
        .then(response => response.data);

const loadingDelay = 2000;

function* fetchWeatherHandler() {
    try {
        yield delay(loadingDelay);
        const weather = yield call(getWeather);
        console.log(weather)
        yield put(fetchWeatherSuccess(weather))
    } catch (error) {
        yield put(fetchWeatherError())
    }
}

export function* weatherSaga() {
    yield takeLatest(fetchWeather.type, fetchWeatherHandler);
}