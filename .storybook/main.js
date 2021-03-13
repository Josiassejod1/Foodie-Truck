module.exports = {
    webpackFinal: (config) => {
        const newCfg = {
            ...config,
            module: {
                ...config.module,
                rules: [
                    // Get rid of catch-all loader here, which is usually last
                    ...getYourProjectsWebpackCfg().module.rules.slice(0, -1),
                    { /*reinsert the modified catch all loader here, like in my issue description above */ }
                ]
            }
        };
        return newCfg;
    },
};