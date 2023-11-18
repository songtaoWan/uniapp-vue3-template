import request from "@/utils/request";
import type { IBaseRequest, IBaseResponse } from "@/types/index";

export const getUserInfo = <T = unknown>(abort?: IBaseRequest['requestTask']) => {
  return request<IBaseResponse<T>>({
    url: "/userinfo",
    method: "GET",
    data: {
      id: 1
    },
    requestTask: abort
  });
}
