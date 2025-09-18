import { test } from '@playwright/test';

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    // 📸 Screenshot
    const screenshot = await page.screenshot();
    testInfo.attachments.push({
      name: 'Screenshot on Failure',
      body: screenshot,
      contentType: 'image/png',
    });

    // 🎥 Video
    if (testInfo.video) {
      testInfo.attachments.push({
        name: 'Test Video',
        path: await testInfo.video.path(),
        contentType: 'video/webm',
      });
    }

    // 🧩 Trace
    for (const attachment of testInfo.attachments) {
      if (attachment.name === 'trace') {
        testInfo.attachments.push({
          name: 'Trace',
          path: attachment.path,
          contentType: 'application/zip',
        });
      }
    }
  }
});

