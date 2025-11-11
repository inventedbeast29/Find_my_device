# Real-Time Device Tracking

A **real-time device tracking system** built with **Node.js, Socket.IO, and Leaflet.js**.This project allows multiple devices to share their live locations on an interactive map and now includes **Geo-fencing** — a virtual boundary that triggers alerts when a device enters or leaves a defined area.


---

## Features

- 🌍 Live location tracking on a map
- 👥 Track multiple devices simultaneously
- ⚡ Real-time updates using WebSockets (Socket.IO)
- 🖥️ Interactive and responsive front-end with **Leaflet.js** and **Bootstrap**
- 🛠 Event-driven architecture for instant updates
-  🧭 **Geo-fencing support** to detect if a user is inside or outside a defined radius  

---

## Tech Stack

- **Backend:** Node.js, Express.js, Socket.IO
- **Frontend:** HTML, CSS, Bootstrap, Leaflet.js
- **Real-time Communication:** Socket.IO (WebSockets)
- **Geolocation:** Browser Geolocation API
-  **Geo-fencing:**  Geolib Library 


---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/device-tracking.git
cd device-tracking

Install dependencies:

npm install


Run the server:

node server.js


Open the project in your browser:

http://localhost:1111

**Usage**

On page load, the app requests your location.

Your location appears as “You” on the map.

Locations of other connected devices appear as “Other” markers.

The map updates in real-time as devices move.

A Geo-fence (red boundary) is drawn on the map.

The server checks if your device is inside the defined area:

The app can trigger alerts when a device enters the geo-fence zone.

**Future Enhancements**

Device location history

Mobile-friendly UI

🔐User authentication for secure tracking

**Contributing**

Contributions are welcome! Feel free to submit a pull request or open an issue.

Author
Abhinav Rai

**## Find the preview**

https://www.linkedin.com/posts/abhinavrai05_nodejs-socketio-leafletjs-activity-7380659699219648512-1tP9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgW0iIBZe-eSMAPfAychDspxNSnbqWWnoE


🌐 Now featuring live Geo-fencing — monitor, track, and visualize device movement with precision!
