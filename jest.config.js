const { defaults } = require('jest-config')

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  snapshotSerializers: ['enzyme-to-json/serializer']
}
