import { getContact, createContact } from "../../services/contact.service";
import loginStyles from './login.module.css';
import Image from 'next/image';
import { useState } from "react";

export default function Login() {

    const [cellphone, updateCellPhone] = useState('');
    const [name, updateName] = useState('');
    const [needRegister, updateRegister] = useState(false);

    async function doLogin() {
        const result = await getContact(cellphone);
        if (result.status) {
            //console.log('redirect');
            // keep date on state   
            console.log('still need to do a logic to login')
        } else {
            updateRegister(true);
        }
    }

    async function doRegister() {
        const result = createContact(cellphone, name);
        console.log(result);
    }

    /*
    w-72 : aumenta o tamanho
    flex : deixa o block display
    items-centeR: alinha os itens no centro
    
    todas classes do tailwind que não tem modificadores serão aplicadas nas classes menores
    */

    return (
        // <div className="container mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-8">

        //     <div className="default-box" >
        //         <div className="container-message mx-auto my-auto w-full">
        //             {/* <img className="logo" alt="logo" /> */}
        //             <h1 className="welcome">
        //                 Hello world!
        //             </h1>
        //         </div>
        //     </div>
        //     <div className=" default-box" >
        //         <div className="container-message mx-auto my-auto w-full">
        //             {/* <img className="logo" alt="logo" /> */}
        //             <h1 className="welcome">
        //                 Hello world!
        //             </h1>
        //         </div>
        //     </div>
        //     <div className=" default-box highlight" >
        //         <div className="container-message mx-auto my-auto w-full">
        //             {/* <img className="logo" alt="logo" /> */}
        //             <h1 className="welcome">
        //                 Hello world!
        //             </h1>
        //         </div>
        //     </div>
        //     <div className=" default-box" >
        //         <div className="container-message mx-auto my-auto w-full">
        //             {/* <img className="logo" alt="logo" /> */}
        //             <h1 className="welcome">
        //                 Hello world!
        //             </h1>
        //         </div>
        //     </div>
        //     <div className=" default-box" >
        //         <div className="container-message mx-auto my-auto w-full">
        //             {/* <img className="logo" alt="logo" /> */}
        //             <h1 className="welcome">
        //                 Hello world!
        //             </h1>
        //         </div>
        //     </div>
        //     <div className=" default-box" >
        //         <div className="container-message mx-auto my-auto w-full">
        //             {/* <img className="logo" alt="logo" /> */}
        //             <h1 className="welcome">
        //                 Hello world!
        //             </h1>
        //         </div>
        //     </div>
        //     <div className=" default-box" >
        //         <div className="container-message mx-auto my-auto w-full">
        //             {/* <img className="logo" alt="logo" /> */}
        //             <h1 className="welcome">
        //                 Hello world!
        //             </h1>
        //         </div>
        //     </div>
        //     <div className=" default-box" >
        //         <div className="container-message mx-auto my-auto w-full">
        //             {/* <img className="logo" alt="logo" /> */}
        //             <h1 className="welcome">
        //                 Hello world!
        //             </h1>
        //         </div>
        //     </div>
        //     <div className=" default-box" >
        //         <div className="container-message mx-auto my-auto w-full">
        //             {/* <img className="logo" alt="logo" /> */}
        //             <h1 className="welcome">
        //                 Hello world!
        //             </h1>
        //         </div>
        //     </div>
        //     <div className=" default-box" >
        //         <div className="container-message mx-auto my-auto w-full">
        //             {/* <img className="logo" alt="logo" /> */}
        //             <h1 className="welcome">
        //                 Hello world!
        //             </h1>
        //         </div>
        //     </div>
        //     <div className=" default-box" >
        //         <div className="container-message mx-auto my-auto w-full">
        //             {/* <img className="logo" alt="logo" /> */}
        //             <h1 className="welcome">
        //                 Hello world!
        //             </h1>
        //         </div>
        //     </div>

        // </div>
        <div className="flex h-screen">
            <div className="w-5/6 h-4/5 m-auto">
                <div className="logo-space mt-20 mb-14">
                    <Image className="mx-auto mb-1" src="/images/hamburger.png" height={56} width={56} alt="burguer" />
                    <span className="text-stone-100 block text-center text-4xl mb-1">Bem vindo</span>
                    <span className="text-stone-100 block text-center">Acelera Burger</span>
                </div>
                <div className="input-space grid justify-center mb-14">
                    <div >
                        <input type="number" className=" w-58 md:w-58 p-3 rounded-md" placeholder="Telefone: (81) 91341-1223" onChange={event => updateCellPhone(event.currentTarget.value)} />
                    </div>
                    {needRegister
                        ? <div >
                            <input type="text" className="basis-full w-58 md:w-58 p-3 mt-4 rounded-md" placeholder="Digite seu nome" onChange={event => updateCellPhone(event.currentTarget.value)} />
                        </div>
                        : ''
                    }
                </div>

                <div className="button-space flex justify-center">
                    {needRegister
                        ? <button className="default-button" onClick={doRegister}> Cadastrar </button>
                        : <button className="default-button" onClick={doLogin}> Entrar </button>
                    }
                </div>
            </div>
        </div>
    )
}