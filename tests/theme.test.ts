import { expect, test } from '@playwright/test';
import { config } from '../src/lib/config';

test.use({
	colorScheme: 'no-preference',
})

test('check correct initial theme', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('theme toggle exists', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.swap')).toBeVisible();
});

test('click theme toggle changes to dark', async ({ page }) => {
	await page.goto('/');
	await page.click('.swap');

	const localTheme = await page.evaluate(() => localStorage.getItem('theme'));
	expect(localTheme).toBe(config.theme.dark);
});
