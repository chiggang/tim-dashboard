import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationImportantOutlined';
import InputIcon from '@material-ui/icons/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck as fasCheck } from '@fortawesome/pro-solid-svg-icons';
// import { faCheck as farCheck } from '@fortawesome/pro-regular-svg-icons';
import { faGlobeAsia as fadGlobeAsia } from '@fortawesome/pro-duotone-svg-icons';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

// 선택할 수 있는 언어 목록을 정의함
const languageItem = [
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
const sentenceItem = [
  {
    code: 'm_1',
    sentence: [
      {
        languageCode: 'ko',
        content: `테스트입니다.`,
      },
      {
        languageCode: 'en',
        content: `It's a test.`,
      },
      {
        languageCode: 'zh1',
        content: `是测试。`,
      },
      {
        languageCode: 'zh2',
        content: `是測試。`,
      },
      {
        languageCode: 'es',
        content: `en el cerebro.`,
      },
      {
        languageCode: 'de',
        content: ``,
      },
      {
        languageCode: 'fr',
        content: `qui est le test.`,
      },
      {
        languageCode: 'ja',
        content: `テストです。`,
      }
    ]
  },
  {
    code: 'm_2',
    sentence: [
      {
        languageCode: 'ko',
        content: `이 프로그램은 개발 버전입니다.`,
      },
      {
        languageCode: 'en',
        content: `This program is a development version.`,
      },
      {
        languageCode: 'zh1',
        content: `这个程序是开发版本。`,
      },
      {
        languageCode: 'zh2',
        content: `這個程序是開發版本。`,
      },
      {
        languageCode: 'es',
        content: `Esta es una versión de desarrollo.`,
      },
      {
        languageCode: 'de',
        content: ``,
      },
      {
        languageCode: 'fr',
        content: `C'est une version de développement.`,
      },
      {
        languageCode: 'ja',
        content: `このプログラムは開発バージョンです。`,
      }
    ]
  },
  {
    code: 'm_3',
    sentence: [
      {
        languageCode: 'ko',
        content: `{no1} 더하기 {no2}는 {no3}입니다.`,
      },
      {
        languageCode: 'en',
        content: `{no1} plus {no2} is {no3}.`,
      },
      {
        languageCode: 'zh1',
        content: `{no1}加{no2}等于{no3}。`,
      },
      {
        languageCode: 'zh2',
        content: `{no1}加{no2}等於{no3}。`,
      },
      {
        languageCode: 'es',
        content: `{no1} más {no2} es {no3}.`,
      },
      {
        languageCode: 'de',
        content: ``,
      },
      {
        languageCode: 'fr',
        content: `{no1} plus {no2} est {no3}.`,
      },
      {
        languageCode: 'ja',
        content: `{no1}たす{no2}は{no3}です。`,
      }
    ]
  }
];

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const classes = useStyles();
  const [notifications] = useState([]);

  const [languageList, setLanguageList] = useState(null);
  const isOpenedLanguageList = Boolean(languageList);
  const [selectedLanguageCode, setSelectedLanguageCode] = useState('ko');

  // 언어 설정 아이콘 위에 언어 목록을 출력함
  const handleViewLanguageList = event => {
    setLanguageList(event.currentTarget);
  };

  // 언어 설정 아이콘 위에 출력한 언어 목록 중, 하나의 언어를 선택함
  const handleChangeLanguage = (event, code) => {
    setSelectedLanguageCode(code);
    setLanguageList(null);
  };

  // 언어 설정 아이콘 위에 출력한 언어 목록을 닫음
  const handleCloseLanguageList = () => {
    setLanguageList(null);
  };

  // 선택한 언어로 문장을 변경함
  const getSentence = (code, param = {}) => {
    const str1 = sentenceItem.filter(data => data.code === code);

    if (str1.length === 0) {
      return '';
    }

    const str2 = str1[0].sentence.filter(data => data.languageCode === selectedLanguageCode);

    if (str2.length === 0) {
      return '';
    }

    const str3 = str2[0].content;

    let str4 = str3;

    // 최종 문장에 인자값을 적용함
    for (let key in param) {
      let reg = new RegExp('{' + key + '}', 'gi');

      str4 = str4.replace(reg, param[key]);
    }

    return str4;
  }

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        {/* 로고 */}
        <RouterLink to="/">
          <span className="font-mono text-sm font-black tracking-widest">T.I.M Dashboard</span>
          <span className="ml-3 font-sans text-xs">Dev.</span>
        </RouterLink>
        <div className={classes.flexGrow} />

        <span className="font-sans text-sm">* 샘플1: {getSentence('m_1')}</span>
        <div className={classes.flexGrow} />
        <span className="font-sans text-sm">* 샘플2: {getSentence('m_2')}</span>
        <div className={classes.flexGrow} />
        <span className="font-sans text-sm">* 샘플3: {getSentence('m_3', { no1: 1, no2: 2, no3: 3 })}</span>
        <div className={classes.flexGrow} />

        {/* Desktop mode: 아이콘 버튼 */}
        <Hidden mdDown>
          {/* 언어 설정 아이콘 */}
          <IconButton
            color="inherit"
            className="focus:outline-none"
            onClick={handleViewLanguageList}
          >
            <FontAwesomeIcon icon={fadGlobeAsia} />
          </IconButton>
          {/* 언어 설정 아이콘 위에 출력될 언어 목록 */}
          <Menu
            anchorEl={languageList}
            keepMounted
            open={isOpenedLanguageList}
            onClose={handleCloseLanguageList}
            PaperProps={{
              style: {
                maxHeight: 400
              }
            }}
          >
            {languageItem.map(data => (
              <MenuItem
                key={data.code}
                disabled={data.available === false}
                selected={data.code === selectedLanguageCode}
                onClick={event => handleChangeLanguage(event, data.code)}
              >
                {data.code === selectedLanguageCode ?
                  <FontAwesomeIcon icon={fasCheck} className="mr-2 text-xs text-green-500" />
                  :
                  <FontAwesomeIcon icon={fasCheck} className="mr-2 text-transparent" />
                }
                <span className="mr-2 font-sans">{data.name}</span>
              </MenuItem>
            ))}
          </Menu>



          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>

        {/* Mobile mode: 아이콘 버튼 */}
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
