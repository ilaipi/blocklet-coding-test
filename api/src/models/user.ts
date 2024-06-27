import { Database } from "@blocklet/sdk";

export const USER_DB = 'user';

const UserDb = new Database(USER_DB, {
  filename: 'user.db',
  timestampData: true,
});

export default UserDb;
