import { useState } from 'react';
import { BiLink, BiBold, BiFont, BiItalic } from 'react-icons/bi';


function TextArea() {
  const [mensaje, setMensaje] = useState('');

  const handleInputChange = (event) => {
    setMensaje(event.target.value);
  };

  return (
    <div className='container pt-3 pb-3'>
      <div className='textContainer'>
        <textarea 
          className='textContained'  
          value={"La ciudad de Scranton, conocida desde hace mucho tiempo principalmente por su pasado industrial como centro minero y ferroviario de carbón, se ha abrazado y, en última instancia, ha sido redefinido por el espectáculo. «Estamos realmente de moda», dice el asistente del alcalde. El logotipo de Dunder Mifflin está en un cartel de farola frente al ayuntamiento de Scranton, así como en el puente peatonal al centro comercial en Steamtown. La Pennsylvania Paper & Supply Company, cuya torre se muestra en los créditos de apertura, planea agregarla a la torre también. Los periódicos en otras ciudades del Noreste han publicado guías de viaje a lugares de Scranton para turistas interesados en visitar lugares mencionados en el programa. Scranton se ha identificado con el espectáculo fuera de los Estados Unidos también. En un discurso del Día de San Patricio de 2008 en su suburbio de Dickson City, el ex Taoiseach (primer ministro irlandés) Bertie Ahern identificó la ciudad como el hogar de Dunder Mifflin."} 
          onChange={handleInputChange} 
        />
        <div className='iconContainer pb-3'>
          <button className='buttonIcon'><BiFont size={24} /></button>
          <button className='buttonIcon'><BiItalic size={24} /></button>
          <button className='buttonIcon'><BiBold size={24} /></button>
          <button className='buttonIcon'><BiLink size={24} /></button>
        </div>
        <div className='saveContainer'>
          <button className='butons'>Cancelar</button>
          <button className='butonsWithWitheBg'>Aceptar</button>
        </div>
      </div>
    </div>
  );
}

export default TextArea;
