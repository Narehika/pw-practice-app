import { Page } from '@playwright/test';

export class HelperBase {
  constructor(protected readonly page: Page) {
    this.page = page;
  }
  async waitForNumberOfSeconds(timeInSeconds: number) {
    await this.page.waitForTimeout(timeInSeconds * 1000);
  }
}
