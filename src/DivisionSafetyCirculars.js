import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const DivisionSafetyCirculars = () => {
  const instructions = [
    { id: 1, title: 'DIV SC-03/2022-23', link: 'https://drive.google.com/file/d/1c86sPvLn6Rz7daVl_weUY9frkauyOygU/view?usp=sharing' },
    { id: 2, title: 'DIV SC-02/2021-22', link: 'https://drive.google.com/file/d/1tjAz3XEjHEvpDmxJQT3CLywvmrOGj6il/view?usp=sharing' },
    { id: 3, title: 'DIV SC-01/2021-22', link: 'https://drive.google.com/file/d/1ONfD7wxeoU9MDkCKK-LNfGnVxWbR2VVX/view?usp=sharing' },
    { id: 4, title: 'DIV SC-02/2020-21', link: 'https://drive.google.com/file/d/1lMwzJyc1ukydIX3Lruqh7RKmYYyh6avb/view?usp=sharing' },
    { id: 5, title: 'DIV SC-01/2020-21', link: 'https://drive.google.com/file/d/1gcterTIjmBXf4x2MHFL8ESH3HguLgnZm/view?usp=sharing' },
    { id: 6, title: 'DIV SC-04/2019-20', link: 'https://drive.google.com/file/d/1ZlLVobIPzeGScnQA0SA_UYSdvt1RPGEm/view?usp=sharing' },
    { id: 7, title: 'DIV SC-03/2019-20', link: 'https://drive.google.com/file/d/19uxlhKLQB2lZ9SYoK_TzbVMhrmG4WVR1/view?usp=sharing' },
    { id: 8, title: 'DIV SC-02/2019-20', link: 'https://drive.google.com/file/d/1Fj9_08l6ZomsanqiOyVZL7ZEFW5wRDIc/view?usp=sharing' },
    { id: 9, title: 'DIV SC-01/2019-20', link: 'https://drive.google.com/file/d/1erS0YD-izIUrOspWc5axEZl1yawUL8NV/view?usp=sharing' },
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header"> Division Safety Circulars</h2>
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

export default DivisionSafetyCirculars;