# Get starter a React JSX + lingui i18n App

***

## Create React App

    npm create-react-app my-app

### Move into the directory

    cd my-app

### Install the node modules

    npm install


> NOTE: you can run your app in this point.

***

## Edit the App component content

I want to add some content to be "translated", the main screen that shows:

    Edit src/App.js and save to reload.

    Learn React


must show:

    Edit src/App.js and save to reload.

    Learn React

    Select your language:

    (Select with lang options)


Then the code could be:

    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

            <p>Select your language:</p>
            <select>
                <option value="en">English</option>
                <option value="es">Spanish</option>
            </select>
          </header>
        </div>
      );
    }


> NOTE: you can run your app in this point. You must watch the main screen.


***

## Add dependencies / scripts

### package.json content:

    {
      "name": "react_jsx__langs_with_lingui",
      "version": "0.1.0",
      "private": true,
      "dependencies": {
        "@lingui/react": "next",
        "react": "^16.13.1",
        "react-dom": "^16.13.1",
        "react-scripts": "3.4.1"
      },
      "devDependencies": {
        "@testing-library/jest-dom": "^4.2.4",
        "@testing-library/react": "^9.5.0",
        "@testing-library/user-event": "^7.2.1",
        "@babel/core": "^7.9.0",
        "@lingui/cli": "next",
        "@lingui/loader": "next",
        "@lingui/macro": "next"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "add-locale": "lingui add-locale",
        "extract": "lingui extract",
        "compile": "lingui compile"
      },
      "eslintConfig": {
        "extends": "react-app"
      },
      "browserslist": {
        "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
        ],
        "development": [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
        ]
      }
    }


### Run the command:

    npm install

***

## Add lingui provider to the app

I going to add the provider in the "index.js" file.

### Imports:

    import { i18n } from "@lingui/core"
    import { I18nProvider } from "@lingui/react"


### JSX:

    ReactDOM.render(
        <React.StrictMode>
            <I18nProvider i18n={i18n}>
                <App />
            </I18nProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );


> NOTE: if you run the app, you must watch the same screen than before.

***

## Add the lingui configuration files

I going to use two languages in my app: *English* and *Spanish*.
I usually create a directory to put inside the necessary *lingui* files:

    mkdir i18n

In this directory I put for example the translations, but it's necessary
to put a main configuration file in the project root directory, will be
named as "lingui.config.js". This file contents:

    module.exports = {
        locales: ["EN", "ES"],
        catalogs: [
            {
                path: "src/i18n/locales/{locale}",
                include: ["src"],
            },
        ],
        format: "po",
        sourceLocale: "EN",
    }

> *NOTE: I have choose the format `po` for translations, it's also possible to use
`json` format.*


### Add additional configuration:

Let's go to create some extra configurations on "i18n/config.js":

    import { i18n } from "@lingui/core"
    import { en, es } from "make-plural/plurals" // node_modules


    i18n.loadLocaleData('EN', { plurals: en })
    i18n.loadLocaleData('ES', { plurals: es })

    export async function activate(locale)
    {
        console.log('activate() ---> ' + locale); // HACK:

        const { messages } = await import(
            /* webpackChunkName: "i18n-[index]" */
            `@lingui/loader!./locales/${locale}.po`
        )

        i18n.load(locale, messages)
        i18n.activate(locale)
    }

    const defaultLangCode = 'EN';
    activate(defaultLangCode)

***

## Add the macros to translate texts

### JSX macro: Trans

Imports the macro:

    import { Trans } from '@lingui/macro';


Changes JSX text elements, f.e. from:

    <p>
        Select your language:
    </p>

to:

    <p>
        <Trans>
            Select your language:
        </Trans>
    </p>


***

## Extract the translations

    npm run extract


Now, we must to have the files:

 - i18n/locales/EN.po
 - i18n/locales/ES.po

Inside, you have groups with something as:

    #: src/App.js:23
    msgid "Select your language:"
    msgstr "Select your language:"

By default the ID for the translation is the text, unless the JSX
element has a ID.
Translate the string labeled as "msgstr" in each file. My example has the
texts in English, I need to set the strings in the file "i18n/locales/ES.po".


## Add the functionality to the language selector

I use `activate()` from "i18n/config.js" to change the UI language.
This function will be called using a select with two options: English / Espanish.
When someone changes the selected language, two things will happen:

 1. `activate()` receive the language code and change the UI language.
 2. The selected language code is added to the *state* (allows
the *language selector* works properly).

<br>
The App component code:

    import React, { useState } from 'react';
    import logo from './logo.svg';
    import { Trans } from '@lingui/macro';
    import { activate, defaultLangCode } from './i18n/config.js';
    import './App.css';

    function App()
    {
      const [selectedLangCode, setSelectedLang] = useState(defaultLangCode);

      const selectLang = (langCode) =>
      {
        console.log('selectLang() -> ' + langCode);

        activate(langCode);
        if (langCode !== selectedLangCode) {
          setSelectedLang(langCode);
        }
      }

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <Trans>Edit <code>src/App.js</code> and save to reload.</Trans>
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Trans>Learn React</Trans>
            </a>

            <p><Trans>Select your language:</Trans></p>
            <select
              value={selectedLangCode}
              onChange={(event) => { selectLang(event.target.value) }}>
                  <option value="EN">English</option>
                  <option value="ES">Spanish</option>
            </select>
          </header>
        </div>
      );
    }

    export default App;


***

[Go to index](../../../README.md)
