import { CouponFunction } from '../../support/couponFunction';
describe('Edit Coupon Design', () => {
  const couponFunction = new CouponFunction();
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
    cy.fixture('dataTest/couponDataTest1.json').then((dataCreate) => {
      cy.get('div.item-header').contains('div.item-header-title:last', dataCreate.couponName);
      cy.get('div.item-header-controls:last').children().eq(1).click();
    })
  })

  beforeEach(() => {
    cy.fixture('dataTest/couponDataTest2.json').as('dataEdit');
  });

  it('Verify result when user update data successfully', () => {
    cy.get('@dataEdit').then(data => {
      couponFunction.enterCouponDetail(data);
    });
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').click()
    .location('pathname').should('eq', '/allmember/coupons')
    .wait(500);
  })

  it('Verify coupon detail', () => {
    cy.get('@dataEdit').then(data => {
      couponFunction.verifyGetCouponDetail(data);
    });
  })
})
