import { get } from 'lodash';
import Languages from './languages';

export enum SupportedLangs {
  English = 'english',
}

let currentLanguage: SupportedLangs = SupportedLangs.English;

export function setLanguage(newLang: SupportedLangs) {
  currentLanguage = newLang;
}

export function getLanguage() {
  return currentLanguage;
}

export default function translate(path: string[]) {
  return get(Languages, [currentLanguage, ...path]);
}
