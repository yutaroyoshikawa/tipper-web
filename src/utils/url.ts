export const getParamFromUrl = (
  key: string,
  params: { [key: string]: string | string[] }
): string | null => {
  if (!params) {
    return null;
  }

  const param = params[key];

  if (!param) {
    return null;
  }

  return Array.isArray(param) ? param[0] : param;
};
