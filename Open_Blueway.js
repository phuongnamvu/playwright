const playwright=require ('playwright');

(async () =>{
            //Blueway Login Here 
            const browser = await playwright["chromium"].launch({
                
                headless:false
            });
               
            // New Context 

            
            const context = await browser.newContext();

            //new Page 
            const page = await context.newPage();

            // Navigation to Blueway 
            await page.goto("http://cd.blueway.fr:20104/BWDesignerFaces/");
            

})();