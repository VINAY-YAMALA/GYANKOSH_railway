import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const RailwayBoardSafetyDrives = () => {
  const instructions = [
    { id: 1, title: 'RB SD 10/2023-24', link: 'https://drive.google.com/file/d/1YrNCSIywyFd2LqKxEPy4hKmBIzJDlel3/view?usp=sharing' },
    { id: 2, title: 'RB SD 09/2023-24', link: 'https://drive.google.com/file/d/16fcj6Z8HVFxTgC-cumMRBiVaVrdTD0ic/view?usp=sharing' },
    { id: 3, title: 'RB SD 08/2023-24', link: 'https://drive.google.com/file/d/1aHBXYMTpbtBxBiam8muxoM8VkpRYDW3a/view?usp=sharing' },
    { id: 4, title: 'RB SD 07/2023-24', link: 'https://drive.google.com/file/d/18JP0NGmaZ2nUG3Yh18FyW14B_x0kcaPB/view?usp=sharing' },
    { id: 5, title: 'RB SD 06/2023-24', link: 'https://drive.google.com/file/d/1xIjyIi7Xhf3Pfib2ymnWYNeMGLCHMMrg/view?usp=sharing' },
    { id: 6, title: 'RB SD 05/2023-24', link: 'https://drive.google.com/file/d/1zw7Wvoy9zA5HfAcy-PCTEPCdNsLTUd0Q/view?usp=sharing' },
    { id: 7, title: 'RB SD 04/2023-24', link: 'https://drive.google.com/file/d/1iUXiD0gly1FfaPsV5ZsBQSSa3ERVsl2s/view?usp=sharing' },
    { id: 8, title: 'RB SD 02/2023-24', link: 'https://drive.google.com/file/d/1vdohWZf-CKMHrI1TUYhfARGv01i3_jQM/view?usp=sharing' },
    { id: 9, title: 'RB SD 01/2023-24', link: 'https://drive.google.com/file/d/101dCh8bs7nq0gt8TgcArOzdPA838yAXS/view?usp=sharing' },
    { id: 10, title: 'RB SD 12/2022-23', link: 'https://drive.google.com/file/d/1fw6XT6RktdwhnTmAahrke7Lizja3pECG/view?usp=sharing' },
    { id: 11, title: 'RB SD 11/2022-23', link: 'https://drive.google.com/file/d/1gNjhzZwlcd7qy1OrYtXLW70FQTri5XD1/view?usp=sharing' },
    { id: 12, title: 'RB SD 09/2022-23', link: 'https://drive.google.com/file/d/1vmaVcqj8sXpRa-B_X4p6NTF0CmB1mexk/view?usp=sharing' },
    { id: 13, title: 'RB SD 07/2022-23', link: 'https://drive.google.com/file/d/1qQRKjQ27qnmb5_EZVDJqc0RHVma3YZzz/view?usp=sharing' },
    { id: 14, title: 'RB SD 05/2022-23', link: 'https://drive.google.com/file/d/1mswR6yP4SwSv3PIsH-28K95LgPZZ-vb3/view?usp=sharing' },
    { id: 15, title: 'RB SD 04/2022-23', link: 'https://drive.google.com/file/d/1acYLotxblmYdFeFK0iTRSySXLPqIhL9H/view?usp=sharing' },
    { id: 16, title: 'RB SD 02/2022-23', link: 'https://drive.google.com/file/d/1VxXLy6CxxvRIfY9inQa-IMNRDplV0XEO/view?usp=sharing' },
    { id: 17, title: 'RB SD 01/2022-23', link: 'https://drive.google.com/file/d/1Bh68UDjpx0pYSzpIl8a25f7N0iWLP4s_/view?usp=sharing' },
    { id: 18, title: 'RB SD 10/2021-22', link: 'https://drive.google.com/file/d/1_hCJD0Y-5ucgZ8HScb1YVPu0dkg7xNn2/view?usp=sharing' },
    { id: 19, title: 'RB SD 09/2021-22', link: 'https://drive.google.com/file/d/1UpgDEBtNj0ACoAFVG0POz-KQPFYdq1_g/view?usp=sharing' },
    { id: 20, title: 'RB SD 08/2021-22', link: 'https://drive.google.com/file/d/186k9oFcSb6vbCKUcq1T6vUf-OcvzhKWy/view?usp=sharing' },
    { id: 21, title: 'RB SD 07/2021-22', link: 'https://drive.google.com/file/d/1q-G3Io4i7Rt8tch3Rh5s2ll2XR7dPf2y/view?usp=sharing' },
    { id: 22, title: 'RB SD 06/2021-22', link: 'https://drive.google.com/file/d/1zGr-7vQQ4r-6ZC-6yrvFlLRuAmJADGQd/view?usp=sharing' },
    { id: 23, title: 'RB SD 05/2021-22', link: 'https://drive.google.com/file/d/1U5glho9gFogTbTgVBHtvOZUu4fKltXOc/view?usp=sharing' },
    { id: 24, title: 'RB SD 04/2021-22', link: 'https://drive.google.com/file/d/1rjPMehh34VIlaDCjko47Qovida1cqDej/view?usp=sharing' },
    { id: 25, title: 'RB SD 03/2021-22', link: 'https://drive.google.com/file/d/1Hq2eXsDRp8hpcght4lHb2EHr98plhHEz/view?usp=sharing' },
    { id: 26, title: 'RB SD 02/2021-22', link: 'https://drive.google.com/file/d/15WZYEEXspDcxIT-u41QJGqjWe5LzC3V9/view?usp=sharing' },
    { id: 27, title: 'RB SD 01/2021-22', link: 'https://drive.google.com/file/d/1meUrJ0sKym-jE5uCgfMUTACGWEN8vtIR/view?usp=sharing' },


  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">Railway Board Safety Drives </h2>
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

export default RailwayBoardSafetyDrives  ;