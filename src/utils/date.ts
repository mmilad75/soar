import dayjs from 'dayjs';

export const getHumanReadableDate = (dateString: string): string => {
  return dayjs(dateString).format('DD MMMM YYYY');
};
