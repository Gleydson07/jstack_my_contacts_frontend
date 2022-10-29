import { useCallback } from "react";
import { useState } from "react";

export default function useErrors() {  
  const[errors, setErrors] = useState([]);

  const hasError = !!errors.length;

  const setError = useCallback(({field, message}) => {
    const errorAlreadyExists = errors.find(error => error.field === field);

    if(errorAlreadyExists){
      return;
    }

    setErrors(prevState => [
      ...prevState, 
      {field, message}
    ]);
  }, []);

  const removeError = useCallback(({field}) => {
    setErrors(prevState => prevState.filter(error => error.field !== field));
  }, []);

  const getErrorMessageByFieldName = useCallback((field) => {
    return errors.find(error => error.field === field)?.message;
  }, []);

  return {
    hasError,
    setError,
    removeError,
    getErrorMessageByFieldName
  }
}