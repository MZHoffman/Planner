module.exports = {
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 0,
        "no-console": 0,
        "printWidth": 40
    },
    "plugins": [
        //'html',
        "prettier"
    ],



};