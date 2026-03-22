class Welcomepage{
    constructor(page)
    {
        this.page=page;
       
     }
     // this is welcome page  
     
     async search(data)
     {
        await this.page.selectOption('#location',data.location)
        
        await this.page.selectOption('#hotels',data.hotels)
        await this.page.selectOption('#room_type',data.room_type)
        await this.page.selectOption('#room_nos',data.room_nos)
        await this.page.fill('#datepick_in',data.check_In)
        await this.page.fill('#datepick_out',data.check_Out)
        await this.page.selectOption('#adult_room',data.Adults)
        await this.page.selectOption('#child_room',data.Children)
        await this.page.click('#Submit')
        
     }
}
module.exports={Welcomepage}