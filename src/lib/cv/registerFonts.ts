import path from "path";
import { Font } from "@react-pdf/renderer";

let registered = false;

export function registerCvFonts() {
  if (registered) return;

  const fontsDir = path.join(process.cwd(), "public", "fonts");

  Font.register({
    family: "CVFont",
    fonts: [
      {
        src: path.join(fontsDir, "NotoSans-Regular.ttf"),
        fontWeight: 400,
      },
      {
        src: path.join(fontsDir, "NotoSans-Bold.ttf"),
        fontWeight: 700,
      },
    ],
  });

  Font.register({
    family: "CVFontGeorgian",
    fonts: [
      {
        src: path.join(fontsDir, "NotoSansGeorgian-Regular.ttf"),
        fontWeight: 400,
      },
      {
        src: path.join(fontsDir, "NotoSansGeorgian-Bold.ttf"),
        fontWeight: 700,
      },
    ],
  });

  registered = true;
}

export function cvFontFamily(lang: string) {
  return lang === "ka" ? "CVFontGeorgian" : "CVFont";
}
