import { Formik, Form } from 'formik';
import { MyTextInput } from './MyTextInput';
import * as Yup from 'yup';
import { FC } from 'react';

const intialValues = {
  message: '',
};

const validateSchema = Yup.object({
  message: Yup.string()
    .min(2, 'Debe tener 2 caracteres como minimo')
    .required('No se puede enviar mensajes vacios'),
});

interface Props {
  onMessageChange: (msg: string) => void;
}

export const FormMessage: FC<Props> = ({ onMessageChange }) => {
  return (
    <Formik
      initialValues={intialValues}
      onSubmit={(values, { resetForm }) => {
        onMessageChange(values.message);
        resetForm();
      }}
      validationSchema={validateSchema}
    >
      {() => (
        <Form noValidate className="form-chat mt-2">
          <div className="input-block">
            <MyTextInput label="" name="message" placeholder="Mensaje" type="text" />
          </div>

          <button className="btn-message mt-3" type="submit">
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </Form>
      )}
    </Formik>
  );
};
