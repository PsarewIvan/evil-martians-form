export const checkPass = (pass: string, rePass: string): boolean => {
  if (pass === rePass) {
    return true;
  }
  return false;
};
