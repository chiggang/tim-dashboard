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
  DialogTitle
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

// 다이얼로그를 드래그하여 이동함
import { draggableDialog } from 'common/draggableDialog';

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
// import Draggable from 'react-draggable';

// FontAwesome 아이콘을 불러옴
library.add(fab, fad, fal, fas, far);



// 스타일을 정의함
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  signInContainer: {
    width: 400,
    paddingLeft: 15,
    paddingRight: 15,
  },
  fieldRightMargin: {
    marginRight: theme.spacing(1),
  },
  fieldBottomMargin: {
    marginBottom: theme.spacing(1),
  }
}));



// 
// const PaperComponent = props => {
//   return (
//     <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
//       <Paper {...props} />
//     </Draggable>
//   );
// };



const SignUp = props => {
  const {
    sentenceItem,
    currentLanguageCode
  } = useDataState();
  const dispatch = useDataDispatch();

  const classes = useStyles();




  // Field.사용자 그룹 선택: 사용자 그룹 선택 항목의 정보를 기억함
  const [userGroup, setUserGroup] = useState('');

  // Field.메일 주소 입력: 메일 주소 입력 항목의 정보를 기억함
  const [email, setEmail] = useState('');

  // Field.비밀번호 입력: 비밀번호 입력 항목의 정보를 기억함
  const [password, setPassword] = useState({
    value: '',
    showPassword: false
  });

  // Field.비밀번호 재입력: 비밀번호 재입력 항목의 정보를 기억함
  const [rePassword, setRePassword] = useState({
    value: '',
    showPassword: false
  });

  // Field.약관을 읽고 동의합니다: 약관을 읽고 동의합니다 항목의 정보를 기억함
  const [readTermsConditions, setReadTermsConditions] = useState(false);

  // Dialog: 다이얼로그의 출력여부를 기억함 
  const [showDialog, setShowDialog] = useState({
    termsConditions: false
  });



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

  // Field.비밀번호 재입력: 비밀번호 재입력 항목에서 글자를 입력함
  const handleChangeRePassword = event => {
    setRePassword({
      ...rePassword,
      value: event.target.value
    });
  };

  // Field.비밀번호 재입력: 비밀번호 재입력 항목의 출력여부 아이콘을 클릭함
  const handleClickShowRePassword = () => {
    setRePassword({
      ...rePassword,
      showPassword: !rePassword.showPassword
    });
  };

  // Button.로그인: 로그인 버튼을 클릭함
  const handleClickSignUp = () => {
    console.log('회원 가입');
  };

  // Field.약관을 읽고 동의합니다: 약관을 읽고 동의합니다 항목을 클릭함
  const handleChangeReadTermsConditions = event => {
    setReadTermsConditions(event.target.checked);
  };

  // Field.약관 읽기: 약관 읽기 항목을 클릭함
  const handleClickTermsConditions = event => {
    // 약관 읽기 다이얼로그를 출력함
    setShowDialog({
      ...showDialog,
      termsConditions: true
    });
  };

  // Button.이미 회원으로 가입하셨습니까?: 이미 회원으로 가입하셨습니까? 버튼을 클릭함
  const handleClickAlreadySignUp = () => {
    console.log('이미 회원');
  };

  // Button.첫 화면으로 이동: 첫 화면으로 이동 버튼을 클릭함
  const handleClickGoHome = () => {
    console.log('첫 화면으로 이동');
  };

  // Dialog: 다이얼로그를 닫음
  const handleCloseDialog = dialogName => {
    setShowDialog({
      ...showDialog,
      [dialogName]: false
    });
  };



  return (
    <>
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
                {/* Label: 회원 가입 */}
                <span className="font-sans font-semibold text-2xl">
                  <FontAwesomeIcon
                    icon={['fad', 'user-check']}
                    className="mr-2"
                  />
                  {/* 문장: 회원 가입 */}
                  {getSentence('SignUp.signUp')}
                </span>
              </Grid>

              <Grid
                item
                xs={12}
              >
                {/* Field: 사용자 그룹 선택 */}
                <FormControl fullWidth>
                  <InputLabel id="selectUserGroupLabel">
                    {/* 문장: 사용자 그룹 선택 */}
                    {getSentence('SignUp.selectUserGroup')}
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
                {/* Field: 메일 주소 입력 */}
                <TextField
                  fullWidth
                  id="inputEmail"
                  type="search"
                  label={getSentence('SignUp.enterEmail')}
                  value={email}
                  onChange={handleChangeEmail}
                />
              </Grid>

              <Grid
                item
                xs={12}
                className={classes.fieldBottomMargin}
              >
                {/* Field: 비밀번호 입력 */}
                <FormControl fullWidth>
                  <InputLabel htmlFor="inputPassword">
                    {/* 문장: 비밀번호 입력 */}
                    {getSentence('SignUp.enterPassword')}
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
                className={classes.fieldBottomMargin}
              >
                {/* Field: 비밀번호 재입력 */}
                <FormControl fullWidth>
                  <InputLabel htmlFor="inputRePassword">
                    {/* 문장: 비밀번호 재입력 */}
                    {getSentence('SignUp.reEnterPassword')}
                  </InputLabel>
                  <Input
                    id="inputRePassword"
                    type={rePassword.showPassword ? 'search' : 'password'}
                    value={rePassword.value}
                    onChange={handleChangeRePassword}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowRePassword}
                          className="focus:outline-none"
                        >
                          {rePassword.showPassword ?
                            <FontAwesomeIcon icon={['fad', 'eye']} className="text-lg" />
                            :
                            <FontAwesomeIcon icon={['fad', 'eye-slash']} className="text-lg" />
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
                {/* Field: 약관을 읽고 동의합니다. */}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={readTermsConditions}
                      onChange={handleChangeReadTermsConditions}
                    />
                  }
                  label={getSentence('SignUp.readTermsConditions')}
                />
                <IconButton
                  onClick={handleClickTermsConditions}
                  className="focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={['fad', 'volume']}
                    className="text-lg"
                  />
                </IconButton>
              </Grid>

              <Grid
                item
                xs={12}
              >
                {/* Button: 회원 가입 */}
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleClickSignUp}
                  className="focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={['far', 'sign-in']}
                    className="mr-2 text-base"
                  />
                  <span className="font-sans text-base">
                    {/* 문장: 회원 가입 */}
                    {getSentence('SignUp.signUp')}
                  </span>
                </Button>
              </Grid>

              <Grid
                item
                xs={12}
              >
                {/* Button: 이미 회원으로 가입하셨습니까? */}
                <Link
                  component="button"
                  variant="body2"
                  onClick={handleClickAlreadySignUp}
                  className={clsx(classes.fieldRightMargin, 'focus:outline-none')}
                >
                  {/* 문장: 이미 회원으로 가입하셨습니까? */}
                  {getSentence('SignUp.alreadySignUp')}
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

      {/* Dialog: 회원 가입 */}
      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={showDialog.termsConditions}
        onClose={() => handleCloseDialog('termsConditions')}
        scroll={'paper'}
        PaperComponent={draggableDialog}
      >
        <DialogTitle
          id="dialogTermsConditions"
          className="cursor-move"
        >
          {/* 문장: 약관 */}
          {getSentence('SignUp.termsConditionsContent')}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            {[...new Array(300)].map(() => (
              '약관 상세 내용 '
            ))}
          </DialogContentText>
          <form className={classes.form} noValidate>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleCloseDialog('termsConditions')}
            color="primary"
            className="focus:outline-none"
          >
            {/* 문장: 닫기 */}
            {getSentence('Common.close')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

SignUp.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignUp);
