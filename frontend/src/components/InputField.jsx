import { Field } from 'formik';
import PropTypes from 'prop-types';

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  isCorrect: PropTypes.bool,
  isDisabled: PropTypes.bool
};

function InputField({id, label, name, placeholder, type, isCorrect, isDisabled}) {
  return (
    <label htmlFor={id} className='block mb-2'>
      <span className='text-[14px] text-neutral-950 font-roboto font-normal'>
        {label}
      </span>
      <div className='relative'>
        <Field
          id={id}
          name={name}
          type={type}
          className={`bg-white w-full h-12 font-roboto rounded-[10px] 
            focus:ring-blue-800 focus:border-blue-800 block p-2.5 px-5 py-3 outline-none
            ${isCorrect ? 'border-2 border-neutral-200' : 'border-2 border-red-500'}`}
          placeholder={placeholder}
          disabled={isDisabled}
          required
        />
      </div>
    </label>
  );
}

export default InputField;
