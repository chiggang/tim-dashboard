/*
 * Title: 테스트 언어별 문장
 * Create date: 2019.11.19
 * 
 * by chiggang
 */

// 다국어 문장 목록을 정의함
// @code: 문장 고유코드
// @sentence.languageCode: 언어 고유코드(languageItem.code 참고)
// @sentence.content: 언어별 문장
// @sentence.sampleContent: 주석용 문장(실제 프로그램에서는 사용하지 않음)
const sentenceItem_test = [
  /* m: 테스트용 문장 */
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
        content: `It's a test.`
      },
      {
        languageCode: 'zh1',
        content: `是测试。`
      },
      {
        languageCode: 'zh2',
        content: `是測試。`
      },
      {
        languageCode: 'es',
        content: `en el cerebro.`
      },
      {
        languageCode: 'de',
        content: ``
      },
      {
        languageCode: 'fr',
        content: `qui est le test.`
      },
      {
        languageCode: 'ja',
        content: `テストです。`
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
        content: `This program is a development version.`
      },
      {
        languageCode: 'zh1',
        content: `这个程序是开发版本。`
      },
      {
        languageCode: 'zh2',
        content: `這個程序是開發版本。`
      },
      {
        languageCode: 'es',
        content: `Esta es una versión de desarrollo.`
      },
      {
        languageCode: 'de',
        content: ``
      },
      {
        languageCode: 'fr',
        content: `C'est une version de développement.`
      },
      {
        languageCode: 'ja',
        content: `このプログラムは開発バージョンです。`
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
        content: `{no1} plus {no2} is {no3}.`
      },
      {
        languageCode: 'zh1',
        content: `{no1}加{no2}等于{no3}。`
      },
      {
        languageCode: 'zh2',
        content: `{no1}加{no2}等於{no3}。`
      },
      {
        languageCode: 'es',
        content: `{no1} más {no2} es {no3}.`
      },
      {
        languageCode: 'de',
        content: ``
      },
      {
        languageCode: 'fr',
        content: `{no1} plus {no2} est {no3}.`
      },
      {
        languageCode: 'ja',
        content: `{no1}たす{no2}は{no3}です。`
      }
    ]
  }
];

export default sentenceItem_test;
