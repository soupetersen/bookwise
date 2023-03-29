import dayjs from "dayjs";

declare module "dayjs" {
  interface Dayjs {
    fromNow();
  }
}
