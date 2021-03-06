/**
 * 项目配置信息
 * @type {{}}
 */

//TODO 上线时修改接口地址
const isDev = () => {
    return false;
};

let def = {
    //微信后台接口地址
    WECHAT: "https://www.guoanfamily.com/openweixin/",
    WECHAT_AUTH_URL: (url) => {
        return `http://act.guoanfamily.com/openweixin/user/getCode?redirect_url=${url}&scope=snsapi_base`;
    },
    PAY_WAY: "https://www.guoanfamily.com/common/"
};

let dev = {
    DEV: true,
    INTERFACE_NEW: "https://nt.guoanfamily.com/",
    // INTERFACE_NEW: "http://ntest.guoanfamily.com/",

    INTERFACE_RENT: "https://rt.guoanfamily.com/agenthouseCutomer/",
    UPLOAD_IMAGE: `https://nt.guoanfamily.com/agenthouseWeb/CommonController/uploadFile`,
    IMAGE_PATH: "https://img.guoanfamily.com/",
    // 个人中心后台接口个人中心后台接口
    COLLECT: "https://nt.guoanfamily.com/user/",
    // COLLECT: "https://www.guoanfamily.com/user/",
    // 推送后台接口
    tuisong: "https://nt.guoanfamily.com",
    // 会议接口
    metRest: "https://nt.guoanfamily.com/",
    SUPERNATANT: 'https://nt.guoanfamily.com/guoanjiaApp/#/HouseList/houseDetail?',
    // 我的积分后台接口
    intergral: 'https://www.guoanfamily.com/',

    // 抽奖后台接口
    luckdraw: 'https://nt.guoanfamily.com/',
    tongji: 'https://nt.guoanfamily.com',
    WEITUO: 'http://nt.guoanfamily.com/',
    WECHAT_AUTH: true,

    //个人中心登录页面地址
    LOGIN_PAGE_URL: function() {
        return `https://www.guoanfamily.com/guoanjia/#/login?domain=${encodeURIComponent(window.location.href)}`
    },
};

let prod = {
    DEV: false,
    INTERFACE_NEW: "https://www.guoanfamily.com/",
    INTERFACE_RENT: "https://rt.guoanfamily.com/agenthouseCutomer/",
    UPLOAD_IMAGE: `https://www.guoanfamily.com/agenthouseWeb/CommonController/uploadFile`,
    IMAGE_PATH: "https://img.guoanfamily.com/",
    // 个人中心后台接口个人中心后台接口
    COLLECT: "https://www.guoanfamily.com/user/",
    // COLLECT: "https://www.guoanfamily.com/user/",
    // 推送后台接口
    tuisong: "https://www.guoanfamily.com",
    // 会议接口
    metRest: "https://www.guoanfamily.com/",
    SUPERNATANT: 'https://www.guoanfamily.com/guoanjiaApp/#/HouseList/houseDetail?',
    // 我的积分后台接口
    intergral: 'https://www.guoanfamily.com/',

    // 抽奖后台接口
    luckdraw: 'https://www.guoanfamily.com/',
    tongji: 'https://www.guoanfamily.com',
    WEITUO: 'https://www.guoanfamily.com/',
    WECHAT_AUTH: true,

    //个人中心登录页面地址
    LOGIN_PAGE_URL: function() {
        return `https://www.guoanfamily.com/guoanjia/#/login?domain=${encodeURIComponent(window.location.href)}`
    },
};

let config = isDev() ? dev : prod;

config = Object.assign(config, def);
export { config } //导出变量表达式