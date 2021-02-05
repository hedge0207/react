const loggerMiddleware = (store) => (next) => (action) => {
  // 액션 타입으로 log를 그룹화
  console.group(action && action.type);
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달
  console.log("업데이트 된 상태", store.getState());
  console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;
