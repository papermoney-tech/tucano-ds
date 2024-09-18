// packages/shared-translates/index.d.ts

export interface Translations {
    [key: string]: any;
}
  
declare const translations: {
    [locale: string]: Translations;
};
  
export default translations;
  