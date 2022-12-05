/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-05 17:25:22
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-05 17:36:27
 * @FilePath: /react18-webpack-ts/craco.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// craco.config.js
const path = require('path');
const CracoLessPlugin = require('craco-less');
const { loaderByName } = require('@craco/craco');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    babel: {
        // 按需导入
        plugins: [
            [
                'import',
                {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    //style为true即是less,设置了主题自定义需要改为true
                    style: 'css',
                },
            ],
        ],
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                modifyLessModuleRule(lessModuleRule, context) {
                    // Configure the file suffix
                    lessModuleRule.test = /\.module.less$/;

                    // Configure the generated local ident name.
                    const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'));
                    cssLoader.options.modules = {
                        localIdentName: '[local]_[hash:base64:5]',
                    };
                    return lessModuleRule;
                },
                modifyLessRule(lessRule, context) {
                    // You have to exclude these file suffixes first,
                    // if you want to modify the less module's suffix
                    lessRule.exclude = /\.less$/;
                    return lessRule;
                },
            },
        },
    ],
};
