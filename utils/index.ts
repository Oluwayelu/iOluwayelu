export const diffDate = (date1: Date, date2: Date) => {
  const m = 1000 * 60 * 60 * 24;

  const diff = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
  return Math.abs(Math.round(diff / 365.25));
};
