import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const GradientChartsData = () => {
  const instructions = [
    { id: 1, title: 'YPR-HAS(SL)', link: 'https://drive.google.com/file/d/1Wt-x0UMLa1mNBFZhufQV-hy4AKg_iRv6/view?usp=sharing' },
    { id: 2, title: 'SBC-YPR TWIN SL', link: 'https://drive.google.com/file/d/10twJE8IppHZMDTuR1e0fVLuuJ7-6jnDX/view?usp=sharing' },
    { id: 3, title: 'SBC-TK UP', link: 'https://drive.google.com/file/d/13njAmR3rh-KY5ahVL7ojPqACXym5ETsq/view?usp=sharing' },
    { id: 4, title: 'SBC-TK DN', link: 'https://drive.google.com/file/d/1x1ev2wwmh8jOg6xJPW3a9mDTFi2nVhjV/view?usp=sharing' },
    { id: 5, title: 'SBC-KJM UP & DN', link: 'https://drive.google.com/file/d/13erhv_vv5kB_XLNNQJRqdfSGEELy-6Y-/view?usp=sharing' },
    { id: 6, title: 'RNR-KJG(SL)', link: 'https://drive.google.com/file/d/1LgqZNUYI75EYxMnM_udUqNIBtzgRlvbg/view?usp=sharing' },
    { id: 7, title: 'RNR-JRU DN', link: 'https://drive.google.com/file/d/17WM4fg6siN5zDs0Wca7Wk4qcdcW3OBm9/view?usp=sharing' },
    { id: 8, title: 'KJG-UBL(SL)', link: 'https://drive.google.com/file/d/1ne3SDR2-F4WiH7SoYRtIE4pU0HdmiRQe/view?usp=sharing' },
    { id: 9, title: 'JRU-RNR UP', link: 'https://drive.google.com/file/d/1qmeEt1U9KLn1JzYgE-Cd7qM388NIbgR0/view?usp=sharing' },
    { id: 10, title: 'SBC-MYS DN', link: 'https://drive.google.com/file/d/10Po1Qx1oZpDdjhS01uOQA5mZcO7LFLJj/view?usp=sharing' },
    { id: 11, title: 'SBC-MYS UP', link: 'https://drive.google.com/file/d/1nrN6s9Ol-4rS3f7wM_CRbLV5Hf1Pr1Y3/view?usp=sharing' },
    { id: 12, title: 'SKLR-MAJN (SL) GHAT', link: 'https://drive.google.com/file/d/1cJFKLPH3QclKQkbG6_7QQc1it-Q5oFVA/view?usp=sharing' },
    { id: 13, title: 'ASK-TK DN)', link: 'https://drive.google.com/file/d/1MgjK9UXK470_F4aPDu0yyrTzP79EVHra/view?usp=sharing' },
    { id: 14, title: 'SMET-TLGP(SL)', link: 'https://drive.google.com/file/d/1ZYtbPmUwdOKCBN7K8HwLjQBI7OUbGfsy/view?usp=sharing' },
    { id: 15, title: 'RRB-SMET(SL)', link: 'https://drive.google.com/file/d/1UVRjRhAht0hyE9dV1riIPlrkFlD1aBCv/view?usp=sharing' },
    { id: 16, title: 'MYS-CMNR(SL)', link: 'https://drive.google.com/file/d/1W-EfV4WGpJjMSA_dWI0IJMIShrACNK5U/view?usp=sharing' },
    { id: 17, title: 'JRU-RDG(SL)', link: 'https://drive.google.com/file/d/1FSxO6UO5PUfgRglMu25R_3Z-eHmL3fkY/view?usp=sharing' },
    { id: 18, title: 'MYS-ASK(SL)', link: 'https://drive.google.com/file/d/15-mJF7fJl2NKZFwNkO3bqJSEaiv6jjLy/view?usp=sharing' },
    { id: 19, title: 'TK-ASK UP(SL)', link: 'https://drive.google.com/file/d/1_-PZYGM2q66qRmc5FjWdL2OmotDGPCj_/view?usp=sharing' },
    { id: 20, title: 'DRU-CMGR(SL)', link: 'https://drive.google.com/file/d/1lMsL-fJm2LNVTeWUczh8lhnqFftPuhcx/view?usp=sharing' },
    { id: 21, title: 'HAS-SKLR(SL)', link: 'https://drive.google.com/file/d/1XXI0hBNDhaCsNdCFbwpOHt-Awj6aqk_u/view?usp=sharing' },
    { id: 22, title: 'JRU-ASK DN(DL)', link: 'https://drive.google.com/file/d/1WyojTgR5HRC7_vvqa40h7oMpfXgR7QHL/view?usp=sharing' },
    { id: 23, title: 'ASK-JRU UP(DL)', link: 'https://drive.google.com/file/d/1-NVah_g_Uo1SFomNjzuP9s85DBslPY8Z/view?usp=sharing' },
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">Gradient Charts Data</h2>
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

export default GradientChartsData;