import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ThemeToggle from './ThemeToggle.svelte';

describe('ThemeToggle Component', () => {
    test('should render the component', () => {
        render(ThemeToggle);
        expect(screen.getByTestId('theme-toggle')).toBeTruthy();
    })
});