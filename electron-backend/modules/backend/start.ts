/*
 * Initialize library beyondJS backend server
 */
import { app, BrowserWindow } from "electron";
import { listen } from "@beyond-js/backend/listen";
console.log(400);
/**
 * http port
 */
listen(6581);

const createWindow = () => {
	const window = new BrowserWindow({
		width: 800,
		height: 800,
		webPreferences: {
			nodeIntegration: true,
		},
	});
	window.loadURL("http://localhost:2200/");
};

app.whenReady().then(() => {
	createWindow();
});
