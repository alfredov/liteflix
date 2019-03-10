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
    const fReader = new FileReader()
    const img = document.createElement('img')

    fReader.onload = () => {
      img.src = fReader.result
      resolve(getBase64Image(img))
    }

    fReader.readAsDataURL(file)
  })
}

export default {
  upload
}
