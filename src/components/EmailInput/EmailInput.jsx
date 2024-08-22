import { useState } from 'react';
import PropTypes from 'prop-types';
import './Email.css';

function EmailInput({ onNext }) {
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (email) {
      onNext(email);
    } else {
      alert('Ingresa tu mágico correo');
    }
  };

  return (
    <div className='emaildiv'>
      <h1>¿Qué Sailor Scout vive en ti? ¡Descúbrelo!</h1>
      <img src="https://lafrikileria.com/blog/wp-content/uploads/2023/03/protagonistas-sailor-moon.jpeg" />
      <h3>Ingresa tu correo para iniciar el test:</h3>
      <p>¡El poder de la luna te llama! Si alguna vez te has preguntado qué personaje de Sailor Moon refleja tu personalidad mágica, este es el momento de averiguarlo.</p>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="correo@ejemplo.com"
      />
      <button className='emailbutton' onClick={handleNext}>¡Descubrelo!</button>
    </div>
  );
}

EmailInput.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default EmailInput;
