import { homedir } from 'os';
import { dirname, join } from 'path';
import { promises } from 'fs';

import { getFileData } from '../helpers/files.js';

export const TOKEN_DICTIONARY = {
    TOKEN: 'token',
    CITY: 'city',
    RU: 'ru',
    METRIC: 'metric',
}

const filePath = join(homedir(), 'weatherCLI', 'weatherData.json')

export const getKeyValue = async (key) => {
    if (await isExist(filePath)) {
        const data = await getFileData(filePath)
        return data[key];
    }
    return;
}

const isExist = async (path) => {
    try {
        await promises.stat(path);
        return true;
    } catch (error) {
        return false;
    }
}

export const saveKeyValue = async (key, value) => {
    let data = {};

    if (await isExist(filePath)) {
        data = await getFileData(filePath);
    } else {
        await promises.mkdir(dirname(filePath));
    }

    data[key] = value;

    await promises.writeFile(filePath, JSON.stringify(data));
};

