import { expect, test } from "@playwright/test";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { join } from "path";

test("has title", async ({ page }) => {
  await page.goto("/");

  // img upload
  const _dirname = dirname(fileURLToPath(import.meta.url));
  const img1 = join(_dirname, "./testdata/img1.jpg");
  const img2 = join(_dirname, "./testdata/img2.jpg");
  await page.getByTestId("image-upload").setInputFiles([img1, img2]);

  await expect(page.getByText("Playwright test")).toBeVisible();
});
