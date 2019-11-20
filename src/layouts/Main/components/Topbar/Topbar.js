import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationImportantOutlined';
import InputIcon from '@material-ui/icons/Input';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck as fasCheck } from '@fortawesome/pro-solid-svg-icons';
// import { faCheck as farCheck } from '@fortawesome/pro-regular-svg-icons';
// import { faGlobeAsia as fadGlobeAsia } from '@fortawesome/pro-duotone-svg-icons';

import { useDataState, useDataDispatch } from 'reducers/context';
import { sentence } from 'common/language';

// FontAwesome 아이콘을 불러옴
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';

// FontAwesome 아이콘을 불러옴
library.add(fab, fad, fal, fas, far);

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

const Topbar = props => {
  const {
    languageItem,
    sentenceItem,
    currentLanguageCode
  } = useDataState();
  const dispatch = useDataDispatch();

  const { className, onSidebarOpen, ...rest } = props;
  const classes = useStyles();
  const [notifications] = useState([]);
  const [languageList, setLanguageList] = useState(null);
  const isOpenedLanguageList = Boolean(languageList);

  // 언어 설정 아이콘 위에 언어 목록을 출력함
  const handleViewLanguageList = event => {
    setLanguageList(event.currentTarget);
  };

  // 언어 설정 아이콘 위에 출력한 언어 목록 중, 하나의 언어를 선택함
  const handleChangeLanguage = (event, code) => {
    // 현재 선택한 언어를 기억함
    dispatch({
      type: 'currentLanguageCode',
      data: code
    });

    setLanguageList(null);
  };

  // 언어 설정 아이콘 위에 출력한 언어 목록을 닫음
  const handleCloseLanguageList = () => {
    setLanguageList(null);
  };

  // 선택한 언어로 문장을 변경함
  const getSentence = (code, param = {}) => {
    return sentence(sentenceItem, currentLanguageCode, code, param);
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
          <span className="font-mono ml-3 text-xs">Dev.</span>
        </RouterLink>
        <div className={classes.flexGrow} />

        <span className="font-sans text-sm">* 샘플1: {getSentence('m.1')}</span>
        <div className={classes.flexGrow} />
        <span className="font-sans text-sm">* 샘플2: {getSentence('m.2')}</span>
        <div className={classes.flexGrow} />
        <span className="font-sans text-sm">* 샘플3: {getSentence('m.3', { no1: 1, no2: 2, no3: 3 })}</span>
        <div className={classes.flexGrow} />

        {/* Desktop mode: 아이콘 버튼 */}
        <Hidden mdDown>
          {/* 언어 설정 아이콘 */}
          <IconButton
            color="inherit"
            className="focus:outline-none"
            onClick={handleViewLanguageList}
          >
            <FontAwesomeIcon icon={['fad', 'globe-asia']} />
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
            {/* {loadedLanguageItem && languageItem.map(data => ( */}
            {languageItem.map(data => (
              <MenuItem
                key={data.code}
                disabled={data.available === false}
                selected={data.code === currentLanguageCode}
                onClick={event => handleChangeLanguage(event, data.code)}
              >
                {data.code === currentLanguageCode ?
                  <FontAwesomeIcon icon={['fas', 'check']} className="mr-2 text-xs text-green-500" />
                  :
                  <FontAwesomeIcon icon={['fas', 'check']} className="mr-2 text-transparent" />
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
