import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const SwrHqSafetyCirculars = () => {
  const instructions = [
    { id: 1, title: 'HQ SC-12', link:'https://drive.google.com/file/d/1-RJwZ_n5lsT1vhiFMrJnkrJJpodSCL1N/view?usp=sharing' },
    { id: 2, title: 'HQ SC-11', link: 'https://drive.google.com/file/d/1xL0O4e8o5L1IWutdRMavidRMvbbIGH_C/view?usp=sharing' },
    { id: 3, title: 'HQ SC-10', link: 'https://drive.google.com/file/d/1Rt8hr1avVduibRhPapJUhi-TIcvjv2mi/view?usp=sharing' },
    { id: 4, title: 'HQ SC-09', link: 'https://drive.google.com/file/d/1HbPWmqamIn1SFFUUfyEEvX_HXR3oDRWL/view?usp=sharing' },
    { id: 5, title: 'HQ SC-08', link: 'https://drive.google.com/file/d/1o7ZEvb_W-N4n12isGgrk3dMRJxakijrp/view?usp=sharing' },
    { id: 6, title: 'HQ SC-07', link: 'https://drive.google.com/file/d/14EBAxRRivZhXZZGnS6paUKCmwU8TsF-W/view?usp=sharing' },
    { id: 7, title: 'HQ SC-06', link: 'https://drive.google.com/file/d/12dypQv-YHuZlTiXZc3nc4d69SlMOCl8x/view?usp=sharing' },
    { id: 8, title: 'HQ SC-05', link: 'https://drive.google.com/file/d/11pU-aT8Ji8aFdvtBUle11S5QsA82tzYt/view?usp=sharing' },
    { id: 9, title: 'HQ SC-04', link: 'https://drive.google.com/file/d/1Ft5_9Jsgy93peXYDq5EfWrr1Kc5pr1JU/view?usp=sharing' },
    { id: 10, title: 'HQ SC-03', link: 'https://drive.google.com/file/d/1viQ0sZAgVqoSCReYkEbZnmx1NTqa-_eu/view?usp=sharing' },
    { id: 11, title: 'HQ SC-02', link: 'https://drive.google.com/file/d/1SVqsuqCny4I8thVjAqERkJ1ZWDbqiT2M/view?usp=sharing' },
    { id: 12, title: 'HQ SC-01', link: 'https://drive.google.com/file/d/1x068c82fj7aSMu5FqXh3Rt4FzwwiqVWs/view?usp=sharing' },
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">SWR HQ SAFETY CIRCULARS</h2>
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

export default SwrHqSafetyCirculars;