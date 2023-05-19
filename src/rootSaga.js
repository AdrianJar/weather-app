import { all } from "redux-saga/effects";
import { weatherSaga } from "./feature/WeatherApp/weatherAppSaga";

export default function* rootSaga() {
    yield all([
        weatherSaga(),
    ])
}