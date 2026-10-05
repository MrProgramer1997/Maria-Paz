import {
  photoDiscoCake,
  photoSaveDate,
  photoCakeClose,
  photoNewspaper,
  confettiB64,
  portraitB64,
  familyB64,
} from './photos'

const jpegPrefix = ['data', 'image/jpeg;base64'].join(':') + ','

export {
  photoDiscoCake,
  photoSaveDate,
  photoCakeClose,
  photoNewspaper,
}

export const photoConfetti = jpegPrefix + confettiB64.trim()
export const photoPortrait = jpegPrefix + portraitB64.trim()
export const photoFamily = jpegPrefix + familyB64.trim()
