export const getRandomID = (length: number): string => {
  const abcd = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let id = ''
  for (let i = 0; i < length; i++) {
    const idx = Math.round(Math.random() * (abcd.length - 1))
    id += abcd[idx]
  }

  return id
}
