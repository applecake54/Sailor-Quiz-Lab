import { useState, useEffect } from 'react';
import EmailInput from './components/EmailInput/EmailInput';
import Question from './components/Question/Question';
import QuestionSingleChoice from './components/QuestionSingleChoice';
import QuestionMultipleChoice from './components/QuestionMultipleChoice';
import Result from './components/Result/Result';
import { determineScout } from './components/Scouts';
import emailjs from 'emailjs-com';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState(''); 
  const [veces, setveces] = useState(0); 

  const handleEmailNext = (userEmail) => {
    setEmail(userEmail);
    setStep(step + 1);
  };

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  const handlevecesChange = (value) => {
    setveces(Math.max(0, veces + value));
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setEmail('');
    setveces(0);
  };

  const getResult = () => {
    return determineScout(answers);
  };

  const handlePrevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  useEffect(() => {
    if (step > 7) {
      const scout = determineScout(answers); 
      const templateParams = {
        to_email: email,
        scout_name: scout.name,
        scout_description: scout.description,
      };
  
      emailjs.send(
        'service_uw5jrix', 
        'b0DwEhCY_-_uN1t8R', 
        templateParams,
        'b0DwEhCY_-_uN1t8R' 
      ).then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }).catch((err) => {
        console.error('Failed to send email. Error: ', err);
      });
    }
  }, [step, email, answers]); 
  

  return (
    <div className='questionsdiv'>
      {step === 0 && <EmailInput onNext={handleEmailNext} />}
      {step === 1 && (
        <Question question="¿Cómo reaccionas cuando te enfrentas a un desafío inesperado?">
          <Question image="https://media.giphy.com/media/IeJN9ioHFInZe/giphy.gif" />
          <QuestionSingleChoice options={['¡Me emociono y lo enfrento con todo mi poder!', 'Pienso estratégicamente antes de actuar.', 'Me asusto un poco, pero luego reúno mi valor.', 'Me tomo mi tiempo, pero lo resuelvo con estilo.']} onSelect={handleAnswer} />
        </Question>
      )}
      {step === 2 && (
        <Question question="¿Cuál sería tu comida favorita después de una larga batalla?">
          <Question image="https://64.media.tumblr.com/5bf1cb4bc47f496cf4e70a41727479e5/tumblr_nkjwatm2Kz1tggy4no1_500.gif" />
          <QuestionSingleChoice options={['Algo elegante y delicioso, como sushi.', 'Un buen plato de pasta, ¡necesito energía!', 'Algo rápido y práctico, como un sándwich.', '¡Helado! Siempre es la mejor recompensa.']} onSelect={handleAnswer} />
        </Question>
      )}
      {step === 3 && (
        <Question question="¿Qué haces cuando alguien te molesta?">
          <Question image="https://media2.giphy.com/media/d1SHSSvDY6LjW/giphy.gif?cid=6c09b952iv6s8jigtqqkihxurbqf2qs6qmbrg9oqgw82ocmx&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
          <QuestionSingleChoice options={['Intento resolverlo con una sonrisa (pero si no funciona, ¡que se cuiden!).', 'Mantengo la calma y me alejo, no necesito ese drama.' , ' ¡Les digo exactamente lo que pienso, con honestidad!', 'Lo ignoro, soy demasiado genial para preocuparme por eso.']} onSelect={handleAnswer} />
        </Question>
      )}
      {step === 4 && (
        <Question question="¿Cómo prefieres pasar tu tiempo libre cuando no tienes ninguna responsabilidad?">
          <Question image="https://gifdb.com/images/high/sailor-moon-cat-sleeping-vyybosgo2bkumdbf.gif" />
          <QuestionMultipleChoice options={['Saliendo a pasear con amigos, ¡la diversión nunca falta!', ' En casa viendo mi serie favorita y comiendo algo rico.', 'Planificando nuevos proyectos o aventuras emocionantes.', 'Dedicando tiempo a un hobby tranquilo y relajante, como leer o dibujar.']} onSelect={handleAnswer} />
        </Question>
      )}
      {step === 5 && (
        <Question question="Si pudieras elegir tu transformación mágica, ¿cómo sería?">
          <Question image="https://i.pinimg.com/originals/7c/2a/cd/7c2acd919c18f693c1f3818d95ba0b67.gif" />
          <QuestionSingleChoice options={['Llena de brillos y colores pastel, ¡súper mágica!', 'Eficiente y rápida, lo importante es el resultado.', 'Con un toque dramático y misterioso, ¡que todos se sorprendan!', 'Sofisticada y poderosa, digna de una reina.']} onSelect={handleAnswer} />
        </Question>
      )}
      {step === 6 && (
        <Question question="¿Cuántas veces al mes te sientes como Usagi llegando tarde a clase?">
          <Question image="https://pa1.aminoapps.com/6929/fe7235e594a272aedb488b29755159177007586br1-245-200_hq.gif" />
          <div>
            <button className='counter' onClick={() => handlevecesChange(-1)}>-</button>
            <span>{veces} veces</span>
            <button className='counter' onClick={() => handlevecesChange(1)}>+</button>
          </div>
        </Question>
      )}
      {step === 7 && (
        <Question question="Si tuvieras un gatito consejero como Luna o Artemis, ¿qué consejo te daría con más frecuencia?">
          <Question image="https://i.pinimg.com/originals/67/40/8a/67408ab5444616b71968475001f18e88.gif" />
          <QuestionMultipleChoice options={['¡Deja de comer tantos snacks y concéntrate en la misión!', 'No te preocupes, ¡el universo siempre se alinea a tu favor!', '¡Tienes que ser más seria! La Tierra depende de ti.', '¡Relájate un poco y diviértete más, ya eres un héroe!']} onSelect={handleAnswer} />
        </Question>
      )}
      {step > 7 && <Result scout={getResult()} />}
      <div className="navigation-buttons">
        {step === 8 ? <button className='submit' onClick={resetQuiz}>Reiniciar</button> :
          <button className='submit' onClick={handlePrevStep}>Atrás</button>
        }
        {step > 0 && step < 8 && <button className='submit' onClick={() => setStep(step + 1)}>Siguiente</button>}
        
      </div>
    </div>
  );
}

export default App;
