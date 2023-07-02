export const getArgs = (args) => {
    return args.reduce((acc, item, index, array) => {
        if (index === 0 || index === 1) {
            return acc;
        }

        if (item.startsWith('-')) {
            if (array[index + 1] && !array[index + 1].startsWith('-')) {
                acc[item.substring(1)] = array[index + 1];
                return acc;
            } else {
                acc[item.substring(1)] = true;
                return acc;
            }
        }
        return acc;
    }, {})
}