/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';

const CustomMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
  const [value] = useState('');
  return (
    <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
      <ul className="list-unstyled">{React.Children.toArray(children).filter((child) => !value || child.props.children.toLowerCase().startsWith(value))}</ul>
    </div>
  );
});

export default CustomMenu;
