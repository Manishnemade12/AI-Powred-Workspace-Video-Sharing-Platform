import { PrismaClient } from '@prisma/client';

// Declare global type for PrismaClient to avoid multiple instances in development
declare global {
  var prisma: PrismaClient | undefined;
}

// Create a single PrismaClient instance
export const client = globalThis.prisma || new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Enable logging for better debugging
  });

if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

// Utility functions for database operations
// export const db = {
//   // Create a new record
//   create: async (model: keyof PrismaClient, data: any) => {
//     return await prisma[model].create({ data });
//   },

//   // Find all records with an optional filter
//   findAll: async (model: keyof PrismaClient, where: any = {}) => {
//     return await prisma[model].findMany({ where });
//   },

//   // Find a single record by its unique identifier
//   findById: async (model: keyof PrismaClient, id: string | number) => {
//     return await prisma[model].findUnique({ where: { id } });
//   },

//   // Update a record by ID
//   updateById: async (model: keyof PrismaClient, id: string | number, data: any) => {
//     return await prisma[model].update({
//       where: { id },
//       data,
//     });
//   },

//   // Delete a record by ID
//   deleteById: async (model: keyof PrismaClient, id: string | number) => {
//     return await prisma[model].delete({
//       where: { id },
//     });
//   },
// };

export default prisma;
