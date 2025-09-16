export const formatDateTR = (isoDate: string): string => {
  const date = new Date(isoDate);

  const day = date.getDate();
  const month = date.toLocaleString("tr-TR", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
