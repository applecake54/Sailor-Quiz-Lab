import PropTypes from 'prop-types';
import './Result.css';

function Result({ scout }) {
  return (
    <div className='result'>
      <h1>¡La magia de las estrellas ha hablado! Eres {scout.name}, con tu increíble energía y esencia única, ¡estás listo para defender el universo con estilo!</h1>
      <p>{scout.description}</p>
      <img src={scout.image} alt={scout.name} style={{ width: '300px', height: 'auto' }} />
    </div>
  );
}

Result.propTypes = {
  scout: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Result;
