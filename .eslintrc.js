module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true // Строка влияет на alias
      }
    }
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "import/no-unresolved": "error",// Строка влияет на alias в ts
    "import/no-extraneous-dependencies": 0,// Импорт из devDependencies
    "@rollup/plugin-replace": 0,//
    "@typescript-eslint/dot-notation": 0 // Разрешает обращаться к полю обьекта по ключу а не через точку
    // "no-unused-vars": "off"
  },
  ignorePatterns: [".eslintrc.js", "webpack.config.js"],
  parserOptions: {
    "project": "./tsconfig.json"
  },
  "overrides": [
    {
      "files": ["**/*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ]
};
