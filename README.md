# Issue

This is the example repo for issue https://github.com/microsoft/playwright/issues/31004. It showcases that [`OffscreenCanvas`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) inside a webworker on webkit is working for local environment but not for Github Actions.

You can find the failing codeline in the [`worker.ts`](./src/worker.ts) file.

## Steps to reproduce


1. Clone my repo at: https://github.com/Theiaz/playwright-bug-webkit (or at least have a look at the [pipeline](https://github.com/Theiaz/playwright-bug-webkit/actions) and download the artifact)
2. Run `npm i`
3. Run tests locally `npm run test` --> Success
4. Deploy project with github actions  --> test failure
5. Open "Run actions/upload-artifact@v4" job and find the link to download the artifact (playwright report)
6. Unzip the report and open it with `npx playwright show-report ~/Downloads/playwright-report`
7. Open the trace file for webkit and have a look at the console log