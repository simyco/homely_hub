export const truncate = (str: string, n: number) => {
  return str.length > n ? str.slice(0, n - 1) + '...' : str;
};

export const getInitials = (str?: string) => {
  if (!str) {
    return '';
  }
  return str
    .replace(/[^a-zA-Z- ]/g, '')
    .match(/\b\w/g)
    ?.join('');
};
