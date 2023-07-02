import { getWeather } from "../services/api.service.js";
import { logServices } from "../services/index.js";
import { TOKEN_DICTIONARY, getKeyValue, saveKeyValue } from "../services/storage.service.js";

export const saveToken = async (token) => {
    try {
        await saveKeyValue(TOKEN_DICTIONARY.TOKEN, token);
        logServices.printSuccess('Token saved');
    } catch (error) {
        logServices.printError(error.message);
    }
}

export const getByKey = async (key) => {
    try {
        const token = await getKeyValue(key);
        if (token) {
            logServices.printSuccess(`${key} ${token}`);
        } else {
            throw new Error('Token is empty');
        }
    } catch (error) {
        logServices.printError(error.message);
    }
}

export const saveCity = async (token) => {
    try {
        await saveKeyValue(TOKEN_DICTIONARY.CITY, token);
        logServices.printSuccess('City saved');
    } catch (error) {
        logServices.printError(error.message);
    }
}

export const getForecast = async () => {
    try {
        const city = await getKeyValue(TOKEN_DICTIONARY.CITY);
        console.log('city: ', city);
        if (!city) {
            throw new Error('Set city by -s[CITY]');
        }
        const weather = await getWeather(city);
        logServices.printWeatherInfo(weather);
    }
    catch (err) {
        if (err?.response?.status == 404) {
            logServices.printError('City incorrect');
        } else if (err?.response?.status == 401) {
            logServices.printError('Token incorrect');
        } else {
            logServices.printError(err.message);
        }
    }
}