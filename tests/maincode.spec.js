const { test } = require('@playwright/test')
const { LoginPage } = require('../pages/loginpagelocator')
const { Welcomepage } = require('../pages/welcomepage')
const { SelectHotelPage } = require('../pages/select_hotel')
const { BookHotel } = require('../pages/book_hotel')
const { OrderConfirm } = require('../pages/Oder_confirm')

const { read } = require('../excelfiles/excelreuse');

test('login page', async ({ page }) => {

    const data=read();

    const loginpg = new LoginPage(page)
    await loginpg.navigate()
    await loginpg.adtinlogin()

    const welcomepage = new Welcomepage(page)
    await welcomepage.search(data);

    const selectHotelPage = new SelectHotelPage(page)
    await selectHotelPage.selectHotel()


    const bookhotel = new BookHotel(page)
    await bookhotel.booking(data)

    const ordercc = new OrderConfirm(page)
    await ordercc.getOrderId()
})