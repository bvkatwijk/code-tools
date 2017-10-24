module.exports = function (config) {
  config.set({

    logLevel: 'trace',

    files: [
      'src/app/**/*.ts',
      'src/app/**/*.spec.ts',
      '!src/app/**/*.component.ts',
      '!src/app/**/*.component.spec.ts',
      '!src/app/app.module.ts',
      '!e2e/**/*',
      '!src/main.ts',
      '!src/polyfills.ts',
      '!src/test.ts',
      '!src/typings.d.ts',
      '!src/environments/**/*',
      'node_modules',
    ],
    mutate: [
      'src/app/**/*.ts',
      '!src/app/**/*.spec.ts',
      '!src/app/**/*.component.ts',
      '!src/app/**/*.component.spec.ts',
      '!src/app/app.module.ts'
    ],

    testRunner: "karma",
    testFramework: "jasmine",
    reporter: ['progress', 'html'],
    karmaConfig: {
      frameworks: ['jasmine', 'commonjs'],
      browsers: ['Chrome'],
      preprocessors: {
        '**/*.js': ['commonjs']
      }
    },

    mutator: "typescript",
    transpilers: ["typescript"],
    tsconfigFile: 'stryker.tsconfig.json',

    reporter: ["clear-text", "progress"],
    coverageAnalysis: "off",
    plugins: [
      'stryker-karma-runner',
      'stryker-jasmine',
      'stryker-typescript',
      'stryker-html-reporter',
      'karma-jasmine',
      'karma-commonjs',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-coverage-istanbul-reporter'
    ],

  });

};
