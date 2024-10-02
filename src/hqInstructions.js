import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const HQInstructions = () => {
  const instructions = [
    { id: 1, title: 'HQ INSTRUCTION-37 Rev-01', link: 'https://drive.google.com/file/d/1xkoSgWUjbYkYKySLX4I2kF9LkV2Wot3M/view?usp=sharing' },
    { id: 2, title: 'HQ INSTRUCTION-41', link: 'https://drive.google.com/file/d/1wX7x2AJfLL-MIA4G-bqAhHaW0k7e_W-K/view?usp=sharing' },
    { id: 3, title: 'HQ INSTRUCTION-40', link:  'https://drive.google.com/file/d/1JIrUdZSN1Rbyd2sqGJLHW56uq3LZxXqW/view?usp=sharing' },
    { id: 4, title: 'HQ INSTRUCTION-39', link: 'https://drive.google.com/file/d/1r1LsS5XIaVo8YLtpmjUs15AeTvGhMrSh/view?usp=sharing' },
    { id: 5, title: 'HQ INSTRUCTION-38', link: 'https://drive.google.com/file/d/1_fmG4oCetGd2ur3QUqON7o8cr-fyb_T8/view?usp=sharing' },
    { id: 6, title: 'HQ INSTRUCTION-37', link: 'https://drive.google.com/file/d/1Xez7U3TBWd6p8Nr7enWxJ2LqLGWtUshJ/view?usp=sharing' },
    { id: 7, title: 'HQ INSTRUCTION-36', link: 'https://drive.google.com/file/d/1R3NHbpP9K1j4Nqv-9xS1SfupnOhduel5/view?usp=sharing' },
    { id: 8, title: 'HQ INSTRUCTION-35', link: 'https://drive.google.com/file/d/1dlZwVrn6cTAd7CyfpVuSTrzEkJN2P61z/view?usp=sharing' },
    { id: 9, title: 'HQ INSTRUCTION-34', link: 'https://drive.google.com/file/d/1RFPhNw-L0HWDV1JCyZW9nDa4hCIc42zV/view?usp=sharing' },
    { id: 10, title: 'HQ INSTRUCTION-33', link: 'https://drive.google.com/file/d/1Y3bl61wbeCn-hP-hfOaOa1ftmdbPR4-Y/view?usp=sharing' },
    { id: 11, title: 'HQ INSTRUCTION-32', link: 'https://drive.google.com/file/d/1t9D5eY5aQnbLQyEFDmhUhNplMWDPWavI/view?usp=sharing' },
    { id: 12, title: 'HQ INSTRUCTION-31', link: 'https://drive.google.com/file/d/1vXgJMrFBtrQNDteGSfv2X_EDPr4uZn73/view?usp=sharing' },
    { id: 13, title: 'HQ INSTRUCTION-30', link: 'https://drive.google.com/file/d/1f8zgp6qJGndKfA6f7iBOCAXEQBbBtTPC/view?usp=sharing' },
    { id: 14, title: 'HQ INSTRUCTION-29', link: 'https://drive.google.com/file/d/1jf8VVr5ci9rFOj_HixyPXLUKCbY9TfdE/view?usp=sharing' },
    { id: 15, title: 'HQ INSTRUCTION-28', link: 'https://drive.google.com/file/d/1RAAeWpAHV7b9xE9WXVnMrqkfegrKtGY-/view?usp=sharing' },
    { id: 16, title: 'HQ INSTRUCTION-27', link: 'https://drive.google.com/file/d/11jsQl_TU0-GctClgPxyLbH4VSlnjmyLq/view?usp=sharing' },
    { id: 17, title: 'HQ INSTRUCTION-26', link: 'https://drive.google.com/file/d/1-s4v5IzDtdJrOPP-dN9IQ8OGaFrOU25k/view?usp=sharing' },
    { id: 18, title: 'HQ INSTRUCTION-25', link: 'https://drive.google.com/file/d/1ijSeiVd-zRCFqDS8uuwVpC6l-QtNvTsO/view?usp=sharing' },
    { id: 19, title: 'HQ INSTRUCTION-24', link: 'https://drive.google.com/file/d/17D2BAmyfhZ-tJiFGpkQ5BVJXVBa1ZdZ9/view?usp=sharing' },
    { id: 20, title: 'HQ INSTRUCTION-23', link: 'https://drive.google.com/file/d/13DXyswdjIXOwr5-20UGc6JHlJfNyGwd7/view?usp=sharing' },
    { id: 21, title: 'HQ INSTRUCTION-22', link: 'https://drive.google.com/file/d/1NBgkyIYBlhfCXN1MtR5LHDXWn-4q0SIP/view?usp=sharing' },
    { id: 22, title: 'HQ INSTRUCTION-21', link: 'https://drive.google.com/file/d/1YFi1LAyuoKev7ha_FqrHi1ntizPAMvj_/view?usp=sharing' },
    { id: 23, title: 'HQ INSTRUCTION-20', link: 'https://drive.google.com/file/d/1AeXyQM0hSQdfKkkrfStb45wjEyZs-iJB/view?usp=sharing' },
    { id: 24, title: 'HQ INSTRUCTION-19', link: 'https://drive.google.com/file/d/1plnAB6sEfboHUq_dXAkFsdwPB-YZS2OD/view?usp=sharing' },
    { id: 25, title: 'HQ INSTRUCTION-18', link: 'https://drive.google.com/file/d/1JCc8uvrkYif5hm02zOhTPqG-MTc4ygb0/view?usp=sharing' },
    { id: 26, title: 'HQ INSTRUCTION-17', link: 'https://drive.google.com/file/d/1509vdiqoGWbknYh_yd76dHkJS6VzcaQO/view?usp=sharing' },
    { id: 27, title: 'HQ INSTRUCTION-16', link: 'https://drive.google.com/file/d/1OgGsl2A37WVTzXgn8xw6aRNd8jd34vBh/view?usp=sharing' },
    { id: 28, title: 'HQ INSTRUCTION-15', link: 'https://drive.google.com/file/d/1sVMAxNCCqge41-Cv9tiJKkM3QtDIPc7l/view?usp=sharing' },
    { id: 29, title: 'HQ INSTRUCTION-14', link: 'https://drive.google.com/file/d/1gEEbfbXfo1ICGw0Y0zLrlqTZ6BXS1Pf1/view?usp=sharing' },
    { id: 30, title: 'HQ INSTRUCTION-13', link: 'https://drive.google.com/file/d/1G987W81OcQbQku3E3w_4IBycektKf5DP/view?usp=sharing' },
    { id: 31, title: 'HQ INSTRUCTION-12', link: 'https://drive.google.com/file/d/1EErZNt0xM7y6acjkRkj706uf3faHQ0Y2/view?usp=sharing' },
    { id: 32, title: 'HQ INSTRUCTION-11', link: 'https://drive.google.com/file/d/1OQmDIHBkcxbVDC2bSQSslUp8HdOu6sak/view?usp=sharing' },
    { id: 33, title: 'HQ INSTRUCTION-10', link: 'https://drive.google.com/file/d/1JaGt6KHWyljY9WeBDhXeB9Ddavi6zQaN/view?usp=sharing' },
    { id: 34, title: 'HQ INSTRUCTION-09', link: 'https://drive.google.com/file/d/1WYyuer0ipTAhuWYfiGJLH-IOZPlSHbwv/view?usp=sharing' },
    { id: 35, title: 'HQ INSTRUCTION-08', link: 'https://drive.google.com/file/d/1Vw8zkSLRrbHdDXdsAgj837ZiEZxVeSgk/view?usp=sharing' },
    { id: 36, title: 'HQ INSTRUCTION-07', link: 'https://drive.google.com/file/d/10lr8wvGN7jGxk0M2mIcYI0nIr3UAZAkF/view?usp=sharing' },
    { id: 37, title: 'HQ INSTRUCTION-06', link: 'https://drive.google.com/file/d/1GWD9R8DAb2iGlYxZFjuTa9BPZiieq-LZ/view?usp=sharing' },
    { id: 38, title: 'HQ INSTRUCTION-05', link: 'https://drive.google.com/file/d/1t8meDBiV1H1qAa5aBFT3HgrK-Ii2lKHi/view?usp=sharing' },
    { id: 39, title: 'HQ INSTRUCTION-04', link: 'https://drive.google.com/file/d/1d0rYkCHKwuf-Vb0Unmok8gbPhYaBPniQ/view?usp=sharing' },
    { id: 40, title: 'HQ INSTRUCTION-03', link: 'https://drive.google.com/file/d/1iWHDE8EIJzy3J0e3No9W2dgPhIvVZxsZ/view?usp=sharing' },
    { id: 41, title: 'HQ INSTRUCTION-02', link: 'https://drive.google.com/file/d/1AecUqk6UYYYi2KsJugifHkzrChThBTpF/view?usp=sharing' },
    { id: 42, title: 'HQ INSTRUCTION-01', link: 'https://drive.google.com/file/d/17kj3m3EGpfq23rnS9KcrEB7iCjjFSOfx/view?usp=sharing' },


  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">HQ Instructions</h2>
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

export default HQInstructions;
