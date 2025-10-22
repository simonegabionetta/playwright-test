import { test, expect} from 'playwright/test' //test=escrever teste, expect=asserçoes

//AAA Pattern

//Arange: variveis,  imports
//Act: cliques,açoes,selecionar
//Assert:expect

const password = process.env.PASSWORD; // ex: Arrange

test.beforeAll(async({playwright})=> {
    test.skip(
        !!process.env.PROD,
        'test intentionally skipped in production due to data dependency' //se prod pulado
    );
    //Before All usar para:
    //start a server
    //create a db connection
    //reuse a sign in state: login automaticamente
});

test.beforeEach(async({page}, testInfo)=> {
    console.log(`Running ${testInfo.title}`);
    //open a URL
    //clean up the BD
    //create a page object
    //dismiss a modal
    //load params     
});

test.afterAll(async({page}, testInfo)=> {
    console.log(`Running ${testInfo.title}`);
    //close a DB connection
})

test.afterEach(async({page}, testInfo)=> {
    console.log(`Running ${testInfo.title}`);
    //status especifico
})
test.describe.skip('Test Case', () => { //teste case
    test('Test Scenario ONe', async({page})=> {

    })
})

//indicação p/ manutençao usar apenas 1 describe por pagina e colocar beforre all before it acima
//facilita manutenção