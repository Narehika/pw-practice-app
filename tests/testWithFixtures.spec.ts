import { test } from '../test-options';

test('parametrized methods', async ({ pageManager }) => {
  const { faker } = await import('@faker-js/faker');
  const randomFullName = faker.person.fullName();
  const randomemail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`;

  await pageManager
    .onFormLayoutsPage()
    .submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 2');
  await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomemail, false);
});
