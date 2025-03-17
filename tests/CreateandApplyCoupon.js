import { test, expect } from '@playwright/test';
import { loginUser, createCoupon } from '@wordpress/e2e-test-utils-playwright';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

test('Create and apply a WooCommerce coupon', async ({ page }) => {
    // Admin login using environment variables
    await loginUser(page, process.env.WP_USERNAME, process.env.WP_PASSWORD);

    // Create a WooCommerce coupon
    await createCoupon(page, {
        code: 'DISCOUNT10',
        type: 'percentage',
        amount: '10'
    });

    // Apply coupon in checkout
    await page.goto(`${process.env.WP_BASE_URL}/checkout`);
    await page.fill('#coupon_code', 'DISCOUNT10');
    await page.click('button[name="apply_coupon"]');

    // Verify discount applied
    const discountText = await page.locator('.cart-discount').textContent();
    expect(discountText).toContain('DISCOUNT10');
});
