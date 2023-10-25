import { useState } from "react";

/**
 * When a query is made, this hook saves an array with all fetched objects inside an array,
 * here: previousQueries:
 * [ [10 Objects], [10 Objects], ... ]
 *
 * @param {*} initialValue
 * @returns
 */
const usePreviousQueries = (initialValue = "") => {
  const [previousQueries, setPreviousQueries] = useState(initialValue);

  return [
    previousQueries,
    {
      newSearchQuery: (query) => {
        setPreviousQueries(query);
      },
    },
  ];
};

export default usePreviousQueries;
