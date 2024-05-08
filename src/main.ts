import { compressImages } from "./api";

const inputFile = document.querySelector("input[type=file]");
if (inputFile) {
  inputFile.addEventListener("change", async (event) => {
    const target = event.target as HTMLInputElement;
    if (!target.files) {
      return;
    }

    const compressedImage = await compressImages(target.files);
  });
}
