# WooCommerce E2E Automation with Playwright

## 📌 Overview
This project automates key WooCommerce scenarios using the **rtCamp E2E framework** and **WordPress E2E Test Utils Playwright package**. The tests cover **Product Management, Coupon Management, and User Management** workflows in a WooCommerce environment.

## 🛠️ Setup Instructions

### 1️⃣ Prerequisites
- Node.js (v16 or later)
- Playwright installed globally
- A local or remote WordPress site with the WooCommerce plugin activated
- Admin credentials for WordPress

### 2️⃣ Install Dependencies
Run the following commands to set up the project:
```sh
# Initialize the project (if not done already)
npm init -y

# Install Playwright and dependencies
npm install --save-dev @playwright/test

# Install WordPress E2E Test Utils
npm install --save-dev @wordpress/e2e-test-utils-playwright
```

### 3️⃣ WooCommerce Setup
1. Install and activate the **WooCommerce** plugin on your WordPress site.
2. Configure WooCommerce with basic settings (e.g., currency, shipping, and payment options).
3. Ensure the site has at least one product category created.
4. Enable coupons in **WooCommerce → Settings → General** (if not enabled by default).

### 4️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```sh
# Admin Credentials
ADMIN_USERNAME=
ADMIN_PASSWORD=
WP_BASE_URL=
# Customer Credentials
CUSTOMER_USERNAME=
CUSTOMER_EMAIL=
CUSTOMER_PASSWORD=
```

Install `dotenv` to load environment variables:
```sh
npm install dotenv
```

## 🚀 Running Tests
To execute the tests, run:
```sh
npx playwright test
```

For running tests in headed mode (visible browser):
```sh
npx playwright test --headed
```

## 📝 Test Scenarios

### ✅ Product Management
- Create a WooCommerce product
- Add product categories and tags
- Upload product images
- Set pricing and inventory
- Publish and verify product visibility

### ✅ Coupon Management
- Create percentage-based and fixed amount coupons
- Apply coupons during checkout
- Verify discount calculations

### ✅ User Management
- Create a customer account
- Customer places an order
- Admin/store manager reviews the order

## 🔧 Utility Functions Used
This project utilizes **@wordpress/e2e-test-utils-playwright** for streamlined automation:
- `loginUser(page, username, password)`: Logs in a user
- `logoutUser(page)`: Logs out the current user
- `createProduct(page, options)`: Creates a WooCommerce product
- `createCoupon(page, options)`: Adds a WooCommerce coupon
- `createUser(page, options)`: Creates a new WordPress user
- `placeOrder(page, options)`: Places an order as a customer
- `reviewOrder(page, customerEmail)`: Admin reviews an order

## 📌 Folder Structure
```
├── tests/
│   ├── product-management.spec.js
│   ├── coupon-management.spec.js
│   ├── user-management.spec.js
├── .env
├── package.json
├── playwright.config.js
├── README.md
```

## 📖 Additional Resources
- [Playwright Documentation](https://playwright.dev/)
- [WooCommerce Plugin Guide](https://woocommerce.com/documentation/)
- [rtCamp E2E Framework](https://github.com/rtCamp/e2e-tests)
- [WordPress E2E Test Utils](https://github.com/WordPress/gutenberg/tree/trunk/packages/e2e-test-utils-playwright)

## 🎯 Future Enhancements
- Extend tests for bulk product uploads
- Automate refunds and order status updates
- Implement multi-user role testing
- Improve test coverage for different WooCommerce settings

---
📌 **Happy Testing! 🚀**

