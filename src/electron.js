// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // Bật Node.js integration (cẩn thận khi dùng)
            contextIsolation: false // Bật tắt Context Isolation nếu cần
        },
        autoHideMenuBar: true,
    });

    // Load ứng dụng React (sau khi build)
    mainWindow.loadURL('http://localhost:3000'); // Chạy React server trước

    // Ẩn thanh menu
    Menu.setApplicationMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
