import { app, BrowserWindow } from "electron";
const createWindow = () => {
	const window = new BrowserWindow({ width: 800, height: 800 });
	window.loadURL("http://localhost:2200/");
};

app.whenReady().then(() => {
	createWindow();
});
