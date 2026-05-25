module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
    testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/test.ts'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/*.test.ts',
        '!src/**/*.spec.ts',
        '!src/test.ts',
        '!src/cli.ts',
        '!src/examples/**',
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    coverageDirectory: 'coverage',
    verbose: true,
    moduleFileExtensions: ['ts', 'js', 'json'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
};
