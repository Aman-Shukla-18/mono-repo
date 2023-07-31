"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const UserInfo = (props) => {
    var _a, _b;
    return (react_1.default.createElement(react_native_1.View, { style: styles.mainContainer },
        react_1.default.createElement(react_native_1.Text, null, (_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.email),
        react_1.default.createElement(react_native_1.Text, null, (_b = props === null || props === void 0 ? void 0 : props.data) === null || _b === void 0 ? void 0 : _b.name)));
};
exports.UserInfo = UserInfo;
const styles = react_native_1.StyleSheet.create({
    mainContainer: {
        backgroundColor: 'green',
        margin: 20,
        padding: 10,
        width: '80%'
    }
});
