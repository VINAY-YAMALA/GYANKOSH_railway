import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const DieselLocoTSD = () => {
  const instructions = [
    { id: 1, title: 'Load meter Not Responding Diesel', link: 'https://drive.google.com/file/d/1aNTv1lCXybARuN6FyFWSpyKxaIFHe_8R/view?usp=sharing' },
    { id: 2, title: 'Diesel Locos CAB Changing Procedure', link: 'https://drive.google.com/file/d/1MGE_SP498m4UgvB-vZqwQM3yyExJK9IG/view?usp=sharing' },
    { id: 3, title: 'Diesel Loco picture Gallery', link: 'https://drive.google.com/file/d/1QjCYLWSWYuWNSJP6jxt1JAY2wgX3T5In/view?usp=sharing' },
    { id: 4, title: 'Truck/Traction motor/TM speed sensor isolation', link: 'https://drive.google.com/file/d/1frHtKg6NeFDPFPopjhDDTgR06hEIqibk/view?usp=sharing' },
    { id: 5, title: 'Cutout COCs Position in WDP4/WDG4', link: 'https://drive.google.com/file/d/1LjNl5YcJBvIYNu5Z1HMYMTuEcYViydGi/view?usp=sharing' },
    { id: 1, title: 'Dead Loco Moment WDP4/WDG4', link: 'https://drive.google.com/file/d/12AIQNEAkl3FWf_o9LbnmWXK-_BdchMBX/view?usp=sharing' },
    { id: 1, title: 'Diesel LOCOs Quick Troubleshoot', link: 'https://drive.google.com/file/d/1KjeUNrVjRJ9OELI9cKG8J36jmEmp7E73/view?usp=sharing' },
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">DIESEL LOCO TSD</h2>
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

export default DieselLocoTSD ;