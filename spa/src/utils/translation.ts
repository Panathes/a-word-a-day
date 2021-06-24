export function findRandomTranslation<T>(filteredTranslations: Array<T>): T {
  const randomIndex = Math.floor(Math.random() * filteredTranslations.length)
  return filteredTranslations[randomIndex]
}