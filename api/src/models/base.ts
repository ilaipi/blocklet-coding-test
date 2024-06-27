import { Database } from "@blocklet/sdk";

export interface BaseDbModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export const getDB = (dbName: string) => {
  return new Database(dbName, {
    filename: `database_files/${dbName}.db`,
    timestampData: true,
  });
}

export default BaseDbModel;
