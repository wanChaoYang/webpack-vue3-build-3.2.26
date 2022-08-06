module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewportWith: 375,//375/664
            viewportUnit: "vm",
            unitPrecision: 6,//转换后的小数位数
            minPixelValue: 1,//默认值为1，小于等于1不转换
            selectorBlackList: [ '.ignore', '.hairlines' ],//指定不转换
            mediaQuery: false,
            exclude: /(node_module)/i
        },
    }
};