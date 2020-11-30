module.exports = {
    title: '前端知识图谱',
    description: '男儿的事业原本要昼夜不停',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `https://s1.ax1x.com/2020/06/21/N11p8I.th.jpg` }]
    ],
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: '主页', link: '/' },
            {
                text: '前端笔记',
                items: [
                    { text: '前端基础', link: '/feInterview/' },
                    { text: '前端框架', link: '/feFramework/' },
                    { text: '浏览器相关', link: '/browser/' },
                ]
            },
            {
                text: '计算机基础',
                items: [
                    { text: '计算机网络', link: '/csInterview/' },
                    { text: '数据结构', link: '/JSalgorithm/' },
                ]
            },
            { text: 'JS Coding', link: '/JSachieve/' },
            { text: '参考', link: '/about/' },
            { text: 'Github', link: 'https://www.github.com/nonentityboy' },
        ],
        sidebar: {
            '/feInterview/': [
                ['CSS', 'CSS'],
                ['JS_base', 'JS基础']
            ],
            '/JSalgorithm/': [
                ['array', '数组'],
                ['string', '字符串']
            ],
            '/feFramework/': [
                ['react', 'React']
            ],
            '/JSachieve/': [
                ['array', '数组'],
                ['string', '字符串']
            ],
            '/browser/': [
                ['chrome', 'Chrome']
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        themeConfig: {
            logo: 'https://s1.ax1x.com/2020/06/21/N11p8I.th.jpg',
            sidebar: 'auto'
        }
    },
}