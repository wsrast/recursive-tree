// Your data here is only two dimensional. I'd recommend you mimic their example
// and make it at least 3 levels deep. You should also make each "node"
// identical in data structure.
// I'd use either an empty "nodes" array or a missing "nodes" value as a sign
// that node has no children.

export const NavItemsRecursive = [
  {
    name: 'Node 1',
    nodes: [
      {
        name: 'Node 1 - 1',
        nodes: [
          {
            name: 'Node 1 - 1 - 1',
            link: 'https://picsum.photos/200/200/?random&a',
          },
        ],
      },
      {
        name: 'Node 1 - 2',
        link: 'https://picsum.photos/200/200/?random&a',
      },
    ],
  },
  {
    name: 'Node 2',
    link: 'https://picsum.photos/200/200/?random&a',
  },
  {
    name: 'Node 3',
    link: 'https://picsum.photos/200/200/?random&a',
  },
];

export const NavItems = [
  {
    name: 'Node 0',
    links: [
      { title: 'Node 0-1', to: 'https://picsum.photos/200/200/?random&a' },
      { title: 'Node0-2', to: 'https://picsum.photos/200/200/?random&b' },
      { title: 'Node0-3', to: 'https://picsum.photos/200/200/?random&c' },
    ],
    open: false,
  },
  {
    name: 'Node 1',
    links: [
      { title: 'Node 1-1', to: 'https://picsum.photos/200/200/?random&a' },
      { title: 'Node1-2', to: 'https://picsum.photos/200/200/?random&b' },
      { title: 'Node1-3', to: 'https://picsum.photos/200/200/?random&c' },
    ],
    open: false,
  },
  {
    name: 'Node 2',
    links: [
      { title: 'Node 2-1', to: 'https://picsum.photos/200/200/?random&a' },
      { title: 'Node2-2', to: 'https://picsum.photos/200/200/?random&b' },
      { title: 'Node2-3', to: 'https://picsum.photos/200/200/?random&c' },
    ],
    open: false,
  },
  {
    name: 'Node 3',
    links: [
      { title: 'Node 3-1', to: 'https://picsum.photos/200/200/?random&a' },
      { title: 'Node3-2', to: 'https://picsum.photos/200/200/?random&b' },
      { title: 'Node3-3', to: 'https://picsum.photos/200/200/?random&c' },
    ],
    open: false,
  },
];
