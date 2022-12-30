import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';

expect.extend(matchers);

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(), // deprecated
		removeListener: vi.fn(), // deprecated
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
});

window.resizeTo = function resizeTo(width, height) {
	Object.assign(this, {
		innerWidth: width,
		innerHeight: height,
		outerWidth: width,
		outerHeight: height,
	});
};
