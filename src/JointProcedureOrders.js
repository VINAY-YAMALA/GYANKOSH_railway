import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const JointProcedureOrders = () => {
  const instructions = [
    { id: 1, title: 'JPO for Loading/Unloading & Transportation of Welded Rail Panels at SAIL/BHILAI', link: 'https://drive.google.com/file/d/15tcbWksSW23SlIqOzfJquCWR3Fro1Ucc/view?usp=sharing' },
    { id: 2, title: 'JPO for Revision of wagon speeds', link: 'https://drive.google.com/file/d/134kKUNKOnZqp4xUDfFG51KKhcvyHv2Fc/view?usp=sharing' },
    { id: 3, title: 'JPO for Rear Locomotive Shut Down', link: 'https://drive.google.com/file/d/18RPgOLm-f91pi4QYLtOS_Utqb3Lgalqn/view?usp=sharing' },
    { id: 4, title: 'Revised JPO for Shuttting Down of Diesel Locomotives', link: 'https://drive.google.com/file/d/1IN_g16TqHSqPYh_Q9rLmJOmgepPHxQVg/view?usp=sharing' },
    { id: 5, title: 'JPO for New SPART of MYS Division', link: 'https://drive.google.com/file/d/1q1xavx2HKtj_jwUuJ9jtrSWoxMeelCL4/view?usp=sharing' },
    { id: 6, title: 'JPO for Freight Trains with Twin-Pipe Brake System', link: 'https://drive.google.com/file/d/1jCcBpfIuYB5ddMNGRZ_JHpVu44zi9x-A/view?usp=sharing' },
    { id: 7, title: 'JPO for Freight Train Examination', link: 'https://drive.google.com/file/d/1cJKadfxBX3NmkiyuAWk1lLdm_cEYMdWp/view?usp=sharing' },
    { id: 8, title: 'JPO for Power Interception/Loco Reversal', link: 'https://drive.google.com/file/d/1vFI5VCn1Td066PIKBK1h22WYVEA9Ld8e/view?usp=sharing' },
    { id: 9, title: 'JPO for Electronic-in-motion Weighbridges', link: 'https://drive.google.com/file/d/1QMo9U0jlnrc8cCIO_F72E6I3s8Egjac7/view?usp=sharing' },
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">JOINT PROCEDURE ORDERS  </h2>
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

export default JointProcedureOrders  ;