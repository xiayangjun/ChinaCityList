(function($) {
    // 城市列表对象
    var cityList = {
        A: {
            name: "安徽",
            cities: "合肥 安庆 蚌埠 亳州 巢湖 池州 滁州 阜阳 淮北 淮南 黄山 六安 马鞍山 宿州 铜陵 芜湖 宣城"
        },
        F: {
            name: "福建",
            cities: "福州 龙岩 南平 宁德 莆田 泉州 三明 厦门 漳州"
        },
        G: {
            name: "广东",
            cities: "广州 潮州 东莞 佛山 河源 惠州 江门 揭阳 茂名 梅州 清远 汕头 汕尾 韶关 深圳 阳江 云浮 湛江 肇庆 中山 珠海"
        },
        H: {
            name: "海南",
            cities: "海口 白沙 保亭 昌江 儋州 澄迈 东方 定安 琼海 琼中 乐东 临高 陵水 三亚 屯昌 万宁 文昌 五指山"
        },
        J: [{
            name: "江苏",
            cities: "南京 常州 淮安 连云港 南通 苏州 宿迁 泰州 无锡 徐州 盐城 扬州 镇江"
        }, {
            name: "江西",
            cities: "南昌 抚州 赣州 吉安 景德镇 九江 萍乡 上饶 新余 宜春 鹰潭"
        }, {
            name: "吉林",
            cities: "长春 白城 白山 吉林市 辽源 四平 松原 通化 延边"
        }],
        L: {
            name: "辽宁",
            cities: "沈阳 鞍山 本溪 朝阳 大连 丹东 抚顺 阜新 葫芦岛 锦州 辽阳 盘锦 铁岭 营口"
        },
        N: {
            name: "宁夏",
            cities: "银川 固原 石嘴山 吴忠 中卫"
        },
        Q: {
            name: "青海",
            cities: "西宁 果洛州 海东地区 海北州 海南州 海西州 黄南州 玉树州"
        },
        S: [{
            name: "山东",
            cities: "济南 滨州 东营 德州 菏泽 济宁 莱芜 聊城 临沂 青岛 日照 泰安 威海 潍坊 烟台 枣庄 淄博"
        }, {
            name: "山西",
            cities: "太原 长治 大同 晋城 晋中 临汾 吕梁 朔州 忻州 阳泉 运城"
        }, {
            name: "陕西",
            cities: "西安 安康 宝鸡 汉中 商洛 铜川 渭南 咸阳 延安 榆林"
        }, {
            name: "四川",
            cities: "成都 阿坝州 巴中 达州 德阳 甘孜州 广安 广元 乐山 凉山州 泸州 南充 眉山 绵阳 内江 攀枝花 遂宁 雅安 宜宾 资阳 自贡"
        }],
        T: {
            name: "台湾",
            cities: "台北 高雄 台中 台南 新北 基隆 新竹 嘉义"
        },
        X: [{
            name: "西藏",
            cities: "拉萨 阿里地区 昌都地区 林芝地区 那曲地区 日喀则地区 山南地区"
        }, {
            name: "新疆",
            cities: "乌鲁木齐 阿拉尔 阿克苏地区 阿勒泰地区 巴音郭楞 博尔塔拉州 昌吉州 哈密地区 和田地区 喀什地区 克拉玛依 克孜勒苏州 石河子 塔城地区 图木舒克 吐鲁番地区 五家渠"
        }, ],
        Y: {
            name: "云南",
            cities: "昆明 保山 楚雄州 大理州 德宏州 迪庆州 红河州 丽江 临沧 怒江州 普洱 曲靖 昭通 文山 西双版纳 玉溪"
        },
        Z: {
            name: "浙江",
            cities: "杭州 湖州 嘉兴 金华 丽水 宁波 衢州 绍兴 台州 温州 舟山"
        }
    }

    // 直辖市名称的数组
    var municipalityList = ["上海", "北京", "天津", "重庆", "香港", "澳门"];

    $.fn.attachCityList = function() {
        // 保存控件对象的引用
        var main = this;

        // 判断this控件的定位方式
        if ($(this).css('position') == 'static') {
            $(this).css({ position: "relative", cursor: "pointer" });
        }

        var cityInput = $('<input type="text" />').appendTo(this);

        // 最外层容器
        var listContainer = $('<div id="jQueryXYJ_cityListContainer"></div>').appendTo(this).css({
            display: "none",
            position: "absolute",
            height: "390px",
            width: "280px",
            backgroundColor: "#eee",
            zIndex: 1,
            border: "2px solid #dedede",
            "border-radius": "5px",
            padding: "2px",
            fontSize: "14px",
        });

        // 绑定对象this的点击事件
        var flag = 0;
        $(this).on("click", function(e) {
            if (flag == 0) {
                listContainer.show();
                flag = 1;
            } else {
                listContainer.hide();
                flag = 0;
            }
        });

        // 阻止点击事件在列表容器上的冒泡
        listContainer.on("click", function(e) {
            e.stopPropagation();
        })

        // 列表标题
        var listTitle = $('<div><span id="listTitle">城市列表</span></div>').appendTo(listContainer).css({
            color: "#4c4c4c",
            fontWeight: "bold",
            borderBottom: "1px solid #dedede"
        });

        // 包含自治区名的容器
        var listMunicipality = $('<div id="listMunicipality"></div>').appendTo(listContainer).css({ borderBottom: "1px solid #dedede" });
        $.each(municipalityList, function(n, value) {
            $("<a class='cityName_jQueryXYJ' href='javascript:void(0)'>" + value + "</a>").css({ paddingRight: "5px" }).appendTo(listMunicipality);
        });
        // 包含关键字名的容器
        var listKeyList = $('<div id="keyList"></div>').appendTo(listContainer).css({ borderBottom: "1px solid #dedede" });
        // 包含城市名详细内容的容器
        var listContent = $('<div id="listContent"></div>').appendTo(listContainer).css({ backgroundColor: "white", height: "260px", marginTop: "10px" });
        $.each(cityList, function(key, value) {
            // 添加关键字到 listKeyList
            $("<a class='keyWord_jQueryXYJ' href='javascript:void(0)'>" + key + "</a>").css({ paddingRight: "5px" }).appendTo(listKeyList);
            // 添加城市详细列表到 tempDiv
            var tempDiv = $('<div id="' + key + '" style="display: inline-block"><span style="color: grey; font-size: 20px; vertical-align: top">' + key + '</span></div>').appendTo(listContent);
            // 判断value是否为数组
            if ($.type(value) == "object") { // 如果城市名是一个对象
                $('<span style="font-weight: bold; color: #337ab7; padding-left: 5px;">' + value.name + ':' + '</span>').appendTo(tempDiv);
                // 增加城市名容器
                var cityContianer = $('<div class="cityContianer"></div>').appendTo(tempDiv).css({
                    display: "inline-block",
                    width: "75%",
                    "padding-left": '10px',
                    "vertical-align": 'top'
                });
                value.cities = value.cities.split(" ");
                $.each(value.cities, function(n, city) {
                    // 追加城市到 tempDiv
                    $("<a class='cityName_jQueryXYJ' href='javascript:void(0)'>" + city + "</a>").css({ paddingRight: "5px" }).appendTo(cityContianer);
                });
            } else { // 如果城市名为数组
                $.each(value, function(index, obj) {
                    if (index == 0) {
                        $('<span style="font-weight: bold; color: #337ab7; padding-left: 5px;">' + obj.name + ':' + '</span>')
                            .appendTo(tempDiv);
                    } else {
                        $('<span style="font-weight: bold; color: #337ab7; padding-left: 16px;">' + obj.name + ':' + '</span>')
                            .appendTo(tempDiv);
                    }

                    // 增加城市名容器
                    var cityContianer = $('<div class="cityContianer"></div><br />').appendTo(tempDiv).css({
                        display: "inline-block",
                        width: "75%",
                        "padding-left": '10px',
                        "vertical-align": 'top'
                    });
                    obj.cities = obj.cities.split(" ");
                    $.each(obj.cities, function(n, city) {
                        // 追加城市到 tempDiv
                        $("<a class='cityName_jQueryXYJ' href='javascript:void(0)'>" + city + "</a>").css({ paddingRight: "5px" }).appendTo(cityContianer);
                    });
                })
            }
        });
        $(listContent).mCustomScrollbar({ theme: "dark" });

        // 显示全部城市按钮事件
        listTitle.on("click", function() {
            $("#mCSB_1_container").children().show();
        });

        $('<a href="javascript:void(0)">全部</a>').appendTo(listKeyList).on("click", function() {
            $("#mCSB_1_container").children().show();
        });

        // 取消按钮
        var listBtnCancel = $('<span>关闭</span>').appendTo(listContainer).css({
            position: "absolute",
            right: 0,
            top: "2px",
            cursor: "pointer",
            color: "#4c4c4c"
        });

        // 取消按钮事件
        listBtnCancel.on("click", function() {
            listContainer.hide();
            flag = 0;
        });

        // a.cityName_jQueryXYJ绑定点击事件
        $("a.cityName_jQueryXYJ").on("click", function() {
            cityInput.val($(this).text());
            listContainer.hide();
            flag = 0;
        })

        // 关键字点击事件
        $("a.keyWord_jQueryXYJ").on("click", function() {
            $("#mCSB_1_container").children("#" + $(this).text()).show();
            $("#mCSB_1_container").children().not("#" + $(this).text()).hide();
        });

        return this;
    }
})(jQuery);
