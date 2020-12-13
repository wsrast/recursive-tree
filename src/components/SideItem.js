// wrast: I've use a linting formatter in VSCode to format this file. Look at
// the git history and you'll see what a difference that makes. You can do this
// any time you want by hitting option+shift+f
import React from 'react';

const SideItem = ({ items }) => {
  const { name, links, open } = items;
  const [isOpen, setOpen] = React.useState(open);

  const openSideNav = () => {
    setOpen(!isOpen);
  };

  return (
    <div onClick={() => openSideNav()} style={sideItemStyle}>
      <p style={nameStyle}>Side Item</p>
      {isOpen &&
        links.map((link, index) => {
          const { title, to } = link;
          return (
            <div key={index} style={linkContainerStyle}>
              <a href={to}>
                <p style={nameStyle}>{title}</p>
              </a>
            </div>
          );
        })}
    </div>
  );
};
const nameStyle = {
  margin: '20px',
  fontWeight: '600',
};

const sideItemStyle = {
  height: 'auto',
  minHeight: '50px',
  width: '350px',
  borderTop: '3px solid #CBCBCB',
  color: '#fff',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  cursor: 'pointer',
};

const linkContainerStyle = {
  height: 'auto',
  width: '350px',
  background: '#FAFAFA',
  borderTop: '2px solid #D6D6D6',
  '@keyframes:fadeTest': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  animation: '0.6s ease-in fadeTest 0s',
};

const linkstyle = {
  textdecoration: 'none',
  color: '#333333',
};

export default SideItem;
