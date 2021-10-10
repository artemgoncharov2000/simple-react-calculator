export const canAddDot = (value: string): boolean => {
  if (value.length === 0) {
    return false;
  }

  return !value.includes('.');
}

export const addDot = (value: string): string => {

  if (canAddDot(value)) {
    return`${value}.`;
  }

  return value;
}

export const addSign = (value: string): string => {
  if (!value) {
    return '';
  }
  let floatValue = parseFloat(value);
  floatValue = -floatValue;
  return String(floatValue);
}