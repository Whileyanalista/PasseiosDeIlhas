// convert-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "public");
const outputFormats = ["webp", "avif"];

function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;

  const baseName = filePath.replace(ext, "");

  outputFormats.forEach((format) => {
    const outputPath = `${baseName}.${format}`;
    if (!fs.existsSync(outputPath)) {
      sharp(filePath)
        .toFormat(format, { quality: 85 })
        .toFile(outputPath)
        .then(() => console.log(`✔ Gerado: ${outputPath}`))
        .catch((err) =>
          console.error(`Erro ao converter ${filePath}:`, err)
        );
    } else {
      console.log(`↺ Já existe: ${outputPath}, não convertido novamente`);
    }
  });
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else {
      convertImage(fullPath);
    }
  });
}

walkDir(inputDir);
