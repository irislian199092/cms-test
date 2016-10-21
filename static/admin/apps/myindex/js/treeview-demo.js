$(function() {
    var e = [{
        text: "系统",
        href: "#parent1",
        nodes: [{
            text: "全局设置",
            href: "#child1"
        },
        {
            text: "管理员",
            href: "#child2"
        },
        {
            text: "角色",
            href: "#child3"
        },
        {
            text: "权限",
            href: "#child4"
        },
        {
            text: "部门",
            href: "#child5"
        },
        {
            text: "栏目设置",
            href: "#child6"
        },
        {
            text: "发布点设置",
            href: "#child7"
        },
        {
            text: "内容模型",
            href: "#child8"
        },
        {
            text: "工作流",
            href: "#child9"
        },
        {
            text: "数据源",
            href: "#child10"
        },
        {
            text: "菜单",
            href: "#child11"
        },
        {
            text: "词语过滤",
            href: "#child12"
        },
        {
            text: "关键词链接",
            href: "#child13"
        },
        {
            text: "来源",
            href: "#child14"
        },
        {
            text: "Tags",
            href: "#child15"
        },
        {
            text: "模板",
            href: "#child16"
        },
        {
            text: "数据库",
            href: "#child17"
        },
        {
            text: "计划任务",
            href: "#child18"
        },
        {
            text: "附件管理",
            href: "#child19"
        },
        {
            text: "数据导入",
            href: "#child20"
        },
        {
            text: "IP禁止",
            href: "#child21"
        },
        {
            text: "操作日志",
            href: "#child22"
        },
        {
            text: "木马扫描",
            href: "#child23"
        },
        {
            text: "发布网页",
            href: "#child24"
        },
        {
            text: "批注管理",
            href: "#child25"
        },
        {
            text: "内容操作日志",
            href: "#child26"
        },
        {
            text: "点击排行",
            href: "#child27"
        },
        {
            text: "评论排行",
            href: "#child28"
        },
        {
            text: "网站地图",
            href: "#child29"
        },
        {
            text: "百度新闻源",
            href: "#child30"
        },
        {
            text: "内容管理",
            href: "#child31"
        },
        {
            text: "我的内容",
            href: "#child32",
            tags: ["0"],
            nodes: [{
                text: "my content"
            }]
        }]
     },
    {
        text: "会员",
        href: "#parent2",
        nodes: [{
            text: "设置",
            href: "#child1"
        },
        {
            text: "会员管理",
            href: "#child2"
        },
        {
            text: "会员审核",
            href: "#child3"
        },
        {
            text: "用户组管理",
            href: "#child4"
        },
        {
            text: "登陆日志",
            href: "#child1"
        }]
    },
    {
        text: "文章",
        href: "#parent3",
        nodes: [{
            text: "文章管理",
            href: "#child1"
        },
        {
        	text: "文章生成",
            href: "#child2"
        },
        {
        	text: "投稿管理",
            href: "#child3"
        },
        {
        	text: "浏览",
            href: "#child4"
        },
        {
        	text: "添加",
            href: "#child5"
        },
        {
        	text: "修改",
            href: "#child6"
        },
        {
        	text: "查看",
            href: "#child7"
        },
        {
        	text: "删除",
            href: "#child8"
        },
        {
        	text: "发布",
            href: "#child9"
        },
        {
        	text: "撒搞",
            href: "#child10"
        },
        {
        	text: "复制",
            href: "#child11"
        },
        {
        	text: "引用",
            href: "#child12"
        },
        {
        	text: "移动",
            href: "#child13"
        },
        {
        	text: "搜素",
            href: "#child14"
        },
        {
        	text: "审核",
            href: "#child15"
        },
        {
        	text: "回收站",
            href: "#child16"
        }]
    },
    {
        text: "区块",
        href: "#parent4",
        nodes:[{
        	text: "区块管理",
            href: "#child1"
        },
        {
        	text: "内容维护",
            href: "#child2"
        },
        {
        	text: "分类管理",
            href: "#child3"
        }]
    },
    {
        text: "组图",
        href: "#parent5"
    },
    {
        text: "系统",
        href: "#parent6"
    },
    {
        text: "系统",
        href: "#parent7"
    },
    {
        text: "系统",
        href: "#parent8"
    },
    {
        text: "系统",
        href: "#parent9"
    },
    {
        text: "系统",
        href: "#parent10"
    }],
    
    o = [{
        text: "天山",
        href: "#parent1",
        nodes: [{
            text: "全局设置",
            href: "#child1"
        },
        {
            text: "管理员",
            href: "#child2"
        },
        {
            text: "角色",
            href: "#child3"
        },
        {
            text: "权限",
            href: "#child4"
        },
        {
            text: "部门",
            href: "#child5"
        },
        {
            text: "栏目设置",
            href: "#child6"
        },
        {
            text: "发布点设置",
            href: "#child7"
        },
        {
            text: "内容模型",
            href: "#child8"
        },
        {
            text: "工作流",
            href: "#child9"
        },
        {
            text: "数据源",
            href: "#child10"
        },
        {
            text: "菜单",
            href: "#child11"
        },
        {
            text: "词语过滤",
            href: "#child12"
        },
        {
            text: "关键词链接",
            href: "#child13"
        },
        {
            text: "来源",
            href: "#child14"
        },
        {
            text: "Tags",
            href: "#child15"
        },
        {
            text: "模板",
            href: "#child16"
        },
        {
            text: "数据库",
            href: "#child17"
        },
        {
            text: "计划任务",
            href: "#child18"
        },
        {
            text: "附件管理",
            href: "#child19"
        },
        {
            text: "数据导入",
            href: "#child20"
        },
        {
            text: "IP禁止",
            href: "#child21"
        },
        {
            text: "操作日志",
            href: "#child22"
        },
        {
            text: "木马扫描",
            href: "#child23"
        },
        {
            text: "发布网页",
            href: "#child24"
        },
        {
            text: "批注管理",
            href: "#child25"
        },
        {
            text: "内容操作日志",
            href: "#child26"
        },
        {
            text: "点击排行",
            href: "#child27"
        },
        {
            text: "评论排行",
            href: "#child28"
        },
        {
            text: "网站地图",
            href: "#child29"
        },
        {
            text: "百度新闻源",
            href: "#child30"
        },
        {
            text: "内容管理",
            href: "#child31"
        },
        {
            text: "我的内容",
            href: "#child32",
            tags: ["0"],
            nodes: [{
                text: "my content"
            }]
        }]
     },
    {
        text: "会员",
        href: "#parent2",
        nodes: [{
            text: "设置",
            href: "#child1"
        },
        {
            text: "会员管理",
            href: "#child2"
        },
        {
            text: "会员审核",
            href: "#child3"
        },
        {
            text: "用户组管理",
            href: "#child4"
        },
        {
            text: "登陆日志",
            href: "#child1"
        }]
    },
    {
        text: "文章",
        href: "#parent3",
        nodes: [{
            text: "文章管理",
            href: "#child1"
        },
        {
        	text: "文章生成",
            href: "#child2"
        },
        {
        	text: "投稿管理",
            href: "#child3"
        },
        {
        	text: "浏览",
            href: "#child4"
        },
        {
        	text: "添加",
            href: "#child5"
        },
        {
        	text: "修改",
            href: "#child6"
        },
        {
        	text: "查看",
            href: "#child7"
        },
        {
        	text: "删除",
            href: "#child8"
        },
        {
        	text: "发布",
            href: "#child9"
        },
        {
        	text: "撒搞",
            href: "#child10"
        },
        {
        	text: "复制",
            href: "#child11"
        },
        {
        	text: "引用",
            href: "#child12"
        },
        {
        	text: "移动",
            href: "#child13"
        },
        {
        	text: "搜素",
            href: "#child14"
        },
        {
        	text: "审核",
            href: "#child15"
        },
        {
        	text: "回收站",
            href: "#child16"
        }]
    },
    {
        text: "区块",
        href: "#parent4",
        nodes:[{
        	text: "区块管理",
            href: "#child1"
        },
        {
        	text: "内容维护",
            href: "#child2"
        },
        {
        	text: "分类管理",
            href: "#child3"
        }]
    },
    {
        text: "组图",
        href: "#parent5",
        nodes: [{
            text: "组图管理",
            href: "#child1"
        },
        {
        	text: "组图生成",
            href: "#child2"
        },
        {
        	text: "浏览",
            href: "#child3"
        },
        {
        	text: "添加",
            href: "#child4"
        },
        {
        	text: "修改",
            href: "#child5"
        },
        {
        	text: "查看",
            href: "#child6"
        },
        {
        	text: "删除",
            href: "#child7"
        },
        {
        	text: "发布",
            href: "#child8"
        },
        {
        	text: "撒搞",
            href: "#child9"
        },
        {
        	text: "复制",
            href: "#child10"
        },
        {
        	text: "引用",
            href: "#child11"
        },
        {
        	text: "移动",
            href: "#child12"
        },
        {
        	text: "搜素",
            href: "#child13"
        },
        {
        	text: "审核",
            href: "#child14"
        },
        {
        	text: "回收站",
            href: "#child15"
        }]
    },
    {
        text: "视频",
        href: "#parent6",
        nodes: [{
            text: "视频生成",
            href: "#child1"
        },
        {
        	text: "视频管理",
            href: "#child2"
        },
        {
        	text: "浏览",
            href: "#child3"
        },
        {
        	text: "添加",
            href: "#child4"
        },
        {
        	text: "修改",
            href: "#child5"
        },
        {
        	text: "查看",
            href: "#child6"
        },
        {
        	text: "删除",
            href: "#child7"
        },
        {
        	text: "发布",
            href: "#child8"
        },
        {
        	text: "撒搞",
            href: "#child9"
        },
        {
        	text: "复制",
            href: "#child10"
        },
        {
        	text: "引用",
            href: "#child11"
        },
        {
        	text: "移动",
            href: "#child12"
        },
        {
        	text: "搜素",
            href: "#child13"
        },
        {
        	text: "审核",
            href: "#child14"
        },
        {
        	text: "回收站",
            href: "#child15"
        }]
    },
    {
        text: "活动",
        href: "#parent7",
        nodes: [{
            text: "活动管理",
            href: "#child1"
        },
        {
        	text: "报名管理",
            href: "#child2"
        },
        {
        	text: "生成html",
            href: "#child3"
        },
        {
        	text: "浏览",
            href: "#child4"
        },
        {
        	text: "添加",
            href: "#child5"
        },
        {
        	text: "修改",
            href: "#child6"
        },
        {
        	text: "查看",
            href: "#child7"
        },
        {
        	text: "删除",
            href: "#child8"
        },
        {
        	text: "发布",
            href: "#child9"
        },
        {
        	text: "撒搞",
            href: "#child10"
        },
        {
        	text: "复制",
            href: "#child11"
        },
        {
        	text: "引用",
            href: "#child12"
        },
        {
        	text: "移动",
            href: "#child13"
        },
        {
        	text: "搜素",
            href: "#child14"
        },
        {
        	text: "审核",
            href: "#child15"
        },
        {
        	text: "回收站",
            href: "#child16"
        }]
    },
    {
        text: "投票",
        href: "#parent8",
        nodes: [{
            text: "投票管理",
            href: "#child1"
        },
        {
        	text: "生成html",
            href: "#child2"
        },
        {
        	text: "浏览",
            href: "#child3"
        },
        {
        	text: "添加",
            href: "#child4"
        },
        {
        	text: "修改",
            href: "#child5"
        },
        {
        	text: "查看",
            href: "#child6"
        },
        {
        	text: "删除",
            href: "#child7"
        },
        {
        	text: "发布",
            href: "#child8"
        },
        {
        	text: "撒搞",
            href: "#child9"
        },
        {
        	text: "复制",
            href: "#child10"
        },
        {
        	text: "引用",
            href: "#child11"
        },
        {
        	text: "移动",
            href: "#child12"
        },
        {
        	text: "搜素",
            href: "#child13"
        },
        {
        	text: "审核",
            href: "#child14"
        },
        {
        	text: "回收站",
            href: "#child15"
        }]
    },
    {
        text: "评论",
        href: "#parent9"
    },
    {
        text: "DIGG",
        href: "#parent10"
    },
    {
        text: "留言本",
        href: "#parent11"
    },
    {
        text: "心情",
        href: "#parent12"
    },
    {
        text: "文章推送",
        href: "#parent13"
    },
    {
        text: "RSS",
        href: "#parent14"
    },
    {
        text: "搜索",
        href: "#parent15"
    },
    {
        text: "专栏",
        href: "#parent16"
    },
    {
        text: "文章采集",
        href: "#parent17"
    },
    {
        text: "WAP",
        href: "#parent18"
    },
    {
        text: "转码",
        href: "#parent19"
    },
    {
        text: "快编",
        href: "#parent19"
    },
    {
        text: "媒资",
        href: "#parent20"
    },
    {
        text: "DIGG",
        href: "#parent21"
    }],
    
    t = '[{"text": "父节点 1","nodes": [{"text": "子节点 1","nodes": [{"text": "孙子节点 1"},{"text": "孙子节点 2"}]},{"text": "子节点 2"}]},{"text": "父节点 2"},{"text": "父节点 3"},{"text": "父节点 4"},{"text": "父节点 5"}]';
    $("#treeview1").treeview({
    	levels: 1,
        data: o,
        color: "#666",
        expandIcon: "glyphicon glyphicon-plus",
        collapseIcon: "glyphicon glyphicon-minus",
        nodeIcon: "glyphicon glyphicon-user",
        showTags: !0
    }),
    $("#treeview2").treeview({
        levels: 1,
        injectStyle: true,
        data: o,
        color: "#666",
        expandIcon: "glyphicon glyphicon-plus",
        collapseIcon: "glyphicon glyphicon-minus",
        nodeIcon: "glyphicon glyphicon-user",
        showTags: !0
    })
    
});