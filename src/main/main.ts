import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";

const isDev = process.env.NODE_ENV === "development";

let mainWindow: Electron.BrowserWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		show: isDev,
		webPreferences: {
			nodeIntegration: true,
			spellcheck: false,
			webSecurity: !isDev
		}
	});

	mainWindow.loadFile(`${__dirname}/index.html`);

	if (isDev) {
		mainWindow.webContents.openDevTools();
	} else {
		mainWindow.setMenu(null);
		mainWindow.on("ready-to-show", () => {
			mainWindow.show();
		});
	}
}

app.on("ready", createWindow);

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow();
	}
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
	  app.quit();
	}
});