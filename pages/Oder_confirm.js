class OrderConfirm {
    constructor(page) {
        this.page = page;
    }
// this is order page
    async getOrderId() {

        await this.page.waitForSelector('#order_no');

        const orderId = await this.page.getAttribute('#order_no', 'value');

        console.log("Your Order ID:", orderId);

    }

}

module.exports = {OrderConfirm};
//  tester editing 
// testerA correcting