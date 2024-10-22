// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefineLocaleMessage } from "vue-i18n";
import type { BaseLocal } from "~base/locales/en";

declare module "vue-i18n" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefineLocaleMessage extends BaseLocal {}
}
