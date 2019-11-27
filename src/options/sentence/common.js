/*
 * Title: 공통 언어별 문장
 * Create date: 2019.11.27
 * 
 * by chiggang
 */

// 다국어 문장 목록을 정의함
// @code: 문장 고유코드
// @sentence.languageCode: 언어 고유코드(languageItem.code 참고)
// @sentence.content: 언어별 문장
// @sentence.sampleContent: 주석용 문장(실제 프로그램에서는 사용하지 않음)
const sentenceItem_common = [
  /* Common: 공통 */
  {
    code: 'Common.pleaseChoose',
    sentence: [
      {
        languageCode: 'ko',
        content: `선택하세요`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Please choose`
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
    code: 'Common.close',
    sentence: [
      {
        languageCode: 'ko',
        content: `닫기`,
        sampleContent: ``
      },
      {
        languageCode: 'en',
        content: `Close`
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
  }
];

export default sentenceItem_common;
