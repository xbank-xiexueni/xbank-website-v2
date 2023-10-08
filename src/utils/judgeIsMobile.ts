function judgeIsMobile() {
  if (typeof window === 'undefined') return {};
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return { flag: !!flag?.length, info: flag };
}

export default judgeIsMobile;
