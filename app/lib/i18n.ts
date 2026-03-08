// Список поддерживаемых языков
export const SUPPORTED_LANGS = ["en", "ru"] as const;

// Тип для TypeScript, чтобы он знал, что мы работаем только с этими языками
export type SupportedLng = (typeof SUPPORTED_LANGS)[number];

// Язык по умолчанию
export const DEFAULT_LANG: SupportedLng = "ru";

/**
 * Вспомогательная функция (понадобится позже), 
 * которая проверяет, поддерживаем ли мы такой язык
 */
export function isSupportedLang(lng: string): lng is SupportedLng {
  return SUPPORTED_LANGS.includes(lng as SupportedLng);
}