# Tech Store Frontend

![Tech Store](https://img.shields.io/badge/Tech%20Store-Frontend-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)

A modern, responsive e-commerce frontend application for a technology store. This project provides a seamless shopping experience for customers looking to purchase the latest tech products.

![Tech Store Screenshot](./screenshots/homepage.png)

## 🚀 Live Demo

Visit our live site: [Tech Store](https://tech-store-frontend.vercel.app)

## ✨ Features

- **Product Browsing**: Explore a wide range of tech products with detailed descriptions
- **Advanced Filtering**: Filter products by category, price range, brand, and more
- **User Authentication**: Secure login and registration system
- **Shopping Cart**: Add, remove, and update items in your cart
- **Wishlist**: Save products for future purchase
- **Checkout Process**: Smooth and secure payment process
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **User Profiles**: View order history and manage account details
- **Product Reviews**: Read and write product reviews

## 🛠️ Technologies Used

- **React.js** - Frontend library
- **Redux/Context API** - State management
- **React Router** - Navigation
- **Styled Components/SASS** - Styling
- **Axios** - API requests
- **Jest & React Testing Library** - Testing
- **ESLint & Prettier** - Code quality
- **Webpack/Vite** - Build tools

## 📋 Prerequisites

- Node.js (version 16.x or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Shachiru/tech-store-frontend.git
   ```

2. Navigate to the project directory
   ```bash
   cd tech-store-frontend
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env` file in the root directory and add your environment variables
   ```
   REACT_APP_API_URL=your_api_url
   REACT_APP_STRIPE_KEY=your_stripe_key
   ```

5. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

## 🚀 Usage

After starting the development server, the application will be available at `http://localhost:3000`.

### Main Pages

- **Home** - Featured products and categories
- **Products** - Browse all products with filtering options
- **Product Details** - Detailed view of a specific product
- **Cart** - Review and manage items in cart
- **Checkout** - Complete the purchase process
- **User Profile** - Account management and order history
- **Admin Dashboard** - Manage products and orders (admin only)

## 📁 Project Structure

```
tech-store-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── product/
│   │   └── user/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .env.example
├── .eslintrc
├── .gitignore
├── package.json
└── README.md
```

## 🔄 API Integration

This frontend application communicates with our backend API for data retrieval and manipulation. The API endpoints include:

- `GET /api/products` - Retrieve all products
- `GET /api/products/:id` - Retrieve a specific product
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/user/profile` - Get user profile
- `POST /api/orders` - Create a new order

## 🧪 Running Tests

```bash
npm test
# or
yarn test
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

### Deployment Platforms

The application can be deployed to various platforms including:
- Vercel
- Netlify
- AWS Amplify
- GitHub Pages

## 🤝 Contributing

We welcome contributions to improve this project. Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Shachiru** - *Initial work* - [GitHub Profile](https://github.com/Shachiru)

## 🙏 Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- Our amazing team of developers and designers
- All our beta testers for their valuable feedback