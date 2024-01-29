"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
let prisma;
let global;
if (process.env.PRODUCTION = 'TRUE') {
    prisma = new client_1.PrismaClient();
}
else {
    if (!global.prisma) {
        global.prisma = new client_1.PrismaClient();
    }
    prisma = global.prisma;
}
exports.default = prisma;
