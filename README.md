# Setup

Install [Node](https://nodejs.org/en/). If your project wants to use native modules, then they need to be compiled. If not, ignore the following instructions on compiling.

### Compiling on Windows

Open `PowerShell` with admin rights and execute the following command:

```
npm install --vs2015 -g windows-build-tools
```

It will take some time, so wait patiently.

### Compiling on macOS

### Compiling on Linux

# Usage

Open a terminal and `cd` into the project root folder where the `package.json` file is. Install all dependencies with

```
npm install
```

If you have a native module and get an error about some Python function not working during dependency installation, you may have to install [Python **2**](https://www.python.org/downloads/) with the `PATH` environment variable. Then remove the `node_modules` folder and install all dependencies again with `npm install`.

The following commands are used for development and building:

| Command               | Description                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm run dev`         | Builds the project in development mode and opens it in Electron.                                                                           |
| `npm run build`       | Builds the project in production mode.                                                                                                     |
| `npm run pack`        | Generates a package directory in `dist` folder without packaging it so you can open the program without installing it. Useful for testing. |
| `npm run dist`        | Generates a package in distributable format in the `dist` folder.                                                                          |
| `npm run postinstall` | Compiles native dependencies. This is automatically run when you install all dependencies with `npm install`.                              |
