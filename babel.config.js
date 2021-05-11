const presets = [
    ['@babel/env', { // какой пресет использовать
        targets: { // какие версии браузеров поддерживать
            edge: '17',
            ie: '11',
            firefox: '50',
            chrome: '64',
            safari: '11.1'
        },

        // использовать полифиллы для браузеров из свойства target
        // по умолчанию babel использует поллифиллы библиотеки core-js
        useBuiltIns: "entry"
    }]
];

module.exports = { presets };

////////////////////////////////////////////////////////////////
// {
//     "presets": [
//     [
//         "@babel/env",
//         {
//             "targets": {
//                 "edge": "17",
//                 "ie": "11",
//                 "firefox": "60",
//                 "chrome": "67",
//                 "safari": "11.1"
//             },
//             "useBuiltIns": "entry",
//             "corejs": "3.6.5"
//         }
//     ]
// ],
//     "plugins": [
//     [
//         "@babel/plugin-proposal-class-properties"
//     ]
// ]
// }