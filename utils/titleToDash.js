import elementToText from './elementToText'

const titleToDash = title => (
  elementToText(title)
    .toLowerCase()
    .replace(/[^\u4E00-\u9FA5a-zA-Z\d\s]/g, '')
    .replace(/\s+/g, '-')
)

export default titleToDash
