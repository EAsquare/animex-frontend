describe('empty spec', () => {
	beforeEach(() => {
		cy.visit('http://127.0.0.1:5173/');
	});

	it('displays react + vite', () => {
		cy.get('p').should(
			'have.text',
			'Hello Vite + React!count is: 0Edit App.tsx and save to test HMR updates.Learn React | Vite Docs'
		);
	});

	it('should increase count when clicked', () => {
		cy.get('button').click().should('have.text', 'count is: 1');
	});
});
