/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    verbose: true,
    preset: 'ts-jest',
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
  };