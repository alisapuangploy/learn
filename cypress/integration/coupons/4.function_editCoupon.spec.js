import { CouponFunction } from '../../support/couponFunction';
describe('Edit Coupon Function', () => {
  const couponFunction = new CouponFunction();
  beforeEach(() => {
    cy.fixture('dataTest/couponDataTest1.json').as('dataCreate');
    cy.fixture('dataTest/couponDataTest2.json').as('dataEdit');
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

  it('Verify result when user update data successfully', () => {
    cy.get('@dataCreate').then(data => {
      cy.get('div.item-header:last').contains('div.item-header-title', data.couponName)
    });
    cy.get('div.item-header-controls:last').children().eq(1).click()
      .location('pathname').then(path => {
        cy.get('@dataEdit').then(data => {
          couponFunction.enterCouponDetail(data);
          cy.get('button[type=submit]').should('be.visible').click()
            .url().should('eq', 'https://allmember-cms-qa.7eleven.io' + path).wait(5000)
        });
      });
  })

  it('Verify coupon detail', () => {
    cy.get('@dataEdit').then(data => {
      couponFunction.verifyGetCouponDetail(data);
    });
  })
})
