"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedUIComponent = void 0;
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const SharedUIComponent = (props) => {
    const { onPress = () => { } } = props;
    return (react_1.default.createElement(react_native_1.Pressable, { onPress: onPress, style: styles.mainContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.text }, "Shared Button")));
};
exports.SharedUIComponent = SharedUIComponent;
const styles = react_native_1.StyleSheet.create({
    mainContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#2BE044'
    },
    text: {
        fontSize: 16,
        color: '#E03F2B'
    }
});
