import {} from 'cypress';

describe('empty spec', () => {
	beforeEach(() => {
		cy.visit('http://127.0.0.1:5173/');
	});

	it('should increase count when clicked', () => {
		cy.get('button').click().should('have.text', 'count is: 1');
	});

	it('Should change the theme', () => {
		cy.get('div').click();
	});
});
