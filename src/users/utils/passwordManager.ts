import * as bcrypt from 'bcrypt';

export const encryptPassword = async (pass: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
  } catch (error) {
    console.log(error);
  }
};

export const validatePassword = async (
  password: string,
  encryptedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, encryptedPassword);
};
