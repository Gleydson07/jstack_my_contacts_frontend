import { useState } from "react";

export default function useErrors() {  
  const[errors, setErrors] = useState([]);

  const hasError = !!errors.length;

  const setError = ({field, message}) => {
    const errorAlreadyExists = errors.find(error => error.field === field);

    if(errorAlreadyExists){
      return;
    }

    setErrors(prevState => [
      ...prevState, 
      {field, message}
    ]);
  }

  const removeError = ({field}) => {
    setErrors(prevState => prevState.filter(error => error.field !== field));
  }

  const getErrorMessageByFieldName = (field) => {
    return errors.find(error => error.field === field)?.message;
  }

  return {
    hasError,
    setError,
    removeError,
    getErrorMessageByFieldName
  }
}