async function compressImages(images: FileList): Promise<File[]> {
  const files: File[] = [];
  if (window.Worker) {
    const myWorker = new Worker(new URL("./worker.ts", import.meta.url));

    for (const image of images) {
      myWorker.postMessage(image);
      console.log("Message posted to worker");

      await new Promise<void>((resolve) => {
        myWorker.onmessage = (e: MessageEvent<File>) => {
          console.log("Message received from worker", e.data);
          files.push(e.data);
          resolve();
        };
      });
    }
  } else {
    console.log("Your browser doesn't support web workers.");
  }
  return files;
}

export { compressImages };
