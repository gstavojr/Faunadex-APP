import { useField, ErrorMessage } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const MyTextArea = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  // field -> touch, onChange, onBlur

  return (
    <>
      <label className="label-pet" htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea className="textarea-pet" {...field} {...props} autoComplete="off" />
      <ErrorMessage name={props.name} component="span" className="label-error" />
      {/* {meta.touched && meta.error && <span className="error">{meta.error}</span>} */}
    </>
  );
};
