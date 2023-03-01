export const generalQuery = {
  query: {},
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

export const generalFailsQuery = {
  query: {
    success: false,
  },
  options: {
    limit: 0,
  },
};
