describe('Delete Counpon Function', () => {
  before(() => {
    cy.visit('https://allmember-cms-qa.7eleven.io/')
      .get('input[type=email]').type('admin@appsynth.net')
      .get('input[type=password]').type('admin')
      .get('button[type=submit]').contains('Login').click()
      .location('pathname').should('include', 'partner');

    cy.get('.list-section > .row.list-item.as-sortable-item').eq(10).contains('.order', '11');
    cy.get('.list-section > .row.list-item.as-sortable-item').eq(10).contains('.item', 'All Member');
    cy.get('.list-section > .row.list-item.as-sortable-item').eq(10).contains('.pull-right', 'Coupons').click();
    cy.location('pathname').should('eq', '/allmember/coupons');
  })

  beforeEach(() => {
    cy.fixture('dataTest/couponDataTest2.json').as('data');
  })

  it('Verify adding of coupon', () => {
    cy.get('@data').then(data => {
      cy.get('div.item-header:last').children().eq(0)
        .should('have.class', 'item-header-title')
        .and('contain', data.couponName).then((href) => {
          cy.get('div.item-header-controls').children().get('i.fa-trash:last').click();
        })
    })
  })
})
