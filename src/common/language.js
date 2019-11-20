// 선택한 언어로 문장을 변경함
export const sentence = (sentenceItem, languageCode, code = '', param = {}) => {
  const str1 = sentenceItem.filter(data => data.code === code);

  if (str1.length === 0) {
    return '';
  }

  const str2 = str1[0].sentence.filter(data => data.languageCode === languageCode);

  if (str2.length === 0) {
    return '';
  }

  const str3 = str2[0].content;

  let str4 = str3;

  // 최종 문장에 인자값을 적용함
  for (let key in param) {
    let reg = new RegExp('{' + key + '}', 'gi');

    str4 = str4.replace(reg, param[key]);
  }

  return str4;
}

export default { sentence };
