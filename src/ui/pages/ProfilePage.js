import { testStep } from '../../common/helpers/pw';
import { expect } from '@playwright/test';

export class ProfilePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step(`Open your profile page`, async () => {
      await this.page.goto('/profile');
    });
  }

  async assertUsernameVisible(username) {
    await this.step(`Verify username is visible: ${username}`, async () => {
      const usernameHeading = this.page.getByRole('heading', {
        name: username,
      });
      await expect(usernameHeading).toBeVisible();
    });
  }
}
