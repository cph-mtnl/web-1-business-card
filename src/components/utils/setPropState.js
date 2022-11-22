import { useState } from "react";

const test = {
  name: "Hey",
  age: 29,
};

export const usePropState = (initialState) => {
  const [state, setState] = useState(initialState);

  const setPropState = (key) => (value) => {
    setState({ ...state, [key]: value });
  };

  return [state, setPropState, setState];
};
