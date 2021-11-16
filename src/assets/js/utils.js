export function textFormat(text, num) {
  if (text.length > num) {
    return text.slice(0, num - 1) + '...'
  }
  return text
}

export function dateFormat(date) {
  return date.split('T')[0]
}

export function renderImage(url, num1, num2) {
  if (url) {
    return url
  }
  return require(`@/assets/img/noImages/NoImage-${num1}x${num2}.svg`)
}

export function setStorage(item) {
  localStorage.setItem('data', JSON.stringify(item))
}

export function removeStorage() {
  localStorage.removeItem('data')
}
