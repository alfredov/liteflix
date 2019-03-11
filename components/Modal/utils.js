export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function wait(ms) {
  return x => new Promise(resolve => setTimeout(() => resolve(x), ms))
}

export function upload(formData) {
  const photos = formData.getAll('photos')
  const promises = photos.map(x =>
    getImage(x).then(img => ({
      id: img,
      originalName: x.name,
      fileName: x.name,
      url: img
    }))
  )
  return Promise.all(promises)
}

export function getBase64Image(img) {
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  const dataURL = img.src
  return dataURL
}

export function getImage(file) {
  return new Promise((resolve, reject) => {
    const format = file.type.split('/')[0]
    if (format !== 'image') {
      /* eslint-disable  prefer-promise-reject-errors */
      reject('File type must be an Image format')
    }
    const fReader = new FileReader()
    const img = document.createElement('img')

    fReader.onload = () => {
      img.src = fReader.result
      resolve(getBase64Image(img))
    }

    fReader.readAsDataURL(file)
  })
}

const desktopWidth = '1024px'
export function viewportIsRunningInDesktop() {
  if (process.browser) {
    return window.matchMedia(`(min-width: ${desktopWidth})`).matches
  }
  return false
}

export default {
  upload
}
