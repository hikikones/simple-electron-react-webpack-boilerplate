## Setup

Install [Node.js](https://nodejs.org/en/). If your project uses native Node modules, it's important to have the proper build tools in order to compile them. If your project doesn't need native Node modules, ignore the following instructions on compiling.

### Compiling on Windows

On Windows you need the [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools). Open `PowerShell` with admin rights and execute the following command:

```
npm install --global windows-build-tools
```

**Note:** this will install the Visual Studio 2017 build tools. Depending on which native Node module you are using, you may need the 2015 version instead. Simply append the parameter `--vs2015` if that is the case.

Installing the windows build tools will take some time, so wait patiently.

### Compiling on macOS

### Compiling on Linux

## Installation

Open a terminal and clone the project with [Git](https://git-scm.com/), and then `cd` into the project root folder where the `package.json` file is to install all dependencies:

```
git clone https://github.com/hikikones/minimal-electron-react-webpack-boilerplate.git my-project
cd my-project
npm install
```

If you have a native module and get an error about some Python function not working during dependency installation, you may have to install [Python **2**](https://www.python.org/downloads/) with the `PATH` environment variable. Then remove the `node_modules` folder and install all dependencies again with `npm install`.

## Usage

The following commands are used for development and building:

| Command               | Description                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm run dev`         | Builds the project in development mode, starts a server and opens it in Electron. Live reload is supported in the renderer process.        |
| `npm run pack`        | Generates a package directory in `dist` folder without packaging it so you can open the program without installing it. Useful for testing. |
| `npm run dist`        | Generates a package in distributable format in the `dist` folder.                                                                          |
| `npm run postinstall` | Compiles native dependencies. This is automatically run when you install all dependencies with `npm install`.                              |
