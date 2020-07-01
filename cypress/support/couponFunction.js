export class CouponFunction {
    enterCouponDetail(data) {
        data.txtSaleStartAtDatetime = Cypress.moment(data.txtSaleStartAtDatetime).format('MMM DD, YYYY-00:00');
        data.txtSaleExpireAtDatetime = Cypress.moment(data.txtSaleExpireAtDatetime).format('MMM DD, YYYY-00:00');
        data.txtStartAtDatetime = Cypress.moment(data.txtStartAtDatetime).format('MMM DD, YYYY-00:00');
        data.txtExpireAtDatetime = Cypress.moment(data.txtExpireAtDatetime).format('MMM DD, YYYY-00:00');

        cy.get('input#txtCouponName').clear().type(data.couponName);
        cy.get('input#txtPromotionCode').clear().type(data.promotionCode);
        cy.get('input#txtProjectCodeCode').clear().type(data.ProjectCode);
        cy.get('input#txtPoint').eq(0).clear().type(data.cuttingPoint);
        cy.get('input#txtPoint').eq(1).clear().type(data.maxlenge);
        cy.get('input#txtCouponPromotionName').clear().type(data.PromotionName);
        cy.get('input#txtPoint').eq(2).clear().type(data.GSDeductCampaignQty);
        cy.get('input#txtPoint').eq(3).clear().type(data.GSDeductCampaignId);
        cy.get('input[name="txtSaleStartAtDatetime"]').clear({
            force: true
        }).type(data.txtSaleStartAtDatetime, {
            force: true
        })
        cy.get('input[name="txtSaleExpireAtDatetime"]').clear({
            force: true
        }).type(data.txtSaleExpireAtDatetime, {
            force: true
        })
        cy.get('input[name="txtStartAtDatetime"]').clear({
            force: true
        }).type(data.txtStartAtDatetime, {
            force: true
        });
        cy.get('input[name="txtExpireAtDatetime"]').clear({
            force: true
        }).type(data.txtExpireAtDatetime, {
            force: true
        });
        cy.get('input[type=file]').eq(0).attachFile(data.image0).wait(300);
        cy.get('input[type=file]').eq(1).attachFile(data.image1).wait(300);
        cy.get('input#txtTermsAndConditions').clear().type(data.txtTermsAndConditions);
    };

    verifyGetCouponDetail(data) {
        data.txtSaleStartAtDatetime = Cypress.moment(data.txtSaleStartAtDatetime).format('DD/MM/YYYY') + ', 00:00.';
        data.txtSaleExpireAtDatetime = Cypress.moment(data.txtSaleExpireAtDatetime).format('DD/MM/YYYY') + ', 00:00.';
        data.txtStartAtDatetime = Cypress.moment(data.txtStartAtDatetime).format('DD/MM/YYYY') + ', 00:00.';
        data.txtExpireAtDatetime = Cypress.moment(data.txtExpireAtDatetime).format('DD/MM/YYYY') + ', 00:00.';

        cy.get('.col-xs-12.margin-bottom-20:last').within(() => {
            cy.get('div.item-header-title').contains(data.couponName);
            cy.get('img').eq(0).invoke('attr', 'src').should('not.be.empty');
            cy.get('img').eq(1).invoke('attr', 'src').should('not.be.empty');
            cy.get('li.list-group-item').eq(0).children().contains('วันที่เริ่มการขาย: ' + data.txtSaleStartAtDatetime);
            cy.get('li.list-group-item').eq(1).children().contains('วันที่เริ่มคูปอง: ' + data.txtStartAtDatetime);
            cy.get('li.list-group-item').eq(2).children()
                .contains('จำนวนแต้มที่ใช้ตัด: ' + data.cuttingPoint)
                .and('contain', 'Promotion Code: ' + data.promotionCode)
                .and('contain', 'GSDeductCampaignQty: ' + data.GSDeductCampaignQty)
                .and('contain', 'Promotion Name: ' + data.PromotionName)
                .and('contain', 'Description: ' + data.Description)
                .and('contain', 'ตัวอักษรบนปุ่มคูปอง: ' + data.maxlenge);
            cy.get('li.list-group-item').eq(3).children().contains('วันที่สิ้นสุดการขาย: ' + data.txtSaleExpireAtDatetime);
            cy.get('li.list-group-item').eq(4).children().contains('วันที่สิ้นสุดคูปอง: ' + data.txtExpireAtDatetime);
            cy.get('li.list-group-item').eq(5).children()
                .contains('Project Code: ' + data.ProjectCode)
                .and('contain', 'GSDeductCampaignId: ' + data.GSDeductCampaignId)
        });
    };
}