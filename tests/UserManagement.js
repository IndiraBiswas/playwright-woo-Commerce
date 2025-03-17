import { test, expect } from '@playwright/test';
import { loginUser, createUser, placeOrder, reviewOrder } from '@wordpress/e2e-test-utils-playwright';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

test('Customer places an order and admin reviews it', async ({ page }) => {
    // Create a new customer user
    await createUser(page, {
        username: process.env.CUSTOMER_USERNAME,
        email: process.env.CUSTOMER_EMAIL,
        password: process.env.CUSTOMER_PASSWORD,
        role: process.env.CUSTOMER_ROLE
    });

    // Customer logs in and places an order
    await loginUser(page, process.env.AUTH_USER, process.env.AUTH_PWD);
    await placeOrder(page, {
        product: 'Test Product',
        quantity: 1,
        paymentMethod: 'Cash on Delivery'
    });

    // Admin logs in to review order
    await loginUser(page, process.env.WP_USERNAME, process.env.WP_PASSWORD);
    const orderStatus = await reviewOrder(page, `${process.env.AUTH_USER}@example.com`);

    // Verify order status
    expect(orderStatus).toBe('Processing');
});
