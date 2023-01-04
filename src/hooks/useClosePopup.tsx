import { useCallback, useState } from "react";

export const useClosePopup = () => {
  const [close, closePopup] = useState(false);
  const setClose = useCallback(() => closePopup((x) => !x), []);
  return { close, setClose };
};
