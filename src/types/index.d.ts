export interface IUserInfo {
  name: string;
  email: string;
}

export interface IBaseRequest {
  url: string;
  method: "GET" | "POST";
  data?: string | AnyObject | ArrayBuffer;
  isAuth?: boolean;
  requestTask?: {
    abort: () => void;
  };
}

export interface IBaseResponse<T> {
  code: number;
  msg: string;
  data: T;
}

export interface ITabbarItem {
  pagePath: string;
  text: string;
  iconPath?: string;
  selectedIconPath?: string;
}
