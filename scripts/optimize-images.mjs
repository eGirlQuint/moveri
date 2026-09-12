// One-off / re-runnable image pipeline: takes the original source photos (kept outside
// the repo's shipped bundle) and produces resized, compressed WebP assets in
// public/images. Re-run with `npm run optimize-images` after dropping in a new photo.
import sharp from "sharp"
import path from "node:path"
import fs from "node:fs"

// NOTE: the figma_sketch reference folder these originally came from has
// since been removed. Point MOVERI_SOURCE_DIR at wherever the source photos
// live now before re-running this against the `photos`/`logos` lists below.
const SRC_DIR = process.env.MOVERI_SOURCE_DIR || path.resolve("../figma_sketch/src/imports")
const OUT_DIR = path.resolve("public/images")

fs.mkdirSync(OUT_DIR, { recursive: true })

// Photos: lossy WebP, resized to ~2x the largest logical display size on the site.
// `cropVertical` (0-0.5) trims that fraction off both the top and bottom before resizing.
const photos = [
  { src: "ChatGPT_Image_Aug_14__2026__02_44_13_PM-1.png", out: "hero-main.webp", width: 1280 },
  { src: "725120878_1535352544820724_2883517574817214999_n-1.jpg", out: "hero-fill.webp", width: 1280 },
  { src: "WhatsApp_Image_2026-08-11_at_23.31.46__1_-1.jpeg", out: "werkwijze-photo.webp", width: 1000, cropVertical: 0.10 },
  { src: "Aangepaste_foto_coach_speler_over_Irene.png", out: "over-moveri-home.webp", width: 1200 },
  { src: "WhatsApp_Image_2026-08-11_at_23.31.45__1_-2.jpeg", out: "diensten-begeleiding.webp", width: 1250 },
  { src: "IMG_0070-1.JPEG", out: "diensten-educatie.webp", width: 1100 },
  { src: "WhatsApp_Image_2026-08-11_at_23.31.46__3_-2.jpeg", out: "diensten-expertise.webp", width: 1250 },
  { src: "WhatsApp_Image_2026-07-15_at_18.30.55.jpeg", out: "over-irene-bio.webp", width: 1280 },
  // Actueel: extracted from "Website MOVERI_actueel_tekst en foto's.pdf" — swap in
  // higher-res originals under these same source names whenever they're supplied.
  { src: "actueel-juichen.jpeg", out: "actueel-juichen.webp", width: 1280 },
  { src: "actueel-druk-hero.jpeg", out: "actueel-druk-hero.webp", width: 900 },
  { src: "actueel-druk-succes.jpeg", out: "actueel-druk-succes.webp", width: 700 },
  { src: "actueel-druk-focuskaart.jpeg", out: "actueel-druk-focuskaart.webp", width: 500 },
  { src: "actueel-trias.jpeg", out: "actueel-trias.webp", width: 900 },
  { src: "actueel-ascent.jpeg", out: "actueel-ascent.webp", width: 900 },
  { src: "actueel-tides.jpeg", out: "actueel-tides.webp", width: 900 },
  { src: "actueel-tides-kathryn.jpeg", out: "actueel-tides-kathryn.webp", width: 300 },
]

// Logos: lossless WebP (keeps text/edges crisp), resized modestly for retina.
const logos = [
  { src: "Logo_Moveri_pink.png", out: "logo-moveri.webp", width: 480 },
  { src: "cropped-Logo-1.png", out: "logo-partner-ascent.webp", width: 200 },
  { src: "Logo_Groot_Zwart_1.png", out: "logo-partner-4itruvian.webp", width: 220 },
  { src: "Logo_18_yards.png", out: "logo-partner-18yards.webp", width: 220 },
  { src: "GAA_TIDES_logo-1.png", out: "logo-partner-tides.webp", width: 200 },
  { src: "Trias_kleur_met_zeshoek_zonder_lint_transparant.png", out: "logo-partner-trias.webp", width: 220 },
]

async function run() {
  let totalIn = 0
  let totalOut = 0

  for (const { src, out, width, cropVertical } of photos) {
    const inputPath = path.join(SRC_DIR, src)
    const outputPath = path.join(OUT_DIR, out)
    const inputSize = fs.statSync(inputPath).size
    let pipeline = sharp(inputPath)
    if (cropVertical) {
      const { width: w, height: h } = await pipeline.metadata()
      const cut = Math.round(h * cropVertical)
      pipeline = pipeline.extract({ left: 0, top: cut, width: w, height: h - cut * 2 })
    }
    await pipeline
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outputPath)
    const outputSize = fs.statSync(outputPath).size
    totalIn += inputSize
    totalOut += outputSize
    console.log(`${src} -> ${out}  ${(inputSize / 1024).toFixed(0)}KB -> ${(outputSize / 1024).toFixed(0)}KB`)
  }

  for (const { src, out, width } of logos) {
    const inputPath = path.join(SRC_DIR, src)
    const outputPath = path.join(OUT_DIR, out)
    const inputSize = fs.statSync(inputPath).size
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ lossless: true })
      .toFile(outputPath)
    const outputSize = fs.statSync(outputPath).size
    totalIn += inputSize
    totalOut += outputSize
    console.log(`${src} -> ${out}  ${(inputSize / 1024).toFixed(0)}KB -> ${(outputSize / 1024).toFixed(0)}KB`)
  }

  console.log(`\nTotal: ${(totalIn / 1024 / 1024).toFixed(2)}MB -> ${(totalOut / 1024 / 1024).toFixed(2)}MB`)
}

run()
