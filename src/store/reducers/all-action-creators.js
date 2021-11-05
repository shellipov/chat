import { AuthActionCreators } from "./auth/action-creators";
import { UsersActionCreators } from "./users/action-creators";
import { ChatActionCreators } from "./chat/action-creators";

 export const allActionCreators = {
   ...AuthActionCreators, ...UsersActionCreators, ...ChatActionCreators
 }
