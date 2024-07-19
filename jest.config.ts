export default {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },

    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^.+\\.svg$": "jest-transformer-svg",
    },

    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
    collectCoverage: true,
    coverageDirectory: "<rootDir>/test/coverage",
    reporters: [
        "default",
        [
            "jest-html-reporter",
            {
                pageTitle: 'Test Report',
                outputPath: './test/report.html'
            }
        ],
    ]
};