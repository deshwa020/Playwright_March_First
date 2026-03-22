class BaseReuse{

    static async navigateToUrl(page,url){
        await page.goto(url)
    }
    static async clickElement(page,locator){
        await page.click(locator)
    }
    static async fillInput(page,locator,value){
        await page.fill(locator,value)
    }
}
module.exports={BaseReuse}