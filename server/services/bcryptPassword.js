import bcrypt from 'bcrypt';

export const generateHash = async (password) => {
  const saltRound = 10;
  const hashedPassword =  await bcrypt.hash(password, saltRound);
  return hashedPassword;
}

export const compare = async(password,hashedPassword) => {
  const match = await bcrypt.compare(password,hashedPassword);
  return match;
}


