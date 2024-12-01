

export default {
  testEnvironment: 'jsdom', 
  setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest', 
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    "/node_modules/(?!@mdi)", 
  ],
};
