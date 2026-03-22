class BookHotel{
    constructor(page){

        this.page=page;
    
    }
// hotel booking
    async booking(data)
    {
        await this.page.fill('#first_name',data.firstName)
        await this.page.fill('#last_name',data.lastName)
        await this.page.fill('#address',data.address)
        await this.page.fill('#cc_num',data.cardNo)
        await this.page.selectOption('#cc_type',data.cardType)
        await this.page.selectOption('#cc_exp_month',data.expiryMonth)
        await this.page.selectOption('#cc_exp_year', { label: String(data.expiryYear) });
       await this.page.fill('#cc_cvv', data.cvv.toString());
        await this.page.click('#book_now');
        
    }
}
module.exports={BookHotel}
