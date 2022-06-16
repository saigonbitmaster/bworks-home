export const fullMenu = [
  { url: '/', name: 'common:logoName', priority: 4 },
  { url: '/submit', name: 'common:product01', priority: 1 },
  { url: '/submit', name: 'common:product02', priority: 1 },
  { url: '/submit', name: 'common:product03', priority: 1 },
  { url: '/submit', name: 'common:product04', priority: 1 },

  { url: '/login', name: 'common:login', priority: 2 },
  { url: '/submit', name: 'common:submit', priority: 3 },
  { url: '/support', name: 'common:support', priority: 3 },
];
export const logoMenu = fullMenu.filter((item) => item.priority === 4);
export const topCenterMenu = fullMenu.filter((item) => item.priority === 1);
export const topRightMenu = fullMenu.filter((item) => item.priority === 2);
export const subMenu = fullMenu.filter((item) => item.priority === 3);
