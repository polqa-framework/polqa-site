# Web Project (HTML/CSS/JS)

This project is a static website built with **HTML**, **CSS**, and **JavaScript**.  
To run it locally with **automatic reload**, we recommend using [live-server](https://www.npmjs.com/package/live-server).

---

## 🚀 Prerequisites

Make sure you have the following installed:

- **Node.js** and **npm**  
  You can install them on Fedora or Debian using:

### Fedora:
```bash
sudo dnf install -y nodejs npm
```

### Debian/Ubuntu:
```bash
sudo apt update
sudo apt install -y nodejs npm
```
⚙️ Installing live-server

After Node.js and npm are installed, install live-server globally:
```bash
sudo npm install -g live-server
```

Verify the installation with:
```bash
live-server --version
```
▶️ Running the Project
Clone this repository or download the project files.
Open a terminal and navigate to the project root folder (where index.html is located):
```bash
cd /path/to/your/project
```
Start the development server with:
```bash
live-server .
```
Your default browser should open automatically at:
http://127.0.0.1:8080



or
http://localhost:8080

🛑 Stopping the Server

To stop live-server, press in the terminal:

CTRL + C

💡 Additional Notes
live-server automatically detects changes in your files and reloads the page in real-time.
If the browser doesn’t open automatically, you can manually navigate to the URL.

