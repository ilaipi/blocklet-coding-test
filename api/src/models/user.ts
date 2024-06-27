import { Database } from "@blocklet/sdk";

export const USER_DB = 'user';

const UserDb = new Database(USER_DB, {
  filename: 'database_files/user.db',
  timestampData: true,
});

export default UserDb;
