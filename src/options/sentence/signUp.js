/*
 * Title: 회원 가입 언어별 문장
 * Create date: 2019.11.26
 * 
 * by chiggang
 */

// 다국어 문장 목록을 정의함
// @code: 문장 고유코드
// @sentence.languageCode: 언어 고유코드(languageItem.code 참고)
// @sentence.content: 언어별 문장
// @sentence.sampleContent: 주석용 문장(실제 프로그램에서는 사용하지 않음)
const sentenceItem_signUp = [
  /* SignUp: 회원 가입 */
  {
    code: 'SignUp.signUp',
    sentence: [
      {
        languageCode: 'ko',
        content: `회원 가입`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Sign Up`
      },
      {
        languageCode: 'zh1',
        content: ``
      },
      {
        languageCode: 'zh2',
        content: ``
      },
      {
        languageCode: 'es',
        content: ``
      },
      {
        languageCode: 'de',
        content: ``
      },
      {
        languageCode: 'fr',
        content: ``
      },
      {
        languageCode: 'ja',
        content: ``
      }
    ]
  },
  {
    code: 'SignUp.selectUserGroup',
    sentence: [
      {
        languageCode: 'ko',
        content: `사용자 그룹 선택`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Select user group`,
      },
      {
        languageCode: 'zh1',
        content: `选择用户群`
      },
      {
        languageCode: 'zh2',
        content: `選擇用戶羣`
      },
      {
        languageCode: 'es',
        content: `Seleccionar un grupo de usuarios`
      },
      {
        languageCode: 'de',
        content: `Wählen Sie Benutzergruppen`
      },
      {
        languageCode: 'fr',
        content: `Utilisateur groupe`
      },
      {
        languageCode: 'ja',
        content: `ユーザグループ選択`
      }
    ]
  },
  {
    code: 'SignUp.enterEmail',
    sentence: [
      {
        languageCode: 'ko',
        content: `메일 주소 입력`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Enter E-mail address`
      },
      {
        languageCode: 'zh1',
        content: ``
      },
      {
        languageCode: 'zh2',
        content: ``
      },
      {
        languageCode: 'es',
        content: ``
      },
      {
        languageCode: 'de',
        content: ``
      },
      {
        languageCode: 'fr',
        content: ``
      },
      {
        languageCode: 'ja',
        content: ``
      }
    ]
  },
  {
    code: 'SignUp.enterPassword',
    sentence: [
      {
        languageCode: 'ko',
        content: `비밀번호 입력`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Enter password`
      },
      {
        languageCode: 'zh1',
        content: ``
      },
      {
        languageCode: 'zh2',
        content: ``
      },
      {
        languageCode: 'es',
        content: ``
      },
      {
        languageCode: 'de',
        content: ``
      },
      {
        languageCode: 'fr',
        content: ``
      },
      {
        languageCode: 'ja',
        content: ``
      }
    ]
  },
  {
    code: 'SignUp.reEnterPassword',
    sentence: [
      {
        languageCode: 'ko',
        content: `비밀번호 재입력`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Re-enter password`
      },
      {
        languageCode: 'zh1',
        content: ``
      },
      {
        languageCode: 'zh2',
        content: ``
      },
      {
        languageCode: 'es',
        content: ``
      },
      {
        languageCode: 'de',
        content: ``
      },
      {
        languageCode: 'fr',
        content: ``
      },
      {
        languageCode: 'ja',
        content: ``
      }
    ]
  },
  {
    code: 'SignUp.readTermsConditions',
    sentence: [
      {
        languageCode: 'ko',
        content: `약관을 읽고 동의합니다.`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `I have read the terms and conditions.`
      },
      {
        languageCode: 'zh1',
        content: `我读过这些条款和条件。`
      },
      {
        languageCode: 'zh2',
        content: `我讀過這些條款和條件。`
      },
      {
        languageCode: 'es',
        content: `Leí los términos y condiciones.`
      },
      {
        languageCode: 'de',
        content: `Ich habe die Geschäftsbedingungen gelesen.`
      },
      {
        languageCode: 'fr',
        content: `J'ai lu les modalités et conditions.`
      },
      {
        languageCode: 'ja',
        content: `契約条件を読みました`
      }
    ]
  },
  {
    code: 'SignUp.termsConditionsContent',
    sentence: [
      {
        languageCode: 'ko',
        content: `약관`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `The terms and conditions`
      },
      {
        languageCode: 'zh1',
        content: ``
      },
      {
        languageCode: 'zh2',
        content: ``
      },
      {
        languageCode: 'es',
        content: ``
      },
      {
        languageCode: 'de',
        content: ``
      },
      {
        languageCode: 'fr',
        content: ``
      },
      {
        languageCode: 'ja',
        content: ``
      }
    ]
  },
  {
    code: 'SignUp.alreadySignUp',
    sentence: [
      {
        languageCode: 'ko',
        content: `이미 회원으로 가입하셨습니까?`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Do you already have an account?`
      },
      {
        languageCode: 'zh1',
        content: `你已有帐目吗?`
      },
      {
        languageCode: 'zh2',
        content: `你已有帳目嗎?`
      },
      {
        languageCode: 'es',
        content: `¿Ya tiene su cuenta?`
      },
      {
        languageCode: 'de',
        content: `Haben Sie bereits ein Konto?`
      },
      {
        languageCode: 'fr',
        content: `Avez-vous déjà un compte?`
      },
      {
        languageCode: 'ja',
        content: `既にアカウントをお持ちですか。`
      }
    ]
  }
];

export default sentenceItem_signUp;
