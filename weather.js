#!/usr/bin/env node

import { getByKey, getForecast, saveCity, saveToken } from "./constrollers/index.js";
import { getArgs } from "./helpers/args.js";
import { logServices } from "./services/index.js";
import { TOKEN_DICTIONARY } from "./services/storage.service.js";

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        return logServices.printHelp()
    }
    if (args.s) {
        if (args.s !== true) {
            return saveCity(args.s);
        }
        return getByKey(TOKEN_DICTIONARY.CITY);
    }
    if (args.t) {
        if (args.t !== true) {
            return saveToken(args.t)
        }
        return getByKey(TOKEN_DICTIONARY.TOKEN);
    }
    return getForecast();
}

initCLI();