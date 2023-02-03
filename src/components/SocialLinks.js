import React from 'react';
import { socialLinks } from '../dataLink';

const SocialLinks = ({ parentClass, linkClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((data) => {
        const { id, href, icon } = data;
        return (
          <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" className={linkClass}>
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
