import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const SwrHqSafetyDrives = () => {
  const instructions = [
    { id: 1, title: 'HQ SD 06/2023-24', link: 'https://drive.google.com/file/d/1XV3PScEx59z_wHN7T7grK6wAyFqEkFT_/view?usp=sharing' },
    { id: 2, title: 'HQ SD 03/2023-24', link: 'https://drive.google.com/file/d/1OJJkk2ouXfDZPao2tCCAvFEIMpe5lTjA/view?usp=sharing' },
    { id: 3, title: 'HQ SD 10/2022-23', link: 'https://drive.google.com/file/d/11OynDkQlaj6zopgRSVe4rJK63kwXPECm/view?usp=sharing' },
    { id: 4, title: 'HQ SD 08/2022-23', link: 'https://drive.google.com/file/d/1CcmL-zh7lxSAQ8xeMrCgD7IYOqzeUlgn/view?usp=sharing' },
    { id: 5, title: 'HQ SD 06/2022-23', link: 'https://drive.google.com/file/d/1o2i-r1e2Cswpjs_iTha89VsQLWK6iVlU/view?usp=sharing' },
    { id: 6, title: 'HQ SD 03/2022-23', link: 'https://drive.google.com/file/d/11G0DjGPXawLutVPA69G8Hn-dQOccnl8q/view?usp=sharing' },
    { id: 7, title: 'HQ SD 07/2021-22', link: 'https://drive.google.com/file/d/1k6AUqETR2pGmRwkm40DuTkzGa80WDyEK/view?usp=sharing' },
    { id: 8, title: 'HQ SD 06/2021-22', link: 'https://drive.google.com/file/d/1G_oW-u--iOOPjNxQTLXqxGpgV03lCWbx/view?usp=sharing' },
    { id: 9, title: 'HQ SD 05/2021-22', link: 'https://drive.google.com/file/d/1tpZppZvQHe_y-sm9_GO5eV1Ul7z4tkAv/view?usp=sharing' },
    { id: 10, title: 'HQ SD 04/2021-22', link: 'https://drive.google.com/file/d/1g-TacFIHDTFA8QnJUDfhvNNfE4VX8vIJ/view?usp=sharing' },
    { id: 11, title: 'HQ SD 03/2021-22', link: 'https://drive.google.com/file/d/1xbue8lOwlmECB_HiGx2eCo1RR1GnioiI/view?usp=sharing' },
    { id: 12, title: 'HQ SD 02/2021-22', link: 'https://drive.google.com/file/d/1x5-xFC40ptCyc4SgbKgdmcjyD-xNNCO-/view?usp=sharing' },
    { id: 13, title: 'HQ SD 01/2021-22', link: 'https://drive.google.com/file/d/1qvcr8SRzSWM6iIxeSuvdffG6-JOGV9B3/view?usp=sharing' },

  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">SWR HQ SAFETY DRIVES</h2>
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

export default SwrHqSafetyDrives ;