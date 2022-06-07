"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
let user = new User_1.User('thu', 'trangfache', 1);
user.getInfo();
user.isAdmin(user);
