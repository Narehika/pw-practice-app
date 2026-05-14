import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('navigate to form page @smoke', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage();
  await pm.navigateTo().datepickerPage();
  await pm.navigateTo().smartTablePage();
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().tooltipPage();
});

test('parametrized methods', async ({ page }) => {
  const { faker } = await import('@faker-js/faker');
  const pm = new PageManager(page);
  const randomFullName = faker.person.fullName();
  const randomemail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`;

  await pm.navigateTo().formLayoutsPage();
  await pm
    .onFormLayoutsPage()
    .submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 2');
  await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomemail, false);
  // await pm.navigateTo().datepickerPage();
  // await pm.onDatepickerPage().selectCommonDatepickerDateFromToday(5);
  // await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(1, 6);
});

test.only('navigate with argos ci', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage();
  await pm.navigateTo().datepickerPage();
  await pm.navigateTo().smartTablePage();
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().tooltipPage();
});
