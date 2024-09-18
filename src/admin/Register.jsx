import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


function Register() {

    const [type, setType] = useState("password");

  return (
    <div className='flex flex-col max-w-md shadow-lg mx-auto mt-[20vh] p-6 rounded-md sm:p-10 '>
    <div className='mb-8 text-center'>
        <h1 className='my-3 text-4xl font-bold '>Oturum aç</h1>
    </div>
    <form noValidate='' action='' className='space-y-12'>
        <div className='space-y-4'>
            <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                    İsmini gir
                </label>
                <input
                    // onInput={(e) => setLogin(e.target.value)}
                    type='email'
                    name='text'
                    id='email'
                    placeholder='Adınız'
                    className='w-full px-3 py-2 border rounded-md outline-none'
                />
            </div>
            <div>
                <div className='flex justify-between mb-2'>
                    <label htmlFor='password' className='text-sm'>
                        Şifre gir
                    </label>
                </div>
                <div className="relative">
                    <input
                        type={type}
                        // onChange={(e) => setPassword(e.target.value)}
                        className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg outline-none  block w-full p-2.5'
                        placeholder='••••••••'
                        required
                    />
                    <span
                        className='flex justify-around absolute top-3 right-3 items-center'
                        onClick={() =>
                            setType(
                                type == "password" ? "text" : "password"
                            )
                        }
                    >
                        {type == "password" ? (
                            <IoEyeOffOutline size={21} />
                        ) : (
                            <IoEyeOutline size={21} />
                        )}
                    </span>
                </div>
            </div>
        </div>
        <div className='space-y-2'>
            <div>
                <button
                    // onClick={signUp}
                    type='button'
                    className='w-full px-8 py-3 font-semibold text-white rounded-md dark:bg-[#278D9B] '
                >
                    Oturum aç
                </button>
            </div>
            <p className='px-6 text-sm text-center dark:text-gray-600'>
                Hesabın var mi ? 
                <Link
                    to='/giris'
                    rel='noopener noreferrer'
                    href='#'
                    className='hover:underline dark:text-violet-600'
                >
                    Giriş
                </Link>
                .
            </p>
        </div>
    </form>
</div>
  );
}

export default Register;
