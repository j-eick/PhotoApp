import { useState } from "react";

const useIndexCounter = (initialValue = 0) => {
  const [state, setState] = useState(initialValue);

  return [
    state,
    {
      countUp: () => setState + 1,
    },
  ];
};

export default useIndexCounter;
