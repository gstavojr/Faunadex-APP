import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { MyTextInput } from '../components/MyTextInput';
import { PreviewImage } from '../components/PreviewImage';
import { useAppSelector } from '../hooks/useRedux';
import { PhotoUpload } from '../interfaces/interfaces';

import * as Yup from 'yup';
import { startSavePhoto } from '../redux/actions/photo';
import { motion } from 'framer-motion';
import { MyTextArea } from '../components/MyTextArea';

const initialValues: PhotoUpload = {
  image: undefined,
  name: '',
  description: '',
};

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
const validateShema = Yup.object({
  name: Yup.string().min(2, 'Debe tener minimo 2 caracteres').required('Requerido'),
  description: Yup.string()
    .min(2, 'Debe tener minimo 2 caracteres')
    .required('Requerido'),
  image: Yup.mixed()
    .nullable()
    .test(
      'FILE_SIZE',
      'La foto es muy grande',
      (value) => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
      'FILE_FORMAT',
      'La imagen no tiene el formato adecuado',
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    )
    .required('Requerido'),
});

export const UploadPage = () => {
  const dispatch = useDispatch();
  const { active } = useAppSelector((state) => state.photo);

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      layout
      className="dash-main-container mt-5 p-1"
    >
      <h2
        className="name-title texto-cententer text-profile mb-5"
        style={{
          border: 'none',
        }}
      >
        <i className="fa-solid fa-cloud-arrow-up me-3"></i>
        Subir foto
      </h2>
      <div className="profile-container mb-4">
        <div className="image-profile mb-5">
          <h4>Foto</h4>
          <PreviewImage
            urlFoto={active?.url || ''}
            className="image-perfile preview-img-upload"
          />
        </div>
        <div className="text-inputs-profile">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              dispatch(startSavePhoto(values));
            }}
            validationSchema={validateShema}
          >
            {({ setFieldValue }) => (
              <Form noValidate>
                <div className="input-group-pet">
                  <MyTextInput
                    label="Nombre"
                    name="name"
                    placeholder="Ingrese nombre de la foto"
                    type="text"
                  />
                  <MyTextArea
                    label="Descripción"
                    name="description"
                    placeholder="Descripción de la foto"
                    type="text"
                  />
                  <label className="label-pet mt-3">Foto</label>
                  <input
                    type="file"
                    onChange={(e) =>
                      setFieldValue(
                        'image',
                        e.target.files ? e.target.files[0] : undefined
                      )
                    }
                    accept="image/*"
                    className="input-pet-file"
                  />
                  <button className="btn btn-success mt-3 mb-3" type="submit">
                    Subir
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </motion.div>
  );
};
