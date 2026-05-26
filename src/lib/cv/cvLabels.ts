import type { Language } from "@/i18n/translations";

export const cvLabels: Record<
  Language,
  {
    cvTitle: string;
    download: string;
    about: string;
    experience: string;
    skills: string;
    highlights: string;
    languages: string;
    contacts: string;
  }
> = {
  ru: {
    cvTitle: "Резюме",
    download: "Скачать резюме (PDF)",
    about: "Обо мне",
    experience: "Опыт работы",
    skills: "Навыки",
    highlights: "Ключевые достижения",
    languages: "Языки",
    contacts: "Контакты",
  },
  ka: {
    cvTitle: "რეზიუმე",
    download: "რეზიუმეს ჩამოტვირთვა (PDF)",
    about: "ჩემ შესახებ",
    experience: "სამუშაო გამოცდილება",
    skills: "უნარები",
    highlights: "ძირითადი მიღწევები",
    languages: "ენები",
    contacts: "კონტაქტი",
  },
  en: {
    cvTitle: "Resume",
    download: "Download CV (PDF)",
    about: "About",
    experience: "Experience",
    skills: "Skills",
    highlights: "Key achievements",
    languages: "Languages",
    contacts: "Contact",
  },
};

/** Static PDFs in public/cv/ — do not overwrite via npm run generate:cv */
export const cvFilenames: Record<Language, string> = {
  ru: "Nika_Tsulaia_CV_RU.pdf",
  ka: "Nika_Tsulaia_CV_KA.pdf",
  en: "Nika_Tsulaia_CV_EN.pdf",
};
