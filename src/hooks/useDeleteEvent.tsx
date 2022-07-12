import axios from "axios";
import { LocalEventPost } from "../interfaces/LocalEventPost";

export default function useDeleteEvent() {
  return (token: string, event: LocalEventPost) => {
    return axios({
      url: "https://fathomless-forest-78481.herokuapp.com/api/event/deleteEvent",
      method: "post",
      data: new URLSearchParams({
        userId: event.userId,
        name: event.name,
      }),
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.data);
  };
}
