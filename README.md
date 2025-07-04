# Bharat Cart - E-Commerce Platform

A modern, full-featured e-commerce web application built with React, Firebase, and Redux. Bharat Cart provides a complete shopping experience with user authentication, product management, shopping cart functionality, and admin dashboard.

## 🚀 Features

### User Features
- **User Authentication**: Secure login and signup with Firebase Auth
- **Product Browsing**: Browse and search through product catalog
- **Product Details**: Detailed product information pages
- **Shopping Cart**: Add/remove items with Redux state management
- **Order Management**: Track and manage orders
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS

### Admin Features
- **Admin Dashboard**: Protected admin-only access
- **Product Management**: Add, update, and manage products
- **Order Tracking**: Monitor and manage customer orders
- **User Management**: View and manage user accounts

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore & Authentication)
- **UI Components**: Headless UI, React Icons
- **Notifications**: React Toastify
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BHARAT-CART
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore
   - Update the Firebase configuration in `src/firebase/Firebase.js`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Filter.jsx      # Product filtering
│   ├── Footer.jsx      # Footer component
│   ├── Herosection.jsx # Hero section
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Loader.jsx      # Loading component
│   ├── Model.jsx       # Modal components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Productcard.jsx # Product display cards
│   ├── Testimonial.jsx # Customer testimonials
│   └── Track.jsx       # Order tracking
├── context/            # React Context
│   └── data/
│       ├── mycontext.jsx
│       └── myState.jsx
├── firebase/           # Firebase configuration
│   └── Firebase.js
├── pages/              # Application pages
│   ├── Addproduct.jsx  # Admin: Add products
│   ├── Admin.jsx       # Admin dashboard
│   ├── Allproduct.jsx  # Product listing
│   ├── Cart.jsx        # Shopping cart
│   ├── Dashboard.jsx   # User dashboard
│   ├── Home.jsx        # Home page
│   ├── Login.jsx       # User login
│   ├── Order.jsx       # Order management
│   ├── ProductInfo.jsx # Product details
│   ├── Signup.jsx      # User registration
│   └── Updateproduct.jsx # Admin: Edit products
├── redux/              # Redux store and slices
│   ├── Cartslice.jsx   # Cart state management
│   └── Store.jsx       # Redux store configuration
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔐 Authentication

The application uses Firebase Authentication with the following features:
- Email/password authentication
- Protected routes for authenticated users
- Admin-only routes for administrative functions
- Secure user session management

## 🛒 Shopping Cart

The shopping cart is implemented using Redux Toolkit with features:
- Add/remove products
- Persistent cart state
- Real-time cart updates
- Cart item management

## 🎨 UI/UX Features

- **Modern Design**: Clean and intuitive interface
- **Responsive Layout**: Works on all device sizes
- **Loading States**: Smooth user experience
- **Toast Notifications**: User feedback for actions
- **Filter System**: Easy product discovery
- **Hero Section**: Engaging landing experience

## 🔒 Security

- Protected routes for authenticated users
- Admin-only access for sensitive operations
- Firebase security rules for data protection
- Input validation and sanitization

## 🚀 Deployment

To deploy the application:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - Vercel, Netlify, or Firebase Hosting
   - Configure environment variables for Firebase

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Santosh Patel**
- Email: santoshpatelvns5@gmail.com

## 🙏 Acknowledgments

- Firebase for backend services
- React community for excellent documentation
- Tailwind CSS for beautiful styling utilities
- Redux Toolkit for state management
