import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const GSRCorrections = () => {
  const instructions = [
    { id: 1, title: 'G & SR CM- 85', link: 'https://drive.google.com/file/d/1oWHUgdzgu9eT8likNAvc-UUZsQJbdIpT/view?usp=sharing' },
    { id: 2, title: 'G & SR CM- 84', link: 'https://drive.google.com/file/d/1AFGkLPstw5GWpWRPiviUlmPzR57u7eMz/view?usp=sharing' },
    { id: 3, title: 'G & SR CM- 83', link: 'https://drive.google.com/file/d/1SReH-CS_gp9ITM2mVLbIrnMNh8Sgluff/view?usp=sharing' },
    { id: 4, title: 'G & SR CM- 82', link: 'https://drive.google.com/file/d/1-BBdFAppfJUFDY3JLWm_KuTqDgxlRS7q/view?usp=sharing' },
    { id: 5, title: 'G & SR CM- 81', link: 'https://drive.google.com/file/d/19APCRSCw37sv83yvUGM-b1D4oLgBLGAk/view?usp=sharing' },
    { id: 6, title: 'G & SR CM- 79', link: 'https://drive.google.com/file/d/1SQNb4Q8cHrCnqcHu4I7T3sd1c90SMYfg/view?usp=sharing' },
    { id: 7, title: 'G & SR CM- 80', link: 'https://drive.google.com/file/d/1QsIPJLnZMfxy90865kwtxexT6yKrggSt/view?usp=sharing' },
    { id: 8, title: 'G & SR CM- 78', link: 'https://drive.google.com/file/d/1e9tSvQ3vCTsbRoN7ALOJiXknGsq_BidN/view?usp=sharing' },
    { id: 9, title: 'G & SR CM- 77', link: 'https://drive.google.com/file/d/11F-EnVuJAxfsdzVbv3ss-beMFnYsKdt4/view?usp=sharing' },
    { id: 10, title: 'G & SR CM- 76', link: 'https://drive.google.com/file/d/1rhouKzvSc2CGxl6u_BT2p9Dw3jKGhmQB/view?usp=sharing' },
    { id: 11, title: 'G & SR CM- 75', link: 'https://drive.google.com/file/d/1KFFx_LdIEpLFfygaIamrG3nkqL3zDKts/view?usp=sharing' },
    { id: 12, title: 'G & SR CM- 74', link: 'https://drive.google.com/file/d/1JQ6CO5QUeLuwLqqDJWNgzsWXm9p1WO6E/view?usp=sharing' },
    { id: 13, title: 'G & SR CM- 73', link: 'https://drive.google.com/file/d/1ZuRXJyIXMInp2UfXRo5Q9RSQQ0HleosZ/view?usp=sharing' },
    { id: 14, title: 'G & SR CM- 72', link: 'https://drive.google.com/file/d/1d-Arx9g9QGpXHxEO6mZNzPDTrwIy_rC4/view?usp=sharing' },
    { id: 15, title: 'G & SR CM- 71', link: 'https://drive.google.com/file/d/1qAIwyFgrOnvBXtF3FVol3lzu5I5UByQO/view?usp=sharing' },
    { id: 16, title: 'G & SR CM- 70', link: 'https://drive.google.com/file/d/1ETSt-XJEC2UyVDy99Hnd7CJXpDPg4WZQ/view?usp=sharing' },
    { id: 17, title: 'G & SR CM- 69', link: 'https://drive.google.com/file/d/10ZZhV-8h1lLn5tox0ttw9Dndu6Xk-Ulu/view?usp=sharing' },
    { id: 18, title: 'G & SR CM- 68', link: 'https://drive.google.com/file/d/1SHeS-YlIO2tFGUYOKeR49F8rCf-CUPnB/view?usp=sharing' },
    { id: 19, title: 'G & SR CM- 67', link: 'https://drive.google.com/file/d/1h2RX3e4UvA3y-W0P5C-0QkeOVnRvTs0m/view?usp=sharing' },
    { id: 20, title: 'G & SR CM- 66', link: 'https://drive.google.com/file/d/1byTpVE2ZRsQ9I2dAFg_00W5j7XlHBFeW/view?usp=sharing' },
    { id: 21, title: 'G & SR CM- 65', link: 'https://drive.google.com/file/d/1Fr-025Hr9j804v3lPXAjfv4lr7wujRxa/view?usp=sharing' },
    { id: 22, title: 'G & SR CM- 64', link: 'https://drive.google.com/file/d/1J7rzzTXMKpMqEXsYSLiYcKyqTGpyh-O5/view?usp=sharing' },
    { id: 23, title: 'G & SR CM- 63', link: 'https://drive.google.com/file/d/1ZVsLc-0ESw5P3Jj7ma_O5r1HynSkJ28O/view?usp=sharing' },
    { id: 24, title: 'G & SR CM- 62', link: 'https://drive.google.com/file/d/1PT9E1N4jIlflpPgPGQX8luisCGhp1HTv/view?usp=sharing' },
    { id: 25, title: 'G & SR CM- 61', link: 'https://drive.google.com/file/d/1fwggi_UF7bJlbnIO52IDo0URG_48opSY/view?usp=sharing' },
    { id: 26, title: 'G & SR CM- 60', link: 'https://drive.google.com/file/d/1_tnD-AEG-mEHgjh9gSkuRSAVLfiNq2Hj/view?usp=sharing' },
    { id: 27, title: 'G & SR CM- 59', link: 'https://drive.google.com/file/d/1yShFWHoLTiFsCOjuq9ptJoXGZOrm9yIT/view?usp=sharing' },
    { id: 28, title: 'G & SR CM- 58', link: 'https://drive.google.com/file/d/1L82f3K_LzK1oEbFSVcM9gadJb0Yv6kom/view?usp=sharing' },
    { id: 29, title: 'G & SR CM- 57', link: 'https://drive.google.com/file/d/1MLU_YC-6dDptJy7ffeZk_JV1N0i84aR0/view?usp=sharing' },
    { id: 30, title: 'G & SR CM- 56', link: 'https://drive.google.com/file/d/1W99Qi1Oo7Sodpz6z6qzCP6EebACjWtYt/view?usp=sharing' },
    { id: 31, title: 'G & SR CM- 55', link: 'https://drive.google.com/file/d/1hBdMom5EWqVo9J9MmLlrugEWZ2gncLnT/view?usp=sharing' },
    { id: 32, title: 'G & SR CM- 54', link: 'https://drive.google.com/file/d/1nwW8LTzYnPlKK0tI3n-I52BAulobfBxi/view?usp=sharing' },
    { id: 33, title: 'G & SR CM- 53', link: 'https://drive.google.com/file/d/1P2JcEpmZAybAFpQTe7-APJxzOzr4gpYK/view?usp=sharing' },
    { id: 34, title: 'G & SR CM- 52', link: 'https://drive.google.com/file/d/1gtUBtexmdBJwcaASh374SJe3oa6RIOpM/view?usp=sharing' },
    { id: 35, title: 'G & SR CM- 51', link: 'https://drive.google.com/file/d/1-H6QNn2EFrW8MkV06h5f855OlkGiWOoU/view?usp=sharing' },
  
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">G & SR Corrections </h2>
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

export default GSRCorrections  ;