// module.exports = {
//   setupFilesAfterEnv: ['./setupTests.js'],
//   globals: { TextEncoder: TextEncoder, TextDecoder: TextDecoder },
// testEnvironment: "jest-environment-jsdom"
// };

module.exports = {
  setupFiles: ['./jest.polyfills.js'],
  setupFilesAfterEnv: ['./setupTests.js'],
    testEnvironment: "jest-environment-jsdom",

}