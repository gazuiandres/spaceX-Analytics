export const generalFalcon9Query = {
  query: {
    rocket: "5e9d0d95eda69973a809d1ec",
  },
  options: {
    pagination: false,
    sort: {
      date_utc: "asc",
    },
    select: {
      date_utc: 1,
    },
  },
};

export const generalFalcon9FailsQuery = {
  query: {
    rocket: "5e9d0d95eda69973a809d1ec",
    success: false,
  },
  options: {
    limit: 0,
  },
};
