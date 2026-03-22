class SelectHotelPage{
    constructor(page)
    {
        this.page=page;
      
    }

    async selectHotel()
    {
       await this.page.click('#radiobutton_0')
       await this.page.click('#continue')
    }
}
module.exports={SelectHotelPage}