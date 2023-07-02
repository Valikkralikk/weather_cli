import { promises } from 'fs';

export const getFileData = async (path) => {
    const file = await promises.readFile(path);
    return JSON.parse(file);
}