import { useState } from "react"

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const reset = () => {
    setValues(initialState)
  }

  const setdata = (data) => {
    console.log(data);
    setValues(data)
  }

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  return [values, handleInputChange, setdata, reset,]
}
