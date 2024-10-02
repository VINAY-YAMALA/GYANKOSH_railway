import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const ACConventionLocoTSD = () => {
  const instructions = [
    { id: 1, title: 'Electric Loco Picture Gallery', link: 'https://drive.google.com/file/d/1Cx2EyXRN7v6rQa4LI7QoaZSc1Bna-Lnl/view?usp=sharing' },
    { id: 2, title: 'Different Types of LOCO Testings (AC)', link: 'https://drive.google.com/file/d/1gI2-4u3DNa5AWB7N4sZiEwzIo2lcB0q3/view?usp=sharing' },
    { id: 3, title: 'Dead Loco Movement in AC Locos', link: 'https://drive.google.com/file/d/1cmmjX39qlYWqbUb19D2JEu0Pky2tPiRy/view?usp=sharing' },
    { id: 4, title: 'Electrical Locos CAB Changing procedure', link: 'https://drive.google.com/file/d/1VrnlcCjuNJC09QHqjMOqN79WZwsvDyHf/view?usp=sharing' },
    { id: 5, title: 'Cutout COCs Position in Conventional Locos', link: 'https://drive.google.com/file/d/1SWq7jxZpnLnT6Xkv6JkDjYg6vERAMWdQ/view?usp=sharing' },

  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">AC CONVENTION LOCO TSD</h2>
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

export default ACConventionLocoTSD ;