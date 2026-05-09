import React,{InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className, ...props}, ref) => {
        return(
            <div className='flex flex-col gap-1 w-full'>
                <label className='text-sm font-medium text-black'>
                    {label}
                </label>
                <input
                    ref={ref}
                    className={`px-3 py-2 border rounded-md outline-none transition-all text-black
                        ${error ? 'border-red-500 ring-red-500': 'border-gray-300 focus:border-blue-500'}
                        ${className}`}
                    {...props}
                />
                {error && <span className='text-sm text-red-500 font-normal tracking-wide'>{error}</span>}
            </div>
        )
    }
)


Input.displayName = 'Input'

export default Input;