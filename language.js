(function () {
    "use strict";

    /*
     * =========================================================
     * MDY FOOD - Global Language System
     * Supported:
     * zh = 中文
     * my = မြန်မာ
     * en = English
     * =========================================================
     */

    const STORAGE_KEY = "mdyLanguage";
    const DEFAULT_LANGUAGE = "zh";
    const SUPPORTED_LANGUAGES = ["zh", "my", "en"];

    /*
     * =========================================================
     * Translation Dictionary
     * =========================================================
     */

    const translations = {

        /*
         * =====================================================
         * 中文
         * =====================================================
         */

        zh: {

            /* Common */

            home: "首页",
            menu: "菜单",
            restaurants: "餐厅",
            cart: "购物车",
            orders: "订单",
            profile: "我的",
            settings: "设置",
            back: "返回",
            save: "保存",
            cancel: "取消",
            confirm: "确认",
            delete: "删除",
            edit: "编辑",
            close: "关闭",
            loading: "加载中...",
            success: "成功",
            failed: "失败",
            retry: "重试",
            search: "搜索",
            submit: "提交",
            yes: "是",
            no: "否",
            refresh: "刷新",
            reload: "重新加载",
            continue: "继续",
            viewAll: "查看全部",
            seeMore: "查看更多",
            viewAllArrow: "查看全部 →",
            allArrow: "全部 →",
            none: "无",
            unknown: "未知",
            anonymous: "匿名",

            /* Header */

            brandName: "MDY FOOD",
            brandSubtitle: "Mandalay Food Delivery",
            navHome: "首页",
            navRestaurants: "餐厅",
            navOrders: "订单",
            navProfile: "我的",

            /* Home */

            homeTitle: "今天想吃什么？",
            homeSubtitle: "发现附近美味的餐厅和食物",

            searchRestaurantFood: "搜索餐厅或菜品...",
            searchRestaurant: "搜索餐厅...",
            searchFood: "搜索菜品...",
            searchMenu: "搜索菜单...",
            searchRestaurantsPlaceholder: "搜索餐厅...",

            nearbyRestaurants: "附近餐厅",
            allRestaurants: "全部餐厅",

            noRestaurants: "暂无可用餐厅",
            noRestaurantsDesc: "目前附近没有可用的餐厅",
            noOpenRestaurants: "目前没有营业中的餐厅",
            noOpenRestaurantsDesc:
                "目前没有营业中的餐厅，请稍后再来",

            loadingRestaurants: "正在加载餐厅...",
            restaurantLoadFailed: "餐厅加载失败",
            restaurantInfoError: "餐厅信息加载失败",
            restaurantNotFound: "餐厅不存在",

            loginBannerTitle: "登录后点餐更方便",
            loginBannerDesc:
                "登录后可以保存订单、地址和个人信息",
            loginOrRegister: "登录 / 注册",

            loginConvenient: "登录后点餐更方便",
            saveOrdersAddress:
                "登录后可以保存订单、地址和个人信息",
            loginRegister: "登录 / 注册",

            foodCategories: "菜品分类",
            categoryAll: "全部",
            categorySichuan: "川菜",
            categoryMyanmar: "缅甸菜",
            categoryBBQ: "烧烤",
            categoryOther: "其他",

            restaurantOpen: "营业中",
            restaurantClosed: "休息中",
            restaurantOpenBadge: "营业中",
            restaurantClosedBadge: "休息中",

            open: "营业中",
            closed: "休息中",

            viewMenu: "查看菜单",
            viewMenuSimple: "菜单",
            viewMenuArrow: "查看菜单 →",

            menuPreparing: "菜单准备中",
            menuPreparingMessage:
                "该餐厅的菜单正在准备中，请稍后再来",

            ratingLoading: "正在加载评分...",
            loadingReviews: "正在加载评价...",
            noRating: "暂无评分",
            noReviews: "暂无评价",

            reviewCount: "{count}条评价",
            reviewCountWithIcon: "⭐ {count}条评价",
            ratingWithCount: "⭐ {rating} · {count}条评价",
            reviewCountSuffix: "{count}条评价",

            foodCount: "{count}道菜品",
            foodCountSimple: "{count}道菜品",
            foodCountSuffix: "{count}道菜品",

            foodLoading: "正在加载菜品...",
            loadingFoods: "正在读取菜品...",
            foodSimple: "菜品",
            food: "菜品",

            foodSearchResult: "找到相关菜品",
            foundFoods: "找到菜品",
            foodSearchMore: "查看更多菜品",
            andMore: "等",

            restaurantMenu: "餐厅菜单",
            restaurantLabel: "餐厅",

            restaurantClosedMessage:
                "该餐厅目前休息中，暂时无法接受订单",

            tryAnotherKeyword: "换一个关键词试试看",
            comeBackLater: "请稍后再来",

            /* Menu */

            backToRestaurant: "返回餐厅",
            menuLoading: "正在加载菜单...",
            menuLoadFailed: "菜单加载失败",
            noFoodFound: "没有找到菜品",

            addToCart: "加入购物车",
            addedToCart: "已加入购物车",
            quantity: "数量",
            piece: "份",
            price: "价格",
            total: "总计",
            viewCart: "查看购物车",

            customerReviews: "顾客评价",
            review: "评价",
            reviews: "评价",

            noCustomerReviews: "暂无顾客评价",
            reviewLoading: "正在加载评价...",
            reviewLoadFailed: "评价加载失败",

            customerAnonymous: "匿名用户",
            customerNoComment: "用户未填写文字评价",
            noComment: "用户未填写文字评价",
            timeUnknown: "时间未知",

            businessStatusLoading:
                "正在加载营业状态...",

            restaurantCannotLoadReviews:
                "暂时无法加载餐厅评价",

            /* Cart */

            shoppingCart: "我的购物车",
            emptyCart: "购物车还是空的",
            emptyCartDesc:
                "去逛逛餐厅，找一些喜欢的美食吧",
            goShopping: "去逛逛",
            clearCart: "清空购物车",
            subtotal: "商品小计",
            deliveryFee: "配送费",
            cartEmptyAlert: "购物车是空的",

            /* Checkout */

            checkoutTitle: "确认订单",

            notLoggedIn: "你还没有登录",
            loginRequiredDesc:
                "登录后才能提交订单，并且你的订单会自动保存到你的账号",
            goLogin: "登录 / 注册",

            orderContent: "订单内容",
            confirmingRestaurant: "正在确认餐厅...",
            unknownRestaurant: "未知餐厅",

            deliveryInfo: "配送信息",
            name: "姓名",
            phone: "电话",
            address: "地址",

            namePlaceholder: "请输入姓名",
            phonePlaceholder: "请输入电话号码",
            addressPlaceholder: "请输入详细配送地址",

            paymentMethod: "付款方式",
            cash: "现金",
            kbzPay: "KBZPay",
            waveMoney: "Wave Money",

            placeOrder: "提交订单",
            submittingOrder: "正在提交订单...",

            cannotIdentifyRestaurant:
                "无法识别餐厅",
            restaurantDoesNotExist:
                "餐厅不存在",
            restaurantLoadError:
                "餐厅信息加载失败",

            emptyCartCheckout:
                "购物车是空的",

            pleaseLoginBeforeOrder:
                "请先登录账号，再提交订单。",

            restaurantReturnToMenu:
                "无法识别餐厅，请返回菜单重新加入菜品。",

            pleaseEnterName:
                "请输入姓名",
            pleaseEnterPhone:
                "请输入电话号码",
            pleaseEnterAddress:
                "请输入配送地址",

            orderSubmitFailed:
                "订单提交失败",

            /* Success */

            orderSuccessTitle:
                "订单提交成功！",

            orderSuccessMessage:
                "感谢你的订单！",

            orderSuccessPreparing:
                "商家收到订单后会尽快准备。",

            orderNumber: "订单号",
            backHome: "返回首页",
            continueOrdering: "继续点餐",

            /* Orders */

            myOrders: "我的订单",
            backHomeText: "返回首页",
            refreshOrders: "刷新订单",
            enableNotifications: "开启提醒",

            orderRealtimeSync:
                "订单状态实时同步中",

            orderNumberLabel: "订单号",
            orderStatus: "订单状态",
            orderTime: "下单时间",
            orderDetails: "订单详情",
            orderAmount: "订单金额",
            orderContentLabel: "订单内容",

            pending: "待接单",
            merchantAccepted: "商家已接单",
            riderAccepted: "骑手已接单",
            preparing: "准备中",
            ready: "外卖好了",
            delivering: "配送中",
            completed: "已完成",
            cancelled: "已取消",

            waitingMerchantAccept:
                "等待餐厅接单",
            merchantPreparing:
                "餐厅正在准备你的订单",

            riderInfo: "骑手信息",
            rider: "骑手",
            phoneLabel: "电话",

            orderProgress: "订单进度",
            waiting: "等待中",

            orderReview: "评价订单",
            reviewed: "已评价",
            pendingReview: "待评价",

            /* Reviews */

            myReviews: "我的评价",
            myReviewsDesc:
                "查看你提交过的餐厅评价",

            noMyReviews: "还没有评价",
            noMyReviewsDesc:
                "完成订单后可以给餐厅留下评价",

            loginToView:
                "登录后查看你的评价",

            userReview: "用户评价",
            reviewContent: "评价内容",
            orderNumberShort: "订单号：",

            userNoTextReview:
                "用户未填写文字评价",

            reviewTitle: "评价餐厅",
            rating: "评分",
            ratingRequired: "请选择评分",
            comment: "评价内容",

            commentPlaceholder:
                "写下你的评价...",

            submitReview: "提交评价",
            reviewSuccess: "评价提交成功！",
            reviewFailed: "评价提交失败",

            reviewAlreadyExists:
                "这个订单已经评价过了",

            /* Profile */

            account: "账号",
            accountInfo: "账号信息",
            myAccount: "我的账号",
            readingAccount: "正在读取账号信息...",

            editProfile: "编辑资料",

            quickOrders: "我的订单",
            quickFavorites: "我的收藏",
            quickAddresses: "地址管理",
            quickRestaurants: "餐厅",

            service: "服务",
            serviceTitle: "服务",

            favorites: "收藏",
            addresses: "地址",
            coupons: "优惠券",

            ordersSub: "查看订单记录",
            favoritesSub: "查看收藏的美食",
            addressesSub: "管理配送地址",
            couponsSub: "查看优惠券",
            reviewsSub: "查看我的评价",

            other: "其他",
            otherTitle: "其他",

            login: "登录",
            register: "注册",
            logout: "退出登录",

            loginTitle: "登录",
            loginSub:
                "登录后保存你的订单和地址",

            loggedIn: "已登录",
            loggedOut: "未登录",

            confirmLogout:
                "确定要退出登录吗？",

            logoutError:
                "退出登录失败",

            /* Edit Profile */

            editProfileTitle: "编辑个人资料",
            defaultUserName: "MDY FOOD 用户",

            nickname: "昵称",
            nicknamePlaceholder: "请输入你的昵称",
            nicknameLimit: "昵称最多 30 个字符",

            email: "邮箱",
            emailReadonly:
                "登录账号信息不可在这里修改",

            phoneNumber: "手机号",

            saveProfile: "保存资料",
            returnButton: "返回",

            notBoundEmail: "未绑定邮箱",
            notBoundPhone: "未绑定手机号",

            profileSaveSuccess:
                "个人资料保存成功！",

            profileSaveFailed:
                "保存失败：",

            nicknameRequired:
                "请输入昵称",

            nicknameTooLong:
                "昵称不能超过 30 个字符",

            saving: "正在保存...",

            /* Settings */

            settingsTitle: "设置",

            accountSettings: "账号设置",
            profileSettings: "个人资料",

            nameLabel: "姓名",
            phoneLabelFull: "手机号",

            nameInputPlaceholder:
                "请输入姓名",

            phoneInputPlaceholder:
                "请输入电话号码",

            generalSettings: "通用设置",
            generalTitle: "通用",

            language: "语言",
            languageTitle: "语言设置",
            languageDesc: "选择你喜欢的语言",

            notification: "通知",
            notificationTitle: "订单通知",
            notificationDesc:
                "接收订单状态更新",

            darkMode: "深色模式",
            darkTitle: "深色模式",
            darkModeDesc:
                "使用深色界面",

            otherSettings: "其他设置",
            otherTitle: "其他",

            userAgreement: "用户协议",
            privacyPolicy: "隐私政策",
            aboutUs: "关于我们",
            legal: "法律信息",

            accountStatus: "账号状态",
            accountStatusTitle: "账号状态",

            checkingLogin:
                "正在检查登录状态...",

            saveSuccess: "保存成功",
            saveError: "保存失败",

            /* Login */

            loginPageTitle: "登录",
            loginButton: "邮箱登录",

            emailPlaceholder:
                "请输入邮箱",

            password: "密码",
            passwordPlaceholder:
                "请输入密码",

            noAccount: "还没有账号？",
            registerNow: "立即注册",

            or: "或",

            googleLogin:
                "使用 Google 登录",

            phoneLogin:
                "使用手机号登录",

            phoneInternationalPlaceholder:
                "+95 9xxxxxxxxx",

            phoneInternationalHint:
                "请使用国际格式，例如：+959xxxxxxxxx",

            getVerificationCode:
                "获取验证码",

            verificationCode:
                "请输入短信验证码",

            phoneLoginButton:
                "登录",

            backToLoginMethods:
                "← 返回其他登录方式",

            pleaseEnterEmailPassword:
                "请输入邮箱和密码",

            loggingIn:
                "正在登录...",

            loginSuccess:
                "登录成功，正在进入...",

            emailNotRegistered:
                "这个邮箱还没有注册",

            wrongPassword:
                "密码错误",

            emailOrPasswordWrong:
                "邮箱或密码错误",

            invalidEmail:
                "邮箱格式不正确",

            loginFailed:
                "登录失败",

            loginFailedColon:
                "登录失败：",

            phoneInternationalRequired:
                "手机号必须使用国际格式，例如 +959xxxxxxxxx",

            sendingCode:
                "正在发送...",

            verificationCodeSent:
                "验证码已发送，请检查短信",

            verificationCodeSendFailed:
                "验证码发送失败：",

            enterVerificationCode:
                "请输入验证码",

            getCodeFirst:
                "请先获取验证码",

            verificationCodeInvalid:
                "验证码错误或已过期，请重新获取",

            /* Register */

            registerTitle: "创建账号",

            confirmPassword: "确认密码",

            registerButton: "注册",

            alreadyAccount:
                "已经有账号？",

            loginNow: "立即登录",

            registerName: "姓名",
            registerNamePlaceholder:
                "请输入你的姓名",

            registerPhone: "电话号码",
            registerPhonePlaceholder:
                "例如 09xxxxxxxxx",

            registerEmail: "邮箱",
            registerEmailPlaceholder:
                "请输入邮箱",

            registerPassword: "密码",
            registerPasswordPlaceholder:
                "至少 6 位密码",

            registerConfirmPassword:
                "确认密码",

            registerConfirmPasswordPlaceholder:
                "再次输入密码",

            defaultAddress:
                "默认送餐地址",

            defaultAddressPlaceholder:
                "例如：Mandalay Chanayethazan...",

            merchantSectionTitle:
                "🍜 我是商家",

            merchantSectionDesc:
                "想让你的餐厅加入 MDY FOOD？",

            merchantSectionHint:
                "点击下面申请商家入驻",

            merchantRegister:
                "🏪 商家入驻",

            fillAllFields:
                "请填写完整信息",

            passwordMinLength:
                "密码至少需要 6 位",

            passwordMismatch:
                "两次密码不一致",

            registering:
                "正在注册...",

            registerSuccess:
                "注册成功！正在进入首页...",

            emailAlreadyRegistered:
                "这个邮箱已经注册过了",

            emailRegistrationDisabled:
                "邮箱注册功能还没有启用，请检查 Firebase Authentication",

            firebaseApiKeyInvalid:
                "Firebase API Key 无效，请检查 Firebase 项目配置",

            networkConnectionFailed:
                "网络连接失败，请检查网络后重试",

            registrationFailed:
                "注册失败：",

            /* Merchant / Delivery */

            merchant: "商家",
            merchantLogin: "商家登录",
            merchantRegister: "商家注册",
            merchantCenter: "商家中心",

            delivery: "骑手",
            deliveryLogin: "骑手登录",
            deliveryRegister: "骑手注册",
            deliveryCenter: "骑手中心",

            /* About */

            about: "关于我们",
            aboutTitle: "关于 MDY FOOD",

            aboutSubtitle:
                "让点餐和配送更加简单",

            aboutUsTitle: "关于我们",

            aboutParagraph1:
                "MDY FOOD 是一个面向缅甸用户的在线餐饮点餐与配送平台。",

            aboutParagraph2:
                "用户可以通过平台浏览餐厅和商品、提交订单，并查看订单及配送状态。",

            platformFeatures: "平台功能",

            onlineOrdering: "在线点餐",
            onlineOrderingDesc:
                "浏览餐厅和商品，在线提交订单",

            deliveryService: "配送服务",
            deliveryServiceDesc:
                "查看配送状态及订单进度",

            userReviews: "用户评价",
            userReviewsDesc:
                "完成订单后可以进行评价",

            restaurantService: "餐厅服务",
            restaurantServiceDesc:
                "为餐厅提供订单及经营管理功能",

            ourGoal: "我们的目标",

            aboutGoal:
                "我们希望通过简单、方便的在线点餐方式，让用户更加轻松地享受美食，同时帮助餐厅和配送人员更加高效地工作。",

            version: "MDY FOOD · Version 1.0",

            /* Agreement */

            agreementTitle: "用户协议",
            agreementMainTitle:
                "MDY FOOD 用户协议",

            updatedDate: "更新日期：2026年",

            agreementSection1:
                "一、协议说明",
            agreementSection2:
                "二、账户使用",
            agreementSection3:
                "三、订单服务",
            agreementSection4:
                "四、付款",
            agreementSection5:
                "五、配送",
            agreementSection6:
                "六、用户行为",
            agreementSection7:
                "七、餐厅与商品信息",
            agreementSection8:
                "八、协议修改",
            agreementSection9:
                "九、联系我们",

            /* Privacy */

            privacyTitle: "隐私政策",
            privacyMainTitle:
                "MDY FOOD 隐私政策",

            privacySection1:
                "一、隐私说明",
            privacySection2:
                "二、我们可能收集的信息",
            privacySection3:
                "三、信息用途",
            privacySection4:
                "四、订单信息",
            privacySection5:
                "五、信息安全",
            privacySection6:
                "六、信息共享",
            privacySection7:
                "七、Cookie 与本地存储",
            privacySection8:
                "八、用户账户",
            privacySection9:
                "九、隐私政策更新",
            privacySection10:
                "十、联系我们",

            /* System */

            networkError:
                "网络连接失败",

            dataLoadFailed:
                "数据加载失败",

            pleaseWait:
                "请稍候...",

            operationFailed:
                "操作失败",

            invalidData:
                "数据无效",

            unknownError:
                "未知错误",

            /* Generic */

            pleaseLogin:
                "请先登录",

            loginRequired:
                "需要登录",

            operationSuccess:
                "操作成功",

            operationError:
                "操作失败",

            /* Restaurant / Food */

            welcome:
                "欢迎来到 MDY FOOD",

            defaultRestaurantName:
                "MDY FOOD 餐厅",

            defaultRestaurantDescription:
                "欢迎来到 MDY FOOD，选择你喜欢的美食吧！",

            menuUnavailable:
                "菜单暂不可用",

            restaurantsPageTitle:
                "全部餐厅",

            noRestaurantsFound:
                "没有找到匹配的餐厅",

            /* Status */

            statusPending:
                "待接单",

            statusMerchantAccepted:
                "商家已接单",

            statusRiderAccepted:
                "骑手已接单",

            statusReady:
                "外卖好了",

            statusDelivering:
                "配送中",

            statusCompleted:
                "已完成",

            statusCancelled:
                "已取消",

            /* Payment */

            paymentCash:
                "现金",

            paymentKBZPay:
                "KBZPay",

            paymentWaveMoney:
                "Wave Money",

            /* Categories */

            all: "全部",
            sichuan: "川菜",
            myanmar: "缅甸菜",
            bbq: "烧烤",
            other: "其他"
        },


        /*
         * =====================================================
         * မြန်မာ
         * =====================================================
         */

        my: {

            /* Common */

            home: "ပင်မစာမျက်နှာ",
            menu: "မီနူး",
            restaurants: "စားသောက်ဆိုင်များ",
            cart: "ဈေးခြင်း",
            orders: "အော်ဒါများ",
            profile: "ကျွန်ုပ်",
            settings: "ဆက်တင်များ",
            back: "နောက်သို့",
            save: "သိမ်းဆည်းရန်",
            cancel: "ပယ်ဖျက်ရန်",
            confirm: "အတည်ပြုရန်",
            delete: "ဖျက်ရန်",
            edit: "ပြင်ဆင်ရန်",
            close: "ပိတ်ရန်",
            loading: "ဖွင့်နေသည်...",
            success: "အောင်မြင်သည်",
            failed: "မအောင်မြင်ပါ",
            retry: "ထပ်ကြိုးစားရန်",
            search: "ရှာရန်",
            submit: "တင်သွင်းရန်",
            yes: "ဟုတ်ကဲ့",
            no: "မဟုတ်ပါ",
            refresh: "ပြန်လည်စတင်ရန်",
            reload: "ပြန်ဖွင့်ရန်",
            continue: "ဆက်လုပ်ရန်",
            viewAll: "အားလုံးကြည့်ရန်",
            seeMore: "ပိုမိုကြည့်ရန်",
            viewAllArrow: "အားလုံးကြည့်ရန် →",
            allArrow: "အားလုံး →",
            none: "မရှိပါ",
            unknown: "မသိရှိပါ",
            anonymous: "အမည်မသိ",

            /* Header */

            brandName: "MDY FOOD",
            brandSubtitle: "Mandalay Food Delivery",
            navHome: "ပင်မ",
            navRestaurants: "စားသောက်ဆိုင်",
            navOrders: "အော်ဒါများ",
            navProfile: "ကျွန်ုပ်",

            /* Home */

            homeTitle: "ဒီနေ့ ဘာစားချင်လဲ?",
            homeSubtitle:
                "အနီးအနားရှိ အရသာရှိသော စားသောက်ဆိုင်များနှင့် အစားအစာများကို ရှာဖွေပါ",

            searchRestaurantFood:
                "စားသောက်ဆိုင် သို့မဟုတ် အစားအစာ ရှာရန်...",
            searchRestaurant:
                "စားသောက်ဆိုင် ရှာရန်...",
            searchFood:
                "အစားအစာ ရှာရန်...",
            searchMenu:
                "မီနူး ရှာရန်...",
            searchRestaurantsPlaceholder:
                "စားသောက်ဆိုင် ရှာရန်...",

            nearbyRestaurants:
                "အနီးအနားရှိ စားသောက်ဆိုင်များ",

            allRestaurants:
                "စားသောက်ဆိုင်အားလုံး",

            noRestaurants:
                "ရရှိနိုင်သော စားသောက်ဆိုင် မရှိပါ",

            noRestaurantsDesc:
                "ယခုအချိန်တွင် အနီးအနား၌ ရရှိနိုင်သော စားသောက်ဆိုင် မရှိပါ",

            noOpenRestaurants:
                "လက်ရှိဖွင့်ထားသော စားသောက်ဆိုင် မရှိပါ",

            noOpenRestaurantsDesc:
                "ယခုအချိန်တွင် ဖွင့်ထားသော စားသောက်ဆိုင် မရှိပါ။ နောက်မှ ပြန်လာကြည့်ပါ",

            loadingRestaurants:
                "စားသောက်ဆိုင်များကို ဖတ်နေသည်...",

            restaurantLoadFailed:
                "စားသောက်ဆိုင်များ ဖတ်၍မရပါ",

            restaurantInfoError:
                "စားသောက်ဆိုင်အချက်အလက် ဖတ်၍မရပါ",

            restaurantNotFound:
                "စားသောက်ဆိုင် မတွေ့ပါ",

            loginBannerTitle:
                "အော်ဒါတင်ရန် ပိုမိုလွယ်ကူစေရန် Login ဝင်ပါ",

            loginBannerDesc:
                "Login ဝင်ထားပါက သင့်အော်ဒါများ၊ လိပ်စာများနှင့် ကိုယ်ရေးအချက်အလက်များကို သိမ်းဆည်းနိုင်ပါသည်",

            loginOrRegister:
                "Login / Register",

            loginConvenient:
                "အော်ဒါတင်ရန် ပိုမိုလွယ်ကူစေရန် Login ဝင်ပါ",

            saveOrdersAddress:
                "Login ဝင်ထားပါက သင့်အော်ဒါများ၊ လိပ်စာများနှင့် ကိုယ်ရေးအချက်အလက်များကို သိမ်းဆည်းနိုင်ပါသည်",

            loginRegister:
                "Login / Register",

            foodCategories:
                "အစားအစာအမျိုးအစားများ",

            categoryAll:
                "အားလုံး",

            categorySichuan:
                "စီချွမ်းအစားအစာ",

            categoryMyanmar:
                "မြန်မာအစားအစာ",

            categoryBBQ:
                "အကင်",

            categoryOther:
                "အခြား",

            restaurantOpen:
                "ဖွင့်ထားသည်",

            restaurantClosed:
                "ပိတ်ထားသည်",

            restaurantOpenBadge:
                "ဖွင့်ထားသည်",

            restaurantClosedBadge:
                "ပိတ်ထားသည်",

            open:
                "ဖွင့်ထားသည်",

            closed:
                "ပိတ်ထားသည်",

            viewMenu:
                "မီနူးကြည့်ရန်",

            viewMenuSimple:
                "မီနူး",

            viewMenuArrow:
                "မီနူးကြည့်ရန် →",

            menuPreparing:
                "မီနူးပြင်ဆင်နေသည်",

            menuPreparingMessage:
                "ဤစားသောက်ဆိုင်၏ မီနူးကို ပြင်ဆင်နေပါသည်။ နောက်မှ ပြန်လာကြည့်ပါ",

            ratingLoading:
                "အဆင့်သတ်မှတ်ချက် ဖတ်နေသည်...",

            loadingReviews:
                "သုံးသပ်ချက်များကို ဖတ်နေသည်...",

            noRating:
                "အဆင့်သတ်မှတ်ချက် မရှိသေးပါ",

            noReviews:
                "သုံးသပ်ချက် မရှိသေးပါ",

            reviewCount:
                "{count} သုံးသပ်ချက်",

            reviewCountWithIcon:
                "⭐ {count} သုံးသပ်ချက်",

            ratingWithCount:
                "⭐ {rating} · {count} သုံးသပ်ချက်",

            reviewCountSuffix:
                "{count} သုံးသပ်ချက်",

            foodCount:
                "အစားအစာ {count} မျိုး",

            foodCountSimple:
                "အစားအစာ {count} မျိုး",

            foodCountSuffix:
                "အစားအစာ {count} မျိုး",

            foodLoading:
                "အစားအစာများ ဖတ်နေသည်...",

            loadingFoods:
                "အစားအစာများကို ဖတ်နေသည်...",

            foodSimple:
                "အစားအစာ",

            food:
                "အစားအစာ",

            foodSearchResult:
                "ဆက်စပ်အစားအစာများ တွေ့ရှိသည်",

            foundFoods:
                "အစားအစာ တွေ့ရှိသည်",

            foodSearchMore:
                "အစားအစာများ ပိုမိုကြည့်ရန်",

            andMore:
                "နှင့် အခြားများ",

            restaurantMenu:
                "စားသောက်ဆိုင် မီနူး",

            restaurantLabel:
                "စားသောက်ဆိုင်",

            restaurantClosedMessage:
                "ဤစားသောက်ဆိုင်သည် လက်ရှိပိတ်ထားသောကြောင့် အော်ဒါလက်ခံ၍မရပါ",

            tryAnotherKeyword:
                "အခြားသော စကားလုံးဖြင့် ထပ်မံရှာကြည့်ပါ",

            comeBackLater:
                "နောက်မှ ပြန်လာကြည့်ပါ",

            /* Menu */

            backToRestaurant:
                "စားသောက်ဆိုင်သို့ ပြန်ရန်",

            menuLoading:
                "မီနူးကို ဖတ်နေသည်...",

            menuLoadFailed:
                "မီနူး ဖတ်၍မရပါ",

            noFoodFound:
                "အစားအစာ မတွေ့ပါ",

            addToCart:
                "ဈေးခြင်းထဲ ထည့်ရန်",

            addedToCart:
                "ဈေးခြင်းထဲ ထည့်ပြီးပါပြီ",

            quantity:
                "အရေအတွက်",

            piece:
                "ခု",

            price:
                "ဈေးနှုန်း",

            total:
                "စုစုပေါင်း",

            viewCart:
                "ဈေးခြင်းကြည့်ရန်",

            customerReviews:
                "ဖောက်သည်သုံးသပ်ချက်များ",

            review:
                "သုံးသပ်ချက်",

            reviews:
                "သုံးသပ်ချက်များ",

            noCustomerReviews:
                "ဖောက်သည်သုံးသပ်ချက် မရှိသေးပါ",

            reviewLoading:
                "သုံးသပ်ချက်များ ဖတ်နေသည်...",

            reviewLoadFailed:
                "သုံးသပ်ချက်များ ဖတ်၍မရပါ",

            customerAnonymous:
                "အမည်မသိ",

            customerNoComment:
                "စာသားသုံးသပ်ချက် မရေးထားပါ",

            noComment:
                "စာသားသုံးသပ်ချက် မရေးထားပါ",

            timeUnknown:
                "အချိန်မသိရှိပါ",

            businessStatusLoading:
                "ဖွင့်/ပိတ် အခြေအနေကို ဖတ်နေသည်...",

            restaurantCannotLoadReviews:
                "လောလောဆယ် စားသောက်ဆိုင်သုံးသပ်ချက်များကို ဖတ်၍မရပါ",

            /* Cart */

            shoppingCart:
                "ကျွန်ုပ်၏ ဈေးခြင်း",

            emptyCart:
                "ဈေးခြင်းထဲတွင် ဘာမှမရှိသေးပါ",

            emptyCartDesc:
                "စားသောက်ဆိုင်များကို ကြည့်ပြီး သင်ကြိုက်သော အစားအစာများကို ရွေးချယ်ပါ",

            goShopping:
                "အစားအစာ ရှာရန်",

            clearCart:
                "ဈေးခြင်းရှင်းရန်",

            subtotal:
                "အစားအစာ စုစုပေါင်း",

            deliveryFee:
                "ပို့ဆောင်ခ",

            cartEmptyAlert:
                "ဈေးခြင်းထဲတွင် ဘာမှမရှိပါ",

            /* Checkout */

            checkoutTitle:
                "အော်ဒါအတည်ပြုရန်",

            notLoggedIn:
                "Login ဝင်ထားခြင်း မရှိသေးပါ",

            loginRequiredDesc:
                "အော်ဒါတင်ရန် Login ဝင်ပါ။ သင့်အော်ဒါများကို သင့်အကောင့်တွင် အလိုအလျောက် သိမ်းဆည်းပေးပါမည်",

            goLogin:
                "Login / Register",

            orderContent:
                "အော်ဒါအကြောင်းအရာ",

            confirmingRestaurant:
                "စားသောက်ဆိုင်ကို အတည်ပြုနေသည်...",

            unknownRestaurant:
                "မသိရှိသော စားသောက်ဆိုင်",

            deliveryInfo:
                "ပို့ဆောင်ရေးအချက်အလက်",

            name:
                "အမည်",

            phone:
                "ဖုန်း",

            address:
                "လိပ်စာ",

            namePlaceholder:
                "သင့်အမည်ကို ရိုက်ထည့်ပါ",

            phonePlaceholder:
                "သင့်ဖုန်းနံပါတ်ကို ရိုက်ထည့်ပါ",

            addressPlaceholder:
                "အသေးစိတ်ပို့ဆောင်မည့်လိပ်စာကို ရိုက်ထည့်ပါ",

            paymentMethod:
                "ငွေပေးချေမှုနည်းလမ်း",

            cash:
                "ငွေသား",

            kbzPay:
                "KBZPay",

            waveMoney:
                "Wave Money",

            placeOrder:
                "အော်ဒါတင်ရန်",

            submittingOrder:
                "အော်ဒါတင်နေသည်...",

            cannotIdentifyRestaurant:
                "စားသောက်ဆိုင်ကို ခွဲခြားမသိနိုင်ပါ",

            restaurantDoesNotExist:
                "စားသောက်ဆိုင် မရှိပါ",

            restaurantLoadError:
                "စားသောက်ဆိုင်အချက်အလက် ဖတ်၍မရပါ",

            emptyCartCheckout:
                "ဈေးခြင်းထဲတွင် ဘာမှမရှိပါ",

            pleaseLoginBeforeOrder:
                "အော်ဒါမတင်မီ Login ဝင်ပါ။",

            restaurantReturnToMenu:
                "စားသောက်ဆိုင်ကို ခွဲခြားမသိနိုင်ပါ။ မီနူးသို့ပြန်ပြီး အစားအစာကို ထပ်ထည့်ပါ။",

            pleaseEnterName:
                "သင့်အမည်ကို ရိုက်ထည့်ပါ",

            pleaseEnterPhone:
                "သင့်ဖုန်းနံပါတ်ကို ရိုက်ထည့်ပါ",

            pleaseEnterAddress:
                "ပို့ဆောင်မည့်လိပ်စာကို ရိုက်ထည့်ပါ",

            orderSubmitFailed:
                "အော်ဒါတင်၍မရပါ",

            /* Success */

            orderSuccessTitle:
                "အော်ဒါတင်ခြင်း အောင်မြင်ပါပြီ!",

            orderSuccessMessage:
                "အော်ဒါတင်ပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်!",

            orderSuccessPreparing:
                "စားသောက်ဆိုင်မှ သင့်အော်ဒါကို အမြန်ဆုံး ပြင်ဆင်ပေးပါမည်။",

            orderNumber:
                "အော်ဒါနံပါတ်",

            backHome:
                "ပင်မစာမျက်နှာသို့ ပြန်ရန်",

            continueOrdering:
                "ဆက်လက်အော်ဒါတင်ရန်",

            /* Orders */

            myOrders:
                "ကျွန်ုပ်၏ အော်ဒါများ",

            backHomeText:
                "ပင်မစာမျက်နှာသို့ ပြန်ရန်",

            refreshOrders:
                "အော်ဒါများ ပြန်လည်ဖတ်ရန်",

            enableNotifications:
                "အသိပေးချက်ဖွင့်ရန်",

            orderRealtimeSync:
                "အော်ဒါအခြေအနေကို အချိန်နှင့်တပြေးညီ ပြောင်းလဲနေသည်",

            orderNumberLabel:
                "အော်ဒါနံပါတ်",

            orderStatus:
                "အော်ဒါအခြေအနေ",

            orderTime:
                "အော်ဒါတင်ချိန်",

            orderDetails:
                "အော်ဒါအသေးစိတ်",

            orderAmount:
                "အော်ဒါပမာဏ",

            orderContentLabel:
                "အော်ဒါအကြောင်းအရာ",

            pending:
                "လက်ခံရန်စောင့်နေသည်",

            merchantAccepted:
                "စားသောက်ဆိုင်မှ လက်ခံပြီး",

            riderAccepted:
                "ပို့ဆောင်သူမှ လက်ခံပြီး",

            preparing:
                "ပြင်ဆင်နေသည်",

            ready:
                "အော်ဒါအဆင်သင့်ဖြစ်ပြီ",

            delivering:
                "ပို့ဆောင်နေသည်",

            completed:
                "ပြီးဆုံးပြီ",

            cancelled:
                "ပယ်ဖျက်ပြီး",

            waitingMerchantAccept:
                "စားသောက်ဆိုင်မှ အော်ဒါလက်ခံရန် စောင့်နေသည်",

            merchantPreparing:
                "စားသောက်ဆိုင်မှ သင့်အော်ဒါကို ပြင်ဆင်နေသည်",

            riderInfo:
                "ပို့ဆောင်သူအချက်အလက်",

            rider:
                "ပို့ဆောင်သူ",

            phoneLabel:
                "ဖုန်း",

            orderProgress:
                "အော်ဒါတိုးတက်မှု",

            waiting:
                "စောင့်နေသည်",

            orderReview:
                "အော်ဒါသုံးသပ်ချက်",

            reviewed:
                "သုံးသပ်ပြီး",

            pendingReview:
                "သုံးသပ်ရန်ကျန်ရှိ",

            /* Reviews */

            myReviews:
                "ကျွန်ုပ်၏ သုံးသပ်ချက်များ",

            myReviewsDesc:
                "သင်တင်ထားသော စားသောက်ဆိုင်သုံးသပ်ချက်များကို ကြည့်ရန်",

            noMyReviews:
                "သုံးသပ်ချက် မရှိသေးပါ",

            noMyReviewsDesc:
                "အော်ဒါပြီးဆုံးပါက စားသောက်ဆိုင်ကို သုံးသပ်ချက်ပေးနိုင်ပါသည်",

            loginToView:
                "သုံးသပ်ချက်များကြည့်ရန် Login ဝင်ပါ",

            userReview:
                "အသုံးပြုသူသုံးသပ်ချက်",

            reviewContent:
                "သုံးသပ်ချက်အကြောင်းအရာ",

            orderNumberShort:
                "အော်ဒါနံပါတ်: ",

            userNoTextReview:
                "စာသားသုံးသပ်ချက် မရေးထားပါ",

            reviewTitle:
                "စားသောက်ဆိုင်ကို သုံးသပ်ရန်",

            rating:
                "အဆင့်သတ်မှတ်ချက်",

            ratingRequired:
                "အဆင့်သတ်မှတ်ချက် ရွေးချယ်ပါ",

            comment:
                "မှတ်ချက်",

            commentPlaceholder:
                "သင့်သုံးသပ်ချက်ကို ရေးပါ...",

            submitReview:
                "သုံးသပ်ချက် တင်ရန်",

            reviewSuccess:
                "သုံးသပ်ချက် တင်ခြင်း အောင်မြင်ပါပြီ!",

            reviewFailed:
                "သုံးသပ်ချက် တင်၍မရပါ",

            reviewAlreadyExists:
                "ဤအော်ဒါကို သုံးသပ်ပြီးဖြစ်ပါသည်",

            /* Profile */

            account:
                "အကောင့်",

            accountInfo:
                "အကောင့်အချက်အလက်",

            myAccount:
                "ကျွန်ုပ်၏ အကောင့်",

            readingAccount:
                "အကောင့်အချက်အလက်ကို ဖတ်နေသည်...",

            editProfile:
                "ကိုယ်ရေးအချက်အလက် ပြင်ရန်",

            quickOrders:
                "ကျွန်ုပ်၏ အော်ဒါများ",

            quickFavorites:
                "ကျွန်ုပ်၏ အကြိုက်များ",

            quickAddresses:
                "လိပ်စာများ",

            quickRestaurants:
                "စားသောက်ဆိုင်များ",

            service:
                "ဝန်ဆောင်မှုများ",

            serviceTitle:
                "ဝန်ဆောင်မှုများ",

            favorites:
                "အကြိုက်များ",

            addresses:
                "လိပ်စာများ",

            coupons:
                "ကူပွန်များ",

            ordersSub:
                "အော်ဒါမှတ်တမ်းကြည့်ရန်",

            favoritesSub:
                "အကြိုက်ဆုံးအစားအစာများ ကြည့်ရန်",

            addressesSub:
                "ပို့ဆောင်မည့်လိပ်စာများ စီမံရန်",

            couponsSub:
                "ကူပွန်များကြည့်ရန်",

            reviewsSub:
                "ကျွန်ုပ်၏သုံးသပ်ချက်များ ကြည့်ရန်",

            other:
                "အခြား",

            otherTitle:
                "အခြား",

            login:
                "Login",

            register:
                "Register",

            logout:
                "Logout",

            loginTitle:
                "Login ဝင်ရန်",

            loginSub:
                "သင့်အော်ဒါများနှင့် လိပ်စာများကို သိမ်းဆည်းရန် Login ဝင်ပါ",

            loggedIn:
                "Login ဝင်ထားသည်",

            loggedOut:
                "Login ဝင်ထားခြင်း မရှိပါ",

            confirmLogout:
                "Logout ထွက်ရန် သေချာပါသလား?",

            logoutError:
                "Logout ထွက်၍မရပါ",

            /* Edit Profile */

            editProfileTitle:
                "ကိုယ်ရေးအချက်အလက် ပြင်ရန်",

            defaultUserName:
                "MDY FOOD အသုံးပြုသူ",

            nickname:
                "အမည်",

            nicknamePlaceholder:
                "သင့်အမည်ကို ရိုက်ထည့်ပါ",

            nicknameLimit:
                "အမည်သည် စာလုံး 30 ထက် မကျော်ရပါ",

            email:
                "အီးမေးလ်",

            emailReadonly:
                "Login အကောင့်အချက်အလက်ကို ဤနေရာတွင် ပြောင်းလဲ၍မရပါ",

            phoneNumber:
                "ဖုန်းနံပါတ်",

            saveProfile:
                "ကိုယ်ရေးအချက်အလက် သိမ်းရန်",

            returnButton:
                "နောက်သို့",

            notBoundEmail:
                "အီးမေးလ် မချိတ်ဆက်ထားပါ",

            notBoundPhone:
                "ဖုန်းနံပါတ် မချိတ်ဆက်ထားပါ",

            profileSaveSuccess:
                "ကိုယ်ရေးအချက်အလက် သိမ်းဆည်းခြင်း အောင်မြင်ပါပြီ!",

            profileSaveFailed:
                "သိမ်းဆည်း၍မရပါ: ",

            nicknameRequired:
                "အမည်ထည့်ပါ",

            nicknameTooLong:
                "အမည်သည် စာလုံး 30 ထက် မကျော်ရပါ",

            saving:
                "သိမ်းဆည်းနေသည်...",

            /* Settings */

            settingsTitle:
                "ဆက်တင်များ",

            accountSettings:
                "အကောင့်ဆက်တင်များ",

            profileSettings:
                "ကိုယ်ရေးအချက်အလက်",

            nameLabel:
                "အမည်",

            phoneLabelFull:
                "ဖုန်းနံပါတ်",

            nameInputPlaceholder:
                "သင့်အမည်ကို ရိုက်ထည့်ပါ",

            phoneInputPlaceholder:
                "သင့်ဖုန်းနံပါတ်ကို ရိုက်ထည့်ပါ",

            generalSettings:
                "အထွေထွေဆက်တင်များ",

            generalTitle:
                "အထွေထွေ",

            language:
                "ဘာသာစကား",

            languageTitle:
                "ဘာသာစကားဆက်တင်",

            languageDesc:
                "သင်နှစ်သက်သော ဘာသာစကားကို ရွေးချယ်ပါ",

            notification:
                "အသိပေးချက်",

            notificationTitle:
                "အော်ဒါအသိပေးချက်",

            notificationDesc:
                "အော်ဒါအခြေအနေ ပြောင်းလဲမှုများကို လက်ခံရန်",

            darkMode:
                "အမှောင်မုဒ်",

            darkTitle:
                "အမှောင်မုဒ်",

            darkModeDesc:
                "အမှောင်ပုံစံ အသုံးပြုရန်",

            otherSettings:
                "အခြားဆက်တင်များ",

            otherTitle:
                "အခြား",

            userAgreement:
                "အသုံးပြုသူသဘောတူညီချက်",

            privacyPolicy:
                "ကိုယ်ရေးအချက်အလက် မူဝါဒ",

            aboutUs:
                "ကျွန်ုပ်တို့အကြောင်း",

            legal:
                "ဥပဒေဆိုင်ရာ အချက်အလက်",

            accountStatus:
                "အကောင့်အခြေအနေ",

            accountStatusTitle:
                "အကောင့်အခြေအနေ",

            checkingLogin:
                "Login အခြေအနေကို စစ်ဆေးနေသည်...",

            saveSuccess:
                "သိမ်းဆည်းခြင်း အောင်မြင်ပါပြီ",

            saveError:
                "သိမ်းဆည်း၍မရပါ",

            /* Login */

            loginPageTitle:
                "Login",

            loginButton:
                "အီးမေးလ်ဖြင့် Login ဝင်ရန်",

            emailPlaceholder:
                "အီးမေးလ်ထည့်ပါ",

            password:
                "စကားဝှက်",

            passwordPlaceholder:
                "စကားဝှက်ထည့်ပါ",

            noAccount:
                "အကောင့်မရှိသေးပါသလား?",

            registerNow:
                "ယခုပင် Register လုပ်ရန်",

            or:
                "သို့မဟုတ်",

            googleLogin:
                "Google ဖြင့် Login ဝင်ရန်",

            phoneLogin:
                "ဖုန်းနံပါတ်ဖြင့် Login ဝင်ရန်",

            phoneInternationalPlaceholder:
                "+95 9xxxxxxxxx",

            phoneInternationalHint:
                "နိုင်ငံတကာပုံစံ အသုံးပြုပါ။ ဥပမာ +959xxxxxxxxx",

            getVerificationCode:
                "အတည်ပြုကုဒ် ရယူရန်",

            verificationCode:
                "SMS အတည်ပြုကုဒ် ထည့်ပါ",

            phoneLoginButton:
                "Login",

            backToLoginMethods:
                "← အခြား Login နည်းလမ်းများသို့ ပြန်ရန်",

            pleaseEnterEmailPassword:
                "အီးမေးလ်နှင့် စကားဝှက် ထည့်ပါ",

            loggingIn:
                "Login ဝင်နေသည်...",

            loginSuccess:
                "Login ဝင်ခြင်း အောင်မြင်ပါပြီ။ ဝင်ရောက်နေသည်...",

            emailNotRegistered:
                "ဤအီးမေးလ်သည် Register လုပ်ထားခြင်း မရှိပါ",

            wrongPassword:
                "စကားဝှက် မှားနေပါသည်",

            emailOrPasswordWrong:
                "အီးမေးလ် သို့မဟုတ် စကားဝှက် မှားနေပါသည်",

            invalidEmail:
                "အီးမေးလ်ပုံစံ မမှန်ပါ",

            loginFailed:
                "Login မအောင်မြင်ပါ",

            loginFailedColon:
                "Login မအောင်မြင်ပါ: ",

            phoneInternationalRequired:
                "ဖုန်းနံပါတ်ကို နိုင်ငံတကာပုံစံ အသုံးပြုရပါမည်။ ဥပမာ +959xxxxxxxxx",

            sendingCode:
                "ပို့နေသည်...",

            verificationCodeSent:
                "အတည်ပြုကုဒ် ပို့ပြီးပါပြီ။ SMS ကို စစ်ဆေးပါ",

            verificationCodeSendFailed:
                "အတည်ပြုကုဒ် ပို့၍မရပါ: ",

            enterVerificationCode:
                "အတည်ပြုကုဒ် ထည့်ပါ",

            getCodeFirst:
                "အရင်ဆုံး အတည်ပြုကုဒ် ရယူပါ",

            verificationCodeInvalid:
                "အတည်ပြုကုဒ် မှားနေသည် သို့မဟုတ် သက်တမ်းကုန်သွားပါပြီ။ ကုဒ်အသစ် ရယူပါ",

            /* Register */

            registerTitle:
                "အကောင့်ဖန်တီးရန်",

            confirmPassword:
                "စကားဝှက် အတည်ပြုရန်",

            registerButton:
                "Register",

            alreadyAccount:
                "အကောင့်ရှိပြီးသားလား?",

            loginNow:
                "ယခုပင် Login ဝင်ရန်",

            registerName:
                "အမည်",

            registerNamePlaceholder:
                "သင့်အမည်ကို ရိုက်ထည့်ပါ",

            registerPhone:
                "ဖုန်းနံပါတ်",

            registerPhonePlaceholder:
                "ဥပမာ: 09xxxxxxxxx",

            registerEmail:
                "အီးမေးလ်",

            registerEmailPlaceholder:
                "အီးမေးလ်ထည့်ပါ",

            registerPassword:
                "စကားဝှက်",

            registerPasswordPlaceholder:
                "အနည်းဆုံး စာလုံး 6 လုံး",

            registerConfirmPassword:
                "စကားဝှက် အတည်ပြုရန်",

            registerConfirmPasswordPlaceholder:
                "စကားဝှက်ကို ထပ်မံထည့်ပါ",

            defaultAddress:
                "ပုံမှန်ပို့ဆောင်မည့်လိပ်စာ",

            defaultAddressPlaceholder:
                "ဥပမာ: Mandalay Chanayethazan...",

            merchantSectionTitle:
                "🍜 ကျွန်ုပ်သည် စားသောက်ဆိုင်ပိုင်ရှင် ဖြစ်ပါသည်",

            merchantSectionDesc:
                "သင့်စားသောက်ဆိုင်ကို MDY FOOD တွင် ထည့်လိုပါသလား?",

            merchantSectionHint:
                "အောက်တွင် လျှောက်ထားပါ",

            merchantRegister:
                "🏪 စားသောက်ဆိုင်အဖြစ် လျှောက်ထားရန်",

            fillAllFields:
                "အချက်အလက်အားလုံး ဖြည့်ပါ",

            passwordMinLength:
                "စကားဝှက်သည် အနည်းဆုံး စာလုံး 6 လုံး ရှိရပါမည်",

            passwordMismatch:
                "စကားဝှက်နှစ်ခု မတူပါ",

            registering:
                "Register လုပ်နေသည်...",

            registerSuccess:
                "Register လုပ်ခြင်း အောင်မြင်ပါပြီ! ပင်မစာမျက်နှာသို့ ဝင်နေသည်...",

            emailAlreadyRegistered:
                "ဤအီးမေးလ်သည် Register လုပ်ထားပြီးသားဖြစ်ပါသည်",

            emailRegistrationDisabled:
                "အီးမေးလ် Register လုပ်ခြင်းကို ဖွင့်ထားခြင်း မရှိပါ။ Firebase Authentication ကို စစ်ဆေးပါ",

            firebaseApiKeyInvalid:
                "Firebase API Key မမှန်ပါ။ Firebase project configuration ကို စစ်ဆေးပါ",

            networkConnectionFailed:
                "Network ချိတ်ဆက်မှု မအောင်မြင်ပါ။ Network ကို စစ်ဆေးပြီး ထပ်ကြိုးစားပါ",

            registrationFailed:
                "Register မအောင်မြင်ပါ: ",

            /* Merchant / Delivery */

            merchant:
                "စားသောက်ဆိုင်",

            merchantLogin:
                "စားသောက်ဆိုင် Login",

            merchantRegister:
                "စားသောက်ဆိုင် Register",

            merchantCenter:
                "စားသောက်ဆိုင်စင်တာ",

            delivery:
                "ပို့ဆောင်သူ",

            deliveryLogin:
                "ပို့ဆောင်သူ Login",

            deliveryRegister:
                "ပို့ဆောင်သူ Register",

            deliveryCenter:
                "ပို့ဆောင်သူစင်တာ",

            /* About */

            about:
                "ကျွန်ုပ်တို့အကြောင်း",

            aboutTitle:
                "MDY FOOD အကြောင်း",

            aboutSubtitle:
                "အော်ဒါတင်ခြင်းနှင့် ပို့ဆောင်ခြင်းကို ပိုမိုလွယ်ကူစေခြင်း",

            aboutUsTitle:
                "ကျွန်ုပ်တို့အကြောင်း",

            aboutParagraph1:
                "MDY FOOD သည် မြန်မာနိုင်ငံရှိ အသုံးပြုသူများအတွက် အွန်လိုင်းအစားအစာအော်ဒါနှင့် ပို့ဆောင်ရေးပလက်ဖောင်းတစ်ခု ဖြစ်ပါသည်။",

            aboutParagraph2:
                "အသုံးပြုသူများသည် စားသောက်ဆိုင်များနှင့် အစားအစာများကို ကြည့်ရှုနိုင်ပြီး အော်ဒါတင်နိုင်သည့်အပြင် အော်ဒါနှင့် ပို့ဆောင်မှုအခြေအနေများကိုလည်း ကြည့်ရှုနိုင်ပါသည်။",

            platformFeatures:
                "ပလက်ဖောင်းဝန်ဆောင်မှုများ",

            onlineOrdering:
                "အွန်လိုင်းအော်ဒါ",

            onlineOrderingDesc:
                "စားသောက်ဆိုင်များနှင့် အစားအစာများကို ကြည့်ပြီး အွန်လိုင်းမှ အော်ဒါတင်နိုင်ပါသည်",

            deliveryService:
                "ပို့ဆောင်ရေးဝန်ဆောင်မှု",

            deliveryServiceDesc:
                "ပို့ဆောင်မှုအခြေအနေနှင့် အော်ဒါတိုးတက်မှုကို ကြည့်နိုင်ပါသည်",

            userReviews:
                "အသုံးပြုသူသုံးသပ်ချက်များ",

            userReviewsDesc:
                "အော်ဒါပြီးဆုံးပါက စားသောက်ဆိုင်ကို သုံးသပ်ချက်ပေးနိုင်ပါသည်",

            restaurantService:
                "စားသောက်ဆိုင်ဝန်ဆောင်မှု",

            restaurantServiceDesc:
                "စားသောက်ဆိုင်များအတွက် အော်ဒါနှင့် လုပ်ငန်းစီမံခန့်ခွဲမှု ကိရိယာများ",

            ourGoal:
                "ကျွန်ုပ်တို့၏ ရည်မှန်းချက်",

            aboutGoal:
                "ရိုးရှင်းပြီး အဆင်ပြေသော အွန်လိုင်းအော်ဒါစနစ်မှတစ်ဆင့် အစားအစာစားသုံးခြင်းကို ပိုမိုလွယ်ကူစေရန်နှင့် စားသောက်ဆိုင်များနှင့် ပို့ဆောင်သူများ ပိုမိုထိရောက်စွာ အလုပ်လုပ်နိုင်ရန် ကျွန်ုပ်တို့ ရည်ရွယ်ပါသည်။",

            version:
                "MDY FOOD · Version 1.0",

            /* Agreement */

            agreementTitle:
                "အသုံးပြုသူသဘောတူညီချက်",

            agreementMainTitle:
                "MDY FOOD အသုံးပြုသူသဘောတူညီချက်",

            updatedDate:
                "မွမ်းမံသည့်ရက်စွဲ: 2026",

            agreementSection1:
                "၁။ သဘောတူညီချက်အကြောင်း",

            agreementSection2:
                "၂။ အကောင့်အသုံးပြုခြင်း",

            agreementSection3:
                "၃။ အော်ဒါဝန်ဆောင်မှု",

            agreementSection4:
                "၄။ ငွေပေးချေခြင်း",

            agreementSection5:
                "၅။ ပို့ဆောင်ခြင်း",

            agreementSection6:
                "၆။ အသုံးပြုသူ၏ လုပ်ဆောင်ချက်များ",

            agreementSection7:
                "၇။ စားသောက်ဆိုင်နှင့် အစားအစာအချက်အလက်",

            agreementSection8:
                "၈။ သဘောတူညီချက် ပြင်ဆင်ခြင်း",

            agreementSection9:
                "၉။ ဆက်သွယ်ရန်",

            /* Privacy */

            privacyTitle:
                "ကိုယ်ရေးအချက်အလက် မူဝါဒ",

            privacyMainTitle:
                "MDY FOOD ကိုယ်ရေးအချက်အလက် မူဝါဒ",

            privacySection1:
                "၁။ ကိုယ်ရေးအချက်အလက်ဆိုင်ရာ ရှင်းလင်းချက်",

            privacySection2:
                "၂။ ကျွန်ုပ်တို့ စုဆောင်းနိုင်သော အချက်အလက်များ",

            privacySection3:
                "၃။ အချက်အလက်အသုံးပြုမှု",

            privacySection4:
                "၄။ အော်ဒါအချက်အလက်",

            privacySection5:
                "၅။ အချက်အလက်လုံခြုံရေး",

            privacySection6:
                "၆။ အချက်အလက်မျှဝေခြင်း",

            privacySection7:
                "၇။ Cookie နှင့် Local Storage",

            privacySection8:
                "၈။ အသုံးပြုသူအကောင့်",

            privacySection9:
                "၉။ ကိုယ်ရေးအချက်အလက်မူဝါဒ ပြင်ဆင်မှု",

            privacySection10:
                "၁၀။ ဆက်သွယ်ရန်",

            /* System */

            networkError:
                "Network ချိတ်ဆက်မှု မအောင်မြင်ပါ",

            dataLoadFailed:
                "အချက်အလက်များ ဖတ်၍မရပါ",

            pleaseWait:
                "ခဏစောင့်ပါ...",

            operationFailed:
                "လုပ်ဆောင်မှု မအောင်မြင်ပါ",

            invalidData:
                "အချက်အလက် မမှန်ပါ",

            unknownError:
                "မသိရှိသော အမှား",

            /* Generic */

            pleaseLogin:
                "အရင်ဆုံး Login ဝင်ပါ",

            loginRequired:
                "Login လိုအပ်ပါသည်",

            operationSuccess:
                "လုပ်ဆောင်မှု အောင်မြင်ပါပြီ",

            operationError:
                "လုပ်ဆောင်မှု မအောင်မြင်ပါ",

            /* Restaurant / Food */

            welcome:
                "MDY FOOD မှ ကြိုဆိုပါသည်",

            defaultRestaurantName:
                "MDY FOOD စားသောက်ဆိုင်",

            defaultRestaurantDescription:
                "MDY FOOD မှ ကြိုဆိုပါသည်။ သင်ကြိုက်သော အစားအစာကို ရွေးချယ်ပါ!",

            menuUnavailable:
                "မီနူး မရရှိနိုင်ပါ",

            restaurantsPageTitle:
                "စားသောက်ဆိုင်အားလုံး",

            noRestaurantsFound:
                "ကိုက်ညီသော စားသောက်ဆိုင် မတွေ့ပါ",

            /* Status */

            statusPending:
                "လက်ခံရန်စောင့်နေသည်",

            statusMerchantAccepted:
                "စားသောက်ဆိုင်မှ လက်ခံပြီး",

            statusRiderAccepted:
                "ပို့ဆောင်သူမှ လက်ခံပြီး",

            statusReady:
                "အော်ဒါအဆင်သင့်ဖြစ်ပြီ",

            statusDelivering:
                "ပို့ဆောင်နေသည်",

            statusCompleted:
                "ပြီးဆုံးပြီ",

            statusCancelled:
                "ပယ်ဖျက်ပြီး",

            /* Payment */

            paymentCash:
                "ငွေသား",

            paymentKBZPay:
                "KBZPay",

            paymentWaveMoney:
                "Wave Money",

            /* Categories */

            all:
                "အားလုံး",

            sichuan:
                "စီချွမ်းအစားအစာ",

            myanmar:
                "မြန်မာအစားအစာ",

            bbq:
                "အကင်",

            other:
                "အခြား"
        },


        /*
         * =====================================================
         * English
         * =====================================================
         */

        en: {

            /* Common */

            home: "Home",
            menu: "Menu",
            restaurants: "Restaurants",
            cart: "Cart",
            orders: "Orders",
            profile: "Profile",
            settings: "Settings",
            back: "Back",
            save: "Save",
            cancel: "Cancel",
            confirm: "Confirm",
            delete: "Delete",
            edit: "Edit",
            close: "Close",
            loading: "Loading...",
            success: "Success",
            failed: "Failed",
            retry: "Retry",
            search: "Search",
            submit: "Submit",
            yes: "Yes",
            no: "No",
            refresh: "Refresh",
            reload: "Reload",
            continue: "Continue",
            viewAll: "View All",
            seeMore: "See More",
            viewAllArrow: "View All →",
            allArrow: "All →",
            none: "None",
            unknown: "Unknown",
            anonymous: "Anonymous",

            /* Header */

            brandName: "MDY FOOD",
            brandSubtitle: "Mandalay Food Delivery",
            navHome: "Home",
            navRestaurants: "Restaurants",
            navOrders: "Orders",
            navProfile: "Profile",

            /* Home */

            homeTitle:
                "What would you like to eat?",

            homeSubtitle:
                "Discover delicious restaurants and food near you",

            searchRestaurantFood:
                "Search restaurants or food...",

            searchRestaurant:
                "Search restaurants...",

            searchFood:
                "Search food...",

            searchMenu:
                "Search menu...",

            searchRestaurantsPlaceholder:
                "Search restaurants...",

            nearbyRestaurants:
                "Nearby Restaurants",

            allRestaurants:
                "All Restaurants",

            noRestaurants:
                "No restaurants available",

            noRestaurantsDesc:
                "There are no available restaurants nearby right now",

            noOpenRestaurants:
                "No restaurants are currently open",

            noOpenRestaurantsDesc:
                "There are no open restaurants right now. Please come back later",

            loadingRestaurants:
                "Loading restaurants...",

            restaurantLoadFailed:
                "Failed to load restaurants",

            restaurantInfoError:
                "Failed to load restaurant information",

            restaurantNotFound:
                "Restaurant not found",

            loginBannerTitle:
                "Log in for easier ordering",

            loginBannerDesc:
                "Log in to save your orders, addresses, and personal information",

            loginOrRegister:
                "Login / Register",

            loginConvenient:
                "Log in for easier ordering",

            saveOrdersAddress:
                "Log in to save your orders, addresses, and personal information",

            loginRegister:
                "Login / Register",

            foodCategories:
                "Food Categories",

            categoryAll:
                "All",

            categorySichuan:
                "Sichuan",

            categoryMyanmar:
                "Myanmar",

            categoryBBQ:
                "BBQ",

            categoryOther:
                "Other",

            restaurantOpen:
                "Open",

            restaurantClosed:
                "Closed",

            restaurantOpenBadge:
                "Open",

            restaurantClosedBadge:
                "Closed",

            open:
                "Open",

            closed:
                "Closed",

            viewMenu:
                "View Menu",

            viewMenuSimple:
                "Menu",

            viewMenuArrow:
                "View Menu →",

            menuPreparing:
                "Menu Coming Soon",

            menuPreparingMessage:
                "This restaurant's menu is being prepared. Please come back later",

            ratingLoading:
                "Loading rating...",

            loadingReviews:
                "Loading reviews...",

            noRating:
                "No rating yet",

            noReviews:
                "No reviews yet",

            reviewCount:
                "{count} reviews",

            reviewCountWithIcon:
                "⭐ {count} reviews",

            ratingWithCount:
                "⭐ {rating} · {count} reviews",

            reviewCountSuffix:
                "{count} reviews",

            foodCount:
                "{count} dishes",

            foodCountSimple:
                "{count} dishes",

            foodCountSuffix:
                "{count} dishes",

            foodLoading:
                "Loading food...",

            loadingFoods:
                "Loading dishes...",

            foodSimple:
                "Food",

            food:
                "Food",

            foodSearchResult:
                "Related food found",

            foundFoods:
                "Food found",

            foodSearchMore:
                "View more food",

            andMore:
                "and more",

            restaurantMenu:
                "Restaurant Menu",

            restaurantLabel:
                "Restaurant",

            restaurantClosedMessage:
                "This restaurant is currently closed and cannot accept orders",

            tryAnotherKeyword:
                "Try another keyword",

            comeBackLater:
                "Please come back later",

            /* Menu */

            backToRestaurant:
                "Back to Restaurant",

            menuLoading:
                "Loading menu...",

            menuLoadFailed:
                "Failed to load menu",

            noFoodFound:
                "No food found",

            addToCart:
                "Add to Cart",

            addedToCart:
                "Added to Cart",

            quantity:
                "Quantity",

            piece:
                "item",

            price:
                "Price",

            total:
                "Total",

            viewCart:
                "View Cart",

            customerReviews:
                "Customer Reviews",

            review:
                "Review",

            reviews:
                "Reviews",

            noCustomerReviews:
                "No customer reviews yet",

            reviewLoading:
                "Loading reviews...",

            reviewLoadFailed:
                "Failed to load reviews",

            customerAnonymous:
                "Anonymous",

            customerNoComment:
                "No written review",

            noComment:
                "No written review",

            timeUnknown:
                "Unknown time",

            businessStatusLoading:
                "Loading business status...",

            restaurantCannotLoadReviews:
                "Unable to load restaurant reviews right now",

            /* Cart */

            shoppingCart:
                "My Cart",

            emptyCart:
                "Your cart is empty",

            emptyCartDesc:
                "Go explore restaurants and find something you like",

            goShopping:
                "Start Shopping",

            clearCart:
                "Clear Cart",

            subtotal:
                "Subtotal",

            deliveryFee:
                "Delivery Fee",

            cartEmptyAlert:
                "Your cart is empty",

            /* Checkout */

            checkoutTitle:
                "Confirm Order",

            notLoggedIn:
                "You are not logged in",

            loginRequiredDesc:
                "Please log in before placing an order. Your orders will be saved to your account",

            goLogin:
                "Login / Register",

            orderContent:
                "Order Content",

            confirmingRestaurant:
                "Confirming restaurant...",

            unknownRestaurant:
                "Unknown Restaurant",

            deliveryInfo:
                "Delivery Information",

            name:
                "Name",

            phone:
                "Phone",

            address:
                "Address",

            namePlaceholder:
                "Enter your name",

            phonePlaceholder:
                "Enter your phone number",

            addressPlaceholder:
                "Enter your detailed delivery address",

            paymentMethod:
                "Payment Method",

            cash:
                "Cash",

            kbzPay:
                "KBZPay",

            waveMoney:
                "Wave Money",

            placeOrder:
                "Place Order",

            submittingOrder:
                "Submitting order...",

            cannotIdentifyRestaurant:
                "Unable to identify restaurant",

            restaurantDoesNotExist:
                "Restaurant does not exist",

            restaurantLoadError:
                "Failed to load restaurant information",

            emptyCartCheckout:
                "Your cart is empty",

            pleaseLoginBeforeOrder:
                "Please log in before placing your order.",

            restaurantReturnToMenu:
                "Unable to identify restaurant. Please return to the menu and add food again.",

            pleaseEnterName:
                "Please enter your name",

            pleaseEnterPhone:
                "Please enter your phone number",

            pleaseEnterAddress:
                "Please enter your delivery address",

            orderSubmitFailed:
                "Failed to submit order",

            /* Success */

            orderSuccessTitle:
                "Order Placed Successfully!",

            orderSuccessMessage:
                "Thank you for your order!",

            orderSuccessPreparing:
                "The restaurant will prepare your order as soon as possible.",

            orderNumber:
                "Order Number",

            backHome:
                "Back Home",

            continueOrdering:
                "Continue Ordering",

            /* Orders */

            myOrders:
                "My Orders",

            backHomeText:
                "Back Home",

            refreshOrders:
                "Refresh Orders",

            enableNotifications:
                "Enable Notifications",

            orderRealtimeSync:
                "Order status is syncing in real time",

            orderNumberLabel:
                "Order Number",

            orderStatus:
                "Order Status",

            orderTime:
                "Order Time",

            orderDetails:
                "Order Details",

            orderAmount:
                "Order Amount",

            orderContentLabel:
                "Order Content",

            pending:
                "Pending",

            merchantAccepted:
                "Accepted by Restaurant",

            riderAccepted:
                "Accepted by Rider",

            preparing:
                "Preparing",

            ready:
                "Ready",

            delivering:
                "Delivering",

            completed:
                "Completed",

            cancelled:
                "Cancelled",

            waitingMerchantAccept:
                "Waiting for restaurant to accept",

            merchantPreparing:
                "The restaurant is preparing your order",

            riderInfo:
                "Rider Information",

            rider:
                "Rider",

            phoneLabel:
                "Phone",

            orderProgress:
                "Order Progress",

            waiting:
                "Waiting",

            orderReview:
                "Review Order",

            reviewed:
                "Reviewed",

            pendingReview:
                "Pending Review",

            /* Reviews */

            myReviews:
                "My Reviews",

            myReviewsDesc:
                "View the restaurant reviews you have submitted",

            noMyReviews:
                "No reviews yet",

            noMyReviewsDesc:
                "You can review a restaurant after completing an order",

            loginToView:
                "Log in to view your reviews",

            userReview:
                "User Review",

            reviewContent:
                "Review Content",

            orderNumberShort:
                "Order No.: ",

            userNoTextReview:
                "No written review",

            reviewTitle:
                "Review Restaurant",

            rating:
                "Rating",

            ratingRequired:
                "Please select a rating",

            comment:
                "Comment",

            commentPlaceholder:
                "Write your review...",

            submitReview:
                "Submit Review",

            reviewSuccess:
                "Review submitted successfully!",

            reviewFailed:
                "Failed to submit review",

            reviewAlreadyExists:
                "This order has already been reviewed",

            /* Profile */

            account:
                "Account",

            accountInfo:
                "Account Information",

            myAccount:
                "My Account",

            readingAccount:
                "Loading account information...",

            editProfile:
                "Edit Profile",

            quickOrders:
                "My Orders",

            quickFavorites:
                "My Favorites",

            quickAddresses:
                "Addresses",

            quickRestaurants:
                "Restaurants",

            service:
                "Services",

            serviceTitle:
                "Services",

            favorites:
                "Favorites",

            addresses:
                "Addresses",

            coupons:
                "Coupons",

            ordersSub:
                "View order history",

            favoritesSub:
                "View favorite food",

            addressesSub:
                "Manage delivery addresses",

            couponsSub:
                "View coupons",

            reviewsSub:
                "View my reviews",

            other:
                "Other",

            otherTitle:
                "Other",

            login:
                "Login",

            register:
                "Register",

            logout:
                "Log Out",

            loginTitle:
                "Log In",

            loginSub:
                "Log in to save your orders and addresses",

            loggedIn:
                "Logged In",

            loggedOut:
                "Not Logged In",

            confirmLogout:
                "Are you sure you want to log out?",

            logoutError:
                "Failed to log out",

            /* Edit Profile */

            editProfileTitle:
                "Edit Profile",

            defaultUserName:
                "MDY FOOD User",

            nickname:
                "Nickname",

            nicknamePlaceholder:
                "Enter your nickname",

            nicknameLimit:
                "Nickname must be 30 characters or less",

            email:
                "Email",

            emailReadonly:
                "Your login account information cannot be changed here",

            phoneNumber:
                "Phone Number",

            saveProfile:
                "Save Profile",

            returnButton:
                "Back",

            notBoundEmail:
                "No email linked",

            notBoundPhone:
                "No phone number linked",

            profileSaveSuccess:
                "Profile saved successfully!",

            profileSaveFailed:
                "Failed to save profile: ",

            nicknameRequired:
                "Please enter a nickname",

            nicknameTooLong:
                "Nickname must be 30 characters or less",

            saving:
                "Saving...",

            /* Settings */

            settingsTitle:
                "Settings",

            accountSettings:
                "Account Settings",

            profileSettings:
                "Profile",

            nameLabel:
                "Name",

            phoneLabelFull:
                "Phone Number",

            nameInputPlaceholder:
                "Enter your name",

            phoneInputPlaceholder:
                "Enter your phone number",

            generalSettings:
                "General Settings",

            generalTitle:
                "General",

            language:
                "Language",

            languageTitle:
                "Language Settings",

            languageDesc:
                "Choose your preferred language",

            notification:
                "Notifications",

            notificationTitle:
                "Order Notifications",

            notificationDesc:
                "Receive order status updates",

            darkMode:
                "Dark Mode",

            darkTitle:
                "Dark Mode",

            darkModeDesc:
                "Use a dark interface",

            otherSettings:
                "Other Settings",

            otherTitle:
                "Other",

            userAgreement:
                "User Agreement",

            privacyPolicy:
                "Privacy Policy",

            aboutUs:
                "About Us",

            legal:
                "Legal Information",

            accountStatus:
                "Account Status",

            accountStatusTitle:
                "Account Status",

            checkingLogin:
                "Checking login status...",

            saveSuccess:
                "Saved successfully",

            saveError:
                "Failed to save",

            /* Login */

            loginPageTitle:
                "Login",

            loginButton:
                "Login with Email",

            emailPlaceholder:
                "Enter your email",

            password:
                "Password",

            passwordPlaceholder:
                "Enter your password",

            noAccount:
                "Don't have an account?",

            registerNow:
                "Register Now",

            or:
                "OR",

            googleLogin:
                "Sign in with Google",

            phoneLogin:
                "Login with Phone",

            phoneInternationalPlaceholder:
                "+95 9xxxxxxxxx",

            phoneInternationalHint:
                "Use international format, for example: +959xxxxxxxxx",

            getVerificationCode:
                "Get Verification Code",

            verificationCode:
                "Enter SMS verification code",

            phoneLoginButton:
                "Login",

            backToLoginMethods:
                "← Back to other login methods",

            pleaseEnterEmailPassword:
                "Please enter your email and password",

            loggingIn:
                "Logging in...",

            loginSuccess:
                "Login successful. Redirecting...",

            emailNotRegistered:
                "This email is not registered",

            wrongPassword:
                "Incorrect password",

            emailOrPasswordWrong:
                "Incorrect email or password",

            invalidEmail:
                "Invalid email format",

            loginFailed:
                "Login failed",

            loginFailedColon:
                "Login failed: ",

            phoneInternationalRequired:
                "Phone number must use international format, for example +959xxxxxxxxx",

            sendingCode:
                "Sending...",

            verificationCodeSent:
                "Verification code sent. Please check your SMS",

            verificationCodeSendFailed:
                "Failed to send verification code: ",

            enterVerificationCode:
                "Please enter verification code",

            getCodeFirst:
                "Please get the verification code first",

            verificationCodeInvalid:
                "Invalid or expired verification code. Please request a new one",

            /* Register */

            registerTitle:
                "Create Account",

            confirmPassword:
                "Confirm Password",

            registerButton:
                "Register",

            alreadyAccount:
                "Already have an account?",

            loginNow:
                "Login Now",

            registerName:
                "Name",

            registerNamePlaceholder:
                "Enter your name",

            registerPhone:
                "Phone Number",

            registerPhonePlaceholder:
                "Example: 09xxxxxxxxx",

            registerEmail:
                "Email",

            registerEmailPlaceholder:
                "Enter your email",

            registerPassword:
                "Password",

            registerPasswordPlaceholder:
                "At least 6 characters",

            registerConfirmPassword:
                "Confirm Password",

            registerConfirmPasswordPlaceholder:
                "Enter your password again",

            defaultAddress:
                "Default Delivery Address",

            defaultAddressPlaceholder:
                "Example: Mandalay Chanayethazan...",

            merchantSectionTitle:
                "🍜 I'm a Restaurant Owner",

            merchantSectionDesc:
                "Want to add your restaurant to MDY FOOD?",

            merchantSectionHint:
                "Apply to join below",

            merchantRegister:
                "🏪 Join as a Restaurant",

            fillAllFields:
                "Please fill in all fields",

            passwordMinLength:
                "Password must be at least 6 characters",

            passwordMismatch:
                "Passwords do not match",

            registering:
                "Registering...",

            registerSuccess:
                "Registration successful! Redirecting to home...",

            emailAlreadyRegistered:
                "This email is already registered",

            emailRegistrationDisabled:
                "Email registration is not enabled. Please check Firebase Authentication",

            firebaseApiKeyInvalid:
                "Firebase API Key is invalid. Please check your Firebase project configuration",

            networkConnectionFailed:
                "Network connection failed. Please check your network and try again",

            registrationFailed:
                "Registration failed: ",

            /* Merchant / Delivery */

            merchant:
                "Restaurant",

            merchantLogin:
                "Restaurant Login",

            merchantRegister:
                "Restaurant Registration",

            merchantCenter:
                "Restaurant Center",

            delivery:
                "Rider",

            deliveryLogin:
                "Rider Login",

            deliveryRegister:
                "Rider Registration",

            deliveryCenter:
                "Rider Center",

            /* About */

            about:
                "About Us",

            aboutTitle:
                "About MDY FOOD",

            aboutSubtitle:
                "Making ordering and delivery easier",

            aboutUsTitle:
                "About Us",

            aboutParagraph1:
                "MDY FOOD is an online food ordering and delivery platform for users in Myanmar.",

            aboutParagraph2:
                "Users can browse restaurants and food, place orders, and check order and delivery status through the platform.",

            platformFeatures:
                "Platform Features",

            onlineOrdering:
                "Online Ordering",

            onlineOrderingDesc:
                "Browse restaurants and food and place orders online",

            deliveryService:
                "Delivery Service",

            deliveryServiceDesc:
                "Check delivery status and order progress",

            userReviews:
                "User Reviews",

            userReviewsDesc:
                "Review restaurants after completing an order",

            restaurantService:
                "Restaurant Services",

            restaurantServiceDesc:
                "Order and business management tools for restaurants",

            ourGoal:
                "Our Goal",

            aboutGoal:
                "We aim to make enjoying food easier through simple and convenient online ordering while helping restaurants and delivery staff work more efficiently.",

            version:
                "MDY FOOD · Version 1.0",

            /* Agreement */

            agreementTitle:
                "User Agreement",

            agreementMainTitle:
                "MDY FOOD User Agreement",

            updatedDate:
                "Updated: 2026",

            agreementSection1:
                "1. Agreement Information",

            agreementSection2:
                "2. Account Usage",

            agreementSection3:
                "3. Order Services",

            agreementSection4:
                "4. Payment",

            agreementSection5:
                "5. Delivery",

            agreementSection6:
                "6. User Conduct",

            agreementSection7:
                "7. Restaurant and Food Information",

            agreementSection8:
                "8. Agreement Changes",

            agreementSection9:
                "9. Contact Us",

            /* Privacy */

            privacyTitle:
                "Privacy Policy",

            privacyMainTitle:
                "MDY FOOD Privacy Policy",

            privacySection1:
                "1. Privacy Information",

            privacySection2:
                "2. Information We May Collect",

            privacySection3:
                "3. How We Use Information",

            privacySection4:
                "4. Order Information",

            privacySection5:
                "5. Information Security",

            privacySection6:
                "6. Information Sharing",

            privacySection7:
                "7. Cookies and Local Storage",

            privacySection8:
                "8. User Accounts",

            privacySection9:
                "9. Privacy Policy Updates",

            privacySection10:
                "10. Contact Us",

            /* System */

            networkError:
                "Network connection failed",

            dataLoadFailed:
                "Failed to load data",

            pleaseWait:
                "Please wait...",

            operationFailed:
                "Operation failed",

            invalidData:
                "Invalid data",

            unknownError:
                "Unknown error",

            /* Generic */

            pleaseLogin:
                "Please log in first",

            loginRequired:
                "Login required",

            operationSuccess:
                "Operation successful",

            operationError:
                "Operation failed",

            /* Restaurant / Food */

            welcome:
                "Welcome to MDY FOOD",

            defaultRestaurantName:
                "MDY FOOD Restaurant",

            defaultRestaurantDescription:
                "Welcome to MDY FOOD. Choose the food you like!",

            menuUnavailable:
                "Menu unavailable",

            restaurantsPageTitle:
                "All Restaurants",

            noRestaurantsFound:
                "No matching restaurants found",

            /* Status */

            statusPending:
                "Pending",

            statusMerchantAccepted:
                "Accepted by Restaurant",

            statusRiderAccepted:
                "Accepted by Rider",

            statusReady:
                "Ready",

            statusDelivering:
                "Delivering",

            statusCompleted:
                "Completed",

            statusCancelled:
                "Cancelled",

            /* Payment */

            paymentCash:
                "Cash",

            paymentKBZPay:
                "KBZPay",

            paymentWaveMoney:
                "Wave Money",

            /* Categories */

            all:
                "All",

            sichuan:
                "Sichuan",

            myanmar:
                "Myanmar",

            bbq:
                "BBQ",

            other:
                "Other"
        }
    };


    /*
     * =========================================================
     * Utility
     * =========================================================
     */

    function normalizeLanguage(language) {

        if (!language) {
            return DEFAULT_LANGUAGE;
        }

        const value =
            String(language)
                .toLowerCase()
                .trim();

        if (
            SUPPORTED_LANGUAGES.includes(value)
        ) {
            return value;
        }

        if (
            value === "zh-cn" ||
            value === "zh-tw" ||
            value === "cn"
        ) {
            return "zh";
        }

        if (
            value === "my-mm" ||
            value === "myanmar" ||
            value === "burmese"
        ) {
            return "my";
        }

        if (
            value === "english"
        ) {
            return "en";
        }

        return DEFAULT_LANGUAGE;
    }


    /*
     * =========================================================
     * Get Language
     *
     * IMPORTANT:
     * This function NEVER writes to localStorage.
     * If there is no saved language, it only returns zh.
     * =========================================================
     */

    function getLanguage() {

        try {

            const saved =
                localStorage.getItem(
                    STORAGE_KEY
                );

            if (!saved) {
                return DEFAULT_LANGUAGE;
            }

            const normalized =
                normalizeLanguage(saved);

            if (
                SUPPORTED_LANGUAGES.includes(
                    normalized
                )
            ) {
                return normalized;
            }

            return DEFAULT_LANGUAGE;

        } catch (error) {

            return DEFAULT_LANGUAGE;
        }
    }


    /*
     * =========================================================
     * Get Language Name
     * =========================================================
     */

    function getLanguageName(language) {

        const lang =
            normalizeLanguage(language);

        const names = {

            zh: "中文",

            my: "မြန်မာ",

            en: "English"
        };

        return (
            names[lang] ||
            names[DEFAULT_LANGUAGE]
        );
    }


    /*
     * =========================================================
     * Replace Parameters
     * =========================================================
     */

    function replaceParams(
        text,
        params
    ) {

        if (
            !params ||
            typeof params !== "object"
        ) {
            return text;
        }

        return String(text).replace(
            /\{([^}]+)\}/g,
            function (
                match,
                key
            ) {

                if (
                    Object.prototype.hasOwnProperty.call(
                        params,
                        key
                    )
                ) {

                    return params[key];
                }

                return match;
            }
        );
    }


    /*
     * =========================================================
     * Translation
     * =========================================================
     */

    function t(
        key,
        params,
        fallback
    ) {

        const language =
            getLanguage();

        let value = null;

        if (
            translations[language] &&
            Object.prototype.hasOwnProperty.call(
                translations[language],
                key
            )
        ) {

            value =
                translations[language][key];
        }

        /*
         * If current language does not contain
         * the key, fall back to Chinese.
         */

        if (
            value === null ||
            value === undefined ||
            value === ""
        ) {

            if (
                translations[DEFAULT_LANGUAGE] &&
                Object.prototype.hasOwnProperty.call(
                    translations[DEFAULT_LANGUAGE],
                    key
                )
            ) {

                value =
                    translations[
                        DEFAULT_LANGUAGE
                    ][key];
            }
        }

        /*
         * Final fallback.
         */

        if (
            value === null ||
            value === undefined ||
            value === ""
        ) {

            value =
                fallback !== undefined &&
                fallback !== null
                    ? fallback
                    : key;
        }

        return replaceParams(
            value,
            params
        );
    }


    /*
     * =========================================================
     * Apply Language
     *
     * IMPORTANT:
     * applyLanguage() DOES NOT write localStorage.
     * Only setLanguage() changes persistence.
     * =========================================================
     */

    function applyLanguage(language) {

        const lang =
            normalizeLanguage(language);

        document.documentElement.lang =
            lang === "zh"
                ? "zh-CN"
                : lang === "my"
                    ? "my-MM"
                    : "en";


        /*
         * data-i18n
         */

        document
            .querySelectorAll(
                "[data-i18n]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n"
                        );

                    if (!key) {
                        return;
                    }

                    const translated =
                        t(key);

                    if (
                        element.tagName === "INPUT" ||
                        element.tagName === "TEXTAREA"
                    ) {

                        element.value =
                            translated;

                    } else {

                        element.textContent =
                            translated;
                    }
                }
            );


        /*
         * Placeholder
         */

        document
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-placeholder"
                        );

                    if (!key) {
                        return;
                    }

                    element.setAttribute(
                        "placeholder",
                        t(key)
                    );
                }
            );


        /*
         * Title
         */

        document
            .querySelectorAll(
                "[data-i18n-title]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-title"
                        );

                    if (!key) {
                        return;
                    }

                    element.setAttribute(
                        "title",
                        t(key)
                    );
                }
            );


        /*
         * Aria label
         */

        document
            .querySelectorAll(
                "[data-i18n-aria]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-aria"
                        );

                    if (!key) {
                        return;
                    }

                    element.setAttribute(
                        "aria-label",
                        t(key)
                    );
                }
            );


        /*
         * Language buttons
         */

        document
            .querySelectorAll(
                "[data-language]"
            )
            .forEach(
                function (element) {

                    const elementLanguage =
                        normalizeLanguage(
                            element.getAttribute(
                                "data-language"
                            )
                        );

                    const active =
                        elementLanguage === lang;

                    element.classList.toggle(
                        "active",
                        active
                    );

                    element.setAttribute(
                        "aria-pressed",
                        active
                            ? "true"
                            : "false"
                    );
                }
            );


        /*
         * Select elements
         */

        document
            .querySelectorAll(
                "[data-language-selector]"
            )
            .forEach(
                function (element) {

                    if (
                        "value" in element
                    ) {

                        element.value =
                            lang;
                    }
                }
            );


        /*
         * IMPORTANT:
         * No localStorage.setItem() here.
         *
         * This prevents:
         *
         * settings -> my
         * leave settings
         * page reload
         * -> zh
         *
         * from happening because applyLanguage()
         * itself wrote zh.
         */


        /*
         * Notify other pages / dynamic sections.
         */

        try {

            window.dispatchEvent(
                new CustomEvent(
                    "mdyLanguageChanged",
                    {
                        detail: {
                            language: lang
                        }
                    }
                )
            );

        } catch (error) {

            /*
             * Ignore event errors.
             */
        }

        return lang;
    }


    /*
     * =========================================================
     * Set Language
     *
     * THIS is the only place that saves language.
     * =========================================================
     */

    function setLanguage(language) {

        const lang =
            normalizeLanguage(language);

        try {

            localStorage.setItem(
                STORAGE_KEY,
                lang
            );

        } catch (error) {

            /*
             * Ignore localStorage errors.
             */
        }

        applyLanguage(lang);

        return lang;
    }


    /*
     * =========================================================
     * Toggle Language
     * =========================================================
     */

    function toggleLanguage() {

        const current =
            getLanguage();

        const index =
            SUPPORTED_LANGUAGES.indexOf(
                current
            );

        const next =
            SUPPORTED_LANGUAGES[
                (index + 1) %
                SUPPORTED_LANGUAGES.length
            ];

        return setLanguage(next);
    }


    /*
     * =========================================================
     * Locale / Date
     * =========================================================
     */

    function getLocale(language) {

        const lang =
            normalizeLanguage(
                language ||
                getLanguage()
            );

        if (lang === "my") {
            return "my-MM";
        }

        if (lang === "en") {
            return "en-US";
        }

        return "zh-CN";
    }


    function convertToDate(value) {

        if (!value) {
            return null;
        }

        let date;

        if (
            value &&
            typeof value.toDate === "function"
        ) {

            date =
                value.toDate();

        } else if (
            value instanceof Date
        ) {

            date = value;

        } else {

            date =
                new Date(value);
        }

        if (
            Number.isNaN(
                date.getTime()
            )
        ) {

            return null;
        }

        return date;
    }


    function formatDate(
        value,
        options
    ) {

        const date =
            convertToDate(value);

        if (!date) {

            return t(
                "timeUnknown",
                {},
                "时间未知"
            );
        }

        const defaultOptions = {

            year: "numeric",

            month: "2-digit",

            day: "2-digit"
        };

        return new Intl.DateTimeFormat(
            getLocale(),
            options ||
                defaultOptions
        ).format(date);
    }


    function formatDateTime(
        value,
        options
    ) {

        const date =
            convertToDate(value);

        if (!date) {

            return t(
                "timeUnknown",
                {},
                "时间未知"
            );
        }

        const defaultOptions = {

            year: "numeric",

            month: "2-digit",

            day: "2-digit",

            hour: "2-digit",

            minute: "2-digit"
        };

        return new Intl.DateTimeFormat(
            getLocale(),
            options ||
                defaultOptions
        ).format(date);
    }


    /*
     * =========================================================
     * Order Status
     * =========================================================
     */

    function normalizeOrderStatus(
        status
    ) {

        if (
            status === null ||
            status === undefined
        ) {

            return "";
        }

        const value =
            String(status)
                .trim()
                .toLowerCase();

        const mapping = {

            "待接单":
                "pending",

            "pending":
                "pending",

            "商家已接单":
                "merchant_accepted",

            "merchant accepted":
                "merchant_accepted",

            "merchant_accepted":
                "merchant_accepted",

            "骑手已接单":
                "rider_accepted",

            "rider accepted":
                "rider_accepted",

            "rider_accepted":
                "rider_accepted",

            "准备中":
                "preparing",

            "preparing":
                "preparing",

            "外卖好了":
                "ready",

            "ready":
                "ready",

            "配送中":
                "delivering",

            "delivering":
                "delivering",

            "已完成":
                "completed",

            "completed":
                "completed",

            "已取消":
                "cancelled",

            "cancelled":
                "cancelled"
        };

        return (
            mapping[value] ||
            String(status).trim()
        );
    }


    function translateStatus(
        status
    ) {

        const normalized =
            normalizeOrderStatus(
                status
            );

        const mapping = {

            pending:
                "statusPending",

            merchant_accepted:
                "statusMerchantAccepted",

            rider_accepted:
                "statusRiderAccepted",

            preparing:
                "preparing",

            ready:
                "statusReady",

            delivering:
                "statusDelivering",

            completed:
                "statusCompleted",

            cancelled:
                "statusCancelled"
        };

        const key =
            mapping[normalized];

        if (key) {

            return t(
                key,
                {},
                status
            );
        }

        return (
            status ||
            t("unknown")
        );
    }


    /*
     * =========================================================
     * Category
     * =========================================================
     */

    function normalizeCategory(
        category
    ) {

        if (
            category === null ||
            category === undefined
        ) {

            return "other";
        }

        const value =
            String(category)
                .trim()
                .toLowerCase();

        const mapping = {

            "全部":
                "all",

            "all":
                "all",

            "川菜":
                "sichuan",

            "sichuan":
                "sichuan",

            "缅甸菜":
                "myanmar",

            "myanmar":
                "myanmar",

            "မြန်မာအစားအစာ":
                "myanmar",

            "烧烤":
                "bbq",

            "bbq":
                "bbq",

            "အကင်":
                "bbq",

            "其他":
                "other",

            "other":
                "other",

            "အခြား":
                "other"
        };

        return (
            mapping[value] ||
            "other"
        );
    }


    function translateCategory(
        category
    ) {

        const normalized =
            normalizeCategory(
                category
            );

        const mapping = {

            all:
                "categoryAll",

            sichuan:
                "categorySichuan",

            myanmar:
                "categoryMyanmar",

            bbq:
                "categoryBBQ",

            other:
                "categoryOther"
        };

        const key =
            mapping[normalized];

        if (key) {

            return t(key);
        }

        return (
            category ||
            t("other")
        );
    }


    /*
     * =========================================================
     * Payment
     * =========================================================
     */

    function normalizePayment(
        payment
    ) {

        if (
            payment === null ||
            payment === undefined
        ) {

            return "";
        }

        const value =
            String(payment)
                .trim()
                .toLowerCase();

        const mapping = {

            "现金":
                "cash",

            "cash":
                "cash",

            "kbzpay":
                "kbzpay",

            "kbz pay":
                "kbzpay",

            "wavemoney":
                "waveMoney",

            "wave money":
                "waveMoney"
        };

        return (
            mapping[value] ||
            String(payment).trim()
        );
    }


    function translatePayment(
        payment
    ) {

        const normalized =
            normalizePayment(
                payment
            );

        const mapping = {

            cash:
                "paymentCash",

            kbzpay:
                "paymentKBZPay",

            waveMoney:
                "paymentWaveMoney"
        };

        const key =
            mapping[normalized];

        if (key) {

            return t(key);
        }

        return (
            payment ||
            t("unknown")
        );
    }


    /*
     * =========================================================
     * Language Selector
     * =========================================================
     */

    function renderLanguageSelector(
        container,
        options
    ) {

        if (!container) {
            return;
        }

        const config =
            options || {};

        const languages = [

            {
                code: "zh",
                name: "中文"
            },

            {
                code: "my",
                name: "မြန်မာ"
            },

            {
                code: "en",
                name: "English"
            }
        ];

        container.innerHTML = "";

        const current =
            getLanguage();

        languages.forEach(
            function (language) {

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.textContent =
                    language.name;

                button.dataset.language =
                    language.code;

                button.className =
                    config.buttonClass ||
                    "language-option";

                if (
                    language.code ===
                    current
                ) {

                    button.classList.add(
                        "active"
                    );
                }

                button.setAttribute(
                    "aria-pressed",
                    language.code ===
                        current
                        ? "true"
                        : "false"
                );

                button.addEventListener(
                    "click",
                    function () {

                        setLanguage(
                            language.code
                        );
                    }
                );

                container.appendChild(
                    button
                );
            }
        );
    }


    /*
     * =========================================================
     * Automatic Initialization
     *
     * VERY IMPORTANT:
     *
     * We ONLY READ the saved language.
     *
     * We DO NOT:
     *
     * localStorage.setItem("mdyLanguage", "zh")
     *
     * during initialization.
     *
     * =========================================================
     */

    function initialize() {

        const language =
            getLanguage();

        applyLanguage(
            language
        );
    }


    /*
     * =========================================================
     * DOM Ready
     * =========================================================
     */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    } else {

        initialize();
    }


    /*
     * =========================================================
     * Global API
     * =========================================================
     */

    window.MDYLanguage = {

        t:
            t,

        setLanguage:
            setLanguage,

        getLanguage:
            getLanguage,

        getLanguageName:
            getLanguageName,

        toggleLanguage:
            toggleLanguage,

        apply:
            applyLanguage,

        supportedLanguages:
            SUPPORTED_LANGUAGES.slice(),

        translations:
            translations,

        getLocale:
            getLocale,

        formatDate:
            formatDate,

        formatDateTime:
            formatDateTime,

        normalizeOrderStatus:
            normalizeOrderStatus,

        translateStatus:
            translateStatus,

        normalizeCategory:
            normalizeCategory,

        translateCategory:
            translateCategory,

        normalizePayment:
            normalizePayment,

        translatePayment:
            translatePayment,

        renderLanguageSelector:
            renderLanguageSelector
    };

})();
