import chalk from 'chalk';
import { getIcon } from './api.service.js';

export const printError = (error) => {
    console.log(`${chalk.redBright('ERROR:')} ${error}`);
};

export const printSuccess = (error) => {
    console.log(`${chalk.greenBright('SUCCESS:')} ${error}`);
}

export const printHelp = () => {
    console.log(`
${chalk.bgCyan('HELP: ')}
 empty - showing weather
 -s[CITY] - set city;
 -h - for help
 -t[API_KEY] - save token`);
};

export const printWeatherInfo = async (data) => {
    const { name, sys: { sunrise, sunset }, weather, main: { temp, feels_like, temp_min, temp_max } } = data;
    const { description, icon } = weather[0];
    const iconImage = await getIcon(icon);

    console.log(chalk.greenBright(`---------------${name}${iconImage}---------------`));
    console.log(`${chalk.blue('Description :')} ${description}`);
    console.log(`${chalk.blue('Temperature :')} ${temp}  ${chalk.blue('Feels Like :')} ${feels_like}`);
    console.log(`${chalk.blue('Min :')} ${temp_min}  ${chalk.red('Max :')} ${temp_max}`);
    console.log(`${chalk.blue('Sunrise :')} ${new Date(sunrise * 1000).toTimeString()} `);
    console.log(`${chalk.blue('Sunset :')} ${new Date(sunset * 1000).toTimeString()} `);
    console.log(chalk.greenBright('-------------------------------------'));
}