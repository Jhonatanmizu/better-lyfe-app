module.exports = {
  preset: '@react-native/jest-preset',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@shared/(.*)$': '<rootDir>/src/modules/shared/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@utils/(.*)$': '<rootDir>/src/modules/utils/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@services/(.*)$': '<rootDir>/src/modules/services/$1',
    '^@hooks/(.*)$': '<rootDir>/src/modules/hooks/$1',
    '^@navigation/(.*)$': '<rootDir>/src/navigation/$1',
    '^@config/(.*)$': '<rootDir>/src/modules/config/$1',
    '^@infrastructure/(.*)$': '<rootDir>/src/modules/infrastructure/$1',
    '^react-native-mmkv$': '<rootDir>/__mocks__/react-native-mmkv.ts',
    '^@env$': '<rootDir>/__mocks__/react-native-dotenv.ts',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@react-native-community)/)',
  ],
  setupFilesAfterEnv: ['./setup-jest.ts'],
  // Coverage configuration
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/**/__tests__/**/*',
    '!src/**/__mocks__/**/*',
    '!src/config/**/*',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  coverageReporters: ['lcov', 'text', 'text-summary'],
  coverageDirectory: '<rootDir>/coverage',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/android/',
    '<rootDir>/ios/',
    '<rootDir>/__mocks__/',
    '<rootDir>/__tests__/utils/',
    './src/modules/shared/test',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '.*\\.d\\.ts', // Ignore TypeScript declaration files
    './src/modules/shared/test',
    './src/modules/shared/components/AppWrapper.tsx',
  ],
};
