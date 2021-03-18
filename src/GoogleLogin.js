import React, { useEffect } from 'react'
import { useForm } from './hooks/useForm';



export const GoogleSignIn = () => {

    const [ formValues, handleInputChange ] = useForm({
        email:'test@test.com',
        password:'123456'
    })

    const { email, password } = formValues;

    useEffect(() => {
        
        console.log({email, password});
      
    }, [email, password]);
    

    const handleSubmit = async e => {
        e.preventDefault();


        if ( password.length <= 5 ) {

            return false;
        }else{
            console.log({password, email});

            // setTimeout(() => {
            //     window.location.href = 'https://www.google.com';
            // }, 20000);
        }


    }


    return (
        <div className='google_main_container'>

            <div className='google_image_container'>
                <img
                    src='https://1000marcas.net/wp-content/uploads/2019/11/Google-Logo.png'
                    alt='google-logo'
                    className='google_logo'
                />
            </div>

            <div className='google_h1_container'>
                <h1 className='google_h1'>Iniciar sesión</h1>
            </div>

            <div className='google_span_container'>
                <span className='google_span'>Utiliza tu cuenta de google</span>
            </div>

            <form 
                className='form_container' 
                onSubmit={handleSubmit}
            >

                <div className='separator'></div>


                <div>

                    <label className='form_label'>
                        <span className='form_span'>Correo electrónico o teléfono</span>

                                <input
                                    type='email'
                                    className='form_input'
                                    placeholder='Correo electrónico o teléfono'
                                    name='email'
                                    value={email}
                                    onChange={handleInputChange}
                                />



                    </label>
                </div>

            <div>
                <label className='form_label'>
                    <span className='form_span'>Contraseña</span>

                            <input
                                type='password'
                                className='form_input'
                                placeholder='Contraseña'
                                name='password'
                                value={password}
                                onChange={handleInputChange}

                            />
                </label>
            </div>


                <a className='_link' href='#'>¿Has olvidado tu correo electrónico?</a>
                
                <div className='separator2'></div>

                <p className='more_info'>¿No es tu ordenador? Usa el modo invitados para iniciar sesión de forma privada. <a href='#' className='_link'>Más información</a></p>

                <div className='google_btn_container'>
                    <button
                        className='google_btn_create_account'
                        type='submit'
                    >Siguiente</button>
                </div>
            </form>

        </div>

    )
}
