# NikaTsulaiaCV

Portfolio and CV site for **Nika Tsulaia** — IT specialist and digital solutions engineer.

## Stack

- Next.js 15 (static export)
- React 19, Tailwind CSS v4, Framer Motion
- RU / KA / EN via `src/i18n/translations.ts`
- PDF resumes generated at build time (`@react-pdf/renderer`)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## CV (PDF)

```bash
npm run generate:cv
```

Files are written to `public/cv/` and included in the production build.

## Production build

```bash
npm run build
```

Exports the static site to `out/`.

## Deploy (Vercel)

The project is configured for Vercel with `output: 'export'`. Connect the GitHub repo **NikaTsulaiaCV** or run:

```bash
vercel --prod
```

## Contact

- Email: nikegeorgian@gmail.com
- WhatsApp: +995 598 57 17 85
- Location: Tbilisi, Georgia
