# Node.js Express MongoDB CRUD App

This is a beginner-friendly **Node.js + Express + MongoDB** project that follows the **MVC architecture**. It implements a full CRUD (Create, Read, Update, Delete) API with Mongoose and includes a basic HTML view.

---

## 📁 Project Structure

```
project/
├── controllers/
│   └── userController.js       # Handles all logic
├── models/
│   └── userModel.js            # Mongoose schema & model
├── routes/
│   └── userRoutes.js           # All route definitions
├── app.js                      # Express app setup
├── server.js                   # Starts MongoDB and server
├── package.json
```

---

## 🚀 How to Run

1. **Clone the project:**

```bash
git clone https://github.com/your-username/node-crud-mvc.git
cd node-crud-mvc
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start MongoDB locally:**
   Make sure MongoDB is running on your machine (`mongodb://localhost:27017/userdb`).

4. **Start the server:**

```bash
npm start
```

5. **View endpoints:**

* API: [http://localhost:3000/api/users](http://localhost:3000/api/users)
* HTML: [http://localhost:3000/users](http://localhost:3000/users)

---

## ✨ Features

* RESTful API for user management
* HTML list view for users
* Clean separation using MVC pattern
* Global error handler middleware

---

## 🧠 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB** with **Mongoose**

---

## 🛠 Available API Endpoints

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| GET    | `/api/users`     | Get all users         |
| GET    | `/api/users/:id` | Get user by ID        |
| POST   | `/api/users`     | Create a new user     |
| PATCH  | `/api/users/:id` | Update user by ID     |
| DELETE | `/api/users/:id` | Delete user by ID     |
| GET    | `/users`         | Render HTML list view |

---

## 📦 Example User Object

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "gender": "Male",
  "job_title": "Developer"
}
```

---

## 🤝 Contributing

Pull requests are welcome! Feel free to suggest improvements or bug fixes.

---

## 📄 License

This project is for educational/demo purposes and uses the MIT License.
