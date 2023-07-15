import React from 'react';

interface InputFieldProps {
  label: string;
  placeholder: string;
  type: 'email' | 'password';
  classname?: string,
  value?: string,
  onChange?: () => void;
}

const InputField = ({
  label,
  placeholder,
  type,
  classname,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div>
        <p className='capitalize'>{label}</p>
        {type === 'email' && (
            <div className='w-full h-full'>
                <input 
                    id={label}
                    name={label}
                    value={value}
                    type='email' 
                    placeholder={placeholder}
                    className={`${classname ? classname : ''} px-4`}
                    onChange={onChange}
                />
            </div>
        )}
        {type === 'password' && (
            <div className='w-full h-full'>
                <input 
                    id={label}
                    name={label}
                    value={value}
                    type='password'
                    placeholder={placeholder}
                    className={`${classname ? classname : ''} px-4`}
                    onChange={onChange}
                />
            </div>
        )}
    </div>
  )
};

export default InputField;
