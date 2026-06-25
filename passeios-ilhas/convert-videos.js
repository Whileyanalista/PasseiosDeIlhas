// convert-videos.js
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import chalk from "chalk";

const inputDir = path.join(process.cwd(), "public/videos");

// Extensões de vídeo suportadas
const videoExtensions = [".mp4", ".mov", ".avi", ".mkv"];

function runCommand(command, description) {
  try {
    console.log(chalk.blue(`▶ ${description}...`));
    execSync(command, { stdio: "inherit" });
    console.log(chalk.green(`✔ ${description} concluído!`));
  } catch (err) {
    console.error(chalk.red(`✖ Erro em ${description}:`), err.message);
  }
}

// Percorre todos os arquivos da pasta
fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);

  if (videoExtensions.includes(ext)) {
    const inputFile = path.join(inputDir, file);

    const outputs = {
      mp4: path.join(inputDir, `${baseName}-optimized.mp4`),
      webm: path.join(inputDir, `${baseName}-optimized.webm`),
      poster: path.join(inputDir, `${baseName}-poster.jpg`),
    };

    console.log(chalk.yellow(`\n🎬 Processando vídeo: ${file}`));

    // Converter para MP4 otimizado (H.265)
    if (!fs.existsSync(outputs.mp4)) {
      runCommand(
        `ffmpeg -i "${inputFile}" -c:v libx265 -crf 28 -preset slow -c:a aac -b:a 128k "${outputs.mp4}"`,
        `Conversão para MP4 (H.265) - ${file}`
      );
    } else {
      console.log(chalk.gray(`↺ Já existe: ${outputs.mp4}`));
    }

    // Converter para WebM (VP9)
    if (!fs.existsSync(outputs.webm)) {
      runCommand(
        `ffmpeg -i "${inputFile}" -c:v libvpx-vp9 -b:v 2M -c:a libopus "${outputs.webm}"`,
        `Conversão para WebM (VP9) - ${file}`
      );
    } else {
      console.log(chalk.gray(`↺ Já existe: ${outputs.webm}`));
    }

    // Gerar poster (frame estático)
    if (!fs.existsSync(outputs.poster)) {
      runCommand(
        `ffmpeg -i "${inputFile}" -ss 00:00:03 -vframes 1 "${outputs.poster}"`,
        `Gerar poster estático - ${file}`
      );
    } else {
      console.log(chalk.gray(`↺ Já existe: ${outputs.poster}`));
    }
  }
});

console.log(chalk.green("\n✅ Otimização de vídeos concluída com sucesso!"));
