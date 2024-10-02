import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const CarriageWagonTSD = () => {
  const instructions = [
    { id: 1, title: 'BRAKE BINDING IN COACHING STOCK', link: 'https://drive.google.com/file/d/15HxxrkCwzCC1NhRVpBPE2pSYzlBz6pF3/view?usp=sharing' },
    { id: 2, title: 'GOODS BRAKE BINDING', link: 'https://drive.google.com/file/d/10prj4RFqDrXws0djIe3nE72u60tIwLGm/view?usp=sharing' },
    { id: 3, title: 'MEMU BRAKE BINDING', link: 'https://drive.google.com/file/d/1OrpJB5Z_j96g9vqlJ2HXOhjnLMvJF5mv/view?usp=sharing' },
    { id: 4, title: 'LHB COACH BRAKE BINDING', link: 'https://drive.google.com/file/d/1HjdwmP1TscY-_roy_3t9_yJRbb2efzfm/view?usp=sharing' },
    { id: 5, title: 'DEMU BRAKE BINDING', link: 'https://drive.google.com/file/d/16CKDZ3DPXrSLvn9w6X2gW0FmKOXuTihP/view?usp=sharing' },
    { id: 6, title: 'IFC COACH BRAKE BINDING', link: 'https://drive.google.com/file/d/1s6BiqOe5C2GseBF1eHR4h5s2lsSHXYWK/view?usp=sharing' },
    { id: 7, title: 'TRAIN PARTING', link: 'https://drive.google.com/file/d/1wxsmduU7Bso2L_VdpSjcU5ol7_tb2Rv9/view?usp=sharing' },
    { id: 8, title: 'ACP ( LHB & ICF)', link: 'https://drive.google.com/file/d/1rioVQaJ84NpiuC_OFT618vQPHtmpHdUN/view?usp=sharing' },
    { id: 9, title: 'GDR CHECK', link: 'https://drive.google.com/file/d/1hcytGPvlZQ0Mo1m31xhncKbeS6nsdnzp/view?usp=sharing' },
    { id: 10, title: 'FIBA', link: 'https://drive.google.com/file/d/1Kk5RcCdWJK1ENxyqQoufS5Y_MLZoaZYl/view?usp=sharing' },
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">Carriage&WagonTSD</h2>
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

export default CarriageWagonTSD ;