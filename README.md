A simple template for Electron app development using React and TypeScript.

## :scroll: Setup

Install [Node.js](https://nodejs.org/en/). If your project uses native Node modules, it's important to have the proper build tools in order to compile them. If your project doesn't need native Node modules, ignore the following instructions on compiling.

#### Compiling on Windows

On Windows you need the [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools). Open `PowerShell` with admin rights and execute the following command:

```
npm install --global windows-build-tools
```

**Note:** this will install the Visual Studio 2017 build tools. Depending on which native Node module you are using, you may need the 2015 version instead. Simply append the parameter `--vs2015` if that is the case.

Installing the windows build tools will take some time, so wait patiently.

#### Compiling on macOS and Linux

I think it should just work.


### Installation

Open up a terminal and clone the project with [Git](https://git-scm.com/), `cd` into the project root folder and install all dependencies:

```
git clone https://github.com/hikikones/minimal-electron-react-webpack-boilerplate.git my-project
cd my-project
npm install
```

If you have a native module and get an error about some Python function not working during dependency installation, you may have to install [Python **2**](https://www.python.org/downloads/) with the `PATH` environment variable. Then remove the `node_modules` folder and install all dependencies again with `npm install`.

## :wrench: Usage

The following commands are used for development and building:

| Node.js command | Description |
|-----------------|-------------|
| `npm start` | Builds the project in development mode and launches `Electron`. |
| `npm run package` | Generates a portable application in the `dist` folder. |
| `npm run publish` | Generates a distributable application in the `dist` folder. |


## :bulb: Publishing

This repository uses [Github Actions](https://github.com/features/actions) for the build pipeline in order to create a distributable installation file for Windows, macOS and Ubuntu. The configuration file is found in `.github/workflows/build.yml`. The build is triggered whenever a [semantic](https://semver.org/) release tag of the form `v*.*.*` is created. The version also needs to be reflected in the `package.json` file. That is, say you have pushed the latest commit to the `master` branch that completes version `v1.0.0` of your application, and the version is reflected in `package.json`, then the following two commands will trigger the build:

```
git tag v1.0.0
git push --tags
```

The build workflow from `.github/workflows/build.yml` will then initiate, creating a release in draft mode on the repository, building the application on each OS and finally uploading each resulting installation file to the newly created release. You can then review the release before deciding to publish it.