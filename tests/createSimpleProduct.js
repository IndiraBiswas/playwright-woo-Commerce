import { test, expect } from '@playwright/test';
import { loginUser, createProduct } from '@wordpress/e2e-test-utils-playwright';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

test('Create a simple WooCommerce product', async ({ page }) => {
    // Login using environment variables
    await loginUser(page, process.env.WP_USERNAME, process.env.WP_PASSWORD);

    // Create a WooCommerce product
    await createProduct(page, {
        title: 'Test Product',
        price: '20.00',
        stock: '10',
        categories: ['Electronics'],
        tags: ['test-tag'],
        image: 'assets/product_test_image.png'
    });

    // Verify product in shop
    await page.goto(`${process.env.WP_BASE_URL}/shop`);
    const productTitle = await page.locator('.woocommerce-loop-product__title').textContent();
    expect(productTitle).toContain('Test Product');
});
