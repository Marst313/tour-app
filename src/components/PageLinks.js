import React from 'react';
import { links } from '../dataLink';

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {links.map((data) => {
        const { id, text, href } = data;
        return (
          <li key={id}>
            <a href={href} className={childClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
