import React from 'react';
import SideItem from './SideItem';
import { NavItems } from '../data/NavItemData';

// Overall Comments
// *
// By the description here: https://github.com/ShootProof/recruiting-full-stack,
// I'd say that they're very much expecting you do use recursion to handle the
// rendering of the tree. I think you'll get points taken off if you try to hard
// code a 3-level tree.
// What I think you need to do is have your `SideNav` component take in one prop
// called "tree" and the shape of that data should be a nested array of objects.
// I've added a couple of files named *Recursive.ts to show what I mean.

// wrast: if you're just going to return something from a function like this,
// you can just skip the syntax like the below. Notice I've also shortened your
// map function.
const SideNavBetter = () => (
  <div style={sideNavStyle}>
    <h2 style={headerStyle}>Side Navigation</h2>
    {NavItems.map((navItem, index) => (
      <SideItem key={index} items={navItem} />
    ))}
  </div>
);

const SideNav = () => {
  return (
    <div style={sideNavStyle}>
      <h2 style={headerStyle}>Side Navigation</h2>
      {NavItems.map((navItem, index) => {
        return <SideItem key={index} items={navItem} />;
      })}
    </div>
  );
};

const sideNavStyle = {
  height: '100vh',
  width: '350px',
  // wrast: you've got a duplicate "backround" value here. You should remove the first one.
  background: 'rgb(55,82,130)',
  background:
    'Linear-gradient(135deg,rgba(55,82,130,1) 0%,rgba(10,96,194,5) 100%)',
  position: 'absolute',
  border: '1px solid transparent',
  left: 0,
  textAlign: 'left',
};
const headerStyle = {
  fontWeight: '600',
  padding: '0px 20px',
  color: '#fff',
};

export default SideNav;
