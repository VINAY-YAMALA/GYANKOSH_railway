import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const PhaseLocoTSD = () => {
  const instructions = [
    { id: 1, title: 'MU operation of 3Φ LOCO', link: 'https://drive.google.com/file/d/1W3vL_12-uOvX0r-Q4SvkEFa6TGPmTBCA/view?usp=sharing' },
    { id: 2, title: 'Relays Introduction & Wedging', link: 'https://drive.google.com/file/d/1HAPW_4i1HVVvHwMqlSZvGh_86RrThv_W/view?usp=sharing' },
    { id: 3, title: '3Φ LOCO s Quick Trouble shooting', link: 'https://drive.google.com/file/d/1-xmsB7jYIYY9RGnUADNh6qBUKpGEM2kz/view?usp=sharing' },
    { id: 4, title: '3-PHASE POCKET HANDBOOK', link: 'https://drive.google.com/file/d/1qIgGN-R0wLE8pKon-bK8Obul6t6e3PLV/view?usp=sharing' },
    { id: 5, title: 'Cutout COCs Position in 3-phase Locos', link: 'https://drive.google.com/file/d/1a4OlRzfvIir_ocoqAkc8dNCoTX-No0ki/view?usp=sharing' },
    { id: 6, title: 'MCB Resetting Procedure', link: 'https://drive.google.com/file/d/1wukUdUxJLiidbtKwLb_lyqpJ7fm3yAm-/view?usp=sharing' },

  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">3 PHASE LOCO STD</h2>
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

export default PhaseLocoTSD ;