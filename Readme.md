<div align="center">

# 🏠 Mini-BnB

### A full-stack vacation rental listing platform inspired by Airbnb

![Mini-BnB Banner](https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=400&fit=crop&crop=center)

<br/>

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co/)
[![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)](https://github.com/motdotla/dotenv)

</div>

---

## 📸 Screenshots

<div align="center">

### 🗂️ All Listings Page
![All Listings](https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=450&fit=crop)

> Browse all available vacation rentals with beautiful card layouts featuring images, titles, and per-night pricing.

<br/>

### 🏡 Featured Properties

| Ocean Breeze Cottage | Modern City Loft | Mountain Escape Cabin |
|---|---|---|
| ![Cottage](https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=300&h=200&fit=crop) | ![Loft](https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop) | ![Cabin](https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=300&h=200&fit=crop) |
| ₹1,700 / night | ₹1,400 / night | ₹1,100 / night |

</div>

---

## ✨ Features

- 📋 **View All Listings** — Browse all vacation rental properties in a responsive grid
- ➕ **Add New Listing** — Submit new properties with title, description, image, price, location & country
- 🔍 **View Listing Details** — Detailed show page for each individual property
- ✏️ **Edit Listings** — Update any existing listing's information
- 🗑️ **Delete Listings** — Remove listings permanently
- 🗄️ **MongoDB Integration** — Persistent data storage with Mongoose ODM
- 🔁 **RESTful Routes** — Clean, conventional REST API structure

---

## 🛠️ Tech Stack

| Technology | Purpose | Link |
|---|---|---|
| [![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/) | JavaScript runtime environment | [nodejs.org](https://nodejs.org/) |
| [![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/) | Web application framework | [expressjs.com](https://expressjs.com/) |
| [![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/) | NoSQL database | [mongodb.com](https://www.mongodb.com/) |
| [![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white)](https://mongoosejs.com/) | MongoDB object modeling | [mongoosejs.com](https://mongoosejs.com/) |
| [![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=black)](https://ejs.co/) | Templating engine | [ejs.co](https://ejs.co/) |
| [![ejs-mate](https://img.shields.io/badge/ejs--mate-B4CA65?style=flat&logo=ejs&logoColor=black)](https://github.com/JacksonTian/ejs-mate) | EJS layout support | [github.com](https://github.com/JacksonTian/ejs-mate) |
| [![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=flat&logo=dotenv&logoColor=black)](https://github.com/motdotla/dotenv) | Environment variables | [github.com](https://github.com/motdotla/dotenv) |
| [![method-override](https://img.shields.io/badge/method--override-FF6B35?style=flat&logo=npm&logoColor=white)](https://github.com/expressjs/method-override) | HTTP verb support (PUT/DELETE) | [github.com](https://github.com/expressjs/method-override) |

---

## 📁 Project Structure

```
mini-bnb/
├── models/
│   └── listing.js          # Mongoose schema & model
├── views/
│   └── listings/
│       ├── index.ejs        # All listings page
│       ├── show.ejs         # Individual listing page
│       ├── new.ejs          # Add new listing form
│       └── edit.ejs         # Edit listing form
├── public/                  # Static assets (CSS, JS, images)
├── .env                     # Environment variables (not committed)
├── index.js                 # Main application entry point
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mini-bnb.git
   cd mini-bnb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   MONGO_URL=mongodb://localhost:27017/mini-bnb
   PORT=8080
   ```

4. **Start the server**
   ```bash
   node index.js
   ```

5. **Open in browser**
   ```
   http://localhost:8080/listings
   ```

---

## 🔗 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/listings` | View all listings |
| `GET` | `/listings/new` | Form to create a new listing |
| `POST` | `/listings` | Create a new listing |
| `GET` | `/listings/:id` | View a single listing |
| `GET` | `/listings/:id/edit` | Form to edit a listing |
| `PUT` | `/listings/:id` | Update a listing |
| `DELETE` | `/listings/:id` | Delete a listing |

---

## 📦 Dependencies

```json
{
  "express": "^4.x",
  "mongoose": "^7.x",
  "ejs": "^3.x",
  "ejs-mate": "^4.x",
  "method-override": "^3.x",
  "dotenv": "^16.x"
}
```

Install all at once:
```bash
npm install express mongoose ejs ejs-mate method-override dotenv
```

---

## 🌐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb://localhost:27017/mini-bnb` |
| `PORT` | Port number for the server | `8080` |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ | Inspired by [Airbnb](https://www.airbnb.com/)

⭐ Star this repo if you found it helpful!

</div>