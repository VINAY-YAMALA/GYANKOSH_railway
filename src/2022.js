import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const Year2022 = () => {
  const instructions = [
    
    { id: 1, title: 'SOB_074/2022', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 2, title: 'SOB_073/2022', link: 'https://drive.google.com/link-to-file-41' },
    { id: 3, title: 'SOB_072/2022', link: 'https://drive.google.com/link-to-file-40' },
    { id: 4, title: 'SOB_071/2022', link: 'https://drive.google.com/link-to-file-39' },
    { id: 5, title: 'SOB_070/2022', link: 'https://drive.google.com/link-to-file-38' },
    { id: 6, title: 'SOB_069/2022', link: 'https://drive.google.com/link-to-file-37' },
    { id: 7, title: 'SOB_068/2022', link: 'https://drive.google.com/link-to-file-36' },
    { id: 8, title: 'SOB_067/2022', link: 'https://drive.google.com/link-to-file-35' },
    { id: 9, title: 'SOB_066/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 10,title: 'SOB_065/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 11, title: 'SOB_064/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 12, title: 'SOB_063/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 13, title: 'SOB_062/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 14, title: 'SOB_061/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 15, title: 'SOB_060/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 16, title: 'SOB_059/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 17, title: 'SOB_058/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 18, title: 'SOB_057/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 19, title: 'SOB_056/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 20, title: 'SOB_055/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 21, title: 'SOB_054/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 22, title: 'SOB_053/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 23, title: 'SOB_052/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 24, title: 'SOB_051/2022', link: 'https://drive.google.com/link-to-file-34' }, 
    { id: 25, title: 'SOB_050/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 26, title: 'SOB_049/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 27, title: 'SOB_048/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 28, title: 'SOB_047/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 29, title: 'SOB_046/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 30, title: 'SOB_045/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 31, title: 'SOB_044/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 32, title: 'SOB_043/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 33, title: 'SOB_042/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 34, title: 'SOB_041/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 35, title: 'SOB_040/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 36, title: 'SOB_039/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 37, title: 'SOB_038/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 38, title: 'SOB_037/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 39, title: 'SOB_036/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 40, title: 'SOB_035/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 41, title: 'SOB_034/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 42, title: 'SOB_033/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 43, title: 'SOB_032/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 44, title: 'SOB_031/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 45, title: 'SOB_030/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 46, title: 'SOB_029/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 47, title: 'SOB_028/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 48, title: 'SOB_027/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 49, title: 'SOB_026/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 50, title: 'SOB_025/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 51, title: 'SOB_024/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 52, title: 'SOB_023/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 53, title: 'SOB_022/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 54, title: 'SOB_021/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 55, title: 'SOB_020/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 56, title: 'SOB_019/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 57, title: 'SOB_018/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 58, title: 'SOB_017/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 59, title: 'SOB_016/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 60, title: 'SOB_015/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 61, title: 'SOB_014/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 62, title: 'SOB_013/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 63, title: 'SOB_012/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 64, title: 'SOB_011/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 65, title: 'SOB_010/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 66, title: 'SOB_009/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 67, title: 'SOB_008/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 68, title: 'SOB_007/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 69, title: 'SOB_006/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 70, title: 'SOB_005/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 71, title: 'SOB_004/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 72, title: 'SOB_003/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 73, title: 'SOB_002/2022', link: 'https://drive.google.com/link-to-file-34' },
    { id: 74, title: 'SOB_001/2022', link: 'https://drive.google.com/link-to-file-34' },
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">2022</h2>
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

export default Year2022;