# 📋 Task Manager — Full-Stack Task & Team Management System

A modern, full-stack Task Management application built with the **MERN Stack** (MongoDB, Express, React, Node.js), powered by **Vite** and styled with **Tailwind CSS**. Designed for teams and organizations to streamline project workflows, track task progress, assign members, and monitor productivity with role-based access control.

---

## 🚀 Key Features

### 👑 Admin Features
- **Interactive Analytics Dashboard**: Real-time KPI summary cards (Total Tasks, Pending, Completed, Overdue) and graphical charts (Status Distribution & Priority Levels using Recharts).
- **Task Creation & Management**:
  - Full CRUD operations on tasks.
  - Multi-member assignment with searchable member selection modal.
  - Priority levels (*Low*, *Medium*, *High*) and deadline scheduling.
  - Dynamic interactive TODO checklists with automated progress calculation.
  - File attachments support.
- **Team Management**:
  - View all registered members, their active assignments, and completion rates.
  - Role-based registration with secure Admin Invite Tokens.
- **Report Exporting**: Download detailed task and team performance reports directly as Excel spreadsheets (`.xlsx`).

### 👤 Member / User Features
- **Personalized User Dashboard**: Overview of tasks assigned specifically to the logged-in user.
- **My Tasks View**: Filterable task cards categorized by *All*, *Pending*, *In Progress*, and *Completed*.
- **Task Detail & Checklist Tracking**:
  - Interactive checklists where checking items off automatically updates overall task progress (0% - 100%) and updates status to *In Progress* or *Completed*.
  - Access to task descriptions, due dates, and external attachment links.

### 🎨 UI / UX Highlights
- **Smart Avatar System**: Clean fallback avatar with colorful backgrounds and user initials for members without uploaded profile images.
- **Responsive Layout**: Optimized for desktop and mobile viewports with collapsible sidebar navigation and modern toast notifications.
- **Secure Authentication**: JWT-based stateless authentication with password hashing via `bcryptjs` and role-restricted client routes.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Bootstrap utilities
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Icons & UI**: [React Icons](https://react-icons.github.io/react-icons/) (Lucide, Heroicons, FontAwesome)
- **HTTP Client**: [Axios](https://axios-http.com/) with interceptors
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Date Handling**: [Moment.js](https://momentjs.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose ODM](https://mongoosejs.com/)
- **Authentication**: [JSON Web Tokens (JWT)](https://jwt.io/) & [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- **File Uploads**: [Multer](https://github.com/expressjs/multer)
- **Reporting**: [ExcelJS](https://github.com/exceljs/exceljs)
- **Environment Management**: [dotenv](https://github.com/motdotla/dotenv) & [CORS](https://github.com/expressjs/cors)

---

## 📁 Project Structure

```text
TaskManager/
├── backend/
│   ├── config/             # Database connection (MongoDB)
│   ├── controllers/        # Route controllers (Auth, Tasks, Users, Reports)
│   ├── middlewares/        # Auth verification & Multer file uploads
│   ├── models/             # Mongoose schemas (User, Task)
│   ├── routes/             # Express API routes
│   ├── uploads/            # Static uploaded files and avatars
│   ├── server.js           # Express app entry point
│   ├── package.json
│   └── .env                # Backend environment configuration
│
└── frontend/
    └── Task-Manager/
        ├── public/         # Static public assets
        ├── src/
        │   ├── assets/     # Images and SVGs
        │   ├── components/ # Reusable UI components (Cards, Inputs, Layouts, Charts)
        │   ├── context/    # User authentication context
        │   ├── pages/      # Route pages (Admin & User Dashboards, Auth, Tasks)
        │   ├── routes/     # Protected route guards
        │   ├── utils/      # API endpoints, axios instance, helper utilities
        │   ├── App.jsx     # Root application component & routing
        │   └── main.jsx    # Vite entry point
        ├── package.json
        └── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally, or a [MongoDB Atlas](https://www.mongodb.com/atlas) connection URI.

---

### 1. Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` root:
   ```env
   PORT=8000
   MONGO_URI=mongodb://localhost:27017/TaskManager
   JWT_SECRET=your_jwt_secret_key_here
   ADMIN_INVITE_TOKEN=your_admin_invite_token_here
   ```

4. Start the backend server:
   ```bash
   # Development mode with nodemon
   npm run dev

   # Production mode
   npm start
   ```
   Backend server will run at `http://localhost:8000`.

---

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend/Task-Manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Verify API base URL in `src/utils/apiPaths.js`:
   ```javascript
   export const BASE_URL = "http://localhost:8000";
   ```

4. Start the Vite development server:
   ```bash
   npm run dev
   ```
   Frontend will be accessible at `http://localhost:5173/`.

---

## 🔑 Default Roles & Access

| Role | Permissions |
| :--- | :--- |
| **Admin** | Full access: View global dashboard, create/edit/delete tasks, assign any user, view & export reports, manage team members. |
| **Member** | View assigned tasks only, update assigned task checklist progress, view personal dashboard statistics. |

> **Note**: To register an **Admin** account during Sign Up, enter the secret invite token configured in `ADMIN_INVITE_TOKEN` inside your backend `.env`.

---

## 📄 License

This project is open-source and available under the [ISC License](LICENSE).
