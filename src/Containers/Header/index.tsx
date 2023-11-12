import React from "react";
import { Botao } from "../../components/Botao";
import Logo from "../../components/Logo";
import { NavBar } from "../../components/NavBar";
import { HeaderConteiner, NavI } from "./style";

const Header = () => (
    <HeaderConteiner>
    <Logo src="/logo/perfil.png"></Logo>
    <NavI >
    <NavBar href='www.google.com'>Inicio</NavBar>
    <NavBar href='www.google.com'>Sobre</NavBar>
    <NavBar href='www.google.com'>Serviços</NavBar>
    <NavBar href='www.google.com'>Clientes</NavBar>
    <NavBar href='www.google.com'>Blog</NavBar>
    <NavBar href='www.google.com'>Contato</NavBar>

    <Botao onClick={() => console.log('clicou no botao do whatsapp')}><a href="https://wa.link/u1zc5j">Orçamento</a></Botao> </NavI>
    </HeaderConteiner>
)

export default Header
