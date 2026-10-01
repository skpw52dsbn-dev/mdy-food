/* =========================================================
   MDY FOOD
   全站统一语言系统 language.js
   支持：
   中文 zh
   မြန်မာ my
   English en

   语言保存：
   localStorage["mdyLanguage"]

   重要：
   1. 初次访问默认中文，但不会强制写入 localStorage
   2. 用户主动切换语言后才保存
   3. 页面之间自动保持语言
   4. 不调用自身造成递归
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       基础配置
    ===================================================== */

    const STORAGE_KEY =
        "mdyLanguage";


    const DEFAULT_LANGUAGE =
        "zh";


    const SUPPORTED_LANGUAGES = [
        "zh",
        "my",
        "en"
    ];



    /* =====================================================
       多语言字典
    ===================================================== */

    const translations = {


        /* =================================================
           中文
        ================================================= */

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

            loading: "正在加载...",
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

            none: "暂无",
            unknown: "未知",
            anonymous: "匿名",


            /* Header */

            brandName: "MDY FOOD",
            brandSubtitle: "美味就在身边",

            navHome: "首页",
            navRestaurants: "餐厅",
            navOrders: "订单",
            navProfile: "我的",


            /* Home */

            homeTitle: "发现美味",
            homeSubtitle: "附近好吃的，都在这里",

            searchRestaurantFood:
                "搜索餐厅或美食",

            searchRestaurant:
                "搜索餐厅",

            searchFood:
                "搜索美食",

            searchMenu:
                "搜索菜单",

            searchRestaurantsPlaceholder:
                "搜索餐厅...",

            nearbyRestaurants:
                "附近餐厅",

            allRestaurants:
                "全部餐厅",

            noRestaurants:
                "暂无餐厅",

            noRestaurantsDesc:
                "暂时没有找到餐厅",

            noOpenRestaurants:
                "暂无营业中的餐厅",

            noOpenRestaurantsDesc:
                "附近暂时没有正在营业的餐厅",

            loadingRestaurants:
                "正在加载餐厅...",

            restaurantLoadFailed:
                "餐厅加载失败",

            restaurantInfoError:
                "餐厅信息读取失败",

            restaurantNotFound:
                "没有找到该餐厅",

            loginBannerTitle:
                "登录 MDY FOOD",

            loginBannerDesc:
                "登录后可以管理订单、收藏和收货地址",

            loginOrRegister:
                "登录 / 注册",

            foodCategories:
                "美食分类",

            categoryAll:
                "全部",

            categorySichuan:
                "川菜",

            categoryMyanmar:
                "缅甸菜",

            categoryBBQ:
                "烧烤",

            categoryOther:
                "其他",

            categoryRestaurant:
                "餐厅",

            restaurantOpen:
                "营业中",

            restaurantClosed:
                "休息中",

            restaurantOpenBadge:
                "营业中",

            restaurantClosedBadge:
                "休息中",

            open:
                "营业中",

            closed:
                "休息中",

            viewMenu:
                "查看菜单",

            viewMenuSimple:
                "查看菜单",

            viewMenuArrow:
                "查看菜单 →",

            menuPreparing:
                "菜单准备中",

            menuPreparingMessage:
                "该餐厅正在准备菜单，请稍后再来",

            ratingLoading:
                "评分读取中...",

            noRating:
                "暂无评价",

            noReviews:
                "暂无评价",

            reviewCount:
                "{count}条评价",

            reviewCountSuffix:
                "{count}条评价",

            reviewCountWithIcon:
                "⭐ {count}条评价",

            ratingWithCount:
                "⭐ {rating} · {count}条评价",

            foodCount:
                "{count}道菜品",

            foodCountSimple:
                "{count}道菜品",

            foodCountSuffix:
                "{count}道菜品",

            food:
                "菜品",

            foodLoading:
                "菜品加载中...",

            loadingFoods:
                "正在读取菜品...",

            foodSimple:
                "菜品",

            foodSearchResult:
                "找到菜品",

            foundFoods:
                "找到菜品",

            foodSearchMore:
                "查看更多菜品",

            andMore:
                "等",

            restaurantMenu:
                "餐厅菜单",

            restaurantLabel:
                "餐厅",

            restaurantClosedMessage:
                "该餐厅目前休息中",

            menuUnavailable:
                "菜单暂不可用",

            tryAnotherKeyword:
                "换一个关键词试试看",

            viewAllArrow:
                "查看全部 →",

            allArrow:
                "全部 →",

            comeBackLater:
                "请稍后再来看看",


            /* Menu */

            backToRestaurant:
                "返回餐厅",

            menuLoading:
                "正在加载菜单...",

            menuLoadFailed:
                "菜单加载失败",

            noFoodFound:
                "暂无相关菜品",

            addToCart:
                "加入购物车",

            addedToCart:
                "已加入购物车",

            quantity:
                "数量",

            piece:
                "份",

            price:
                "价格",

            total:
                "合计",

            viewCart:
                "查看购物车",

            customerReviews:
                "顾客评价",

            review:
                "评价",

            reviews:
                "评价",

            noCustomerReviews:
                "暂无顾客评价",

            reviewLoading:
                "评价加载中...",

            loadingReviews:
                "正在加载评价...",

            reviewLoadFailed:
                "评价加载失败",

            customerAnonymous:
                "匿名用户",

            customerNoComment:
                "该用户没有填写文字评价",

            noComment:
                "暂无文字评价",

            timeUnknown:
                "时间未知",

            businessStatusLoading:
                "营业状态读取中...",

            restaurantCannotLoadReviews:
                "暂时无法读取餐厅评价",


            /* Cart */

            shoppingCart:
                "购物车",

            emptyCart:
                "购物车是空的",

            emptyCartDesc:
                "去餐厅看看有什么好吃的吧",

            goShopping:
                "去逛逛",

            clearCart:
                "清空购物车",

            subtotal:
                "商品小计",

            deliveryFee:
                "配送费",

            cartEmptyAlert:
                "购物车是空的",


            /* Checkout */

            checkoutTitle:
                "确认订单",

            notLoggedIn:
                "尚未登录",

            loginRequiredDesc:
                "下单前请先登录",

            goLogin:
                "去登录",

            orderContent:
                "订单内容",

            confirmingRestaurant:
                "正在确认餐厅",

            unknownRestaurant:
                "未知餐厅",

            deliveryInfo:
                "配送信息",

            name:
                "姓名",

            phone:
                "手机号",

            address:
                "收货地址",

            namePlaceholder:
                "请输入姓名",

            phonePlaceholder:
                "请输入手机号",

            addressPlaceholder:
                "请输入收货地址",

            paymentMethod:
                "支付方式",

            cash:
                "现金",

            kbzPay:
                "KBZPay",

            waveMoney:
                "Wave Money",

            placeOrder:
                "提交订单",

            submittingOrder:
                "正在提交订单...",

            cannotIdentifyRestaurant:
                "无法识别餐厅",

            restaurantDoesNotExist:
                "餐厅不存在",

            restaurantLoadError:
                "餐厅加载失败",

            emptyCartCheckout:
                "购物车为空",

            pleaseLoginBeforeOrder:
                "请先登录后再下单",

            restaurantReturnToMenu:
                "请返回餐厅菜单重新选择",

            pleaseEnterName:
                "请输入姓名",

            pleaseEnterPhone:
                "请输入手机号",

            pleaseEnterAddress:
                "请输入收货地址",

            orderSubmitFailed:
                "订单提交失败",


            /* Success */

            orderSuccessTitle:
                "下单成功",

            orderSuccessMessage:
                "你的订单已经成功提交",

            orderSuccessPreparing:
                "餐厅正在准备，请耐心等待",

            orderNumber:
                "订单号",

            backHome:
                "返回首页",

            continueOrdering:
                "继续点餐",


            /* Orders */

            myOrders:
                "我的订单",

            backHomeText:
                "返回首页",

            refreshOrders:
                "刷新订单",

            enableNotifications:
                "开启通知",

            orderRealtimeSync:
                "订单实时同步中",

            orderNumberLabel:
                "订单号",

            orderStatus:
                "订单状态",

            orderTime:
                "下单时间",

            orderDetails:
                "订单详情",

            orderAmount:
                "订单金额",

            orderContentLabel:
                "订单内容",

            pending:
                "待接单",

            merchantAccepted:
                "商家已接单",

            riderAccepted:
                "骑手已接单",

            preparing:
                "制作中",

            ready:
                "待配送",

            delivering:
                "配送中",

            completed:
                "已完成",

            cancelled:
                "已取消",

            waitingMerchantAccept:
                "等待商家接单",

            merchantPreparing:
                "商家正在制作",

            riderInfo:
                "骑手信息",

            rider:
                "骑手",

            phoneLabel:
                "手机号",

            phoneLabelFull:
                "手机号",

            orderProgress:
                "订单进度",

            waiting:
                "等待中",

            orderReview:
                "评价订单",

            reviewed:
                "已评价",

            pendingReview:
                "待评价",


            /* Reviews */

            myReviews:
                "我的评价",

            myReviewsDesc:
                "查看我发布过的评价",

            noMyReviews:
                "暂无评价",

            noMyReviewsDesc:
                "你还没有发布过评价",

            loginToView:
                "登录后查看评价",

            userReview:
                "用户评价",

            reviewContent:
                "评价内容",

            orderNumberShort:
                "订单号",

            userNoTextReview:
                "未填写文字评价",

            reviewTitle:
                "评价",

            rating:
                "评分",

            ratingRequired:
                "请选择评分",

            comment:
                "评价内容",

            commentPlaceholder:
                "写下你的评价吧",

            submitReview:
                "提交评价",

            reviewSuccess:
                "评价提交成功",

            reviewFailed:
                "评价提交失败",

            reviewAlreadyExists:
                "该订单已经评价过了",


            /* Profile */

            account:
                "账户",

            accountInfo:
                "账户信息",

            myAccount:
                "我的账户",

            readingAccount:
                "正在读取账户信息...",

            checkingLogin:
                "正在检查登录状态...",

            editProfile:
                "编辑",

            quickOrders:
                "我的订单",

            quickFavorites:
                "我的收藏",

            quickAddresses:
                "收货地址",

            quickRestaurants:
                "找餐厅",

            service:
                "我的服务",

            serviceTitle:
                "我的服务",

            favorites:
                "我的收藏",

            addresses:
                "收货地址",

            coupons:
                "我的优惠券",

            ordersSub:
                "查看全部订单和订单状态",

            favoritesSub:
                "收藏的餐厅和美食",

            addressesSub:
                "管理送餐地址",

            couponsSub:
                "查看可使用的优惠券",

            reviewsSub:
                "查看我发布过的评价",

            other:
                "其他",

            otherTitle:
                "其他",

            login:
                "登录",

            register:
                "注册",

            logout:
                "退出登录",

            loginTitle:
                "登录 MDY FOOD",

            loginSub:
                "登录后享受完整服务",

            loggedIn:
                "已登录",

            loggedOut:
                "未登录",

            confirmLogout:
                "确定要退出登录吗？",

            logoutError:
                "退出登录失败，请稍后再试",

            defaultUserName:
                "MDY FOOD 用户",

            loginConvenient:
                "登录后可以管理订单、收藏和收货地址",

            loginRegister:
                "登录 / 注册",

            myFavorites:
                "收藏的餐厅会显示在这里",

            myAddresses:
                "管理你的收货地址",

            saveOrdersAddress:
                "保存地址后下单更加方便",


            /* Edit Profile */

            editProfileTitle:
                "编辑个人资料",

            nickname:
                "昵称",

            nicknamePlaceholder:
                "请输入昵称",

            nicknameLimit:
                "最多20个字符",

            email:
                "邮箱",

            emailReadonly:
                "邮箱暂不可修改",

            phoneNumber:
                "手机号",

            saveProfile:
                "保存资料",

            returnButton:
                "返回",

            notBoundEmail:
                "未绑定邮箱",

            notBoundPhone:
                "未绑定手机号",

            profileSaveSuccess:
                "资料保存成功",

            profileSaveFailed:
                "资料保存失败",

            nicknameRequired:
                "请输入昵称",

            nicknameTooLong:
                "昵称不能超过20个字符",

            saving:
                "保存中...",


            /* Settings */

            settingsTitle:
                "设置",

            accountSettings:
                "账户设置",

            profileSettings:
                "个人资料",

            nameLabel:
                "姓名",

            phoneInputPlaceholder:
                "手机号",

            nameInputPlaceholder:
                "姓名",

            saveProfileButton:
                "保存",

            generalSettings:
                "通用设置",

            generalTitle:
                "通用设置",

            language:
                "语言",

            languageTitle:
                "语言",

            languageDesc:
                "选择网站显示语言",

            notification:
                "通知",

            notificationTitle:
                "通知",

            notificationDesc:
                "接收订单和系统通知",

            darkMode:
                "深色模式",

            darkTitle:
                "深色模式",

            darkModeDesc:
                "使用深色界面",

            otherSettings:
                "其他设置",

            userAgreement:
                "用户协议",

            privacyPolicy:
                "隐私政策",

            aboutUs:
                "关于 MDY FOOD",

            legal:
                "法律信息",

            accountStatus:
                "账户状态",

            accountStatusTitle:
                "账户状态",

            saveSuccess:
                "已保存",

            saveError:
                "保存失败",

            confirm:
                "确认",


            /* Login */

            loginPageTitle:
                "登录 MDY FOOD",

            loginButton:
                "登录",

            emailPlaceholder:
                "请输入邮箱",

            password:
                "密码",

            passwordPlaceholder:
                "请输入密码",

            noAccount:
                "还没有账户？",

            registerNow:
                "立即注册",

            or:
                "或",

            googleLogin:
                "使用 Google 登录",

            phoneLogin:
                "手机号登录",

            phoneInternationalPlaceholder:
                "+95 9xxxxxxxxx",

            phoneInternationalHint:
                "请输入完整国际格式手机号",

            getVerificationCode:
                "获取验证码",

            verificationCode:
                "验证码",

            phoneLoginButton:
                "手机号登录",

            backToLoginMethods:
                "返回其他登录方式",

            pleaseEnterEmailPassword:
                "请输入邮箱和密码",

            loggingIn:
                "登录中...",

            loginSuccess:
                "登录成功",

            emailNotRegistered:
                "该邮箱尚未注册",

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
                "请输入手机号",

            sendingCode:
                "验证码发送中...",

            verificationCodeSent:
                "验证码已发送",

            verificationCodeSendFailed:
                "验证码发送失败",

            enterVerificationCode:
                "请输入验证码",

            getCodeFirst:
                "请先获取验证码",

            verificationCodeInvalid:
                "验证码无效",


            /* Register */

            registerTitle:
                "注册 MDY FOOD",

            confirmPassword:
                "确认密码",

            registerButton:
                "注册",

            alreadyAccount:
                "已经有账户？",

            loginNow:
                "立即登录",

            registerName:
                "姓名",

            registerNamePlaceholder:
                "请输入姓名",

            registerPhone:
                "手机号",

            registerPhonePlaceholder:
                "请输入手机号",

            registerEmail:
                "邮箱",

            registerEmailPlaceholder:
                "请输入邮箱",

            registerPassword:
                "密码",

            registerPasswordPlaceholder:
                "请输入密码",

            registerConfirmPassword:
                "确认密码",

            registerConfirmPasswordPlaceholder:
                "请再次输入密码",

            defaultAddress:
                "默认地址",

            defaultAddressPlaceholder:
                "请输入默认地址",

            merchantSectionTitle:
                "商家入驻",

            merchantSectionDesc:
                "申请成为 MDY FOOD 商家",

            merchantSectionHint:
                "提交申请后等待平台审核",

            merchantRegister:
                "商家注册",

            fillAllFields:
                "请填写完整信息",

            passwordMinLength:
                "密码至少需要6位",

            passwordMismatch:
                "两次密码不一致",

            registering:
                "注册中...",

            registerSuccess:
                "注册成功",

            emailAlreadyRegistered:
                "该邮箱已经注册",

            emailRegistrationDisabled:
                "邮箱注册暂不可用",

            firebaseApiKeyInvalid:
                "Firebase 配置无效",

            networkConnectionFailed:
                "网络连接失败",

            registrationFailed:
                "注册失败",


            /* Merchant / Delivery */

            merchant:
                "商家",

            merchantLogin:
                "商家登录",

            merchantCenter:
                "商家中心",

            delivery:
                "骑手",

            deliveryLogin:
                "骑手登录",

            deliveryRegister:
                "骑手注册",

            deliveryCenter:
                "骑手中心",


            /* About */

            about:
                "关于",

            aboutTitle:
                "关于 MDY FOOD",

            aboutSubtitle:
                "美味就在身边",

            aboutUsTitle:
                "关于我们",

            aboutParagraph1:
                "MDY FOOD 致力于为用户提供方便快捷的在线点餐和配送服务。",

            aboutParagraph2:
                "连接餐厅、顾客和骑手，让每一份美味更加方便地送到你身边。",

            platformFeatures:
                "平台功能",

            onlineOrdering:
                "在线点餐",

            onlineOrderingDesc:
                "随时随地浏览菜单并下单",

            deliveryService:
                "配送服务",

            deliveryServiceDesc:
                "专业骑手为你配送订单",

            userReviews:
                "用户评价",

            userReviewsDesc:
                "分享真实用餐体验",

            restaurantService:
                "餐厅服务",

            restaurantServiceDesc:
                "帮助餐厅更方便地管理订单",

            ourGoal:
                "我们的目标",

            aboutGoal:
                "让点餐更简单，让美食离你更近。",

            version:
                "版本",


            /* Agreement */

            agreementTitle:
                "用户协议",

            agreementMainTitle:
                "MDY FOOD 用户服务协议",

            updatedDate:
                "更新日期",

            agreementSection1:
                "一、服务说明",

            agreementSection2:
                "二、用户账户",

            agreementSection3:
                "三、订单与支付",

            agreementSection4:
                "四、配送服务",

            agreementSection5:
                "五、用户评价",

            agreementSection6:
                "六、隐私保护",

            agreementSection7:
                "七、免责声明",

            agreementSection8:
                "八、协议变更",

            agreementSection9:
                "九、其他",


            /* Privacy */

            privacyTitle:
                "隐私政策",

            privacyMainTitle:
                "MDY FOOD 隐私政策",

            privacySection1:
                "一、信息收集",

            privacySection2:
                "二、信息使用",

            privacySection3:
                "三、信息共享",

            privacySection4:
                "四、信息存储",

            privacySection5:
                "五、信息安全",

            privacySection6:
                "六、Cookie 与本地存储",

            privacySection7:
                "七、第三方服务",

            privacySection8:
                "八、未成年人隐私",

            privacySection9:
                "九、政策更新",

            privacySection10:
                "十、联系我们",


            /* System */

            networkError:
                "网络错误",

            dataLoadFailed:
                "数据加载失败",

            pleaseWait:
                "请稍候",

            operationFailed:
                "操作失败，请稍后重试",

            invalidData:
                "数据无效",

            unknownError:
                "未知错误",

            pleaseLogin:
                "请先登录",

            loginRequired:
                "请先登录",

            operationSuccess:
                "操作成功",

            operationError:
                "操作失败，请稍后再试",


            /* Restaurant */

            welcome:
                "欢迎来到 MDY FOOD",

            defaultRestaurantName:
                "MDY FOOD 餐厅",

            defaultRestaurantDescription:
                "欢迎来到 MDY FOOD",


            /* Status */

            statusPending:
                "待接单",

            statusMerchantAccepted:
                "商家已接单",

            statusRiderAccepted:
                "骑手已接单",

            statusReady:
                "待配送",

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


            /* Category */

            all:
                "全部",

            sichuan:
                "川菜",

            myanmar:
                "缅甸菜",

            bbq:
                "烧烤",

            other:
                "其他"

        },


        /* =================================================
           缅甸语
        ================================================= */

        my: {

            home: "ပင်မစာမျက်နှာ",
            menu: "မီနူး",
            restaurants: "စားသောက်ဆိုင်များ",
            cart: "စျေးဝယ်ခြင်းတောင်း",
            orders: "အော်ဒါများ",
            profile: "ကျွန်ုပ်",
            settings: "ဆက်တင်များ",

            back: "နောက်သို့",
            save: "သိမ်းမည်",
            cancel: "ပယ်ဖျက်မည်",
            confirm: "အတည်ပြုမည်",
            delete: "ဖျက်မည်",
            edit: "ပြင်ဆင်မည်",
            close: "ပိတ်မည်",

            loading: "ဖတ်နေသည်...",
            success: "အောင်မြင်သည်",
            failed: "မအောင်မြင်ပါ",
            retry: "ပြန်ကြိုးစားမည်",

            search: "ရှာဖွေမည်",
            submit: "တင်သွင်းမည်",

            yes: "ဟုတ်ကဲ့",
            no: "မဟုတ်ပါ",

            refresh: "ပြန်လည်ဖတ်မည်",
            reload: "ပြန်ဖတ်မည်",

            continue: "ဆက်လုပ်မည်",
            viewAll: "အားလုံးကြည့်ရန်",
            seeMore: "ပိုမိုကြည့်ရန်",

            none: "မရှိပါ",
            unknown: "မသိပါ",
            anonymous: "အမည်မဖော်ပြထားသူ",

            brandName: "MDY FOOD",
            brandSubtitle: "အရသာကောင်းများ သင့်အနီးမှာ",

            navHome: "ပင်မ",
            navRestaurants: "စားသောက်ဆိုင်",
            navOrders: "အော်ဒါ",
            navProfile: "ကျွန်ုပ်",

            homeTitle: "အရသာရှိသောအစားအစာများ ရှာဖွေပါ",
            homeSubtitle: "အနီးအနားရှိ အရသာကောင်းများ",

            searchRestaurantFood:
                "စားသောက်ဆိုင် သို့မဟုတ် အစားအစာ ရှာရန်",

            searchRestaurant:
                "စားသောက်ဆိုင် ရှာရန်",

            searchFood:
                "အစားအစာ ရှာရန်",

            searchMenu:
                "မီနူး ရှာရန်",

            searchRestaurantsPlaceholder:
                "စားသောက်ဆိုင် ရှာရန်...",

            nearbyRestaurants:
                "အနီးအနားရှိ စားသောက်ဆိုင်များ",

            allRestaurants:
                "စားသောက်ဆိုင်အားလုံး",

            noRestaurants:
                "စားသောက်ဆိုင် မရှိပါ",

            noRestaurantsDesc:
                "ယခုအချိန်တွင် စားသောက်ဆိုင် မတွေ့ပါ",

            noOpenRestaurants:
                "ဖွင့်ထားသော စားသောက်ဆိုင် မရှိပါ",

            noOpenRestaurantsDesc:
                "အနီးအနားတွင် ယခုဖွင့်ထားသော စားသောက်ဆိုင် မရှိပါ",

            loadingRestaurants:
                "စားသောက်ဆိုင်များကို ဖတ်နေသည်...",

            restaurantLoadFailed:
                "စားသောက်ဆိုင်များ ဖတ်၍မရပါ",

            restaurantInfoError:
                "စားသောက်ဆိုင်အချက်အလက် ဖတ်၍မရပါ",

            restaurantNotFound:
                "စားသောက်ဆိုင် မတွေ့ပါ",

            loginBannerTitle:
                "MDY FOOD သို့ ဝင်ရောက်ပါ",

            loginBannerDesc:
                "ဝင်ရောက်ပြီး အော်ဒါ၊ အကြိုက်ဆုံးနှင့် လိပ်စာများကို စီမံနိုင်ပါသည်",

            loginOrRegister:
                "ဝင်ရန် / စာရင်းသွင်းရန်",

            loginRegister:
                "ဝင်ရန် / စာရင်းသွင်းရန်",

            foodCategories:
                "အစားအစာ အမျိုးအစားများ",

            categoryAll:
                "အားလုံး",

            categorySichuan:
                "စီချွမ်အစားအစာ",

            categoryMyanmar:
                "မြန်မာအစားအစာ",

            categoryBBQ:
                "အသားကင်",

            categoryOther:
                "အခြား",

            categoryRestaurant:
                "စားသောက်ဆိုင်",

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
                "မီနူးကြည့်ရန်",

            viewMenuArrow:
                "မီနူးကြည့်ရန် →",

            menuPreparing:
                "မီနူးပြင်ဆင်နေသည်",

            menuPreparingMessage:
                "ဤစားသောက်ဆိုင်သည် မီနူးကို ပြင်ဆင်နေပါသည်",

            ratingLoading:
                "အဆင့်သတ်မှတ်ချက် ဖတ်နေသည်...",

            noRating:
                "သုံးသပ်ချက် မရှိသေးပါ",

            noReviews:
                "သုံးသပ်ချက် မရှိသေးပါ",

            reviewCount:
                "{count} သုံးသပ်ချက်",

            reviewCountSuffix:
                "{count} သုံးသပ်ချက်",

            reviewCountWithIcon:
                "⭐ {count} သုံးသပ်ချက်",

            ratingWithCount:
                "⭐ {rating} · {count} သုံးသပ်ချက်",

            foodCount:
                "အစားအစာ {count} မျိုး",

            foodCountSimple:
                "အစားအစာ {count} မျိုး",

            foodCountSuffix:
                "အစားအစာ {count} မျိုး",

            food:
                "အစားအစာ",

            foodLoading:
                "အစားအစာ ဖတ်နေသည်...",

            loadingFoods:
                "အစားအစာများကို ဖတ်နေသည်...",

            foodSimple:
                "အစားအစာ",

            foodSearchResult:
                "အစားအစာ တွေ့ရှိသည်",

            foundFoods:
                "အစားအစာ တွေ့ရှိသည်",

            foodSearchMore:
                "ပိုမိုကြည့်ရန်",

            andMore:
                "နှင့် အခြားများ",

            restaurantMenu:
                "စားသောက်ဆိုင် မီနူး",

            restaurantLabel:
                "စားသောက်ဆိုင်",

            restaurantClosedMessage:
                "ဤစားသောက်ဆိုင်သည် ယခု ပိတ်ထားပါသည်",

            menuUnavailable:
                "မီနူး မရရှိသေးပါ",

            tryAnotherKeyword:
                "အခြားသော စကားလုံးဖြင့် ထပ်မံရှာကြည့်ပါ",

            viewAllArrow:
                "အားလုံးကြည့်ရန် →",

            allArrow:
                "အားလုံး →",

            comeBackLater:
                "နောက်မှ ပြန်လာကြည့်ပါ",

            backToRestaurant:
                "စားသောက်ဆိုင်သို့ ပြန်သွားရန်",

            menuLoading:
                "မီနူး ဖတ်နေသည်...",

            menuLoadFailed:
                "မီနူး ဖတ်၍မရပါ",

            noFoodFound:
                "သက်ဆိုင်သော အစားအစာ မတွေ့ပါ",

            addToCart:
                "စျေးဝယ်ခြင်းတောင်းထဲ ထည့်မည်",

            addedToCart:
                "ထည့်ပြီးပါပြီ",

            quantity:
                "အရေအတွက်",

            piece:
                "ပွဲ",

            price:
                "စျေးနှုန်း",

            total:
                "စုစုပေါင်း",

            viewCart:
                "စျေးဝယ်ခြင်းတောင်း ကြည့်ရန်",

            customerReviews:
                "ဖောက်သည်သုံးသပ်ချက်များ",

            review:
                "သုံးသပ်ချက်",

            reviews:
                "သုံးသပ်ချက်များ",

            noCustomerReviews:
                "ဖောက်သည်သုံးသပ်ချက် မရှိသေးပါ",

            reviewLoading:
                "သုံးသပ်ချက် ဖတ်နေသည်...",

            loadingReviews:
                "သုံးသပ်ချက်များကို ဖတ်နေသည်...",

            reviewLoadFailed:
                "သုံးသပ်ချက် ဖတ်၍မရပါ",

            customerAnonymous:
                "အမည်မဖော်ပြထားသော ဖောက်သည်",

            customerNoComment:
                "စာသားသုံးသပ်ချက် မရေးထားပါ",

            noComment:
                "စာသားသုံးသပ်ချက် မရှိပါ",

            timeUnknown:
                "အချိန်မသိပါ",

            businessStatusLoading:
                "ဖွင့်/ပိတ်အခြေအနေ ဖတ်နေသည်...",

            restaurantCannotLoadReviews:
                "စားသောက်ဆိုင်သုံးသပ်ချက် ဖတ်၍မရပါ",

            shoppingCart:
                "စျေးဝယ်ခြင်းတောင်း",

            emptyCart:
                "စျေးဝယ်ခြင်းတောင်း ဗလာဖြစ်နေသည်",

            emptyCartDesc:
                "စားသောက်ဆိုင်များသို့ သွားပြီး အစားအစာရွေးပါ",

            goShopping:
                "စျေးဝယ်ရန်",

            clearCart:
                "စျေးဝယ်ခြင်းတောင်း ရှင်းမည်",

            subtotal:
                "ပစ္စည်းစုစုပေါင်း",

            deliveryFee:
                "ပို့ဆောင်ခ",

            cartEmptyAlert:
                "စျေးဝယ်ခြင်းတောင်း ဗလာဖြစ်နေသည်",

            checkoutTitle:
                "အော်ဒါအတည်ပြုရန်",

            notLoggedIn:
                "ဝင်ရောက်ထားခြင်း မရှိပါ",

            loginRequiredDesc:
                "အော်ဒါတင်ရန် အရင်ဝင်ရောက်ပါ",

            goLogin:
                "ဝင်ရောက်ရန်",

            orderContent:
                "အော်ဒါအကြောင်းအရာ",

            confirmingRestaurant:
                "စားသောက်ဆိုင် အတည်ပြုနေသည်",

            unknownRestaurant:
                "မသိသော စားသောက်ဆိုင်",

            deliveryInfo:
                "ပို့ဆောင်ရေးအချက်အလက်",

            name:
                "အမည်",

            phone:
                "ဖုန်းနံပါတ်",

            address:
                "လိပ်စာ",

            namePlaceholder:
                "အမည်ထည့်ပါ",

            phonePlaceholder:
                "ဖုန်းနံပါတ်ထည့်ပါ",

            addressPlaceholder:
                "လိပ်စာထည့်ပါ",

            paymentMethod:
                "ငွေပေးချေမှုနည်းလမ်း",

            cash:
                "ငွေသား",

            kbzPay:
                "KBZPay",

            waveMoney:
                "Wave Money",

            placeOrder:
                "အော်ဒါတင်မည်",

            submittingOrder:
                "အော်ဒါတင်နေသည်...",

            cannotIdentifyRestaurant:
                "စားသောက်ဆိုင်ကို မသိရှိနိုင်ပါ",

            restaurantDoesNotExist:
                "စားသောက်ဆိုင် မရှိပါ",

            restaurantLoadError:
                "စားသောက်ဆိုင် ဖတ်၍မရပါ",

            emptyCartCheckout:
                "စျေးဝယ်ခြင်းတောင်း ဗလာဖြစ်နေသည်",

            pleaseLoginBeforeOrder:
                "အော်ဒါမတင်မီ ဝင်ရောက်ပါ",

            restaurantReturnToMenu:
                "စားသောက်ဆိုင်မီနူးသို့ ပြန်သွားပါ",

            pleaseEnterName:
                "အမည်ထည့်ပါ",

            pleaseEnterPhone:
                "ဖုန်းနံပါတ်ထည့်ပါ",

            pleaseEnterAddress:
                "လိပ်စာထည့်ပါ",

            orderSubmitFailed:
                "အော်ဒါတင်၍မရပါ",

            orderSuccessTitle:
                "အော်ဒါတင်ခြင်း အောင်မြင်ပါသည်",

            orderSuccessMessage:
                "သင့်အော်ဒါကို အောင်မြင်စွာ လက်ခံရရှိပါသည်",

            orderSuccessPreparing:
                "စားသောက်ဆိုင်မှ ပြင်ဆင်နေပါသည်",

            orderNumber:
                "အော်ဒါနံပါတ်",

            backHome:
                "ပင်မစာမျက်နှာသို့",

            continueOrdering:
                "ဆက်လက်မှာယူမည်",

            myOrders:
                "ကျွန်ုပ်၏အော်ဒါများ",

            backHomeText:
                "ပင်မစာမျက်နှာသို့",

            refreshOrders:
                "အော်ဒါများ ပြန်ဖတ်မည်",

            enableNotifications:
                "အသိပေးချက်ဖွင့်မည်",

            orderRealtimeSync:
                "အော်ဒါအခြေအနေ အချိန်နှင့်တပြေးညီ ပြောင်းလဲနေသည်",

            orderNumberLabel:
                "အော်ဒါနံပါတ်",

            orderStatus:
                "အော်ဒါအခြေအနေ",

            orderTime:
                "အော်ဒါအချိန်",

            orderDetails:
                "အော်ဒါအသေးစိတ်",

            orderAmount:
                "အော်ဒါငွေပမာဏ",

            orderContentLabel:
                "အော်ဒါအကြောင်းအရာ",

            pending:
                "အော်ဒါလက်ခံရန်စောင့်နေသည်",

            merchantAccepted:
                "ဆိုင်မှ အော်ဒါလက်ခံပြီး",

            riderAccepted:
                "ပို့ဆောင်သူ လက်ခံပြီး",

            preparing:
                "ချက်ပြုတ်နေသည်",

            ready:
                "ပို့ဆောင်ရန် အသင့်",

            delivering:
                "ပို့ဆောင်နေသည်",

            completed:
                "ပြီးစီးပါပြီ",

            cancelled:
                "ပယ်ဖျက်ပြီး",

            waitingMerchantAccept:
                "ဆိုင်မှ အော်ဒါလက်ခံရန် စောင့်နေသည်",

            merchantPreparing:
                "ဆိုင်မှ အစားအစာ ပြင်ဆင်နေသည်",

            riderInfo:
                "ပို့ဆောင်သူအချက်အလက်",

            rider:
                "ပို့ဆောင်သူ",

            phoneLabel:
                "ဖုန်းနံပါတ်",

            phoneLabelFull:
                "ဖုန်းနံပါတ်",

            orderProgress:
                "အော်ဒါအခြေအနေ",

            waiting:
                "စောင့်နေသည်",

            orderReview:
                "အော်ဒါသုံးသပ်မည်",

            reviewed:
                "သုံးသပ်ပြီး",

            pendingReview:
                "သုံးသပ်ရန်",

            myReviews:
                "ကျွန်ုပ်၏သုံးသပ်ချက်များ",

            myReviewsDesc:
                "ကျွန်ုပ်ရေးသားထားသော သုံးသပ်ချက်များ",

            noMyReviews:
                "သုံးသပ်ချက် မရှိသေးပါ",

            noMyReviewsDesc:
                "ယခုအချိန်ထိ သုံးသပ်ချက် မရေးထားပါ",

            loginToView:
                "သုံးသပ်ချက်ကြည့်ရန် ဝင်ရောက်ပါ",

            userReview:
                "အသုံးပြုသူသုံးသပ်ချက်",

            reviewContent:
                "သုံးသပ်ချက်အကြောင်းအရာ",

            orderNumberShort:
                "အော်ဒါနံပါတ်",

            userNoTextReview:
                "စာသားသုံးသပ်ချက် မရှိပါ",

            reviewTitle:
                "သုံးသပ်ချက်",

            rating:
                "အဆင့်သတ်မှတ်ချက်",

            ratingRequired:
                "အဆင့်သတ်မှတ်ချက် ရွေးပါ",

            comment:
                "သုံးသပ်ချက်",

            commentPlaceholder:
                "သင့်အတွေ့အကြုံကို ရေးပါ",

            submitReview:
                "သုံးသပ်ချက် တင်မည်",

            reviewSuccess:
                "သုံးသပ်ချက် တင်ခြင်း အောင်မြင်ပါသည်",

            reviewFailed:
                "သုံးသပ်ချက် တင်၍မရပါ",

            reviewAlreadyExists:
                "ဤအော်ဒါကို သုံးသပ်ပြီးပါပြီ",

            account:
                "အကောင့်",

            accountInfo:
                "အကောင့်အချက်အလက်",

            myAccount:
                "ကျွန်ုပ်၏အကောင့်",

            readingAccount:
                "အကောင့်အချက်အလက် ဖတ်နေသည်...",

            checkingLogin:
                "ဝင်ရောက်မှုအခြေအနေ စစ်ဆေးနေသည်...",

            editProfile:
                "ပြင်ဆင်မည်",

            quickOrders:
                "ကျွန်ုပ်၏အော်ဒါများ",

            quickFavorites:
                "အကြိုက်ဆုံးများ",

            quickAddresses:
                "ပို့ဆောင်ရန်လိပ်စာ",

            quickRestaurants:
                "စားသောက်ဆိုင်ရှာရန်",

            service:
                "ကျွန်ုပ်၏ဝန်ဆောင်မှုများ",

            serviceTitle:
                "ကျွန်ုပ်၏ဝန်ဆောင်မှုများ",

            favorites:
                "အကြိုက်ဆုံးများ",

            addresses:
                "ပို့ဆောင်ရန်လိပ်စာ",

            coupons:
                "ကူပွန်များ",

            ordersSub:
                "အော်ဒါများနှင့် အခြေအနေများကို ကြည့်ရန်",

            favoritesSub:
                "အကြိုက်ဆုံး စားသောက်ဆိုင်များနှင့် အစားအစာများ",

            addressesSub:
                "ပို့ဆောင်ရန်လိပ်စာ စီမံရန်",

            couponsSub:
                "အသုံးပြုနိုင်သော ကူပွန်များ",

            reviewsSub:
                "ကျွန်ုပ်ရေးသားထားသော သုံးသပ်ချက်များ",

            other:
                "အခြား",

            otherTitle:
                "အခြား",

            login:
                "ဝင်ရောက်ရန်",

            register:
                "စာရင်းသွင်းရန်",

            logout:
                "ထွက်မည်",

            loginTitle:
                "MDY FOOD သို့ ဝင်ရောက်ပါ",

            loginSub:
                "ဝင်ရောက်ပြီး ဝန်ဆောင်မှုအားလုံးကို အသုံးပြုပါ",

            loggedIn:
                "ဝင်ရောက်ထားသည်",

            loggedOut:
                "ဝင်ရောက်ထားခြင်း မရှိပါ",

            confirmLogout:
                "အကောင့်မှ ထွက်မည်မှာ သေချာပါသလား",

            logoutError:
                "ထွက်၍မရပါ၊ နောက်မှ ပြန်ကြိုးစားပါ",

            defaultUserName:
                "MDY FOOD အသုံးပြုသူ",

            loginConvenient:
                "ဝင်ရောက်ပြီး အော်ဒါ၊ အကြိုက်ဆုံးနှင့် လိပ်စာများကို စီမံနိုင်ပါသည်",

            myFavorites:
                "အကြိုက်ဆုံး စားသောက်ဆိုင်များကို ဤနေရာတွင် တွေ့နိုင်ပါသည်",

            myAddresses:
                "သင့်ပို့ဆောင်ရန်လိပ်စာများကို စီမံပါ",

            saveOrdersAddress:
                "လိပ်စာသိမ်းထားပါက အော်ဒါတင်ရန် ပိုမိုလွယ်ကူပါသည်",

            editProfileTitle:
                "ကိုယ်ရေးအချက်အလက် ပြင်ဆင်ရန်",

            nickname:
                "အမည်ပြောင်",

            nicknamePlaceholder:
                "အမည်ပြောင်ထည့်ပါ",

            nicknameLimit:
                "အက္ခရာ ၂၀ အထိ",

            email:
                "အီးမေးလ်",

            emailReadonly:
                "အီးမေးလ်ကို ပြင်၍မရပါ",

            phoneNumber:
                "ဖုန်းနံပါတ်",

            saveProfile:
                "အချက်အလက်သိမ်းမည်",

            returnButton:
                "ပြန်သွားရန်",

            notBoundEmail:
                "အီးမေးလ် မချိတ်ဆက်ထားပါ",

            notBoundPhone:
                "ဖုန်းနံပါတ် မချိတ်ဆက်ထားပါ",

            profileSaveSuccess:
                "အချက်အလက် သိမ်းဆည်းပြီးပါပြီ",

            profileSaveFailed:
                "အချက်အလက် သိမ်း၍မရပါ",

            nicknameRequired:
                "အမည်ပြောင်ထည့်ပါ",

            nicknameTooLong:
                "အမည်ပြောင်သည် အက္ခရာ ၂၀ ထက် မပိုရပါ",

            saving:
                "သိမ်းနေသည်...",

            settingsTitle:
                "ဆက်တင်များ",

            accountSettings:
                "အကောင့်ဆက်တင်များ",

            profileSettings:
                "ကိုယ်ရေးအချက်အလက်",

            nameLabel:
                "အမည်",

            phoneInputPlaceholder:
                "ဖုန်းနံပါတ်",

            nameInputPlaceholder:
                "အမည်",

            generalSettings:
                "အထွေထွေဆက်တင်များ",

            generalTitle:
                "အထွေထွေဆက်တင်များ",

            language:
                "ဘာသာစကား",

            languageTitle:
                "ဘာသာစကား",

            languageDesc:
                "ဝဘ်ဆိုဒ်ပြသမည့် ဘာသာစကားရွေးပါ",

            notification:
                "အသိပေးချက်",

            notificationTitle:
                "အသိပေးချက်",

            notificationDesc:
                "အော်ဒါနှင့် စနစ်အသိပေးချက်များ လက်ခံရန်",

            darkMode:
                "အမှောင်မုဒ်",

            darkTitle:
                "အမှောင်မုဒ်",

            darkModeDesc:
                "အမှောင်စနစ်ကို အသုံးပြုမည်",

            otherSettings:
                "အခြားဆက်တင်များ",

            userAgreement:
                "အသုံးပြုသူသဘောတူညီချက်",

            privacyPolicy:
                "ကိုယ်ရေးအချက်အလက် မူဝါဒ",

            aboutUs:
                "MDY FOOD အကြောင်း",

            legal:
                "ဥပဒေဆိုင်ရာ",

            accountStatus:
                "အကောင့်အခြေအနေ",

            accountStatusTitle:
                "အကောင့်အခြေအနေ",

            saveSuccess:
                "သိမ်းပြီးပါပြီ",

            saveError:
                "သိမ်း၍မရပါ",

            loginPageTitle:
                "MDY FOOD သို့ ဝင်ရောက်ရန်",

            loginButton:
                "ဝင်ရောက်ရန်",

            emailPlaceholder:
                "အီးမေးလ်ထည့်ပါ",

            password:
                "စကားဝှက်",

            passwordPlaceholder:
                "စကားဝှက်ထည့်ပါ",

            noAccount:
                "အကောင့်မရှိသေးပါသလား",

            registerNow:
                "ယခုစာရင်းသွင်းပါ",

            or:
                "သို့မဟုတ်",

            googleLogin:
                "Google ဖြင့် ဝင်ရန်",

            phoneLogin:
                "ဖုန်းဖြင့် ဝင်ရန်",

            phoneInternationalPlaceholder:
                "+95 9xxxxxxxxx",

            phoneInternationalHint:
                "နိုင်ငံတကာပုံစံဖြင့် ဖုန်းနံပါတ်အပြည့်အစုံထည့်ပါ",

            getVerificationCode:
                "ကုဒ်ရယူရန်",

            verificationCode:
                "အတည်ပြုကုဒ်",

            phoneLoginButton:
                "ဖုန်းဖြင့် ဝင်ရန်",

            backToLoginMethods:
                "အခြားဝင်ရောက်နည်းသို့ ပြန်သွားရန်",

            pleaseEnterEmailPassword:
                "အီးမေးလ်နှင့် စကားဝှက်ထည့်ပါ",

            loggingIn:
                "ဝင်ရောက်နေသည်...",

            loginSuccess:
                "ဝင်ရောက်ခြင်း အောင်မြင်ပါသည်",

            emailNotRegistered:
                "ဤအီးမေးလ်သည် စာရင်းမသွင်းရသေးပါ",

            wrongPassword:
                "စကားဝှက် မှားနေပါသည်",

            emailOrPasswordWrong:
                "အီးမေးလ် သို့မဟုတ် စကားဝှက် မှားနေပါသည်",

            invalidEmail:
                "အီးမေးလ်ပုံစံ မမှန်ပါ",

            loginFailed:
                "ဝင်ရောက်၍ မရပါ",

            loginFailedColon:
                "ဝင်ရောက်၍ မရပါ: ",

            phoneInternationalRequired:
                "ဖုန်းနံပါတ်ထည့်ပါ",

            sendingCode:
                "အတည်ပြုကုဒ် ပို့နေသည်...",

            verificationCodeSent:
                "အတည်ပြုကုဒ် ပို့ပြီးပါပြီ",

            verificationCodeSendFailed:
                "အတည်ပြုကုဒ် ပို့၍မရပါ",

            enterVerificationCode:
                "အတည်ပြုကုဒ်ထည့်ပါ",

            getCodeFirst:
                "အရင် အတည်ပြုကုဒ်ရယူပါ",

            verificationCodeInvalid:
                "အတည်ပြုကုဒ် မမှန်ပါ",

            registerTitle:
                "MDY FOOD စာရင်းသွင်းရန်",

            confirmPassword:
                "စကားဝှက်အတည်ပြုရန်",

            registerButton:
                "စာရင်းသွင်းမည်",

            alreadyAccount:
                "အကောင့်ရှိပြီးသားလား",

            loginNow:
                "ယခုဝင်ရောက်ပါ",

            registerName:
                "အမည်",

            registerNamePlaceholder:
                "အမည်ထည့်ပါ",

            registerPhone:
                "ဖုန်းနံပါတ်",

            registerPhonePlaceholder:
                "ဖုန်းနံပါတ်ထည့်ပါ",

            registerEmail:
                "အီးမေးလ်",

            registerEmailPlaceholder:
                "အီးမေးလ်ထည့်ပါ",

            registerPassword:
                "စကားဝှက်",

            registerPasswordPlaceholder:
                "စကားဝှက်ထည့်ပါ",

            registerConfirmPassword:
                "စကားဝှက်အတည်ပြုရန်",

            registerConfirmPasswordPlaceholder:
                "စကားဝှက်ကို ထပ်မံထည့်ပါ",

            defaultAddress:
                "မူလလိပ်စာ",

            defaultAddressPlaceholder:
                "မူလလိပ်စာထည့်ပါ",

            merchantSectionTitle:
                "ဆိုင်ရှင်ဝင်ရောက်ရန်",

            merchantSectionDesc:
                "MDY FOOD ဆိုင်ရှင်ဖြစ်ရန် လျှောက်ထားပါ",

            merchantSectionHint:
                "တင်သွင်းပြီးနောက် စနစ်စစ်ဆေးမှုကို စောင့်ပါ",

            merchantRegister:
                "ဆိုင်ရှင်စာရင်းသွင်းရန်",

            fillAllFields:
                "အချက်အလက်အားလုံး ဖြည့်ပါ",

            passwordMinLength:
                "စကားဝှက်သည် အနည်းဆုံး ၆ လုံးရှိရပါမည်",

            passwordMismatch:
                "စကားဝှက်နှစ်ခု မတူပါ",

            registering:
                "စာရင်းသွင်းနေသည်...",

            registerSuccess:
                "စာရင်းသွင်းခြင်း အောင်မြင်ပါသည်",

            emailAlreadyRegistered:
                "ဤအီးမေးလ်ကို စာရင်းသွင်းပြီးပါပြီ",

            emailRegistrationDisabled:
                "အီးမေးလ်ဖြင့် စာရင်းသွင်းခြင်း မရရှိသေးပါ",

            firebaseApiKeyInvalid:
                "Firebase ပြင်ဆင်မှု မမှန်ပါ",

            networkConnectionFailed:
                "ကွန်ရက်ချိတ်ဆက်မှု မအောင်မြင်ပါ",

            registrationFailed:
                "စာရင်းသွင်း၍ မရပါ",

            merchant:
                "ဆိုင်ရှင်",

            merchantLogin:
                "ဆိုင်ရှင်ဝင်ရန်",

            merchantCenter:
                "ဆိုင်ရှင်စင်တာ",

            delivery:
                "ပို့ဆောင်သူ",

            deliveryLogin:
                "ပို့ဆောင်သူဝင်ရန်",

            deliveryRegister:
                "ပို့ဆောင်သူစာရင်းသွင်းရန်",

            deliveryCenter:
                "ပို့ဆောင်သူစင်တာ",

            about:
                "အကြောင်း",

            aboutTitle:
                "MDY FOOD အကြောင်း",

            aboutSubtitle:
                "အရသာကောင်းများ သင့်အနီးမှာ",

            aboutUsTitle:
                "ကျွန်ုပ်တို့အကြောင်း",

            aboutParagraph1:
                "MDY FOOD သည် အွန်လိုင်းအော်ဒါနှင့် ပို့ဆောင်ရေးဝန်ဆောင်မှုကို လွယ်ကူမြန်ဆန်စွာ ပေးရန် ရည်ရွယ်ပါသည်။",

            aboutParagraph2:
                "စားသောက်ဆိုင်၊ ဖောက်သည်နှင့် ပို့ဆောင်သူတို့ကို ချိတ်ဆက်ပေးပြီး အစားအစာများကို ပိုမိုလွယ်ကူစွာ ပို့ဆောင်ပေးပါသည်။",

            platformFeatures:
                "ပလက်ဖောင်းလုပ်ဆောင်ချက်များ",

            onlineOrdering:
                "အွန်လိုင်းအော်ဒါ",

            onlineOrderingDesc:
                "မီနူးများကို ကြည့်ပြီး အချိန်မရွေး အော်ဒါတင်နိုင်ပါသည်",

            deliveryService:
                "ပို့ဆောင်ရေးဝန်ဆောင်မှု",

            deliveryServiceDesc:
                "ကျွမ်းကျင်သော ပို့ဆောင်သူများဖြင့် အော်ဒါပို့ဆောင်ပါသည်",

            userReviews:
                "အသုံးပြုသူသုံးသပ်ချက်",

            userReviewsDesc:
                "သင့်စားသောက်မှုအတွေ့အကြုံကို မျှဝေပါ",

            restaurantService:
                "စားသောက်ဆိုင်ဝန်ဆောင်မှု",

            restaurantServiceDesc:
                "စားသောက်ဆိုင်များအတွက် အော်ဒါစီမံခန့်ခွဲမှု ပိုမိုလွယ်ကူစေပါသည်",

            ourGoal:
                "ကျွန်ုပ်တို့၏ ရည်မှန်းချက်",

            aboutGoal:
                "အော်ဒါတင်ခြင်း ပိုမိုလွယ်ကူစေပြီး အစားအစာကို သင့်အနီးသို့ ပိုမိုနီးကပ်စေပါသည်။",

            version:
                "ဗားရှင်း",

            agreementTitle:
                "အသုံးပြုသူသဘောတူညီချက်",

            agreementMainTitle:
                "MDY FOOD အသုံးပြုသူဝန်ဆောင်မှု သဘောတူညီချက်",

            updatedDate:
                "မွမ်းမံသည့်ရက်",

            agreementSection1:
                "၁။ ဝန်ဆောင်မှုအကြောင်း",

            agreementSection2:
                "၂။ အသုံးပြုသူအကောင့်",

            agreementSection3:
                "၃။ အော်ဒါနှင့် ငွေပေးချေမှု",

            agreementSection4:
                "၄။ ပို့ဆောင်ရေးဝန်ဆောင်မှု",

            agreementSection5:
                "၅။ အသုံးပြုသူသုံးသပ်ချက်",

            agreementSection6:
                "၆။ ကိုယ်ရေးအချက်အလက်ကာကွယ်မှု",

            agreementSection7:
                "၇။ တာဝန်ကင်းလွတ်မှု",

            agreementSection8:
                "၈။ သဘောတူညီချက်ပြောင်းလဲမှု",

            agreementSection9:
                "၉။ အခြား",

            privacyTitle:
                "ကိုယ်ရေးအချက်အလက် မူဝါဒ",

            privacyMainTitle:
                "MDY FOOD ကိုယ်ရေးအချက်အလက် မူဝါဒ",

            privacySection1:
                "၁။ အချက်အလက်စုဆောင်းခြင်း",

            privacySection2:
                "၂။ အချက်အလက်အသုံးပြုခြင်း",

            privacySection3:
                "၃။ အချက်အလက်မျှဝေခြင်း",

            privacySection4:
                "၄။ အချက်အလက်သိမ်းဆည်းခြင်း",

            privacySection5:
                "၅။ အချက်အလက်လုံခြုံရေး",

            privacySection6:
                "၆။ Cookie နှင့် Local Storage",

            privacySection7:
                "၇။ တတိယပါတီဝန်ဆောင်မှုများ",

            privacySection8:
                "၈။ အသက်မပြည့်သေးသူများ၏ ကိုယ်ရေးအချက်အလက်",

            privacySection9:
                "၉။ မူဝါဒမွမ်းမံခြင်း",

            privacySection10:
                "၁၀။ ဆက်သွယ်ရန်",

            networkError:
                "ကွန်ရက်အမှား",

            dataLoadFailed:
                "ဒေတာဖတ်၍ မရပါ",

            pleaseWait:
                "ခဏစောင့်ပါ",

            operationFailed:
                "လုပ်ဆောင်၍ မရပါ၊ နောက်မှ ပြန်ကြိုးစားပါ",

            invalidData:
                "ဒေတာမမှန်ပါ",

            unknownError:
                "မသိသောအမှား",

            pleaseLogin:
                "အရင်ဝင်ရောက်ပါ",

            loginRequired:
                "အရင်ဝင်ရောက်ပါ",

            operationSuccess:
                "လုပ်ဆောင်မှု အောင်မြင်ပါသည်",

            operationError:
                "လုပ်ဆောင်၍ မရပါ၊ နောက်မှ ပြန်ကြိုးစားပါ",

            welcome:
                "MDY FOOD မှ ကြိုဆိုပါသည်",

            defaultRestaurantName:
                "MDY FOOD စားသောက်ဆိုင်",

            defaultRestaurantDescription:
                "MDY FOOD မှ ကြိုဆိုပါသည်",

            statusPending:
                "အော်ဒါလက်ခံရန် စောင့်နေသည်",

            statusMerchantAccepted:
                "ဆိုင်မှ အော်ဒါလက်ခံပြီး",

            statusRiderAccepted:
                "ပို့ဆောင်သူ လက်ခံပြီး",

            statusReady:
                "ပို့ဆောင်ရန် အသင့်",

            statusDelivering:
                "ပို့ဆောင်နေသည်",

            statusCompleted:
                "ပြီးစီးပါပြီ",

            statusCancelled:
                "ပယ်ဖျက်ပြီး",

            paymentCash:
                "ငွေသား",

            paymentKBZPay:
                "KBZPay",

            paymentWaveMoney:
                "Wave Money",

            all:
                "အားလုံး",

            sichuan:
                "စီချွမ်",

            myanmar:
                "မြန်မာ",

            bbq:
                "အသားကင်",

            other:
                "အခြား"

        },


        /* =================================================
           English
        ================================================= */

        en: {

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

            none: "None",
            unknown: "Unknown",
            anonymous: "Anonymous",

            brandName: "MDY FOOD",
            brandSubtitle: "Delicious food, right nearby",

            navHome: "Home",
            navRestaurants: "Restaurants",
            navOrders: "Orders",
            navProfile: "Profile",

            homeTitle: "Discover Delicious Food",
            homeSubtitle: "Great food is always nearby",

            searchRestaurantFood:
                "Search restaurants or food",

            searchRestaurant:
                "Search restaurants",

            searchFood:
                "Search food",

            searchMenu:
                "Search menu",

            searchRestaurantsPlaceholder:
                "Search restaurants...",

            nearbyRestaurants:
                "Nearby Restaurants",

            allRestaurants:
                "All Restaurants",

            noRestaurants:
                "No Restaurants",

            noRestaurantsDesc:
                "No restaurants found",

            noOpenRestaurants:
                "No Open Restaurants",

            noOpenRestaurantsDesc:
                "There are no open restaurants nearby",

            loadingRestaurants:
                "Loading restaurants...",

            restaurantLoadFailed:
                "Failed to load restaurants",

            restaurantInfoError:
                "Failed to load restaurant information",

            restaurantNotFound:
                "Restaurant not found",

            loginBannerTitle:
                "Login to MDY FOOD",

            loginBannerDesc:
                "Login to manage orders, favorites and delivery addresses",

            loginOrRegister:
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

            categoryRestaurant:
                "Restaurant",

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
                "View Menu",

            viewMenuArrow:
                "View Menu →",

            menuPreparing:
                "Menu Preparing",

            menuPreparingMessage:
                "This restaurant is preparing its menu",

            ratingLoading:
                "Loading rating...",

            noRating:
                "No reviews",

            noReviews:
                "No reviews",

            reviewCount:
                "{count} reviews",

            reviewCountSuffix:
                "{count} reviews",

            reviewCountWithIcon:
                "⭐ {count} reviews",

            ratingWithCount:
                "⭐ {rating} · {count} reviews",

            foodCount:
                "{count} dishes",

            foodCountSimple:
                "{count} dishes",

            foodCountSuffix:
                "{count} dishes",

            food:
                "Food",

            foodLoading:
                "Loading food...",

            loadingFoods:
                "Loading dishes...",

            foodSimple:
                "Food",

            foodSearchResult:
                "Food found",

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
                "This restaurant is currently closed",

            menuUnavailable:
                "Menu unavailable",

            tryAnotherKeyword:
                "Try another keyword",

            viewAllArrow:
                "View All →",

            allArrow:
                "All →",

            comeBackLater:
                "Please come back later",

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
                "No customer reviews",

            reviewLoading:
                "Loading reviews...",

            loadingReviews:
                "Loading reviews...",

            reviewLoadFailed:
                "Failed to load reviews",

            customerAnonymous:
                "Anonymous",

            customerNoComment:
                "No written review",

            noComment:
                "No comment",

            timeUnknown:
                "Unknown time",

            businessStatusLoading:
                "Loading business status...",

            restaurantCannotLoadReviews:
                "Unable to load restaurant reviews",

            shoppingCart:
                "Shopping Cart",

            emptyCart:
                "Your cart is empty",

            emptyCartDesc:
                "Go explore some restaurants",

            goShopping:
                "Go Shopping",

            clearCart:
                "Clear Cart",

            subtotal:
                "Subtotal",

            deliveryFee:
                "Delivery Fee",

            cartEmptyAlert:
                "Your cart is empty",

            checkoutTitle:
                "Checkout",

            notLoggedIn:
                "Not Logged In",

            loginRequiredDesc:
                "Please login before placing an order",

            goLogin:
                "Login",

            orderContent:
                "Order Contents",

            confirmingRestaurant:
                "Confirming Restaurant",

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
                "Enter your delivery address",

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
                "Cannot identify restaurant",

            restaurantDoesNotExist:
                "Restaurant does not exist",

            restaurantLoadError:
                "Failed to load restaurant",

            emptyCartCheckout:
                "Your cart is empty",

            pleaseLoginBeforeOrder:
                "Please login before ordering",

            restaurantReturnToMenu:
                "Please return to the restaurant menu",

            pleaseEnterName:
                "Please enter your name",

            pleaseEnterPhone:
                "Please enter your phone number",

            pleaseEnterAddress:
                "Please enter your address",

            orderSubmitFailed:
                "Failed to submit order",

            orderSuccessTitle:
                "Order Successful",

            orderSuccessMessage:
                "Your order has been submitted successfully",

            orderSuccessPreparing:
                "The restaurant is preparing your order",

            orderNumber:
                "Order Number",

            backHome:
                "Back Home",

            continueOrdering:
                "Continue Ordering",

            myOrders:
                "My Orders",

            backHomeText:
                "Back Home",

            refreshOrders:
                "Refresh Orders",

            enableNotifications:
                "Enable Notifications",

            orderRealtimeSync:
                "Orders are syncing in real time",

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
                "Order Contents",

            pending:
                "Pending",

            merchantAccepted:
                "Merchant Accepted",

            riderAccepted:
                "Rider Accepted",

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
                "Waiting for merchant to accept",

            merchantPreparing:
                "Merchant is preparing your order",

            riderInfo:
                "Rider Information",

            rider:
                "Rider",

            phoneLabel:
                "Phone",

            phoneLabelFull:
                "Phone Number",

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

            myReviews:
                "My Reviews",

            myReviewsDesc:
                "View reviews you have posted",

            noMyReviews:
                "No Reviews",

            noMyReviewsDesc:
                "You have not posted any reviews yet",

            loginToView:
                "Login to view reviews",

            userReview:
                "User Review",

            reviewContent:
                "Review Content",

            orderNumberShort:
                "Order No.",

            userNoTextReview:
                "No written review",

            reviewTitle:
                "Review",

            rating:
                "Rating",

            ratingRequired:
                "Please select a rating",

            comment:
                "Comment",

            commentPlaceholder:
                "Write your review",

            submitReview:
                "Submit Review",

            reviewSuccess:
                "Review submitted successfully",

            reviewFailed:
                "Failed to submit review",

            reviewAlreadyExists:
                "This order has already been reviewed",

            account:
                "Account",

            accountInfo:
                "Account Information",

            myAccount:
                "My Account",

            readingAccount:
                "Reading account information...",

            checkingLogin:
                "Checking login status...",

            editProfile:
                "Edit",

            quickOrders:
                "My Orders",

            quickFavorites:
                "My Favorites",

            quickAddresses:
                "Delivery Address",

            quickRestaurants:
                "Find Restaurants",

            service:
                "My Services",

            serviceTitle:
                "My Services",

            favorites:
                "My Favorites",

            addresses:
                "Delivery Address",

            coupons:
                "My Coupons",

            ordersSub:
                "View all orders and order status",

            favoritesSub:
                "Favorite restaurants and food",

            addressesSub:
                "Manage delivery addresses",

            couponsSub:
                "View available coupons",

            reviewsSub:
                "View your reviews",

            other:
                "Other",

            otherTitle:
                "Other",

            login:
                "Login",

            register:
                "Register",

            logout:
                "Logout",

            loginTitle:
                "Login to MDY FOOD",

            loginSub:
                "Login to enjoy all services",

            loggedIn:
                "Logged In",

            loggedOut:
                "Not Logged In",

            confirmLogout:
                "Are you sure you want to log out?",

            logoutError:
                "Failed to log out. Please try again later",

            defaultUserName:
                "MDY FOOD User",

            loginConvenient:
                "Login to manage orders, favorites and delivery addresses",

            myFavorites:
                "Your favorite restaurants will appear here",

            myAddresses:
                "Manage your delivery addresses",

            saveOrdersAddress:
                "Saving an address makes ordering easier",

            editProfileTitle:
                "Edit Profile",

            nickname:
                "Nickname",

            nicknamePlaceholder:
                "Enter nickname",

            nicknameLimit:
                "Maximum 20 characters",

            email:
                "Email",

            emailReadonly:
                "Email cannot be changed",

            phoneNumber:
                "Phone Number",

            saveProfile:
                "Save Profile",

            returnButton:
                "Back",

            notBoundEmail:
                "Email not linked",

            notBoundPhone:
                "Phone not linked",

            profileSaveSuccess:
                "Profile saved successfully",

            profileSaveFailed:
                "Failed to save profile",

            nicknameRequired:
                "Please enter a nickname",

            nicknameTooLong:
                "Nickname cannot exceed 20 characters",

            saving:
                "Saving...",

            settingsTitle:
                "Settings",

            accountSettings:
                "Account Settings",

            profileSettings:
                "Profile",

            nameLabel:
                "Name",

            phoneInputPlaceholder:
                "Phone",

            nameInputPlaceholder:
                "Name",

            generalSettings:
                "General Settings",

            generalTitle:
                "General Settings",

            language:
                "Language",

            languageTitle:
                "Language",

            languageDesc:
                "Choose the website language",

            notification:
                "Notifications",

            notificationTitle:
                "Notifications",

            notificationDesc:
                "Receive order and system notifications",

            darkMode:
                "Dark Mode",

            darkTitle:
                "Dark Mode",

            darkModeDesc:
                "Use dark interface",

            otherSettings:
                "Other Settings",

            userAgreement:
                "User Agreement",

            privacyPolicy:
                "Privacy Policy",

            aboutUs:
                "About MDY FOOD",

            legal:
                "Legal",

            accountStatus:
                "Account Status",

            accountStatusTitle:
                "Account Status",

            saveSuccess:
                "Saved",

            saveError:
                "Save Failed",

            loginPageTitle:
                "Login to MDY FOOD",

            loginButton:
                "Login",

            emailPlaceholder:
                "Enter email",

            password:
                "Password",

            passwordPlaceholder:
                "Enter password",

            noAccount:
                "Don't have an account?",

            registerNow:
                "Register Now",

            or:
                "OR",

            googleLogin:
                "Continue with Google",

            phoneLogin:
                "Phone Login",

            phoneInternationalPlaceholder:
                "+95 9xxxxxxxxx",

            phoneInternationalHint:
                "Enter your phone number in international format",

            getVerificationCode:
                "Get Code",

            verificationCode:
                "Verification Code",

            phoneLoginButton:
                "Login with Phone",

            backToLoginMethods:
                "Back to Login Methods",

            pleaseEnterEmailPassword:
                "Please enter email and password",

            loggingIn:
                "Logging in...",

            loginSuccess:
                "Login successful",

            emailNotRegistered:
                "This email is not registered",

            wrongPassword:
                "Wrong password",

            emailOrPasswordWrong:
                "Email or password is incorrect",

            invalidEmail:
                "Invalid email format",

            loginFailed:
                "Login failed",

            loginFailedColon:
                "Login failed: ",

            phoneInternationalRequired:
                "Please enter your phone number",

            sendingCode:
                "Sending verification code...",

            verificationCodeSent:
                "Verification code sent",

            verificationCodeSendFailed:
                "Failed to send verification code",

            enterVerificationCode:
                "Enter verification code",

            getCodeFirst:
                "Please get the verification code first",

            verificationCodeInvalid:
                "Invalid verification code",

            registerTitle:
                "Register for MDY FOOD",

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
                "Phone",

            registerPhonePlaceholder:
                "Enter your phone number",

            registerEmail:
                "Email",

            registerEmailPlaceholder:
                "Enter your email",

            registerPassword:
                "Password",

            registerPasswordPlaceholder:
                "Enter password",

            registerConfirmPassword:
                "Confirm Password",

            registerConfirmPasswordPlaceholder:
                "Enter password again",

            defaultAddress:
                "Default Address",

            defaultAddressPlaceholder:
                "Enter default address",

            merchantSectionTitle:
                "Merchant Registration",

            merchantSectionDesc:
                "Apply to become an MDY FOOD merchant",

            merchantSectionHint:
                "Submit your application and wait for review",

            merchantRegister:
                "Merchant Registration",

            fillAllFields:
                "Please fill in all fields",

            passwordMinLength:
                "Password must be at least 6 characters",

            passwordMismatch:
                "Passwords do not match",

            registering:
                "Registering...",

            registerSuccess:
                "Registration successful",

            emailAlreadyRegistered:
                "This email is already registered",

            emailRegistrationDisabled:
                "Email registration is currently unavailable",

            firebaseApiKeyInvalid:
                "Firebase configuration is invalid",

            networkConnectionFailed:
                "Network connection failed",

            registrationFailed:
                "Registration failed",

            merchant:
                "Merchant",

            merchantLogin:
                "Merchant Login",

            merchantCenter:
                "Merchant Center",

            delivery:
                "Rider",

            deliveryLogin:
                "Rider Login",

            deliveryRegister:
                "Rider Registration",

            deliveryCenter:
                "Rider Center",

            about:
                "About",

            aboutTitle:
                "About MDY FOOD",

            aboutSubtitle:
                "Delicious food, right nearby",

            aboutUsTitle:
                "About Us",

            aboutParagraph1:
                "MDY FOOD provides convenient online ordering and delivery services.",

            aboutParagraph2:
                "We connect restaurants, customers and riders to make food delivery easier.",

            platformFeatures:
                "Platform Features",

            onlineOrdering:
                "Online Ordering",

            onlineOrderingDesc:
                "Browse menus and place orders anytime",

            deliveryService:
                "Delivery Service",

            deliveryServiceDesc:
                "Professional riders deliver your orders",

            userReviews:
                "User Reviews",

            userReviewsDesc:
                "Share your dining experience",

            restaurantService:
                "Restaurant Service",

            restaurantServiceDesc:
                "Help restaurants manage orders more easily",

            ourGoal:
                "Our Goal",

            aboutGoal:
                "Make ordering easier and bring great food closer to you.",

            version:
                "Version",

            agreementTitle:
                "User Agreement",

            agreementMainTitle:
                "MDY FOOD User Service Agreement",

            updatedDate:
                "Updated",

            agreementSection1:
                "1. Service Description",

            agreementSection2:
                "2. User Accounts",

            agreementSection3:
                "3. Orders and Payments",

            agreementSection4:
                "4. Delivery Service",

            agreementSection5:
                "5. User Reviews",

            agreementSection6:
                "6. Privacy Protection",

            agreementSection7:
                "7. Disclaimer",

            agreementSection8:
                "8. Agreement Changes",

            agreementSection9:
                "9. Other",

            privacyTitle:
                "Privacy Policy",

            privacyMainTitle:
                "MDY FOOD Privacy Policy",

            privacySection1:
                "1. Information Collection",

            privacySection2:
                "2. Information Use",

            privacySection3:
                "3. Information Sharing",

            privacySection4:
                "4. Information Storage",

            privacySection5:
                "5. Information Security",

            privacySection6:
                "6. Cookies and Local Storage",

            privacySection7:
                "7. Third-Party Services",

            privacySection8:
                "8. Children's Privacy",

            privacySection9:
                "9. Policy Updates",

            privacySection10:
                "10. Contact Us",

            networkError:
                "Network error",

            dataLoadFailed:
                "Failed to load data",

            pleaseWait:
                "Please wait",

            operationFailed:
                "Operation failed. Please try again later",

            invalidData:
                "Invalid data",

            unknownError:
                "Unknown error",

            pleaseLogin:
                "Please login first",

            loginRequired:
                "Please login first",

            operationSuccess:
                "Operation successful",

            operationError:
                "Operation failed. Please try again later",

            welcome:
                "Welcome to MDY FOOD",

            defaultRestaurantName:
                "MDY FOOD Restaurant",

            defaultRestaurantDescription:
                "Welcome to MDY FOOD",

            statusPending:
                "Pending",

            statusMerchantAccepted:
                "Merchant Accepted",

            statusRiderAccepted:
                "Rider Accepted",

            statusReady:
                "Ready",

            statusDelivering:
                "Delivering",

            statusCompleted:
                "Completed",

            statusCancelled:
                "Cancelled",

            paymentCash:
                "Cash",

            paymentKBZPay:
                "KBZPay",

            paymentWaveMoney:
                "Wave Money",

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



    /* =====================================================
       工具：检查语言
    ===================================================== */

    function isSupportedLanguage(lang) {

        return SUPPORTED_LANGUAGES.includes(
            lang
        );

    }



    /* =====================================================
       获取当前语言
    ===================================================== */

    function getLanguage() {

        try {

            const saved =
                localStorage.getItem(
                    STORAGE_KEY
                );


            if (
                isSupportedLanguage(
                    saved
                )
            ) {

                return saved;

            }

        } catch (error) {

            console.warn(
                "读取语言设置失败:",
                error
            );

        }


        return DEFAULT_LANGUAGE;

    }



    /* =====================================================
       获取语言名称
    ===================================================== */

    function getLanguageName(
        lang
    ) {

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



    /* =====================================================
       翻译
       t(key, params, fallback)
    ===================================================== */

    function t(
        key,
        params,
        fallback
    ) {

        /*
         * 兼容旧页面：
         *
         * t("home")
         * t("home", "首页")
         *
         * t("reviewCount", {count: 5})
         *
         * t("reviewCount", {count: 5}, "{count} reviews")
         */

        if (
            typeof params === "string" &&
            fallback === undefined
        ) {

            fallback =
                params;

            params =
                {};

        }


        if (
            !params ||
            typeof params !== "object"
        ) {

            params =
                {};

        }


        const lang =
            getLanguage();


        const currentDictionary =
            translations[lang] ||
            translations[DEFAULT_LANGUAGE];


        let result =
            currentDictionary[key];


        if (
            result === undefined ||
            result === null ||
            result === ""
        ) {

            result =
                translations[
                    DEFAULT_LANGUAGE
                ][key];

        }


        if (
            result === undefined ||
            result === null ||
            result === ""
        ) {

            result =
                fallback !== undefined
                    ? fallback
                    : key;

        }


        result =
            String(result);


        Object.keys(params).forEach(
            function (paramKey) {

                result =
                    result.replace(
                        new RegExp(
                            "\\{" +
                            paramKey +
                            "\\}",
                            "g"
                        ),
                        String(
                            params[paramKey]
                        )
                    );

            }
        );


        return result;

    }



    /* =====================================================
       应用语言到页面
       只负责 DOM，不修改 localStorage
    ===================================================== */

    function applyLanguage(
        lang
    ) {

        const nextLanguage =
            isSupportedLanguage(lang)
                ? lang
                : getLanguage();


        document.documentElement.lang =
            nextLanguage === "zh"
                ? "zh-CN"
                : nextLanguage;


        document
            .querySelectorAll(
                "[data-i18n]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.dataset.i18n;


                    if (!key) {
                        return;
                    }


                    /*
                     * data-i18n-params
                     * 可选支持：
                     *
                     * data-i18n-params='{"count":5}'
                     */

                    let params = {};


                    if (
                        element.dataset
                            .i18nParams
                    ) {

                        try {

                            params =
                                JSON.parse(
                                    element.dataset
                                        .i18nParams
                                );

                        } catch (error) {

                            params = {};

                        }

                    }


                    const translated =
                        t(
                            key,
                            params,
                            element.innerText
                        );


                    element.textContent =
                        translated;

                }
            );


        /*
         * placeholder
         */

        document
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.dataset
                            .i18nPlaceholder;


                    element.placeholder =
                        t(
                            key,
                            {},
                            element.placeholder
                        );

                }
            );


        /*
         * title
         */

        document
            .querySelectorAll(
                "[data-i18n-title]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.dataset
                            .i18nTitle;


                    element.title =
                        t(
                            key,
                            {},
                            element.title
                        );

                }
            );


        /*
         * aria-label
         */

        document
            .querySelectorAll(
                "[data-i18n-aria]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.dataset
                            .i18nAria;


                    element.setAttribute(
                        "aria-label",
                        t(
                            key,
                            {},
                            element.getAttribute(
                                "aria-label"
                            ) || ""
                        )
                    );

                }
            );


        /*
         * 页面标题
         */

        if (
            document.title &&
            document.body
        ) {

            /*
             * 不强行覆盖每个页面自己的 title。
             * 页面自身如果有 data-i18n-title
             * 可以自行控制。
             */

        }

    }



    /* =====================================================
       设置语言
    ===================================================== */

    function setLanguage(
        lang
    ) {

        if (
            !isSupportedLanguage(
                lang
            )
        ) {

            console.warn(
                "不支持的语言:",
                lang
            );

            return;

        }


        try {

            localStorage.setItem(
                STORAGE_KEY,
                lang
            );

        } catch (error) {

            console.warn(
                "保存语言设置失败:",
                error
            );

        }


        applyLanguage(
            lang
        );


        /*
         * 通知当前页面其他代码。
         *
         * 注意：
         * 不在事件里再次调用 setLanguage。
         * 避免递归。
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
             * 极老浏览器兼容
             */

            const event =
                document.createEvent(
                    "Event"
                );

            event.initEvent(
                "mdyLanguageChanged",
                true,
                true
            );

            window.dispatchEvent(
                event
            );

        }

    }



    /* =====================================================
       切换语言
    ===================================================== */

    function toggleLanguage() {

        const current =
            getLanguage();


        const currentIndex =
            SUPPORTED_LANGUAGES.indexOf(
                current
            );


        const nextIndex =
            (
                currentIndex + 1
            ) %
            SUPPORTED_LANGUAGES.length;


        setLanguage(
            SUPPORTED_LANGUAGES[
                nextIndex
            ]
        );

    }



    /* =====================================================
       获取地区
    ===================================================== */

    function getLocale(
        lang
    ) {

        const current =
            isSupportedLanguage(lang)
                ? lang
                : getLanguage();


        if (
            current === "my"
        ) {

            return "my-MM";

        }


        if (
            current === "en"
        ) {

            return "en-US";

        }


        return "zh-CN";

    }



    /* =====================================================
       日期格式化
    ===================================================== */

    function formatDate(
        value,
        options
    ) {

        if (!value) {

            return "";

        }


        let date;


        if (
            value &&
            typeof value.toDate ===
                "function"
        ) {

            date =
                value.toDate();

        }

        else {

            date =
                new Date(value);

        }


        if (
            Number.isNaN(
                date.getTime()
            )
        ) {

            return "";

        }


        try {

            return new Intl.DateTimeFormat(
                getLocale(),
                options || {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                }
            ).format(
                date
            );

        } catch (error) {

            return date.toLocaleDateString();

        }

    }



    /* =====================================================
       日期时间格式化
    ===================================================== */

    function formatDateTime(
        value,
        options
    ) {

        if (!value) {

            return "";

        }


        let date;


        if (
            value &&
            typeof value.toDate ===
                "function"
        ) {

            date =
                value.toDate();

        }

        else {

            date =
                new Date(value);

        }


        if (
            Number.isNaN(
                date.getTime()
            )
        ) {

            return "";

        }


        try {

            return new Intl.DateTimeFormat(
                getLocale(),
                options || {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit"
                }
            ).format(
                date
            );

        } catch (error) {

            return date.toLocaleString();

        }

    }



    /* =====================================================
       订单状态标准化
    ===================================================== */

    function normalizeOrderStatus(
        value
    ) {

        const text =
            String(
                value || ""
            )
            .trim()
            .toLowerCase();


        if (
            text === "待接单" ||
            text === "pending" ||
            text === "waiting"
        ) {

            return "pending";

        }


        if (
            text === "商家已接单" ||
            text === "merchant accepted" ||
            text === "merchantaccepted"
        ) {

            return "merchantAccepted";

        }


        if (
            text === "骑手已接单" ||
            text === "rider accepted" ||
            text === "rideraccepted"
        ) {

            return "riderAccepted";

        }


        if (
            text === "制作中" ||
            text === "preparing"
        ) {

            return "preparing";

        }


        if (
            text === "待配送" ||
            text === "ready"
        ) {

            return "ready";

        }


        if (
            text === "配送中" ||
            text === "delivering"
        ) {

            return "delivering";

        }


        if (
            text === "已完成" ||
            text === "completed"
        ) {

            return "completed";

        }


        if (
            text === "已取消" ||
            text === "cancelled" ||
            text === "canceled"
        ) {

            return "cancelled";

        }


        return text || "unknown";

    }



    /* =====================================================
       翻译订单状态
    ===================================================== */

    function translateStatus(
        value
    ) {

        const status =
            normalizeOrderStatus(
                value
            );


        const map = {

            pending:
                "statusPending",

            merchantAccepted:
                "statusMerchantAccepted",

            riderAccepted:
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


        return t(
            map[status] ||
            status,
            {},
            String(
                value ||
                ""
            )
        );

    }



    /* =====================================================
       餐厅分类标准化
    ===================================================== */

    function normalizeCategory(
        value
    ) {

        const text =
            String(
                value || ""
            )
            .trim()
            .toLowerCase();


        if (
            text === "sichuan" ||
            text.includes("四川") ||
            text.includes("sichuan") ||
            text.includes("စီချွမ်")
        ) {

            return "sichuan";

        }


        if (
            text === "myanmar" ||
            text.includes("缅甸") ||
            text.includes("မြန်မာ")
        ) {

            return "myanmar";

        }


        if (
            text === "bbq" ||
            text.includes("烧烤") ||
            text.includes("barbecue") ||
            text.includes("ကင်")
        ) {

            return "bbq";

        }


        if (
            text === "all" ||
            text === "全部" ||
            text === "အားလုံး"
        ) {

            return "all";

        }


        return "other";

    }



    /* =====================================================
       翻译分类
    ===================================================== */

    function translateCategory(
        value
    ) {

        const category =
            normalizeCategory(
                value
            );


        const map = {

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


        return t(
            map[category] ||
            "categoryOther",
            {},
            String(
                value ||
                ""
            )
        );

    }



    /* =====================================================
       支付方式标准化
    ===================================================== */

    function normalizePayment(
        value
    ) {

        const text =
            String(
                value || ""
            )
            .trim()
            .toLowerCase();


        if (
            text === "cash" ||
            text === "现金" ||
            text === "ငွေသား"
        ) {

            return "cash";

        }


        if (
            text === "kbzpay" ||
            text === "kbz pay" ||
            text === "kbz"
        ) {

            return "kbzPay";

        }


        if (
            text === "wavemoney" ||
            text === "wave money" ||
            text === "wave"
        ) {

            return "waveMoney";

        }


        return "unknown";

    }



    /* =====================================================
       翻译支付方式
    ===================================================== */

    function translatePayment(
        value
    ) {

        const payment =
            normalizePayment(
                value
            );


        const map = {

            cash:
                "paymentCash",

            kbzPay:
                "paymentKBZPay",

            waveMoney:
                "paymentWaveMoney"

        };


        return t(
            map[payment] ||
            "unknown",
            {},
            String(
                value ||
                ""
            )
        );

    }



    /* =====================================================
       语言选择器
    ===================================================== */

    function renderLanguageSelector(
        target
    ) {

        try {

            /*
             * 兼容：
             *
             * renderLanguageSelector("languageSelector")
             *
             * renderLanguageSelector(
             *     document.getElementById(
             *         "languageSelector"
             *     )
             * )
             */

            let container =
                target;


            if (
                typeof target ===
                    "string"
            ) {

                container =
                    document.getElementById(
                        target
                    );

            }


            if (!container) {

                console.warn(
                    "语言选择器目标不存在:",
                    target
                );

                return;

            }


            const currentLanguage =
                getLanguage();


            const languageNames = {

                zh:
                    "中文",

                my:
                    "မြန်မာ",

                en:
                    "English"

            };


            container.innerHTML =
                "";


            const wrapper =
                document.createElement(
                    "div"
                );


            wrapper.className =
                "mdy-language-selector";


            wrapper.style.display =
                "inline-flex";

            wrapper.style.alignItems =
                "center";

            wrapper.style.gap =
                "6px";


            const select =
                document.createElement(
                    "select"
                );


            select.className =
                "mdy-language-select";


            select.id =
                "mdyLanguageSelect";


            select.style.padding =
                "7px 12px";

            select.style.borderRadius =
                "8px";

            select.style.border =
                "1px solid #ddd";

            select.style.background =
                "#fff";

            select.style.cursor =
                "pointer";

            select.style.fontSize =
                "14px";

            select.style.outline =
                "none";


            SUPPORTED_LANGUAGES.forEach(
                function (lang) {

                    const option =
                        document.createElement(
                            "option"
                        );


                    option.value =
                        lang;


                    option.textContent =
                        languageNames[
                            lang
                        ] ||
                        lang;


                    if (
                        lang ===
                        currentLanguage
                    ) {

                        option.selected =
                            true;

                    }


                    select.appendChild(
                        option
                    );

                }
            );


            select.addEventListener(
                "change",
                function () {

                    const selectedLanguage =
                        this.value;


                    if (
                        SUPPORTED_LANGUAGES
                            .includes(
                                selectedLanguage
                            )
                    ) {

                        setLanguage(
                            selectedLanguage
                        );

                    }

                }
            );


            wrapper.appendChild(
                select
            );


            container.appendChild(
                wrapper
            );

        }

        catch (error) {

            console.error(
                "语言选择器加载失败:",
                error
            );

        }

    }



    /* =====================================================
       初始化
    ===================================================== */

    function initialize() {

        const language =
            getLanguage();


        /*
         * 这里只读取语言。
         * 不向 localStorage 写入默认中文。
         */

        applyLanguage(
            language
        );


        /*
         * 如果页面自己有语言选择器，
         * 自动初始化。
         */

        const selectors =
            document.querySelectorAll(
                "#languageSelector"
            );


        selectors.forEach(
            function (element) {

                renderLanguageSelector(
                    element
                );

            }
        );

    }



    /* =====================================================
       暴露全局 API
    ===================================================== */

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

        translateCategory:
            translateCategory,

        normalizeCategory:
            normalizeCategory,

        translatePayment:
            translatePayment,

        normalizePayment:
            normalizePayment,

        renderLanguageSelector:
            renderLanguageSelector

    };



    /* =====================================================
       DOM 初始化
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    }

    else {

        initialize();

    }


})();
