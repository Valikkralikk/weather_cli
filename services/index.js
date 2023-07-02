import { printError, printSuccess, printHelp, printWeatherInfo } from "./log.service.js";
import { saveKeyValue } from "./storage.service.js";

export const logServices = {
    printError, printSuccess, printHelp, printWeatherInfo
}

export const storageServices = {
    saveKeyValue
}