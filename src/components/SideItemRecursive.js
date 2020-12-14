// wrast: I've use a linting formatter in VSCode to format this file. Look at
// the git history and you'll see what a difference that makes. You can do this
// any time you want by hitting option+shift+f
import React, { useState, useCallback } from 'react';

/**
 * Create a function that tells us if an item has children
 */
const hasChildren = (item) => {
  const test = !!item && !!item.nodes && item.nodes.length > 0;
  return test;
};

const SideItemRecursive = ({ items, handleItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(
    (e) => {
      setIsOpen(!isOpen);
      handleItemClick(e, isOpen);
    },
    [handleItemClick, isOpen, setIsOpen]
  );

  return (
    <div style={{ paddingLeft: '8px' }}>
      {items &&
        items.map((item) => {
          const { name, link } = item;
          return (
            <div key={name}>
              {(link && (
                <div onClick={handleClick} style={linkContainerStyle}>
                  <a href={link} style={linkstyle}>
                    <p style={nameStyle}>{name}</p>
                  </a>
                </div>
              )) || (
                <div onClick={handleClick}>
                  <p style={nameStyle}>{name}</p>
                </div>
              )}
              {isOpen && hasChildren(item) && (
                <SideItemRecursive
                  items={item.nodes}
                  handleItemClick={handleItemClick}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

const nameStyle = {
  background: 'transparent',
  margin: '20px',
  fontWeight: '600',
};

const linkContainerStyle = {
  height: 'auto',
  width: '350px',
  '@keyframes:fadeTest': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  animation: '0.6s ease-in fadeTest 0s',
};

const linkstyle = {
  textdecoration: 'none',
  color: '#ccc',
};

export default SideItemRecursive;
