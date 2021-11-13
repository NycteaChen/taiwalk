export function textFormat(text, num) {
  if (text.length > num) {
    const newText = text.slice(0, num - 1) + '...'
    return newText
  }
}
