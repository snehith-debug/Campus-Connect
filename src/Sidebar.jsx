import React from 'react';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
  // Define an array of sidebar links with href and text
  const links = [
    { href: './homepage.html', text: 'HOME' },
    { href: './write.html', text: 'Academic registration' },
    { href: './watch.html', text: 'Attendance register' },
    { href: './read.html', text: 'Career choice' },
    { href: './feedback.html', text: 'Courses' },
    { href: './contribute.html', text: 'Counseling diary' },
    { href: './joinclub.html', text: 'CLUB/Activities' },
    { href: './suggestions.html', text: 'Exam Section' },
    { href: './miscellaneous.html', text: 'Feedback' },
    { href: './sil-updates.html', text: 'Fee payments' },
    { href: './socialmedia.html', text: 'Hostel Management' },
    { href: './student.html', text: 'Student' },
    { href: './homepage.html', text: 'Faculty' },
    { href: './homepage.html', text: 'Courses' }
  ];

  return (
    <div id="sidebar">
      <br /><br />
      {links.map((link, index) => (
        <SidebarLink key={index} href={link.href} text={link.text} />
      ))}
    </div>
  );
};

export default Sidebar;
