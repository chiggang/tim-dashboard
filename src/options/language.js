// 언어의 환경설정을 정의함
export const languageOption = {
  defaultLanguageCode: 'ko'
};

// 선택할 수 있는 언어 목록을 정의함
export const languageItem = [
  {
    code: 'ko',
    name: '한국어',
    available: true
  },
  {
    code: 'en',
    name: 'English',
    available: true
  },
  {
    code: 'zh1',
    name: '简体中文',
    available: true
  },
  {
    code: 'zh2',
    name: '繁體中文',
    available: true
  },
  {
    code: 'es',
    name: 'Español',
    available: true
  },
  {
    code: 'de',
    name: 'Deutsch',
    available: false
  },
  {
    code: 'fr',
    name: 'Français',
    available: true
  },
  {
    code: 'ja',
    name: '日本語',
    available: true
  }
];

// 다국어 문장 목록을 정의함
export const sentenceItem = [
  {
    code: 'm.1',
    sentence: [
      {
        languageCode: 'ko',
        content: `테스트입니다.`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `It's a test.`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `是测试。`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `是測試。`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `en el cerebro.`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: ``,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `qui est le test.`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `テストです。`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'm.2',
    sentence: [
      {
        languageCode: 'ko',
        content: `이 프로그램은 개발 버전입니다.`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `This program is a development version.`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `这个程序是开发版本。`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `這個程序是開發版本。`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Esta es una versión de desarrollo.`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: ``,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `C'est une version de développement.`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `このプログラムは開発バージョンです。`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'm.3',
    sentence: [
      {
        languageCode: 'ko',
        content: `{no1} 더하기 {no2}는 {no3}입니다.`,
        sampleContent: `1 더하기 2는 3입니다.`
      },
      {
        languageCode: 'en',
        content: `{no1} plus {no2} is {no3}.`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `{no1}加{no2}等于{no3}。`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `{no1}加{no2}等於{no3}。`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `{no1} más {no2} es {no3}.`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: ``,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `{no1} plus {no2} est {no3}.`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `{no1}たす{no2}は{no3}です。`,
        sampleContent: ``
      }
    ]
  },

  /* SidebarMenu: 좌측 메뉴 */
  {
    code: 'SidebarMenu.A',
    sentence: [
      {
        languageCode: 'ko',
        content: `대시보드`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Dashboard`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `仪表板`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `儀表板`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Tablero`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Das Armaturenbrett`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Tableau de bord`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `ダッシュボード`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.AA',
    sentence: [
      {
        languageCode: 'ko',
        content: `대시보드 #1`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Dashboard #1`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `仪表板 #1`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `儀表板 #1`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Tablero #1`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Das Armaturenbrett #1`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Tableau de bord #1`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `ダッシュボード #1`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.AB',
    sentence: [
      {
        languageCode: 'ko',
        content: `대시보드 #2`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Dashboard #2`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `仪表板 #2`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `儀表板 #2`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Tablero #2`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Das Armaturenbrett #2`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Tableau de bord #2`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `ダッシュボード #2`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.B',
    sentence: [
      {
        languageCode: 'ko',
        content: `사용자`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `User`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `用户`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `用戶`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Usuario`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Der Benutzer`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Utilisateurs`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `ユーザー`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.C',
    sentence: [
      {
        languageCode: 'ko',
        content: `제품`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Product`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `产品`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `產品`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Productos`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Das Produkt`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Produit`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `製品`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.D',
    sentence: [
      {
        languageCode: 'ko',
        content: `인증`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Authentication`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `认证`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `認證`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Ratificación`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Authentifizierung für das System`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Authentification`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `認証`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.DA',
    sentence: [
      {
        languageCode: 'ko',
        content: `인증 #1`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Authentication #1`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `认证 #1`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `認證 #1`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Ratificación #1`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Authentifizierung für das System #1`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Authentification #1`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `認証 #1`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.DAA',
    sentence: [
      {
        languageCode: 'ko',
        content: `인증 #1-1`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Authentication #1-1`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `认证 #1-1`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `認證 #1-1`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Ratificación #1-1`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Authentifizierung für das System #1-1`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Authentification #1-1`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `認証 #1-1`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.DAB',
    sentence: [
      {
        languageCode: 'ko',
        content: `인증 #1-2`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Authentication #1-2`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `认证 #1-2`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `認證 #1-2`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Ratificación #1-2`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Authentifizierung für das System #1-2`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Authentification #1-2`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `認証 #1-2`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.DB',
    sentence: [
      {
        languageCode: 'ko',
        content: `인증 #2`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Authentication #2`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `认证 #2`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `認證 #2`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Ratificación #2`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Authentifizierung für das System #2`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Authentification #2`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `認証 #2`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.DC',
    sentence: [
      {
        languageCode: 'ko',
        content: `인증 #3`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Authentication #3`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `认证 #3`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `認證 #3`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Ratificación #3`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Authentifizierung für das System #3`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Authentification #3`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `認証 #3`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.E',
    sentence: [
      {
        languageCode: 'ko',
        content: `글자`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Typography`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `排字术`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `排字術`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Tipografía`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Tippfehler`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Typographie`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `タイポグラフィー`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.F',
    sentence: [
      {
        languageCode: 'ko',
        content: `아이콘`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Icon`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `图标`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `圖標`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Icon`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Symbol für das Symbol`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Icône`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `アイコン`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.G',
    sentence: [
      {
        languageCode: 'ko',
        content: `계정`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Account`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `账户`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `賬戶`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Cuenta`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Ihr Konto`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `Compte`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `勘定`,
        sampleContent: ``
      }
    ]
  },
  {
    code: 'SidebarMenu.H',
    sentence: [
      {
        languageCode: 'ko',
        content: `설정`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Setting`,
        sampleContent: ``
      },
      {
        languageCode: 'zh1',
        content: `设定`,
        sampleContent: ``
      },
      {
        languageCode: 'zh2',
        content: `設定`,
        sampleContent: ``
      },
      {
        languageCode: 'es',
        content: `Establecimiento`,
        sampleContent: ``
      },
      {
        languageCode: 'de',
        content: `Einstellungen`,
        sampleContent: ``
      },
      {
        languageCode: 'fr',
        content: `établissement`,
        sampleContent: ``
      },
      {
        languageCode: 'ja',
        content: `設定`,
        sampleContent: ``
      }
    ]
  },
];
