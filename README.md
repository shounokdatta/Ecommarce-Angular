#Ecommarce-Angular
A full-stack e-commerce application built with the MEAN stack (MongoDB, Express, Angular, and Node.js). This project features a modular architecture with a dedicated backend API and a responsive Angular frontend.

🚀 Live Demo
You can view the deployed version here: ecommarce-angular-2.onrender.com

🛠 Tech Stack
Frontend: Angular, TypeScript, HTML, CSS

Backend: Node.js, Express.js

Database: MongoDB (via Mongoose)

Authentication: Middleware-based (JWT or Session logic)

📁 Project Structure
The repository is split into two main directories:

backend/: Contains the Node.js/Express server, API Routes, controllers, and database modules.

frontend/: The Angular workspace containing components, services, and assets.

⚙️ Installation & Setup
1. Clone the repository
Bash
git clone https://github.com/shounokdatta/Ecommarce-Angular.git
cd Ecommarce-Angular
2. Backend Setup
Bash
cd backend
npm install
# Ensure you have your MongoDB URI configured in config/
npm start
3. Frontend Setup
Bash
cd ../frontend
npm install
ng serve
The app will be available at http://localhost:4200/
