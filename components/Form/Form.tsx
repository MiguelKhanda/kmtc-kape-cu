import React, {FormHTMLAttributes, ReactNode} from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    onSubmit: (e:React.FormEvent<HTMLFormElement>) => void;
}

const Form= ({children, onSubmit, className, ...props}: FormProps) => {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <form
            onSubmit = {onSubmit}
            className={`space-y-4 w-full max-w-xs p-6 glass-container shadow-sm rounded-lg sm:max-w-md md:max-w-lg ${className}`}
            {...props}
            >
                {children}
            </form>
        </div>
    )
} 

export default Form;