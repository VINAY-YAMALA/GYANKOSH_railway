import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const ACDieselLOCOHandbook = () => {
  const instructions = [

    { id: 1, title: 'WDP4D SIEMENS LP HANDBOOK', link: 'https://drive.google.com/file/d/1Ed3OP2czek4mVuVY4naT1o5hAyl77MbM/view?usp=sharing' },
    { id: 2, title: 'WDP4D MEDHA LP HANDBOOK', link:'https://drive.google.com/file/d/1svvigA58ADAwYhWV5Uv2QzN82XacLehl/view?usp=sharing' },
    { id: 3, title: 'DEMU LP HANDBOOK', link: 'https://drive.google.com/file/d/1SY-TBhoVflS_wAYtcwVM7rSKtoDRBREL/view?usp=sharing' },
    { id: 4, title: 'MEMU LP HANDBOOK', link: 'https://drive.google.com/file/d/1iNJzP_0Bh8_1mtcGRpBODDDUr4Jlr80x/view?usp=sharing' },

    
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">AC & DISEL LOCO Handbook  </h2>
      <div className='back1'>
      <ul className="hq-list">
        {instructions.map((instruction) => (
          <li key={instruction.id} className="hq-item">
            <a
              href={instruction.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hq-link"
            >
              {instruction.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default ACDieselLOCOHandbook    ;