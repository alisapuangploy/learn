import { CouponFunction } from '../../support/couponFunction';
describe('Add Counpon Function', () => {
  const couponFunction = new CouponFunction();
  beforeEach(() => {
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

  //   cy.get('input[name="txtSaleStartAtDatetime"]').invoke('attr', 'value').then((text) => {
  //     expect(Cypress.moment().format('YYYY, MMM DD - 00:00')).to.equal(text);
  //   });

  it('Verify result when user update data successfully', () => {
    cy.get('a.btn-primary').contains('เพิ่มรางวัล').click();
    cy.location('pathname').should('eq', '/allmember/coupons/add-edit');
    cy.fixture('dataTest/couponDataTest1.json').then((data) => {
      couponFunction.enterCouponDetail(data);
    });
    cy.get('button[type=submit]').should('be.visible').click()
    .location('pathname').should('eq', '/allmember/coupons')
    .wait(500);
  })

  it('Verify coupon detail', () => {
    cy.fixture('dataTest/couponDataTest1.json').then((data) => {
      couponFunction.verifyGetCouponDetail(data);
    })
  })
})
