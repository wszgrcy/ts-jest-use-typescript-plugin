import type { InitialOptionsTsJest } from "ts-jest/dist/types";

const config: InitialOptionsTsJest = {
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  coverageProvider: "v8",

  moduleFileExtensions: ["js", "ts"],

  testMatch: ["**/test/**/*.ts"],

  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },

  globals: {
    "ts-jest": {
      astTransformers: {
        before: ["./plugin/transformer.ts"],
      },
    },
  },
};
export default config;
