"use client";
import { useRouter } from 'next/navigation';
import {useState} from 'react'
import Form from './Form'
import Input from './Input'
import {useForm} from 'react-hook-form'
import {Eye, EyeOff} from 'lucide-react'
import {authService} from '@/services/authService'

export default function RegistrationForm() {
    const [type,setType] = useState('password')
    const [confirmType,setConfirmType] = useState('password')
    const [step, setStep] =useState(1);
    const [icon1, setIcon1] = useState(<EyeOff/>)
    const [icon2, setIcon2] = useState(<EyeOff/>)
    const router = useRouter()

    const {
        watch,
        register,
        trigger,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const handleNext = async () => {
        const result = await trigger(['full_name','email','registration_number','course_name','academic year']);
        if (result) setStep(2);
    }
    const onSubmit = async (data:any) => {
        try{
            await authService.getCsrfToken();
            await authService.registerStudent(data);
            router.push('/');
        }catch(error){
            console.error(error)
        }
    }
    const password = watch("password")
    const togglePassword = ()=> {
        if (type === 'password'){
            setType('text')
            setIcon1(<Eye/>)
        }else if(type==='text'){
            setType('password')
            setIcon1(<EyeOff/>)

        }
    }
      const toggleConfirmPassword = ()=> {
        if (confirmType === 'password'){
            setConfirmType('text')
            setIcon2(<Eye/>)
        }else if(confirmType==='text'){
            setIcon2(<EyeOff/>)
            setConfirmType('password')
        }
    }
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <p className='text-black text-center'>KMTC-CU</p>
            { step === 1 && (
            <div className='flex flex-col gap-2'>
                <Input
                    label='Full Name'
                    placeholder = 'John Kibet'
                    {...register('full_name', {required: "Name is required"})}
                    error={errors.full_name?.message as string}
                />
                <Input
                    label='Email'
                    type='email'
                    placeholder='migae@gmail.com'
                    {...register("email",{ 
                        required: "Email is required",
                        pattern: {value:/^\S+@\S+$/i,message: "Invalid email"}
                    })}
                    error={errors.email?.message as string}
                />     
                <Input
                    label='Registration Number'
                    placeholder = 'Please enter your registration number'
                    {...register('registration_number', {
                        required:"Please enter your registration number"
                    })}
                    error={errors.registration_number?.message as string}
                />
                <Input
                    label='Course name'
                    placeholder = 'Nursing'
                    {...register('course_name', {
                        required:"Please enter course name"
                    })}
                    error={errors.course_name?.message as string}
                />
                <Input
                    label='Academic year'
                    placeholder='Year One'
                    {...register('academic_year',{
                        required: "Please enter academic year"
                    })}
                    error={errors.academic_year?.message as string}
                />
               <button type='button' className='bg-blue-600 text-white p-2 rounded mx-auto block mt-2' onClick={handleNext}>Next Step</button>
            </div>
            )}
            {step === 2 &&(
            <div className='flex flex-col gap-2'> 
                <div className='flex'>
                    <Input
                        label='Password'
                        type={type}
                        autoComplete="new-password"
                        placeholder='Enter password'
                        {...register('password', {
                            required: "Password is required",
                            minLength:{value: 8, message:"Must be at least 8 characters"},
                            pattern:{
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                                message: "Must include uppercase, lowercase and a number"
                            }
                        })}
                        error={errors.password?.message as string}
                    />
                    <button className='ml-2' type='button' onClick={togglePassword}>{icon1}</button>

                </div>
                <div className='flex'>
                    <Input
                        label='Confirm Password'
                        type= {confirmType}
                        placeholder='Confirm password'
                        {...register('confirm_password', {
                            required: "Please confirm your password",
                            validate: (value) => value === password || "Passwords do not match"
                        }
                        )}
                        error = {errors.confirm_password?.message as string}    
                    />
                    <button className='ml-2' type='button' onClick={toggleConfirmPassword}>{icon2}</button>
                </div>
                <button type='submit' className='bg-blue-600 text-white p-2 rounded mx-auto block mt-2'>Register Student</button>
            </div>
            )}
        </Form>
    )
}