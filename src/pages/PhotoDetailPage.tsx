import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useRedux';
import { motion } from 'framer-motion';
import { PreviewImage } from '../components/PreviewImage';
import { Form, Formik } from 'formik';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { desactivePhoto } from '../redux/actions/photo';
import { translateClear, startLoadingTranslate } from '../redux/actions/translate';

const laguages = ['ingles', 'aleman', 'frances', 'chino'];

const initialValues = {
  selected: '',
};

const validateSchema = Yup.object({
  selected: Yup.string()
    .notOneOf([''], 'Esta opcion no es permitida')
    .required('Requerido'),
});

export const PhotoDetailPage = () => {
  const { active } = useAppSelector((state) => state.photo);
  const { text: textTranslate } = useAppSelector((state) => state.translate);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(desactivePhoto());
      dispatch(translateClear());
    };
  }, [dispatch]);

  if (!active) return <h1>Seleccione una foto...</h1>;

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="p-2 dash-main-container mt-5 p-1"
    >
      <h2
        className="name-title texto-cententer text-profile mb-5"
        style={{
          border: 'none',
        }}
      >
        <i className="fa-solid fa-image me-3"></i>
        {active.name}
      </h2>

      <div className="profile-container">
        <div className="image-profile">
          <PreviewImage urlFoto={active.url} className="image-perfile" />
        </div>
        <div className="text-inputs-profile">
          <h4>
            <i className="fa-solid fa-receipt me-2"></i>
            Descripción
          </h4>
          <p>{active.description ? active.description : 'Sin descripcion'}</p>

          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              const textToTranslate = active.description
                ? active.description
                : 'Sin descripcion';
              dispatch(startLoadingTranslate(textToTranslate, values.selected));
            }}
            validationSchema={validateSchema}
          >
            {() => (
              <Form noValidate>
                <div className="translate-group">
                  <MySelect label="" name="selected">
                    <option value="">Seleccione un idioma</option>
                    {laguages.map((l, i) => (
                      <option value={l} key={i}>
                        {l}
                      </option>
                    ))}
                  </MySelect>

                  <button className="btn btn-outline-success mt-3 mb-3" type="submit">
                    Traducir
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="text-traducir">
            <h4>
              <i className="fa-solid fa-language me-2"></i>
              Traducción
            </h4>
            {textTranslate ? (
              <motion.p
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                {textTranslate}
              </motion.p>
            ) : (
              'Seleccione un idioma'
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
