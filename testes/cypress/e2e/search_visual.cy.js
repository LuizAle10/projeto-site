describe('Curso Grátis - Applitools', () => {
    beforeEach(() => {
        cy.visit('https://projeto-site.azurewebsites.net/')
        cy.eyesOpen()
    })

    afterEach(() => {
        cy.eyesClose()
    })


    it('Validar Título da Página', () => {
        const title = 'Cursos Grátis'

        cy.get('header > h1').should('contain.text', title, `${title} should be visible`)
        //cy.eyesCheckWindow()

    })


})


