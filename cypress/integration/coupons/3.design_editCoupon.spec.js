import { MainFunction } from '../../support/mainFunction';
import { CouponFunction } from '../../support/couponFunction';

describe('Edit Coupon Design', () => {
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
    cy.fixture('dataTest/couponDataTest1.json').then((dataCreate) => {
          cy.get('div.item-header').contains('div.item-header-title:last', dataCreate.couponName);
          cy.get('div.item-header-controls:last').children().eq(1).click();
    })
  });

  beforeEach(() => {
    cy.fixture('dataTest/couponDataTest1.json').as('dataCreate');
  });

  it('Verify initial design of ชื่อคูปอง field', () => {
    const labelTag = 'label[for="txtCouponName"]';
    const labelName = 'ชื่อคูปอง';
    const inputTag = 'input#txtCouponName';
    const placeholder = 'กรุณากรอก ชื่อคูปอง';
    mainFunction.verifyRequireField(labelTag, labelName, inputTag, placeholder);
    cy.get('@dataCreate').then(dataCreate => {
      cy.get('input#txtCouponName').should('have.value', dataCreate.couponName);
    });
  })

  it('Verify initial design of Promotion Code field', () => {
    const labelTag = 'label[for="txtPromotionCode"]';
    const labelName = 'Promotion Code';
    const inputTag = 'input#txtPromotionCode';
    const placeholder = 'กรุณากรอก Promotion Code';
    mainFunction.verifyRequireField(labelTag, labelName, inputTag, placeholder);
    cy.get('@dataCreate').then(dataCreate => {
      cy.get('input#txtPromotionCode').should('have.value', dataCreate.promotionCode);
    });
  })

  it('Verify initial design of Project Code field', () => {
    const labelTag = 'label[for="txtProjectCodeCode"]';
    const labelName = 'Project Code';
    const inputTag = 'input#txtProjectCodeCode';
    const placeholder = 'กรุณากรอก Project Code';
    mainFunction.verifyRequireField(labelTag, labelName, inputTag, placeholder);
    cy.get("@dataCreate").then((dataCreate) => {
      cy.get('input#txtProjectCodeCode').should('have.value', dataCreate.ProjectCode);
    })
  })

  it('Verify initial design of รายละเอียดคูปอง field', () => {
    const labelTag = 'label[for="txtCouponDescription"]';
    const labelName = 'รายละเอียดคูปอง';
    const inputTag = 'textarea#txtCouponDescription';
    const placeholder = 'กรุณากรอก รายละเอียดคูปอง';
    mainFunction.verifyField(labelTag, labelName, inputTag, placeholder);
    cy.get('@dataCreate').then(dataCreate => {
    cy.get('textarea#txtCouponDescription').should('have.value', dataCreate.Description);
    })
  })

  it('Verify initial design of Terms & Conditions URL field', () => {
    const labelTag = 'label[for="txtTermsAndConditions"]';
    const labelName = 'Terms & Conditions URL';
    const inputTag = 'input#txtTermsAndConditions';
    const placeholder = 'กรุณากรอก Terms & Conditions URL';
    mainFunction.verifyRequireField(labelTag, labelName, inputTag, placeholder);
    cy.get('@dataCreate').then(dataCreate => {
    cy.get('input#txtTermsAndConditions').should('have.value', dataCreate.txtTermsAndConditions);
    })
  })

  it('Verify initial design of จำนวนแต้ม All Member ที่ต้องการตัด field', () => {
    cy.get('label[for="txtPoint"]').eq(0).should('have.class', 'required').and('contain', 'จำนวนแต้ม All Member ที่ต้องการตัด');
    cy.get('input#txtPoint').eq(0).should('have.attr', 'placeholder', 'กรุณากรอก จำนวนแต้ม All Member ที่ต้องการตัด');
    cy.get('@dataCreate').then(dataCreate => {
    cy.get('input#txtPoint').eq(0).should('have.value', dataCreate.cuttingPoint);
    })
  })

  it('Verify initial design of ตัวอักษรบนปุ่มคูปอง field', () => {
      cy.get('label[for="txtPoint"]').eq(1).should('have.class', 'required').and('contain', 'ตัวอักษรบนปุ่มคูปอง');
      cy.get('input#txtPoint').eq(1).should('have.attr', 'placeholder', 'กรุณากรอก ตัวอักษรบนปุ่มคูปอง');
      cy.get('@dataCreate').then(dataCreate => {
      cy.get('input#txtPoint').eq(1).should('have.value', dataCreate.maxlenge);
      })
  })

  it('Verify initial design of PromotionName field', () => {
    const labelTag = 'label[for="txtCouponPromotionName"]';
    const labelName = 'PromotionName';
    const inputTag = 'input#txtCouponPromotionName';
    const placeholder = 'กรุณากรอก PromotionName';
    mainFunction.verifyRequireField(labelTag, labelName, inputTag, placeholder);
    cy.get('@dataCreate').then(dataCreate => {
    cy.get('input#txtCouponPromotionName').should('have.value', dataCreate.PromotionName);
    })
  })

  it('Verify initial design of GSDeductCampaignQty field', () => {
    cy.get('label[for="txtPoint"]').eq(2).should('have.class', 'required').and('contain', 'GSDeductCampaignQty');
    cy.get('input#txtPoint').eq(2).should('have.attr', 'placeholder', 'กรุณากรอก จำนวน GsDeductCampaignQty');
    cy.get('@dataCreate').then(dataCreate => {
    cy.get('input#txtPoint').eq(2).should('have.value', dataCreate.GSDeductCampaignQty);
  })
  })

  it('Verify initial design of GSDeductCampaignId field', () => {
    cy.get('label[for="txtPoint"]').eq(3).should('have.class', 'required').and('contain', 'GSDeductCampaignId');
    cy.get('input#txtPoint').eq(3).should('have.attr', 'placeholder', 'กรุณากรอก GSDeductCampaignId');
    cy.get('@dataCreate').then(dataCreate => {
    cy.get('input#txtPoint').eq(3).should('have.value', dataCreate.GSDeductCampaignId);
    })
  })

  it('Verify initial design of เลือกวันที่และเวลาที่เริ่มต้นการขาย field', () => {
    cy.get('div.form-group').within(() => {
      cy.get('label.required').eq(9).should('have.class', 'required').and('contain', 'เลือกวันที่และเวลาที่เริ่มต้นการขาย');
      cy.get('@dataCreate').then(dataCreate => {
        cy.get('input[name="txtSaleStartAtDatetime"]').should('have.value', Cypress.moment(dataCreate.txtSaleStartAtDatetime).format('YYYY, MMM DD - 00:00'));
      })
    });
  })

  it('Verify initial design of เลือกวันที่และเวลาที่สิ้นสุดการขาย field', () => {
    cy.get('div.form-group').within(() => {
      cy.get('label.required').eq(10).should('have.class', 'required').and('contain', 'เลือกวันที่และเวลาที่สิ้นสุดการขาย');
      cy.get('@dataCreate').then(dataCreate => {
        cy.get('input[name="txtSaleExpireAtDatetime"]').should('have.value', Cypress.moment(dataCreate.txtSaleExpireAtDatetime).format('YYYY, MMM DD - 00:00'));
      })
    });
  })

  it('Verify initial design of เลือกวันที่และเวลาที่เริ่มต้นของคูปอง field', () => {
    cy.get('div.form-group').within(() => {
      cy.get('label.required').eq(11).should('have.class', 'required').and('contain', 'เลือกวันที่และเวลาที่เริ่มต้นของคูปอง');
      cy.get('@dataCreate').then(dataCreate => {
        cy.get('input[name="txtStartAtDatetime"]').should('have.value', Cypress.moment(dataCreate.txtStartAtDatetime).format('YYYY, MMM DD - 00:00'));
      })
    });
  })

  it('Verify initial design of เลือกวันที่และเวลาที่สิ้นสุดของคูปอง field', () => {
    cy.get('div.form-group').within(() => {
      cy.get('label.required').eq(12).should('have.class', 'required').and('contain', 'เลือกวันที่และเวลาที่สิ้นสุดของคูปอง');
      cy.get('@dataCreate').then(dataCreate => {
        cy.get('input[name="txtExpireAtDatetime"]').should('have.value', Cypress.moment(dataCreate.txtExpireAtDatetime).format('YYYY, MMM DD - 00:00'));
      })
    });
  })

  it('Verify initial design of เปิดใช้งานรายการนี้ (สำคัญ) field', () => {
    cy.get('div.form-group').within(() => {
      cy.get('label.form-check').should('not.have.class', 'required').and('contain', 'เปิดใช้งานรายการนี้ (สำคัญ)');
      cy.get('input[type="checkbox"]').check({force: true}).should('be.checked')
    });
  })

  it('Verify initial design of save button', () => {
    cy.get('button[type="submit"]').should('be.visible').and('contain', 'บันทึกข้อมูล');
  })

  it('Verify initial design of back button', () => {
    cy.get('a.btn-default').should('be.visible').and('contain', 'ย้อนกลับ').and('have.attr', 'href', '/allmember/coupons');
  })

  // There are remove data of require fields 
  it('Verify button when user remove data of txtCouponName field', () => {
    cy.get('input#txtCouponName').clear();
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.disabled');
  })

  it('Verify button when user remove data of txtPromotionCode field', () => {
    cy.get('input#txtPromotionCode').clear();
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.disabled');
  })

  it('Verify button when user remove data of txtProjectCodeCode field', () => {
    cy.get('input#txtProjectCodeCode').clear();
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.disabled');
  })

  it('Verify button when user remove data of txtTermsAndConditions field', () => {
    cy.get('input#txtTermsAndConditions').clear();
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.disabled');
  })

  it('Verify button when user remove data of จำนวนแต้ม All Member ที่ต้องการตัด field', () => {
    cy.get('input#txtPoint').eq(0).clear();
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.disabled');
  })

  it('Verify button when user remove data of ตัวอักษรบนปุ่มคูปอง field', () => {
    cy.get('input#txtPoint').eq(1).clear();
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.disabled');
  })

  it('Verify button when user remove data of GsDeductCampaignQty field', () => {
    cy.get('input#txtPoint').eq(2).clear();
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.disabled');
  })

  it('Verify button when user remove data of GSDeductCampaignId field', () => {
    cy.get('input#txtPoint').eq(3).clear();
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.disabled');
  })


  it('Verify button when user remove data of เลือกวันที่และเวลาที่เริ่มต้นการขาย field', () => {
    cy.get('input[name="txtSaleStartAtDatetime"]').clear({force: true});
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.disabled');
  })

  it('Verify button when user remove data of เลือกวันที่และเวลาที่สิ้นสุดการขาย field', () => {
    cy.get('input[name="txtSaleExpireAtDatetime"]').clear({force: true});
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.disabled');
  })

  it('Verify initial design of เลือกวันที่และเวลาที่เริ่มต้นของคูปอง field', () => {
    cy.get('input[name="txtStartAtDatetime"]').clear({force: true});
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.disabled');
  })
  
  it('Verify button when user remove data of เลือกวันที่และเวลาที่สิ้นสุดของคูปอง field', () => {
    cy.get('input[name="txtExpireAtDatetime"]').clear({force: true});
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.disabled');
  })

  it('Verify button when user enter new data in all require fields', () => {
    cy.fixture('dataTest/couponDataTest2.json').then((dataEdit) => {
      couponFunction.enterCouponDetail(dataEdit);
    })
    cy.get('a.btn-default').should('be.visible');
    cy.get('button[type=submit]').contains('บันทึกข้อมูล').should('be.visible');
  })
})
