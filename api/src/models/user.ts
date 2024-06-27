import BaseDbModel, { getDB } from "./base";

export const USER_DB = 'user';

export interface UserDbModel extends BaseDbModel {
  username: string;
  phone: string;
  email: string;
};

const UserDb = getDB(USER_DB);

export default UserDb;
