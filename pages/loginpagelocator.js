const { BaseReuse } = require("../utility/base");
const { baseurl,user,pass } = require("../utility/env");

class LoginPage{
    constructor(page){
        this.page=page;
        this.user="#username"
        this.pass="#password"
        this.login="#login"
    
    }
    async navigate()
    {
        await BaseReuse.navigateToUrl(this.page,baseurl)
    }
    async adtinlogin()
    {
        await BaseReuse.fillInput(this.page,this.user,user)
        await BaseReuse.fillInput(this.page,this.pass,pass)
        await BaseReuse.clickElement(this.page,this.login)
    }
}
module.exports={LoginPage}