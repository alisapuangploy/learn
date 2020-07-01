import { MainFunction } from '../../support/mainFunction';
import { CouponFunction } from '../../support/couponFunction';

describe('Add Coupon Design', () => {
  const mainFunction = new MainFunction();
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

    cy.get('a.btn-primary').contains('เพิ่มรางวัล').click();
    cy.location('pathname').should('eq', '/allmember/coupons/add-edit');
  })

  it('Verify initial design of ชื่อคูปอง field', () => {
    const labelTag = 'label[for="txtCouponName"]';
    const labelName = 'ชื่อคูปอง';
    const inputTag = 'input#txtCouponName';
    const placeholder = 'กรุณากรอก ชื่อคูปอง';
    mainFunction.verifyRequireField(labelTag, labelName, inputTag, placeholder);
  })

  it('Verify initial design of Promotion Code field', () => {
    const labelTag = 'label[for="txtPromotionCode"]';
    const labelName = 'Promotion Code';
    const inputTag = 'input#txtPromotionCode';
    const placeholder = 'กรุณากรอก Promotion Code';
    mainFunction.verifyRequireField(labelTag, labelName, inputTag, placeholder);
  })

  it('Verify initial design of Project Code field', () => {
    const labelTag = 'label[for="txtProjectCodeCode"]';
    const labelName = 'Project Code';
    const inputTag = 'input#txtProjectCodeCode';
    const placeholder = 'กรุณากรอก Project Code';
    mainFunction.verifyRequireField(labelTag, labelName, inputTag, placeholder);
  })

  it('Verify initial design of รายละเอียดคูปอง field', () => {
    const labelTag = 'label[for="txtCouponDescription"]';
    const labelName = 'รายละเอียดคูปอง';
    const inputTag = 'textarea#txtCouponDescription';
    const placeholder = 'กรุณากรอก รายละเอียดคูปอง';
    mainFunction.verifyField(labelTag, labelName, inputTag, placeholder);
  })

  it('Verify initial design of Terms & Conditions URL field', () => {
    const labelTag = 'label[for="txtTermsAndConditions"]';
    const labelName = 'Terms & Conditions URL';
    const inputTag = 'input#txtTermsAndConditions';
    const placeholder = 'กรุณากรอก Terms & Conditions URL';
    mainFunction.verifyRequireField(labelTag, labelName, inputTag, placeholder);
  })

  it('Verify initial design of จำนวนแต้ม All Member ที่ต้องการตัด field', () => {
    cy.get('label[for="txtPoint"]').eq(0).should('have.class', 'required').and('contain', 'จำนวนแต้ม All Member ที่ต้องการตัด');
    cy.get('input#txtPoint').eq(0).should('have.attr', 'placeholder', 'กรุณากรอก จำนวนแต้ม All Member ที่ต้องการตัด');
  })

  it('Verify initial design of ตัวอักษรบนปุ่มคูปอง field', () => {
      cy.get('label[for="txtPoint"]').eq(1).should('have.class', 'required').and('contain', 'ตัวอักษรบนปุ่มคูปอง');
      cy.get('input#txtPoint').eq(1).should('have.attr', 'placeholder', 'กรุณากรอก ตัวอักษรบนปุ่มคูปอง');
  })

  it('Verify initial design of PromotionName field', () => {
    const labelTag = 'label[for="txtCouponPromotionName"]';
    const labelName = 'PromotionName';
    const inputTag = 'input#txtCouponPromotionName';
    const placeholder = 'กรุณากรอก PromotionName';
    mainFunction.verifyRequireField(labelTag, labelName, inputTag, placeholder);
  })

  it('Verify initial design of GsDeductCampaignQty field', () => {
    cy.get('label[for="txtPoint"]').eq(2).should('have.class', 'required').and('contain', 'GSDeductCampaignQty');
    cy.get('input#txtPoint').eq(2).should('have.attr', 'placeholder', 'กรุณากรอก จำนวน GsDeductCampaignQty').and('have.value', 1);
  })

  it('Verify initial design of GSDeductCampaignId field', () => {
    cy.get('label[for="txtPoint"]').eq(3).should('have.class', 'required').and('contain', 'GSDeductCampaignId');
    cy.get('input#txtPoint').eq(3).should('have.attr', 'placeholder', 'กรุณากรอก GSDeductCampaignId');
  })

  it('Verify initial design of เลือกวันที่และเวลาที่เริ่มต้นการขาย field', () => {
    cy.get('div.form-group').within(() => {
      cy.get('label.required').eq(9).should('have.class', 'required').and('contain', 'เลือกวันที่และเวลาที่เริ่มต้นการขาย');
      cy.get('input[name="txtSaleStartAtDatetime"]')
        .invoke('attr', 'value').then((text) => {
          expect(Cypress.moment().format('YYYY, MMM DD - 00:00')).to.equal(text);
        });
    });
  })

  it('Verify initial design of เลือกวันที่และเวลาที่สิ้นสุดการขาย field', () => {
    cy.get('div.form-group').within(() => {
      cy.get('label.required').eq(10).should('have.class', 'required').and('contain', 'เลือกวันที่และเวลาที่สิ้นสุดการขาย');
      cy.get('input[name="txtSaleExpireAtDatetime"]').should('have.value', '');
    });
  })

  it('Verify initial design of เลือกวันที่และเวลาที่เริ่มต้นของคูปอง field', () => {
    cy.get('div.form-group').within(() => {
      cy.get('label.required').eq(11).should('have.class', 'required').and('contain', 'เลือกวันที่และเวลาที่เริ่มต้นของคูปอง');
      cy.get('input[name="txtStartAtDatetime"]')
        .invoke('attr', 'value').then((text) => {
          expect(Cypress.moment().format('YYYY, MMM DD - 00:00')).to.equal(text);
        });
    });
  })

  it('Verify initial design of เลือกวันที่และเวลาที่สิ้นสุดของคูปอง field', () => {
    cy.get('div.form-group').within(() => {
      cy.get('label.required').eq(12).should('have.class', 'required').and('contain', 'เลือกวันที่และเวลาที่สิ้นสุดของคูปอง');
      cy.get('input[name="txtExpireAtDatetime"]').should('have.value', '');
    });
  })

  it('Verify initial design of เปิดใช้งานรายการนี้ (สำคัญ) field', () => {
    cy.get('div.form-group').within(() => {
      cy.get('label.form-check').should('not.have.class', 'required').and('contain', 'เปิดใช้งานรายการนี้ (สำคัญ)');
      cy.get('input[type="checkbox"]').check({
        force: true
      }).should('be.checked')
    });
  })

  it('Verify initial design of save button', () => {
    cy.get('button[type="submit"]').should('be.disabled').and('contain', 'บันทึกข้อมูล');
  })

  it('Verify initial design of back button', () => {
    cy.get('a.btn-default').should('be.visible').and('contain', 'ย้อนกลับ').and('have.attr', 'href', '/allmember/coupons');
  })

  it('Verify button when user does not enter any require field', () => {
    cy.get('input#txtCouponName').clear().should('have.value', '');
    cy.get('input#txtPromotionCode').clear().should('have.value', '');
    cy.get('input#txtProjectCodeCode').clear().should('have.value', '');
    cy.get('input#txtTermsAndConditions').clear().should('have.value', '');
    cy.get('input#txtPoint').eq(0).clear().should('have.value', '');
    cy.get('input#txtPoint').eq(1).clear().should('have.value', '');
    cy.get('input#txtCouponPromotionName').clear().should('have.value', '');
    cy.get('input#txtPoint').eq(2).clear().should('have.value', '');
    cy.get('input#txtPoint').eq(3).clear().should('have.value', '');
    cy.get('input[name="txtSaleExpireAtDatetime"]').click({force: true}).should('have.value', '');
    cy.get('input[name="txtExpireAtDatetime"]').click({force: true}).should('have.value', '');
    cy.get('input[type=file]').eq(0).should('have.value', '');
    cy.get('input[type=file]').eq(1).should('have.value', '');
    cy.get('button[type=submit]').contains('บันทึก').should('be.disabled');
  })

  it('Verify button when user enter all require fields', () => {
    cy.fixture('dataTest/couponDataTest1.json').then((data) => {
      couponFunction.enterCouponDetail(data);
    })
    cy.get('a.btn-default').should('be.visible');
    cy.get('button[type=submit]').contains('บันทึก').should('be.visible');
  })
})
