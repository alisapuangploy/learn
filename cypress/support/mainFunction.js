export class MainFunction {
    verifyRequireField(labelTag, labelName, inputTag, placeholder) {
        cy.get('div.form-group').within(() => {
            cy.get(labelTag).should('have.class', 'required').and('contain', labelName);
            cy.get(inputTag).should('have.attr', 'placeholder', placeholder);
        });
    };

    verifyField(labelTag, labelName, inputTag, placeholder) {
        cy.get('div.form-group').within(() => {
            cy.get(labelTag).should('not.have.class', 'required').and('contain', labelName);
            cy.get(inputTag).should('have.attr', 'placeholder', placeholder);
        });
    };
}