export const API_URL = process.env.REACT_APP_API_URL;
export const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;
export const CURRENT_VERSION = "v1";
export const API_ENDPOINT_KEYS = {
  LOGIN: "/login",
  REGISTER: "/registration",
  VERIFY: "/account/verify",
  POST: "/post",
  ACTIVE_ACCOUNT: "/account/active",
  UPLOAD_IMAGE: "/attachments",
  RENEW_TOKEN: "/refresh-token",
  CREATE_POST: "/post",
  PROFILE: "/profile",
  FOLLOWER: "/follower",
  FOLLOWING: "/following",
  POST: "/post",
  RESEND: "/account/verification_token",
  PASSWORD: "/account/password",
  CHECK: "/account/check",
  ATTACTMENT: "/attachment",
  CHANGE_AVATAR: "/profile/avatar",
  LIKE: "/like",
  COMMENT: "/comment",
  NEWFEED: "/newsfeed",
  ACCOUNT_REPORT: "/accountReport",
  POST_REPORT: "/postReport",
  COMMENT_REPORT: "/commentReport",
  STATISTIC: "/statistic",
  CONVERSATION: "/conversation",
  ACCOUNT: "/account",
  NOTIFICATION: "/notification",
  SETTING: "/setting",
  ADMIN: "/admin",
  HASHTAG: "/hashtag",
  TRENDING: "/trending",
};
