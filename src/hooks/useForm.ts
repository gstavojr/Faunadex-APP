import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialState: T) => {
  const [formData, setFomData] = useState(initialState);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFomData({
      ...formData,
      [target.name]: target.value,
    });

    /**
     setRegisterDate( prev => ({
       ...prev,
       [ target.name ]: target.value
     }));
    
    */
  };

  const resetForm = () => {
    setFomData({ ...initialState });
  };

  return {
    ...formData,

    // Properties
    formData,

    // Methods
    onChange,
    resetForm,
  };
};
