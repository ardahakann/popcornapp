import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
      //Her eklenen filmi depoladığımız yer. Siteyi tekrar yüklediğimizde ise watched stateinin ilk değeri ile geri alıyoruz.
    },
    [value, key]
  );
  return [value, setValue];
}
