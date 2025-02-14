module.exports = function (api) {
    api.cache.forever();

    const presets = [
        ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": 2
        }]
    ];

    const plugins = [
        "@babel/plugin-proposal-optional-chaining"
    ];

    return {
        presets,
        plugins
    };
}