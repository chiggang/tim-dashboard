// 리듀서의 초기값을 정의함
export const initialState = {
  languageOption: {},                 /* 언어의 환경설정 */
  languageItem: [],                   /* 선택할 수 있는 언어 목록 */
  sentenceItem: [],                   /* 다국어 문장 목록 */
  currentLanguageCode: '',            /* 현재 선택한 언어 */
  sidebarMenuItem: [],                /* 좌측 메뉴 목록 */
  collapseSidebarMenuItem: [],        /* 좌측 메뉴 목록의 폴더 열고 닫음 */

  config: {
    server: {}
  },
  currentDirectory: '',
  arrCurrentDirectory: [],
  pathList: [],
  uploadFile: [],
  uploadFileState: {
    total: 0,
    complete: 0,
    error: 0,
    cancel: 0
  },
  downloadFile: [],
  displayUpload: false,
  displayDownload: false
};

// 리듀서를 정의함
const reducer = (state, action) => {
  switch (action.type) {
    // 언어의 환경설정을 기억함
    case 'languageOption':
      return {
        ...state,
        languageOption: action.data
      };

    // 선택할 수 있는 언어 목록을 기억함
    case 'languageItem':
      return {
        ...state,
        languageItem: action.data
      };

    // 다국어 문장 목록을 기억함
    case 'sentenceItem':
      return {
        ...state,
        sentenceItem: action.data
      };

    // 현재 선택한 언어를 기억함
    case 'currentLanguageCode':
      return {
        ...state,
        currentLanguageCode: action.data
      };

    // 좌측 메뉴 목록을 기억함
    case 'sidebarMenuItem':
      return {
        ...state,
        sidebarMenuItem: action.data
      };

    // 좌측 메뉴 목록의 폴더 열고 닫음을 기억함
    case 'collapseSidebarMenuItem':
      return {
        ...state,
        collapseSidebarMenuItem: action.data
      };





    // 현재 경로를 저장함
    case 'currentDirectory_save':
      return {
        ...state,
        currentDirectory: action.data
      };

    // 현재 경로를 저장함
    case 'arrCurrentDirectory_save':
      return {
        ...state,
        arrCurrentDirectory: action.data
      };

    // 현재 폴더의 폴더 및 파일 정보를 저장함
    case 'pathList_save':
      return {
        ...state,
        pathList: action.data
      };

    // 업로드 목록에 파일 정보를 추가함
    case 'uploadFile_add':
      // 동일한 파일명이 있는지 확인함
      const sameUploadNewFileName = state.uploadFile.filter(row => row.newFileName === action.upload.newFileName);

      if (sameUploadNewFileName.length > 0) {
        return {
          ...state,
          uploadFile: [
            ...state.uploadFile
          ]
        };
      }

      return {
        ...state,
        uploadFile: [
          action.upload,
          ...state.uploadFile
        ]
      };

    // 업로드 목록에서 업로드 중인 파일의 정보를 수정함
    case 'uploadFile_modify':
      let tempUploadFile = [];

      state.uploadFile.map(row => {
        return tempUploadFile.push({
          fileName: row.fileName,
          newFileName: row.newFileName,
          ing: row.ing,
          percentage: row.percentage,
          loadedSize: row.loadedSize,
          totalSize: row.totalSize,
          propsData: row.propsData
        });
      });

      tempUploadFile.map(row => {
        if (row.newFileName === action.upload.newFileName) {
          row.ing = action.upload.ing;
          row.percentage = action.upload.percentage;
          row.loadedSize = action.upload.loadedSize;
          row.totalSize = action.upload.totalSize;
        }
        return row;
      });

      return {
        ...state,
        uploadFile: tempUploadFile
      };

    // 업로드할 갯수를 저장함
    case 'uploadFileState_total':
      return {
        ...state,
        uploadFileState: {
          ...state.uploadFileState,
          total: state.uploadFileState.total + action.total
        }
      };

    // 완료된 업로드 갯수를 저장함
    case 'uploadFileState_complete':
      return {
        ...state,
        uploadFileState: {
          ...state.uploadFileState,
          complete: state.uploadFileState.complete + action.complete
        }
      };

    // 오류가 발생한 업로드 갯수를 저장함
    case 'uploadFileState_error':
      return {
        ...state,
        uploadFileState: {
          ...state.uploadFileState,
          error: state.uploadFileState.error + action.error
        }
      };

    // 취소한 업로드 갯수를 저장함
    case 'uploadFileState_cancel':
      return {
        ...state,
        uploadFileState: {
          ...state.uploadFileState,
          cancel: state.uploadFileState.cancel + action.cancel
        }
      };

    // 다운로드 목록에 파일 정보를 추가함
    case 'downloadFile_add':
      // 동일한 파일명이 있는지 확인함
      const sameDownloadNewFileName = state.downloadFile.filter(row => row.newFileName === action.download.newFileName);

      if (sameDownloadNewFileName.length > 0) {
        return {
          ...state,
          downloadFile: [
            ...state.downloadFile
          ]
        };
      }

      return {
        ...state,
        downloadFile: [
          action.download,
          ...state.downloadFile
        ]
      };

    // 다운로드 목록에서 다운로드 중인 파일의 정보를 수정함
    case 'downloadFile_modify':
      let tempDownloadFile = [];

      state.downloadFile.map(row => {
        return tempDownloadFile.push({
          url: row.url,
          fileName: row.fileName,
          newFileName: row.newFileName,
          ing: row.ing,
          percentage: row.percentage,
          loadedSize: row.loadedSize,
          totalSize: row.totalSize,
          propsData: row.propsData
        });
      });

      tempDownloadFile.map(row => {
        if (row.newFileName === action.download.newFileName) {
          row.ing = action.download.ing;
          row.percentage = action.download.percentage;
          row.loadedSize = action.download.loadedSize;
          row.totalSize = action.download.totalSize;
        }

        return row;
      });

      return {
        ...state,
        downloadFile: tempDownloadFile
      };

    // 업로드 목록창의 출력 여부를 저장함
    case 'displayUpload_save':
      return {
        ...state,
        displayUpload: action.data
      };

    // 다운로드 목록창의 출력 여부를 저장함
    case 'displayDownload_save':
      return {
        ...state,
        displayDownload: action.data
      };

    default:
      throw new Error();
  }
};

export default reducer;
