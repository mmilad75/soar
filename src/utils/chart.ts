// Custom discontinuity provider
export const skipNonMonthStartDates = () => {
  return {
    // Exclude any date that is not the first day of the month
    distance: (start: Date, end: Date) => {
      let totalSkipped = 0;
      const current = new Date(start);
      while (current <= end) {
        // If the current date is not the first of the month, skip it
        if (current.getDate() !== 1) {
          totalSkipped++;
        }
        current.setDate(current.getDate() + 1); // Move to the next day
      }
      return totalSkipped * (24 * 60 * 60 * 1000); // Skip in milliseconds
    },
    // If a date is not the first day of the month, treat it as invalid
    isValid: (date: Date) => date.getDate() === 1,
    // Snap to the nearest valid date (first day of the month)
    offset: (date: Date, milliseconds: number) => {
      const result = new Date(date.getTime() + milliseconds);
      if (result.getDate() !== 1) {
        result.setDate(1); // Snap to the first of the month
      }
      return result;
    },
    clampUp: (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1),
    clampDown: (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1),
  };
};
