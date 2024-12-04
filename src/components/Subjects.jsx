import React from 'react';
import reactLogo from './images/react.png';
import sqlLogo from './images/sql.png';
import laravelLogo from './images/laravel.png';
import agileLogo from './images/agile.png';
import pythonLogo from './images/python.png';
import phpLogo from './images/php.png';
import javascriptLogo from './images/javascript.png';
import htmlLogo from './images/html.png';
import './style/Subject.css';

const Subjects = ({ onSelectSubject }) => {
  return (
    <div className="subject-buttons">
      <div className='div'>
      <img src={reactLogo} alt="React" className="subject-button" onClick={() => onSelectSubject('React')} />
      <p>React</p>
      </div>
      <div>
        <img src={sqlLogo} alt="SQL" className="subject-button" onClick={() => onSelectSubject('SQL')} />
        <p>SQL</p>
      </div>
      <div>
      <img src={laravelLogo} alt="Laravel" className="subject-button" onClick={() => onSelectSubject('Laravel')} />
        <p>Laravel</p>
      </div>
      <div>
      <img src={agileLogo} alt="Agile" className="subject-button" onClick={() => onSelectSubject('Agile')} />
        <p>Agile</p>
      </div>
      <div>
      <img src={pythonLogo} alt="python" className="subject-button" onClick={() => onSelectSubject('python')} />
        <p>Python</p>
      </div>
      <div>
      <img src={phpLogo} alt="php" className="subject-button" onClick={() => onSelectSubject('php')} />
        <p>PHP</p>
      </div>
      <div>
      <img src={javascriptLogo} alt="javascript" className="subject-button" onClick={() => onSelectSubject('javascript')} />
        <p>Javacsript</p>
      </div>
      <div>
      <img src={htmlLogo} alt="html" className="subject-button" onClick={() => onSelectSubject('html')} />
        <p>HTML</p>
      </div>
    </div>
  );
};

export default Subjects;
