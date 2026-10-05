export const profile = {
  name: "Даниил Полыгалов",
  location: "Кыргызстан · удалённо",
  site: { text: "cristalit42.github.io/resume", href: "https://cristalit42.github.io/resume/" },
};

export interface Contact {
  label: string;
  text: string;
  href: string;
}

export const contacts: Contact[] = [
  { label: "Email", text: "cristalit42@gmail.com", href: "mailto:cristalit42@gmail.com" },
  { label: "Telegram", text: "@Cristalit42", href: "https://t.me/Cristalit42" },
  { label: "Номер телефона", text: "+996 555 381881", href: "tel:+996555381881" },
];

export const github = { label: "GitHub", text: "github.com/Cristalit42", href: "https://github.com/Cristalit42" };

/** Ссылки на страницы резюме (учитывают base из vite.config) */
export const resumeLinks = {
  react: `${import.meta.env.BASE_URL}react/`,
  wp: `${import.meta.env.BASE_URL}wp/`,
  hub: import.meta.env.BASE_URL,
};
