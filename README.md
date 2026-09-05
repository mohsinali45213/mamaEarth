<div align="center">
  <img src="https://raw.githubusercontent.com/mohsinali45213/mamaEarth/main/Client/public/mamaearth_logo.png" alt="MamaEarth Logo" width="240" />

  # mamaEarth 🌿

  > A full-stack E-commerce web application inspired by MamaEarth, providing natural beauty & personal care products with seamless shopping, cart management, Stripe payments, dynamic filters, and admin management.

  [![Live Demo](https://img.shields.io/badge/Live_Demo-mama--earth--1jml.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://mama-earth-1jml.vercel.app)
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)
  [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
  [![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
</div>

---

## 🌐 Demo & Screenshots

🚀 **Live Demo:** [https://mama-earth-1jml.vercel.app](https://mama-earth-1jml.vercel.app)

| Homepage & Product Catalog | Application Preview |
| :---: | :---: |
| ![Homepage Preview](https://raw.githubusercontent.com/mohsinali45213/mamaEarth/main/Client/public/preview-home.png) | [![Live Demo Preview](https://img.shields.io/badge/Visit-Live_Demo-brightgreen?style=for-the-badge&logo=vercel)](https://mama-earth-1jml.vercel.app) |

---

## ✨ Features

- 🔐 **User Authentication**: Secure registration, login, JWT token verification, and persistent user sessions.
- 🛍️ **Product Catalog**: Explore personal care products organized by categories and sub-categories.
- 🔍 **Search & Advanced Filtering**: Filter products dynamically by categories, sub-categories, price range, and search terms.
- 🛒 **Cart & Redux State**: Real-time shopping cart management powered by Redux Toolkit.
- 💳 **Stripe Payment Gateway**: Secure online card payment processing with Stripe Checkout.
- 📦 **Order Management**: Save delivery info, view order summary, track user orders, and manage admin order lists.
- 🖼️ **Cloudinary Integration**: Cloud image storage and management for user profile pictures and product media.
- 📱 **Responsive UI**: Sleek, mobile-friendly design styled with Tailwind CSS and Flaticon icons.

---

## 🛠️ Tech Stack

### Frontend
- **Framework / Library:** React 18 (Vite build tool)
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`), React Redux
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Routing:** React Router DOM v6
- **Notifications & Icons:** React Hot Toast, Flaticon UI Icons
- **HTTP Client:** Axios
- **Payments:** Stripe JS (`@stripe/stripe-js`, `@stripe/react-stripe-js`)

### Backend
- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication & Security:** JSON Web Tokens (`jsonwebtoken`), `bcryptjs`, `cookie-parser`, `cors`
- **File Uploads:** Multer & Cloudinary SDK
- **Payment Gateway:** Stripe Node SDK

### Deployment
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Vercel / Render

---

## 📁 Folder Structure

```
mamaEarth/
├── Client/                     # React frontend (Vite)
│   ├── public/                 # Static public assets
│   ├── src/
│   │   ├── components/         # Reusable UI components (Navbar, Footer, Product Card, etc.)
│   │   ├── Function/           # Axios API service functions
│   │   ├── Page/               # Application pages (Home, Cart, Orders, Admin dashboard)
│   │   ├── Redux/              # Redux slices and store configuration
│   │   ├── App.jsx             # Main router component
│   │   └── main.jsx            # React entry point
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── Server/                     # Express backend API
│   ├── src/
│   │   ├── controllers/        # Request controllers (User, Product, Category, Order)
│   │   ├── db/                 # MongoDB connection setup
│   │   ├── middlewares/        # JWT auth & Multer file upload middlewares
│   │   ├── models/             # Mongoose schemas (User, Product, Category, SubCategory, Order)
│   │   ├── routes/             # Express API routes
│   │   ├── utils/              # Cloudinary configuration
│   │   └── app.js              # Express app setup & server initialization
│   ├── package.json
│   └── .prettierrc
├── package.json
└── README.md
```

---

## ⚙️ Installation / Setup

Follow these step-by-step commands to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/mohsinali45213/mamaEarth.git
cd mamaEarth
```

### 2. Install Client Dependencies
```bash
cd Client
npm install
```

### 3. Install Server Dependencies
```bash
cd ../Server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `Server/` folder with the following variables:

```env
# Server Port
PORT=5000

# MongoDB Database Configuration
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net
DATABASE_NAME=mamaearth

# Authentication
SECRET_KEY=your_jwt_secret_key

# Stripe Payment Gateway
STRIPE_KEY=sk_test_your_stripe_secret_key

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Create a `.env` file inside the `Client/` folder:

```env
# Frontend API Endpoint
VITE_API_URL=http://localhost:5000/api/v1
```

---

## 🚀 Running the Project

### Start the Backend Server
Navigate to the `Server` directory and run:

```bash
cd Server
npm run dev
```
*The backend API will start on `http://localhost:5000`.*

### Start the Frontend Client
In a separate terminal, navigate to the `Client` directory and run:

```bash
cd Client
npm run dev
```
*The React development application will run on `http://localhost:5173`.*

---

## 📡 API Endpoints

### 👤 User Routes (`/api/v1/users`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/register` | Register a new user |
| `POST` | `/login` | User login & token generation |
| `GET` | `/logout/:id` | Logout user |
| `GET` | `/` | Fetch list of all users |
| `GET` | `/:id` | Get details of a single user |
| `POST` | `/:id` | Update user profile |
| `POST` | `/upload/:id` | Upload user profile image |

### 📦 Product Routes (`/api/v1`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/products` | Get all products |
| `GET` | `/products/total` | Get total count of products |
| `GET` | `/product/:slug` | Get single product by slug |
| `POST` | `/product` | Create a new product (with image upload) |
| `PUT` | `/product/:slug` | Update product details |
| `DELETE` | `/product/:slug` | Delete product |
| `POST` | `/search/filter` | Search & filter products |
| `GET` | `/products/related/:productId` | Get related products |
| `GET` | `/catPro/:id` | Get products by Category ID |
| `GET` | `/subCatPro/:id` | Get products by Sub-category ID |

### 🏷️ Category & Subcategory Routes (`/api/v1`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/category` | Create category |
| `GET` | `/categories` | List all categories |
| `GET` | `/category/:slug` | Read category |
| `PUT` | `/category/:slug` | Update category |
| `DELETE` | `/category/:slug` | Remove category |
| `POST` | `/sub` | Create subcategory |
| `GET` | `/subs` | List all subcategories |
| `GET` | `/sub/:slug` | Read subcategory |
| `PUT` | `/sub/:slug` | Update subcategory |
| `DELETE` | `/sub/:slug` | Remove subcategory |

### 💳 Order & Payment Routes (`/api/v1`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/payment-intent` | Initiate Stripe payment intent |
| `POST` | `/add-info/:id` | Save shipping & order user info |
| `POST` | `/order-info` | Submit order details |
| `GET` | `/allorders` | List all placed orders (Admin) |
| `GET` | `/userorders/:userId` | List orders for a specific user |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the [ISC License](LICENSE).

---

## 👨‍💻 Author & Contact

**Mohsin Ali**

- **GitHub:** [@mohsinali45213](https://github.com/mohsinali45213)
- **Live Demo:** [mama-earth-1jml.vercel.app](https://mama-earth-1jml.vercel.app)