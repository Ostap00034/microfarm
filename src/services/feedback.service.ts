import { instance } from "@/api/api.interceptor";
import { IFeedBack } from "@/types/feedback.types";

export const FeedBackService = {
  async getAll() {
    return instance<IFeedBack[]>({
      url: "/requests/",
      method: "GET",
    });
  },

  async getById(requestId: string | number) {
    return instance<IFeedBack>({
      url: `/requests/${requestId}`,
      method: "GET",
    });
  },

  async create(data: IFeedBack) {
    return instance<IFeedBack>({
      url: `/requests/`,
      method: "POST",
      data,
    });
  },

  async update(requestId: string | number, data) {
    return instance<IFeedBack>({
      url: `/requests/${requestId}`,
      method: "PUT",
      data,
    });
  },

  async delete(requestId: string | number) {
    return instance<IFeedBack>({
      url: `/requests/${requestId}`,
      method: "DELETE",
    });
  },
};
