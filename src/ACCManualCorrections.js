import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const ACCManualCorrections = () => {
  const instructions = [
    { id: 1, title: 'ACC.M.CM-09', link: 'https://drive.google.com/file/d/1w8NNyi0-fhLeqEeLR0-LNrqsuUC-vrre/view?usp=sharing' },
    { id: 2, title: 'ACC.M.CM-08', link: 'https://drive.google.com/file/d/101IUvjq8l_iawxtePVE-t-6QgwRHH8-8/view?usp=sharing' },
    { id: 3, title: 'ACC.M.CM-07', link: 'https://drive.google.com/file/d/11vJYDrllshoaj7rav2ZZu1gGikVSqE4C/view?usp=sharing' },
    { id: 4, title: 'ACC.M.CM-06', link: 'https://drive.google.com/file/d/1bpoEI3GpTCNb5PnLvYSNsinqn4dcOPZ6/view?usp=sharing' },
    { id: 5, title: 'ACC.M.CM-05', link: 'https://drive.google.com/file/d/1CzylIOiPhd0GPbbfIrBRoq55qzRfOwWi/view?usp=sharing' },
    { id: 6, title: 'ACC.M.CM-04', link: 'https://drive.google.com/file/d/1zHRN-IxuR3ELTOMoH5fUp1fvT5p8ut8l/view?usp=sharing' },
    { id: 7, title: 'ACC.M.CM-03', link: 'https://drive.google.com/file/d/1PMv_cVHEpnNeqzDq4pz08URs9N_bK7lT/view?usp=sharing' },
    { id: 8, title: 'ACC.M.CM-02', link: 'https://drive.google.com/file/d/1wfcQHYfvchuzSlwQBJrq4YE8Ax_J3Y8i/view?usp=sharing' },
    { id: 9, title: 'ACC.M.CM-01', link: 'https://drive.google.com/file/d/12FAWHcAyY99q2l1RRdvv1Ln5OGe-CMlx/view?usp=sharing' },


   
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">ACC.Manual Corrections  </h2>
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

export default ACCManualCorrections  ;