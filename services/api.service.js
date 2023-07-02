import axios from 'axios';
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';

export const getIcon = async (icon) => {
    switch (icon.slice(0, -1)) {
        case '01':
            return "☀️";

        case '02':
            return "🌥️";

        case '03':
            return "☁️";

        case '04':
            return "☁️";

        case '09':
            return "🌧️";

        case '10':
            return "🌦️";

        case '11':
            return "🌩️";

        case '13':
            return "❄️";

        case '50':
            return "🌫️";
    }

}

export const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.TOKEN);
    if (!token) {
        throw new Error('Empty token. Set token by -t [API_KEY]');
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: TOKEN_DICTIONARY.RU,
            units: TOKEN_DICTIONARY.METRIC,

        }
    });

    return data;
}