import React from 'react';

const SidebarLink = ({ href, text }) => (
  <a href={href}>
    <div className="sidebar-item">
      <div>{text}</div>
    </div>
  </a>
);

export default SidebarLink;
