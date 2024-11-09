import React from 'react';
import reactLogo from './react.png';
import sqlLogo from './sql.png';
import laravelLogo from './laravel.png';
import agileLogo from './agile.png';
import pythonLogo from './python.png';
import phpLogo from './php.png';
import javascriptLogo from './javascript.png';
import htmlLogo from './html.png';
import './Subject.css';

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
