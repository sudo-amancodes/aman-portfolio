import Link from 'next/link';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/sudo-amancodes' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/aman-waghchoure-68052b254/' },
]

const Social = ({ containerStyles, iconStyles }) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
      return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>

    })}
  </div>
}

export default Social