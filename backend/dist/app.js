"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const handleError_1 = require("./middleware/handleError");
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", index_1.default);
app.use(handleError_1.errorConverter);
app.use(handleError_1.handleErrors);
exports.default = app;
//# sourceMappingURL=app.js.map