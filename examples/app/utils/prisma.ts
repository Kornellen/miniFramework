import { PrismaClient } from "../../../generated/prisma";

const prismaGlobal = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = prismaGlobal.prisma ?? new PrismaClient();
