import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { CarullaContext } from '../context/CarullaContext';
import NavBar from '../components/NavBar';
import { CarullaList } from '../components/CarullaList';
import ButtonCuerpo from '../components/ButtonCuerpo';

export const HomePage = () => {

    const contexto = useContext(CarullaContext)

    useEffect(() => { console.log(contexto) }, [contexto])

    return (
        <div>
            <NavBar />
            <div className='titulo1'>
                <h1>Pollo, Carnes y pescado</h1>
            </div>
            <div className='image1'>
                <img src="/img/imagen1.png" alt="carulla imagen" />
            </div>
            <div className='parafo1'>
                <p>Inicio / Pollo, Carnes y pescado /</p>

            </div>
            <div className='Cuerpo_filto_botoes_menu'>
                <div className='Filto_busqueda'>
                    <div>
                        <p className='p1'>Filtros</p>
                    </div>
                    <div>
                        <p className='p2'>Filtrar por:</p>
                    </div>
                    <div>
                        <p className='p2'>Categotia</p>
                    </div>
                    <div>
                        <p className='p3'>Bufalo,Ternera, Y Otras</p>
                    </div>
                    <div>
                        <p className='p3'>Carne de Cerdo</p>
                    </div>
                    <div>
                        <p className='p3'>Carne de res</p>
                    </div>
                    <div>
                        <p className='p3'>Otras Especies de Aves</p>
                    </div>
                    <div>
                        <p className='p3'>Pescado Y Mariscos</p>
                    </div>
                    <div>
                        <p className='p3'>Pollo</p>
                    </div>


                </div>
                <div className='botones_peliculas'>
                    <div className='botones'>
                        
                        <ButtonCuerpo title={"Pasillo"} href='#' />
                        
                        <ButtonCuerpo title={"Bufalo, ternera y otros"} href='#' />
                        
                        <ButtonCuerpo title={"Carne de Cerdo"} href='#' />
                        
                        <ButtonCuerpo title={"Carne de res"} href='#' />
                       
                        <ButtonCuerpo title={"Otras species"} href='#' />
                        
                        <ButtonCuerpo title={"Pescado"} href='#' />
                       
                        <ButtonCuerpo title={"Pollo"} href='#' />
                       
                        
                       
                    </div>
                    <div className='peluculas '>
                        <CarullaList listaPeliculas={contexto.allCarulla} />
                    </div>

                </div>
            </div>


            <Outlet />
        </div>
    );

};