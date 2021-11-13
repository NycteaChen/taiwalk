export function textFormat(text, num) {
  if (text.length > num) {
    return text.slice(0, num - 1) + '...'
  }
  return text
}
