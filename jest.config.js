module.exports = {
  transform: {
    '^.+\\.(jsx?|tsx?)$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`], // gatsby 파일에 transfile되지 않은 es6 code가 있어서 transform ignore
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/src/testUtils/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/src/testUtils/jest-extended.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
}
