import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { CarullaContext } from '../context/CarullaContext';
import NavButton from '../components/NavButton';
import { CarullaList } from '../components/CarullaList';
import ButtonCuerpo from '../components/ButtonCuerpo';

export const HomePage = () => {

    const contexto = useContext(CarullaContext)

    useEffect(() => { console.log(contexto) }, [contexto])

    return (
        <div>

            <div className='titulo1'>
                <h1>Contenido y Pokemones</h1>
            </div>
            <div className='botones_home_inicio'>
                <div className='botones_inicio'>
                    <ButtonCuerpo title={"Contenido"} href='/iniciocontenido' />
                    <ButtonCuerpo title={"Pokemon"} href='#' />
                </div>
            </div>
            <Outlet />
        </div>
    );

};