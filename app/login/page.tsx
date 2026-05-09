'use client';
import RegistrationForm from '@/components/Form/Register';
import { useForm } from  'react-hook-form';



export default function LoginPage(){
    return(
       <div className='overflow-hidden'>
            <RegistrationForm/>
       </div>
    )
}