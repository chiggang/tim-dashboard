// 좌측 메뉴 목록을 정의함
export const sidebarMenuItem = [
  {
    seq: 'A',
    title: 'Dashboard',
    href: '/dashboard',
    icon: ['fab', 'apple'],
    child: [
      {
        seq: 'AA',
        title: 'SubDash #1',
        href: '/dashboard',
        icon: ['fab', 'github']
      },
      {
        seq: 'AB',
        title: 'SubDash #2',
        href: '/dashboard',
        icon: ['fab', 'github-alt']
      }
    ]
  },
  {
    seq: 'B',
    title: 'Users',
    href: '/users',
    icon: ['fab', 'google']
  },
  {
    seq: 'C',
    title: 'Products',
    href: '/products',
    icon: ['fab', 'amazon']
  },
  {
    seq: 'D',
    title: 'Authentication',
    href: '/sign-in',
    icon: ['fab', 'facebook'],
    child: [
      {
        seq: 'DA',
        title: 'SubAuth #1',
        href: '/sign-in',
        icon: ['fab', 'steam'],
        child: [
          {
            seq: 'DAA',
            title: 'SubAuth #1-1',
            href: '/sign-in',
            icon: ['fab', 'snapchat']
          },
          {
            seq: 'DAB',
            title: 'SubAuth #1-2',
            href: '/sign-in',
            icon: ['fab', 'waze']
          }
        ]
      },
      {
        seq: 'DB',
        title: 'SubAuth #2',
        href: '/sign-in',
        icon: ['fab', 'google-drive']
      },
      {
        seq: 'DC',
        title: 'SubAuth #3',
        href: '/sign-in',
        icon: ['fab', 'slack-hash']
      }
    ]
  },
  {
    seq: 'E',
    title: 'Typography',
    href: '/typography',
    icon: ['fab', 'twitter']
  },
  {
    seq: 'F',
    title: 'Icons',
    href: '/icons',
    icon: ['fab', 'dropbox']
  },
  {
    seq: 'G',
    title: 'Account',
    href: '/account',
    icon: ['fab', 'evernote']
  },
  {
    seq: 'H',
    title: 'Settings',
    href: '/settings',
    icon: ['fab', 'digital-ocean']
  }
];

// 좌측 메뉴 목록의 폴더 열고 닫음을 정의함
export const collapseSidebarMenuItem = [];
