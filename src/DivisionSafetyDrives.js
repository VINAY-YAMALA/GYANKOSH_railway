import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const DivisionSafetyDrives = () => {
  const instructions = [
    { id: 1, title: 'DIV SD-12/2021-22', link: 'https://drive.google.com/file/d/1jkFx9C5JHro5sf_SG-ImBG_a_w4TMzK8/view?usp=sharing' },
    { id: 2, title: 'DIV SD-11/2021-22', link: 'https://drive.google.com/file/d/1_aOyHt2kegxPudzgIboTieSdiI0aA-gi/view?usp=sharing' },
    { id: 3, title: 'DIV SD-10/2021-22', link: 'https://drive.google.com/file/d/1s6570hIq2F2SRKlbGV4VFeQQHUNszzDn/view?usp=sharing' },
    { id: 4, title: 'DIV SD-09/2021-22', link: 'https://drive.google.com/file/d/1PkWWBGdgPrBddjMHLIghJRrwyxZOBpK_/view?usp=sharing' },
    { id: 5, title: 'DIV SD-08/2021-22', link: 'https://drive.google.com/file/d/1SnkKlapJyJRBKns3E1FSpwqfT0XEO8m4/view?usp=sharing' },
    { id: 6, title: 'DIV SD-07/2021-22', link: 'https://drive.google.com/file/d/1wl1NiNnkYpj78F7oQxdotLOETkryOoKr/view?usp=sharing' },
    { id: 7, title: 'DIV SD-06/2021-22', link: 'https://drive.google.com/file/d/100UaKTkejkMGiQR5QHOxXo791UnkbA2A/view?usp=sharing' },
    { id: 8, title: 'DIV SD-05/2021-22', link: 'https://drive.google.com/file/d/1lqsnyFGERUCHIXZX06Un2IlpzuxhftLc/view?usp=sharing' },
    { id: 9, title: 'DIV SD-04/2021-22', link: 'https://drive.google.com/file/d/1prs1Fdvo2N9vNikDluTdLToH9UVGQDB9/view?usp=sharing' },
    { id: 10, title: 'DIV SD-03/2021-22', link: 'https://drive.google.com/file/d/1x3kV85bPgyzRi1B4-rly7n__MKSUE9rM/view?usp=sharing' },
    { id: 11, title: 'DIV SD-02/2021-22', link: 'https://drive.google.com/file/d/16V8wcOH8AGVDCAx1g-v_2cdiGhucWHO1/view?usp=sharing' },
    { id: 12, title: 'DIV SD-01/2021-22', link: 'https://drive.google.com/file/d/1sRtlnpIVlpNsPUcmVq1PckgX3CSFokfx/view?usp=sharing' },


  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">DIVISION SAFETY DRIVES</h2>
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

export default DivisionSafetyDrives ;