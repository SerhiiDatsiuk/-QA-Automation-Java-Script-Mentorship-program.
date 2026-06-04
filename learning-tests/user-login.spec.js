import { test, expect } from "@playwright/test";

test("User sees an error message after entering invalid username and password", async ({
  page,
}) => {
  await test.step("User navigates to the page", async () => {
    await page.goto("https://play2.automationcamp.ir/");
  });

  await test.step("User enters invalid username and password", async () => {
    const usernameTextField = page.getByLabel("Username:");
    const passwordTextField = page.getByLabel("Password:");

    await usernameTextField.fill("Serhii Datsiuk");
    await expect(usernameTextField).toHaveValue("Serhii Datsiuk");

    await passwordTextField.fill("qwerty");
    await expect(passwordTextField).toHaveValue("qwerty");
  });

  await test.step("User clicks the Login button and pop-up message is displayed", async () => {
    const loginButton = page.getByRole("button", { name: "Login" });

    let dialogMessage = "";

    page.once("dialog", async (dialog) => {
      dialogMessage = dialog.message();
      await dialog.accept();
    });

    await loginButton.click();

    expect(dialogMessage).toContain("Wrong Credentials! Try again!");
  });
});
