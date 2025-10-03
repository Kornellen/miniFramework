import { PrismaClient } from "@prisma/client";

class Database {
  private static instance: PrismaClient | null = null;
  private constructor() {}

  public static initDatabase(): PrismaClient {
    if (!Database.instance) Database.instance = new PrismaClient();
    return Database.instance;
  }
}

export const prisma: PrismaClient = Database.initDatabase();
