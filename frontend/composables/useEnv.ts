const getAppUrl = (uri: string = "") => {
  let result: any = process.env.APP_URL;
  if (uri) {
    if (uri.charAt(0) == "/" || result.charAt(result.length - 1) == "/") {
      //do nothing
    } else {
      result += "/";
    }
    result += uri;
  }

  return result;
};

export const useEnv = {
  getAppUrl,
};
