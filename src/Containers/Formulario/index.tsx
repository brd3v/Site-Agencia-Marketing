import { Botao } from "../../components/Botao";
import emailjs from '@emailjs/browser'
import { Input } from "../../components/Input";
import { Formularios } from "./styled";
import {Text} from '../../components/Text'
import { useState } from "react";
export const Formulario = () => {
  const [nome, setNome] = useState<string>('');
  const [zap, setZap] = useState<string>('0'); // Corrigido para string
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('')
  const sendEmail = (e:Event) => {
    e.preventDefault()
    if(nome === '' || email === '' || zap === ''){
      alert('preencha os campos')
      return
    }
    const templateParms= {
      from_name : nome,
      message: message,
      email: email,
      zap: zap
    }
    emailjs.send('service_6k0g4ee', 'template_6dbzclv', templateParms, 'Y81ZaJUCNTPk24Uvt' )
    .then((r) => {
      console.log('email ENVIADO', r.status, r.text)
      setNome('')
      setEmail('')
      setMessage('')
      setZap('')
    }, (error) => console.log('error', error))
  }
  return (
      <Formularios>
<Input onChange={(e) => setNome(e.target.value)} placeholder='Seu Nome...'></Input>
<Input onChange={(e) => setZap(e.target.value)} placeholder="Seu Whatsapp..."></Input>
<Input onChange={(e) => setEmail(e.target.value)} placeholder="Seu melhor Email"></Input>

          <Text onChange={(e) => setMessage(e.target.value)} />
          <Botao onClick={sendEmail}></Botao>
      </Formularios>
  );
};
