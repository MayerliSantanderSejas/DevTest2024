import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isSubmit: PropTypes.bool,
  type: PropTypes.oneOf(['common']),
  text: PropTypes.string,
};

function Button({ children, className, onClick, isSubmit, type, text}) {
  const baseStyles = {
    common:
    'font-normal font-roboto'
  };

  const buttonClass = `${baseStyles[type]} ${className};`
  return (
    <button 
      className={`${buttonClass} flex flex-row items-center`}
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {text ? text : ''}
      {children}
    </button>
  );
}

export default Button;
