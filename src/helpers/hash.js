import bcrypt from 'bcrypt'

// ctrl que genera hash
export const hashString = async (text) => {
  return await bcrypt.hash(text, 10)
}