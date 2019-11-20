/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef, useState, useEffect } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Button,
  colors,
  Collapse,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(0.5)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  subButton: {
    paddingLeft: theme.spacing(4)
  },
  subMenuIcon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    marginRight: theme.spacing(1)
  },
  subMenuIcon3: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  subMenuLevel1: {
    paddingLeft: theme.spacing(2 * 0)
  },
  subMenuLevel2: {
    paddingLeft: theme.spacing(2 * 1)
  },
  subMenuLevel3: {
    paddingLeft: theme.spacing(2 * 2)
  },
  subMenuLevel4: {
    paddingLeft: theme.spacing(2 * 3)
  },
  subMenuLevel5: {
    paddingLeft: theme.spacing(2 * 4)
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const {
    sentenceItem,
    currentLanguageCode,
    sidebarMenuItem,
    collapseSidebarMenuItem
  } = useDataState();
  const dispatch = useDataDispatch();

  const { className, ...rest } = props;
  const classes = useStyles();

  const [joypadStatus, setJoypadStatus] = useState('');

  // 좌측 메뉴 목록이 변경되었을 경우에 실행함
  useEffect(() => {
    // 좌측 메뉴의 메뉴 코드를 기억함
    const createMenuSeq = data => {
      let menuSeq = [];

      if (!data) {
        return menuSeq;
      }

      data.map(item => {
        menuSeq.push({
          seq: item.seq,
          opened: false
        });

        if (item.child) {
          menuSeq = menuSeq.concat(createMenuSeq(item.child));
        }

        return null;
      });

      return menuSeq;
    };

    // 좌측 메뉴 목록의 폴더 열고 닫음을 기억함
    dispatch({
      type: 'collapseSidebarMenuItem',
      data: createMenuSeq(sidebarMenuItem)
    });
  }, [sidebarMenuItem]);

  // 최초 한번만 실행함
  useEffect(() => {
  }, [dispatch]);




  // JoyPad Controll
  window.joypad.on('connect', e => {
    const { id } = e.gamepad;

    console.log(`${id} connected!`);
  });
  window.joypad.on('button_press', e => {
    console.log(e.detail);
    const { buttonName } = e.detail;
    if (buttonName === 'button_0') {
    }
    setJoypadStatus(buttonName);
  });





  // 좌측 메뉴를 생성함
  const createMenu = data => {
    let menu = [];

    if (!data) {
      return menu;
    }

    // 메뉴를 출력함(하위 메뉴는 재귀호출로 처리함)
    data.map(item => {
      // 하위 메뉴는 들여쓰기를 적용함
      let classesSubMenuLevel = classes[`subMenuLevel${item.seq.length}`];

      // 하위 메뉴가 있을 경우, 하위 메뉴 영역이 열렸는지 닫혔는지에 따라 하위 메뉴를 펼침
      const tempCollapseMenu = collapseSidebarMenuItem.filter(data => data.seq === item.seq);
      let menuOpened = null;

      if (tempCollapseMenu.length > 0) {
        menuOpened = collapseSidebarMenuItem.filter(data => data.seq === item.seq)[0].opened;
      }

      // 메뉴를 출력함(하위 메뉴가 있음)
      item.child && menu.push(
        <ListItem
          className={clsx(classes.item, classesSubMenuLevel)}
          disableGutters
          key={`ListItem_${item.seq}`}
          onClick={() => handleCollapseMenu(item.seq, menuOpened)}
        >
          <Button className={clsx(classes.button, 'focus:outline-none')}>
            <div className={classes.icon}>
              <FontAwesomeIcon icon={item.icon} className="text-lg" />
            </div>
            <span className="font-sans font-medium text-sm">{getSentence(`SidebarMenu.${item.seq}`)}</span>
            {menuOpened ?
              <ExpandLess className={clsx(classes.subMenuIcon, 'absolute right-0')} />
              :
              <ExpandMore className={clsx(classes.subMenuIcon, 'absolute right-0')} />
            }
          </Button>
        </ListItem>
      );

      // 메뉴를 출력함(하위 메뉴가 없음)
      !item.child && menu.push(
        <ListItem
          className={clsx(classes.item, classesSubMenuLevel)}
          disableGutters
          key={`ListItem_${item.seq}`}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={item.href}
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={item.icon} className="text-lg" />
            </div>
            <span className="font-sans font-medium text-sm">{getSentence(`SidebarMenu.${item.seq}`)}</span>
          </Button>
        </ListItem>
      );

      // 하위 메뉴가 있을 경우, 재귀호출로 처리함
      if (item.child) {
        menu.push(
          <Collapse in={menuOpened} timeout="auto" unmountOnExit key={`ListItemCollapse_${item.seq}`}>
            {createMenu(item.child)}
          </Collapse>
        );
      }

      return null;
    });

    return menu;
  };

  // 좌측 메뉴를 클릭했을 때, 좌측 메뉴의 폴더를 열고 닫음
  const handleCollapseMenu = (menuSeq, menuOpened) => {
    let tempCollapseMenu = [...collapseSidebarMenuItem];
    tempCollapseMenu.filter(data => data.seq === menuSeq)[0].opened = !menuOpened;

    // 좌측 메뉴 목록의 폴더 열고 닫음을 기억함
    dispatch({
      type: 'collapseSidebarMenuItem',
      data: tempCollapseMenu
    });
  };

  // 선택한 언어로 문장을 변경함
  const getSentence = (code, param = {}) => {
    return sentence(sentenceItem, currentLanguageCode, code, param);
  }

  return (
    <>
      <List
        {...rest}
        className={clsx(classes.root, className)}
      >
        {createMenu(sidebarMenuItem)}
      </List>
      <Divider />
      {/* <List
        {...rest}
        className={clsx(classes.root, className)}
      >
        {pages.map(page => (
          <ListItem
            className={classes.item}
            disableGutters
            key={page.title}
          >
            <Button
              activeClassName={classes.active}
              className={classes.button}
              component={CustomRouterLink}
              to={page.href}
            >
              <div className={classes.icon}>{page.icon}</div>
              {page.title}
            </Button>
          </ListItem>
        ))}

        <ListItem button onClick={handleClick}>
          SubTest
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            <ListItem button className={classes.subButton}>
              Test #1 [{joypadStatus}]
          </ListItem>
            <ListItem button className={classes.subButton}>
              Test #2
          </ListItem>
            <ListItem button className={classes.subButton} onClick={handleClick2}>
              Test #3
            {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <Divider />
              <List component="div" disablePadding>
                <ListItem button className={classes.subButton}>
                  Test #11
              </ListItem>
                <ListItem button className={classes.subButton}>
                  Test #22
              </ListItem>
                <ListItem button className={classes.subButton}>
                  Test #33
              </ListItem>
              </List>
              <Divider />
            </Collapse>

            <ListItem button className={classes.subButton}>
              Test #4
            <FontAwesomeIcon icon={fadAmbulance} />
            </ListItem>
          </List>
          <Divider />
        </Collapse>

        <ListItem
          disableGutters
        >
          <Button>
            Menu #1
        </Button>
        </ListItem>

      </List> */}
    </>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string
};

export default SidebarNav;
