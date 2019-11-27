import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Card,
  CardContent,
  MenuItem,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  Select,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Switch
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

// Reducer를 정의함
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



// 스타일을 정의함
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  signInContainer: {
    width: 300,
    paddingLeft: 15,
    paddingRight: 15,
  },
  fieldLeftMargin: {
    marginLeft: theme.spacing(1),
  },
  fieldRightMargin: {
    marginRight: theme.spacing(1),
  },
  fieldTopMargin: {
    marginTop: theme.spacing(1),
  },
  fieldBottomMargin: {
    marginBottom: theme.spacing(1),
  }
}));



const SignIn = props => {
  const {
    sentenceItem,
    currentLanguageCode
  } = useDataState();
  const dispatch = useDataDispatch();

  const classes = useStyles();




  // Field.사용자 그룹: 사용자 그룹 항목의 정보를 기억함
  const [userGroup, setUserGroup] = useState('');

  // Field.메일 주소: 메일 주소 항목의 정보를 기억함
  const [email, setEmail] = useState('');

  // Field.비밀번호: 비밀번호 항목의 정보를 기억함
  const [password, setPassword] = useState({
    value: '',
    showPassword: false
  });

  // Field.메일 주소 저장: 메일 주소 저장 항목의 정보를 기억함
  const [saveMailAddress, setSaveMailAddress] = useState(false);

  // Field.자동 로그인: 자동 로그인 항목의 정보를 기억함
  const [automaticallySignIn, setAutomaticallySignIn] = useState(false);



  useEffect(() => {
  }, []);



  // 선택한 언어로 문장을 변경함
  const getSentence = (code, param = {}) => {
    return sentence(sentenceItem, currentLanguageCode, code, param);
  }

  // Field.사용자 그룹: 사용자 그룹 목록 중, 하나의 사용자 그룹을 선택함
  const handleChangeUserGroup = event => {
    setUserGroup(event.target.value);
  };

  // Field.메일 주소: 메일 주소 항목에서 글자를 입력함
  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  // Field.비밀번호: 비밀번호 항목에서 글자를 입력함
  const handleChangePassword = event => {
    setPassword({
      ...password,
      value: event.target.value
    });
  };

  // Field.비밀번호: 비밀번호 항목의 출력여부 아이콘을 클릭함
  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword
    });
  };

  // Button.로그인: 로그인 버튼을 클릭함
  const handleClickSignIn = () => {
    console.log('로그인!');
  };

  // Field.메일 주소 저장: 메일 주소 저장 항목을 클릭함
  const handleChangeSaveMailAddress = event => {
    setSaveMailAddress(event.target.checked);
  };

  // Field.자동 로그인: 자동 로그인 항목을 클릭함
  const handleChangeAutomaticallySignIn = event => {
    setAutomaticallySignIn(event.target.checked);
  };

  // Button.회원으로 가입하시겠습니까?: 회원으로 가입하시겠습니까? 버튼을 클릭함
  const handleClickSignUp = () => {
    console.log('회원 가입');
  };

  // Button.아이디 또는 비밀번호가 기억나지 않으십니까?: 아이디 또는 비밀번호가 기억나지 않으십니까? 버튼을 클릭함
  const handleClickFindIdPw = () => {
    console.log('아이디 찾기');
  };

  // Button.첫 화면으로 이동: 첫 화면으로 이동 버튼을 클릭함
  const handleClickGoHome = () => {
    console.log('첫 화면으로 이동');
  };



  return (
    <div className={clsx(classes.root, 'flex items-center justify-center h-full')}>
      <Card className={classes.signInContainer}>
        <CardContent>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              {/* Label: 로그인 */}
              <span className="font-sans font-semibold text-2xl">
                <FontAwesomeIcon
                  icon={['fad', 'link']}
                  className="mr-2"
                />
                {/* 문장: 로그인 */}
                {getSentence('SignIn.signIn')}
              </span>
            </Grid>

            <Grid
              item
              xs={12}
            >
              {/* Field: 사용자 그룹 */}
              <FormControl fullWidth>
                <InputLabel id="selectUserGroupLabel">
                  {/* 문장: 사용자 그룹 */}
                  {getSentence('SignIn.userGroup')}
                </InputLabel>
                <Select
                  labelId="selectUserGroupLabel"
                  id="selectUserGroup"
                  value={userGroup}
                  onChange={handleChangeUserGroup}
                >
                  <MenuItem value="">
                    <em>
                      {/* 문장: 선택하세요 */}
                      {getSentence('Common.pleaseChoose')}
                      ..
                      </em>
                  </MenuItem>
                  <MenuItem value={1}>Group.A</MenuItem>
                  <MenuItem value={2}>Group.B</MenuItem>
                  <MenuItem value={3}>Group.Etc</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
            >
              {/* Field: 메일 주소 */}
              <TextField
                fullWidth
                id="inputEmail"
                type="search"
                label={getSentence('SignIn.email')}
                value={email}
                onChange={handleChangeEmail}
              />
            </Grid>

            <Grid
              item
              xs={12}
              className={classes.fieldBottomMargin}
            >
              {/* Field: 비밀번호 */}
              <FormControl fullWidth>
                <InputLabel htmlFor="inputPassword">
                  {/* 문장: 비밀번호 */}
                  {getSentence('SignIn.password')}
                </InputLabel>
                <Input
                  id="inputPassword"
                  type={password.showPassword ? 'search' : 'password'}
                  value={password.value}
                  onChange={handleChangePassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        className="focus:outline-none"
                      >
                        {password.showPassword ?
                          <FontAwesomeIcon
                            icon={['fad', 'eye']}
                            className="text-lg"
                          />
                          :
                          <FontAwesomeIcon
                            icon={['fad', 'eye-slash']}
                            className="text-lg"
                          />
                        }
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
            >
              {/* Button: 로그인 */}
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleClickSignIn}
                className="focus:outline-none"
              >
                <FontAwesomeIcon
                  icon={['far', 'sign-in']}
                  className="mr-2 text-base"
                />
                <span className="font-sans text-base">
                  {/* 문장: 로그인 */}
                  {getSentence('SignIn.signIn')}
                </span>
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
            >
              {/* Field: 메일 주소 저장 */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={saveMailAddress}
                    onChange={handleChangeSaveMailAddress}
                  />
                }
                label={getSentence('SignIn.saveMailAddress')}
              />

              {/* Field: 자동 로그인 */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={automaticallySignIn}
                    onChange={handleChangeAutomaticallySignIn}
                  />
                }
                label={getSentence('SignIn.automaticallySignIn')}
              />
            </Grid>

            <Grid
              item
              xs={12}
            >
              {/* Button: 회원으로 가입하시겠습니까? */}
              <Link
                component="button"
                variant="body2"
                onClick={handleClickSignUp}
                className={clsx(classes.fieldRightMargin, 'focus:outline-none text-left')}
              >
                {/* 문장: 회원으로 가입하시겠습니까? */}
                {getSentence('SignIn.signUp')}
              </Link>

              {/* Button: 아이디 또는 비밀번호가 기억나지 않으십니까? */}
              <Link
                component="button"
                variant="body2"
                onClick={handleClickFindIdPw}
                className={clsx(classes.fieldRightMargin, 'focus:outline-none text-left')}
              >
                {/* 문장: 아이디 또는 비밀번호가 기억나지 않으십니까? */}
                {getSentence('SignIn.findIdPw')}
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
            >
              {/* Button: 첫 화면으로 이동 */}
              <Link
                component="button"
                variant="body2"
                onClick={handleClickGoHome}
                className="focus:outline-none text-left"
              >
                <FontAwesomeIcon
                  icon={['far', 'arrow-left']}
                  className="mr-2"
                />
                {/* 문장: 첫 화면으로 이동 */}
                {getSentence('Move.goHome')}
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);
