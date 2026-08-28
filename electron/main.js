const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 850,
    minWidth: 960,
    minHeight: 650,
    title: 'Nihongo Master - Học Tiếng Nhật Từ 0 Đến N3',
    icon: path.join(__dirname, '../web/favicon.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      spellcheck: false
    },
    show: false,
    backgroundColor: '#f8fafc'
  });

  // Load the web app
  mainWindow.loadFile(path.join(__dirname, '../web/index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Handle external links to open in default browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:') || url.startsWith('http:')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Custom Application Menu
  const template = [
    {
      label: 'Ứng Dụng',
      submenu: [
        { label: 'Tải lại trang', role: 'reload', accelerator: 'CmdOrCtrl+R' },
        { label: 'Toàn màn hình', role: 'togglefullscreen', accelerator: 'F11' },
        { type: 'separator' },
        { label: 'Thoát', role: 'quit', accelerator: 'CmdOrCtrl+Q' }
      ]
    },
    {
      label: 'Chỉnh Sửa',
      submenu: [
        { label: 'Hoàn tác', role: 'undo' },
        { label: 'Làm lại', role: 'redo' },
        { type: 'separator' },
        { label: 'Cắt', role: 'cut' },
        { label: 'Sao chép', role: 'copy' },
        { label: 'Dán', role: 'paste' },
        { label: 'Chọn tất cả', role: 'selectAll' }
      ]
    },
    {
      label: 'Trợ Giúp',
      submenu: [
        {
          label: 'Mã nguồn GitHub',
          click: async () => {
            await shell.openExternal('https://github.com/methanol-dev/web-study-jp');
          }
        },
        {
          label: 'Giới thiệu về Nihongo Master',
          click: () => {
            const { dialog } = require('electron');
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'Về Nihongo Master',
              message: '🌸 Nihongo Master v1.0.0',
              detail: 'Nền tảng tự học tiếng Nhật từ 0 đến N3 tích hợp điểm danh và flashcard.\nPhát triển bởi meth.'
            });
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
