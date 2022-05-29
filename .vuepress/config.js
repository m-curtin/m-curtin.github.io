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
                link: '/feInterview/'
            },
            {
                text: '计算机基础',
                link: '/csInterview/'
            },
            { text: '数据结构与算法', link: '/JSalgorithm/' },
            { text: 'JS 常用实现', link: '/JSachieve/' },
            {
                text: '生产工具',
                link: '/Tools/'
            },
            { text: '参考', link: '/about/' },
            { text: 'Github', link: 'https://www.github.com/nonentityboy' },
        ],
        sidebar: {
            '/feInterview/': [
                ['css', 'CSS'],
                ['JS_base', 'JavaScript'],
                ['vue', 'Vue'],
                ['react', 'React'],
                ['browserBase', '浏览器相关'],
                ['chrome', 'Chrome']
            ],
            '/JSalgorithm/': [
                ['regExr', '正则'],
                ['array', '数组'],
                ['string', '字符串'],
                ['bsTree', '二叉树'],
                ['linkedList', '链表'],
            ],
            '/Tools/': [
                ['git', 'Git'],
                ['esp8266', 'ESP8266'],
            ],
            '/JSachieve/': [
                ['normalCode', '常见实现'],
            ],
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        themeConfig: {
            logo: 'https://s1.ax1x.com/2020/06/21/N11p8I.th.jpg',
            sidebar: 'auto'
        }
    },
}