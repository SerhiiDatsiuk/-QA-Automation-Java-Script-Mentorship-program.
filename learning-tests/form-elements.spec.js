import { test, expect } from "@playwright/test";

test("User can interact with different types of UI elements and submit a form", async ({
  page,
}) => {
  await test.step("User navigates to the page", async () => {
    await page.goto("https://play2.automationcamp.ir/");
    await expect(page.locator("h1")).toHaveText(
      "Your Website to practice Automation Testing",
    );
  });

  await test.step("User fills in First Name and Last Name", async () => {
    const firstName = page.getByLabel("First name:");
    const lastName = page.getByLabel("Last name:");

    await firstName.fill("Serhii");
    await expect(firstName).toHaveValue("Serhii");

    await lastName.fill("Datsiuk");
    await expect(lastName).toHaveValue("Datsiuk");
  });

  await test.step("User selects value from available radio buttons", async () => {
    const maleRadioButton = page.getByLabel("Male", { exact: true });
    const femaleRadioButton = page.getByLabel("Female", { exact: true });
    const otherRadioButton = page.getByLabel("Other");

    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();

    await femaleRadioButton.check();
    await expect(femaleRadioButton).toBeChecked();

    await otherRadioButton.check();
    await expect(otherRadioButton).toBeChecked();
  });

  await test.step("User selects available values from dropdown menu", async () => {
    const dropdown = page.getByLabel("Choose an option:");

    await dropdown.selectOption("option 1");
    await expect(dropdown).toHaveValue("option 1");

    await dropdown.selectOption("option 2");
    await expect(dropdown).toHaveValue("option 2");

    await dropdown.selectOption("option 3");
    await expect(dropdown).toHaveValue("option 3");

    await dropdown.selectOption("option");
    await expect(dropdown).toHaveValue("option");
  });

  await test.step("User selects available value from a checkbox", async () => {
    const optionOneCheckbox = page.locator(
      'input[type="checkbox"][value="Option 1"]',
    );

    await optionOneCheckbox.check();
    await expect(optionOneCheckbox).toBeChecked();
  });

  await test.step("User selects available value from combobox", async () => {
    const combobox = page.locator('input[list="datalists"]');

    await combobox.fill("Vanilla");
    await expect(combobox).toHaveValue("Vanilla");
  });

  await test.step("User selects a desired date from date picker", async () => {
    const datePicker = page.locator('input[type="date"]');

    await datePicker.fill("2015-06-11");
    await expect(datePicker).toHaveValue("2015-06-11");
  });

  await test.step("Use sets range slider value", async () => {
    const rangeSlider = page.locator('input[id="a"]');

    await rangeSlider.focus();
    await page.keyboard.press("ArrowRight");

    await expect(rangeSlider).not.toHaveValue("50");
  });

  await test.step("User attaches an input file", async () => {
    const fileInput = page.getByLabel("Select a file:");

    await fileInput.setInputFiles(
      "D:/Zilliant/Pricing Plus/Import Data/Core Data/Products/Products.CSV",
    );

    const selectedFileName = await fileInput.evaluate(
      (input) => input.files[0].name,
    );
    expect(selectedFileName).toBe("Products.CSV");
  });

  await test.step("User selects ranges from the quantity ranges", async () => {
    const quantityInput = page.getByLabel("Select a quantity from a range:");

    await quantityInput.fill("1");
    await quantityInput.press("ArrowUp");
    await expect(quantityInput).toHaveValue("2");

    await quantityInput.press("ArrowDown");
    await expect(quantityInput).toHaveValue("1");
  });

  await test.step("User enters text in the textbox", async () => {
    const textBox = page.locator('textarea[name="message"]');

    await expect(textBox).toHaveValue("The cat was playing in the garden.");

    await textBox.fill("It's my first automation test");
    await expect(textBox).toHaveValue("It's my first automation test");
  });

  await test.step("Verify whether the header 6 contains a correct text", async () => {
    const submitHintHeader = page.locator("h6");

    await expect(submitHintHeader).toHaveText(
      "Clicking the submit button will take you to a new tab",
    );
  });

  await test.step("Verify that the 'Submit' button is visible and is enabled", async () => {
    const submitButton = page.getByRole("button", { name: "Submit" });

    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  });

  await test.step("User submits the form and new tab is opened", async () => {
    const newPagePromise = page.waitForEvent("popup");
    const submitButton = page.getByRole("button", { name: "Submit" });

    await submitButton.click();
    const newPage = await newPagePromise;
    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL(/google/);
  });
});
