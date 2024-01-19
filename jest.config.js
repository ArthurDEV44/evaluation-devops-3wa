module.exports = {
    testMatch: ['**/tests/**/*.test.ts'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/**/*test.ts"
    ]
};