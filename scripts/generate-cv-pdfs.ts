import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import fs from "fs";
import path from "path";
import { registerCvFonts } from "../src/lib/cv/registerFonts";
import { CvDocument } from "../src/lib/cv/CvDocument";
import { cvFilenames } from "../src/lib/cv/cvLabels";
import type { Language } from "../src/i18n/translations";

const root = process.cwd();
const outDir = path.join(root, "public", "cv");

function getPhotoDataUri(): string | undefined {
  const photoPath = path.join(root, "public", "photo.jpg");
  if (!fs.existsSync(photoPath)) return undefined;
  const buffer = fs.readFileSync(photoPath);
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const photoSrc = getPhotoDataUri();
  const langs: Language[] = ["ru", "ka", "en"];

  registerCvFonts();

  for (const lang of langs) {
    const buffer = await renderToBuffer(
      React.createElement(CvDocument, { lang, photoSrc })
    );
    const outfile = path.join(outDir, cvFilenames[lang]);
    fs.writeFileSync(outfile, buffer);
    console.log(`Generated: ${outfile} (${buffer.length} bytes)`);
  }

  console.log("Done — CV PDFs in public/cv/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
