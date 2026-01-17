// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';

// interface LinkProps {
//   href: string;
//   children: React.ReactNode;
//   className?: string;
// }

// export const Link: React.FC<LinkProps> = ({ href, children, className = '' }) => {
//   return (
//     <RouterLink to={href} className={className}>
//       {children}
//     </RouterLink>
//   );
// };

import React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

interface CustomLinkProps extends RouterLinkProps {
  className?: string;
  onClick?: () => void;
}

const Link: React.FC<CustomLinkProps> = ({ children, ...props }) => {
  return <RouterLink {...props}>{children}</RouterLink>;
};

export default Link;
