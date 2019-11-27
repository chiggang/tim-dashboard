/*
 * Title: 로그인 언어별 문장
 * Create date: 2019.11.19
 * 
 * by chiggang
 */

// 다국어 문장 목록을 정의함
// @code: 문장 고유코드
// @sentence.languageCode: 언어 고유코드(languageItem.code 참고)
// @sentence.content: 언어별 문장
// @sentence.sampleContent: 주석용 문장(실제 프로그램에서는 사용하지 않음)
const sentenceItem_signIn = [
  /* SignIn: 로그인 */
  {
    code: 'SignIn.signIn',
    sentence: [
      {
        languageCode: 'ko',
        content: `로그인`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Sign In`
      },
      {
        languageCode: 'zh1',
        content: `登录`
      },
      {
        languageCode: 'zh2',
        content: `登錄`
      },
      {
        languageCode: 'es',
        content: `Inicio de sesión`
      },
      {
        languageCode: 'de',
        content: `Anmeldung bei der Anmeldung`
      },
      {
        languageCode: 'fr',
        content: `Connecter`
      },
      {
        languageCode: 'ja',
        content: `ログイン`
      }
    ]
  },
  {
    code: 'SignIn.userGroup',
    sentence: [
      {
        languageCode: 'ko',
        content: `사용자 그룹`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `User group`,
      },
      {
        languageCode: 'zh1',
        content: `用户群`
      },
      {
        languageCode: 'zh2',
        content: `用戶羣`
      },
      {
        languageCode: 'es',
        content: `Grupo de usuarios`
      },
      {
        languageCode: 'de',
        content: `Benutzergruppe`
      },
      {
        languageCode: 'fr',
        content: `Utilisateur groupe`
      },
      {
        languageCode: 'ja',
        content: `ユーザグループ`
      }
    ]
  },
  {
    code: 'SignIn.email',
    sentence: [
      {
        languageCode: 'ko',
        content: `메일 주소`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `E-mail address`,
      },
      {
        languageCode: 'zh1',
        content: `邮件地址`
      },
      {
        languageCode: 'zh2',
        content: `郵件地址`
      },
      {
        languageCode: 'es',
        content: `Dirección de correo`
      },
      {
        languageCode: 'de',
        content: `Adresse der E-Mail`
      },
      {
        languageCode: 'fr',
        content: `Adresse e-mail`
      },
      {
        languageCode: 'ja',
        content: `メールアドレス`
      }
    ]
  },
  {
    code: 'SignIn.password',
    sentence: [
      {
        languageCode: 'ko',
        content: `비밀번호`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Password`
      },
      {
        languageCode: 'zh1',
        content: `密码`
      },
      {
        languageCode: 'zh2',
        content: `密碼`
      },
      {
        languageCode: 'es',
        content: `Contraseña`
      },
      {
        languageCode: 'de',
        content: `Passwort`
      },
      {
        languageCode: 'fr',
        content: `Mot de passe`
      },
      {
        languageCode: 'ja',
        content: `パスワード`
      }
    ]
  },
  {
    code: 'SignIn.saveMailAddress',
    sentence: [
      {
        languageCode: 'ko',
        content: `메일 주소 저장`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Keep mail address`
      },
      {
        languageCode: 'zh1',
        content: `邮件地址`
      },
      {
        languageCode: 'zh2',
        content: `郵件地址`
      },
      {
        languageCode: 'es',
        content: `Mantenga la dirección de correo electrónico.`
      },
      {
        languageCode: 'de',
        content: `Adresse beibehalten`
      },
      {
        languageCode: 'fr',
        content: `Gestion d'adresse e-mail`
      },
      {
        languageCode: 'ja',
        content: `メールアドレス保持`
      }
    ]
  },
  {
    code: 'SignIn.automaticallySignIn',
    sentence: [
      {
        languageCode: 'ko',
        content: `자동 로그인`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Keep me signed in`
      },
      {
        languageCode: 'zh1',
        content: `让我签到`
      },
      {
        languageCode: 'zh2',
        content: `讓我簽到`
      },
      {
        languageCode: 'es',
        content: `Mantenimiento de sesión`
      },
      {
        languageCode: 'de',
        content: `Anmeldung halten`
      },
      {
        languageCode: 'fr',
        content: `Keeptre inscrit`
      },
      {
        languageCode: 'ja',
        content: `引き続きサインインしてください`
      }
    ]
  },
  {
    code: 'SignIn.signUp',
    sentence: [
      {
        languageCode: 'ko',
        content: `회원으로 가입하시겠습니까?`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Would you like to join as a member?`
      },
      {
        languageCode: 'zh1',
        content: `确定要注册为会员吗?`
      },
      {
        languageCode: 'zh2',
        content: `確定要註冊爲會員嗎?`
      },
      {
        languageCode: 'es',
        content: `¿Te gustaría ser miembro?`
      },
      {
        languageCode: 'de',
        content: `Möchten Sie Mitglied werden?`
      },
      {
        languageCode: 'fr',
        content: `Voulez-vous vous inscrire aux membres?`
      },
      {
        languageCode: 'ja',
        content: `会員に加入されますか。`
      }
    ]
  },
  {
    code: 'SignIn.findIdPw',
    sentence: [
      {
        languageCode: 'ko',
        content: `아이디 또는 비밀번호가 기억나지 않으십니까?`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Don't you remember your ID or password?`
      },
      {
        languageCode: 'zh1',
        content: `还记得ID或密码吗?`
      },
      {
        languageCode: 'zh2',
        content: `還記得ID或密碼嗎?`
      },
      {
        languageCode: 'es',
        content: `¿No se acuerda de Idina o Password?`
      },
      {
        languageCode: 'de',
        content: `Erinnerst du dich nicht an Idina Password?`
      },
      {
        languageCode: 'fr',
        content: `Vous ne vous souvenez pas de l'IDina Pas encore.`
      },
      {
        languageCode: 'ja',
        content: `IDやパスワードが思い出せませんか?`
      }
    ]
  }
];

export default sentenceItem_signIn;
