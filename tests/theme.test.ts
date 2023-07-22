import { expect, test } from '@playwright/test';

test.use({
	colorScheme: 'no-preference',
})

test('check correct initial theme', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('toggle theme button exists', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.swap')).toBeVisible();
});

test('toggle theme button changes theme', async ({ page }) => {
	await page.goto('/');
	await page.click('.swap');

	const theme = await page.evaluate(() => localStorage.getItem('theme'));
	expect(theme).toBe('luxury');
});
