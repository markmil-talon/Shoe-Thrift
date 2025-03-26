const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : 'bg-sea-blue text-white border-sea-blue'
        }    
      rounded-full ${
        fullWidth && 'w-full'
      } transition ease-in-out delay-100 hover:shadow-2xl hover:scale-[1.03]`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;
