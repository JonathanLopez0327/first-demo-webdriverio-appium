describe('Login Page', () => {
    it('should login with valid credentials', async () => {
        await $("~test-Username").setValue("standard_user");
        await $("~test-Password").setValue("secret_sauce");
        await $("~test-LOGIN").click();
        await expect($("~test-PRODUCTS")).toBeDisplayed();
        await browser.pause(1000);
    });
});