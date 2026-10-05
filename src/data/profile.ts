import type { Localized } from "../i18n/locale";

export const SITE_ORIGIN = "https://cristalit42.github.io";

export const profile: { name: Localized<string>; location: Localized<string> } = {
  name: { ru: "Даниил Полыгалов", en: "Daniil Polygalov" },
  location: { ru: "Кыргызстан · удалённо", en: "Kyrgyzstan · Remote · GMT+6" },
};

export interface Contact {
  label: Localized<string>;
  text: string;
  href: string;
}

export const contacts: Contact[] = [
  { label: { ru: "Email", en: "Email" }, text: "cristalit42@gmail.com", href: "mailto:cristalit42@gmail.com" },
  { label: { ru: "Telegram", en: "Telegram" }, text: "@Cristalit42", href: "https://t.me/Cristalit42" },
  { label: { ru: "Номер телефона", en: "Phone" }, text: "+996 555 381881", href: "tel:+996555381881" },
];

export const github = { text: "github.com/Cristalit42", href: "https://github.com/Cristalit42" };
