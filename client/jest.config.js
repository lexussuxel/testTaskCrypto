/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  "transform": {
      '\\.svg$': '<rootDir>/jest-svg-transformer.js',
  },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
