import PropTypes from 'prop-types';
import './Question.css';

function Question({ question, children, image }) {
  return (
    <div className='question'>
      <h2>{question}</h2>
      <img src={image}/>
      {children}
      
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default Question;
