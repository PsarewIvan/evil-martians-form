import { useCallback, useState } from 'react';

const useFormField = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((value: string) => setValue(value), []);
  return { value, onChange };
};

export default useFormField;
