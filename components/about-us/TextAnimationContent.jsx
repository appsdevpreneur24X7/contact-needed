"use client"
import { TypeAnimation } from 'react-type-animation';

const TextAnimationContent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Share Contacts of Plumbers , Electricians , Carpenters, Maid, Drivers near you',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'You name a service, you get the right Contact Details',
        1000,
        'Provide SEO and Digital Marketing Solutions',
        1000,
        'Provide Enhanced Support for Members',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2rem', display: 'inline-block',fontSize : "2.5rem",
      background: `linear-gradient(90deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)`, 
      WebkitBackgroundClip:'text',
      WebkitTextFillColor:'transparent' }}
      repeat={Infinity}
    />
  );
};

export default TextAnimationContent