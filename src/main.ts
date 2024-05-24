import { compressImages } from "./api";

function writeSuccessText(compressedImage: any[]) {
  if (compressedImage.length > 0) {
    const main = document.querySelector("main");
    if (main) {
      main.innerHTML = "<div>Successfully uploaded image</div>";
    }
  }
}

const inputFile = document.querySelector("input[type=file]");
if (inputFile) {
  inputFile.addEventListener("change", async (event) => {
    const target = event.target as HTMLInputElement;
    if (!target.files) {
      return;
    }

    const compressedImage = await compressImages(target.files);

    writeSuccessText(compressedImage);
  });
}
