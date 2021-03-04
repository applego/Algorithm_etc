export function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string
): boolean {
  if (enteredCode !== correctCode) return false;
  const cDate = Date.parse(currentDate);
  const eDate = Date.parse(expirationDate);
  if (!cDate || !eDate) return false;
  if (cDate > eDate) return false;
  return true;
}
