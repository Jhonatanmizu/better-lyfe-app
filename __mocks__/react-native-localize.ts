export const getLocales = () => [
  {
    languageTag: 'en-US',
    languageCode: 'en',
    countryCode: 'US',
    isRTL: false,
  },
];

export const addEventListener = jest.fn();
export const removeEventListener = jest.fn();
export const findBestLanguageTag = jest.fn(() => ({
  languageTag: 'en-US',
  isRTL: false,
}));
