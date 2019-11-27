/*
 * Title: 이동 관련 언어별 문장
 * Create date: 2019.11.26
 * 
 * by chiggang
 */

// 다국어 문장 목록을 정의함
// @code: 문장 고유코드
// @sentence.languageCode: 언어 고유코드(languageItem.code 참고)
// @sentence.content: 언어별 문장
// @sentence.sampleContent: 주석용 문장(실제 프로그램에서는 사용하지 않음)
const sentenceItem_move = [
  /* Move: 로그인 */
  {
    code: 'Move.goHome',
    sentence: [
      {
        languageCode: 'ko',
        content: `첫 화면으로 이동`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Go to the first page`
      },
      {
        languageCode: 'zh1',
        content: `向第一画面移动`
      },
      {
        languageCode: 'zh2',
        content: `向第一畫面移動`
      },
      {
        languageCode: 'es',
        content: `Primer plano`
      },
      {
        languageCode: 'de',
        content: `Zum ersten Bildschirm gehen`
      },
      {
        languageCode: 'fr',
        content: `Déplacement sur le premier écran.`
      },
      {
        languageCode: 'ja',
        content: `初画面に移動`
      }
    ]
  }
];

export default sentenceItem_move;
