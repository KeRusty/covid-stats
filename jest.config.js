
'use strict';

module.exports = {
    'transform': {
        preset: 'jest-expo',
        transformIgnorePatterns: [
            'node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@unimodules/.*|jest-expo/.*|@expo(nent)?/.*|react-navigation|@react-navigation/.*|sentry-expo|native-base))',
        ],
        '.*': './jest/preprocessor.js',
    },
    'setupFiles': [
        './jest/setup.js',
    ],
    'timers': 'fake',
    'testRegex': '/__tests__/.*-test\\.js$',
    'testPathIgnorePatterns': [
        '/node_modules/',
        '<rootDir>/template',
        'Libraries/Renderer',
        'RNTester/e2e',
    ],
    'haste': {
        'defaultPlatform': 'ios',
        'platforms': [
            'ios',
            'android',
        ],
    },
    'unmockedModulePathPatterns': [
        'node_modules/react/',
        'Libraries/Renderer',
        'promise',
        'source-map',
        'fastpath',
        'denodeify',
        'fbjs',
    ],
    'testEnvironment': 'node',
    'collectCoverageFrom': [
        'Libraries/**/*.js',
    ],
    'coveragePathIgnorePatterns': [
        '/__tests__/',
        '/vendor/',
        '<rootDir>/Libraries/react-native/',
    ],
};
