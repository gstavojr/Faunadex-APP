import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { motion } from 'framer-motion';

import { MyTextInput } from '../components/MyTextInput';
import { startLogin } from '../redux/actions/auth';
import { useAppSelector } from '../hooks/useRedux';

import * as Yup from 'yup';
import { LoginModal } from '../components/LoginModal';
import { uiOpenLoginModal } from '../redux/actions/ui';

const validationSchema = Yup.object({
  username: Yup.string().min(3, 'Debe tener 3 caracteres o mas').required('Requerido'),
  password: Yup.string()
    .min(6, 'Debe tener 6 caracteres como minimo')
    .required('Requerido'),
});

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { loading } = useAppSelector((state) => state.ui);

  const openModal = () => {
    dispatch(uiOpenLoginModal());
  };

  if (loading) return <h1>Cargando ...</h1>;
  return (
    <div
      style={{
        width: '50%',
        margin: '0px auto',
      }}
      className="animate__animated animate__fadeIn animate__fast"
    >
      <div className="card-pet">
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={(values, { resetForm }) => {
            dispatch(startLogin(values.username, values.password));
            resetForm();
          }}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form noValidate>
              <i className="fa-solid fa-dog dog-pet"></i>
              <h4 className="mb-2">Inicio Sesión</h4>
              <div className="input-group-pet">
                <MyTextInput
                  label="Usuario"
                  name="username"
                  placeholder="Ingrese usuario"
                  type="text"
                />
                <MyTextInput
                  label="Contraseña"
                  name="password"
                  placeholder="Ingrese contraseña"
                  type="password"
                />
                <button className="btn btn-primary mt-3" type="submit">
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="input-group-pet">
          <motion.p
            className="reconocimento"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
          >
            Facial <i className="fa-solid fa-face-smile-wink ms-1"></i>
          </motion.p>
          <LoginModal />
        </div>
      </div>
    </div>
  );
};
