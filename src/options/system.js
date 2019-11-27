/*
 * Title: 시스템 환경설정
 * Create date: 2019.11.21
 * 
 * by chiggang
 */

// 시스탬의 환경설정을 정의함
// @defaultLanguageCode: 시스템의 기본 언어(/options/language.js > languageItem.code 참고)
// @defaultOpenedSidebarMenu: 시작시 좌측 메뉴의 출력여부(true: 보임, false: 숨김)
// @startPage: Root URL 접속 페이지(intro: 인트로 페이지, sign-in: 로그인 페이지, dashboard: 대시보드, 그외 Route 주소 사용)
// @availableGamepad: 게임패드 지원(true: 사용함, false: 사용안함)
export const systemOption = {
  defaultLanguageCode: 'ko',
  defaultOpenedSidebarMenu: true,
  startPage: 'dashboard',
  availableGamepad: true
};
