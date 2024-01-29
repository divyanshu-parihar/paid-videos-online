"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// ---
const home_1 = __importDefault(require("./routes/home"));
const videos_1 = __importDefault(require("./routes/videos"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000'
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use('/', home_1.default);
app.use('/videos', videos_1.default);
app.use('/user', user_1.default);
app.listen(8080, () => {
    console.log("Server Started");
});
