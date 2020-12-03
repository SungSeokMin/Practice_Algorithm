/*eslint quotes: ["error", "double", { "avoidEscape": true }]*/
module.exports = {
    "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es2021": true,
    "es6": true,
    },
    "plugins": ["prettier"],
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "parserOptions": {
      "ecmaVersion": 12,
    },
    "rules": {
      "prettier/prettier": 0,
      "semi": "error",
      "no-console": "error",
      "quotes": ["error", "single", { "avoidEscape": true}],
      "no-unexpected-multiline": "error",
    },
  };
  