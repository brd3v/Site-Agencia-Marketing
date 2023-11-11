import { Botao } from "../../components/Botao";
import emailjs from '@emailjs/browser';
import { Input } from "../../components/Input";
import { Formularios } from "./styled";
import { Text } from '../../components/Text';
import { useState } from "react";

export const Formulario = () => {
  const [nome, setNome] = useState<string>('');
  const [zap, setZap] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (nome === '' || email === '' || zap === '' || message === '') {
      alert('Preencha todos os campos');
      return;
    }
  
    const templateParms = {
      from_name: nome,
      message: message,
      email: email,
      zap: zap
    };
  
    emailjs.send('service_6k0g4ee', 'template_6dbzclv', templateParms, 'Y81ZaJUCNTPk24Uvt')
      .then((r) => {
        console.log('Email enviado', r.status, r.text);
        setNome('');
        setEmail('');
        setMessage('Menssagem enviada, Logo um consultor entrará em contato com você');
        setZap(''); 
      })
      .catch((error) => console.log('Erro', error));
  };
  

  return (
    <Formularios>
      <Input type="string" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Seu Nome...'></Input>
      <Input type="text" maxLength={11} value={zap} onChange={(e) => {
  const formattedValue = e.target.value.replace(/\D/g, '').slice(0, 11); 
  setZap(formattedValue);
}} placeholder="Seu Whatsapp..."></Input>

      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu melhor Email"></Input>
      <Text value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Sua mensagem..."></Text>
      <Botao onClick={sendEmail}>Enviar</Botao>
    </Formularios>
  );
};
