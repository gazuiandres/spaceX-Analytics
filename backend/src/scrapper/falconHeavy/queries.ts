export const generalFalconHeavyQuery = {
  query: {
    rocket: "5e9d0d95eda69974db09d1ed",
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

export const falconHeavyFailsQuery = {
  query: {
    rocket: "5e9d0d95eda69974db09d1ed",
    success: false,
  },
  options: {
    limit: 0,
  },
};
