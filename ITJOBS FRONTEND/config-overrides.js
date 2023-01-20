// const { override, useBabelRc,addWebpackAlias} = require("customize-cra");
// const path = require("path");

// module.exports = function override(config, env) {
//     // Locate the existing CSS modules loader
    
//     const cssRule = config.module.rules.find(rule => 
//         rule.test && rule.test.toString() === '/\\.module\\.css$/'
//     );
//     if (cssRule && cssRule.use) {
//         // Add the MiniCssExtractPlugin loader to the existing CSS modules loader
//         cssRule.use.splice(2, 0, MiniCssExtractPlugin.loader);

//         // Add the MiniCssExtractPlugin to the plugins array
//         config.plugins.push(new MiniCssExtractPlugin({
//             filename: '[name].css',
//             chunkFilename: '[id].css'
//         }));

//         // Configure css-loader options for CSS modules
//         const cssLoader = cssRule.use.find(({ loader }) => loader === 'css-loader');
//         cssLoader.options = {
//             ...cssLoader.options,
//             modules: true,
//             localIdentName: '[name]__[local]___[hash:base64:5]'
//         };

//         // Ensure that style-loader is used to inject CSS into the page
//         cssRule.use[0] = 'style-loader';
//     }

//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useBabelRc();
//     addWebpackAlias({
//         ["~"]: path.resolve(__dirname, "src")
//     }); 
//     return config;
// };

const { override, useBabelRc,addWebpackPlugin} = require("customize-cra");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    addWebpackPlugin(new MiniCssExtractPlugin())
);