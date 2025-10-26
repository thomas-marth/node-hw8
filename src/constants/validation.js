export const title = {
  value: /^[A-Za-z0-9\s.,'-]{2,100}$/,
  message: "Title must be 2–100 characters long and contain valid symbols",
};

export const author = {
  value: /^[A-Za-z\s'-]{2,60}$/,
  message: "Author must contain only letters, spaces, or hyphens (2–60 chars)",
};

export const year = {
  value: /^(1[4-9][5-9]\d|20\d{2}|21[0-4]\d|2050)$/,
  message: `Year must be a 4-digit number between 1450 and 2050`,
};
