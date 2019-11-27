import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

import { useDataState, useDataDispatch } from 'reducers/context';

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

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  }
}));

const Topbar = props => {
  const {
    languageItem,
    currentLanguageCode
  } = useDataState();
  const dispatch = useDataDispatch();

  const { className, ...rest } = props;
  const classes = useStyles();
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

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        {/* 로고 */}
        <RouterLink to="/">
          <span className="font-mono text-sm font-black tracking-widest">T.I.M Dashboard</span>
          <span className="font-mono ml-3 text-xs">Dev.</span>
        </RouterLink>
        <div className={classes.flexGrow} />

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
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
