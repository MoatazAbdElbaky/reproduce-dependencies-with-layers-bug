// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { en } from "~base/locales/en";
import { ar } from "~base/locales/ar";
import {defineI18nConfig} from "#i18n"

const messages = {
  en,
  ar,
};

export default defineI18nConfig(() => ({
  locale: "en",
  messages: messages,
}));
