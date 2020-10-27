
module.exports = {
    title: '前端知识总结',
    description: '冲呀！大前端。',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `https://s1.ax1x.com/2020/06/21/N11p8I.th.jpg` }]
    ],
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: '主页', link: '/' },
            {
                text: '知识图谱',
                items: [
                    { text: '前端基础', link: '/feInterview/' },
                    { text: '前端框架', link: '/feFramework/' },
                    { text: '计算机基础', link: '/csInterview/' },
                    { text: '算法与数据结构', link: '/JSalgorithm/' },
                    { text: 'JavaScript手搓实现', link: '/JSachieve/' },
                ]
            },
            { text: '参考', link: '/about/' },
            { text: 'Github', link: 'https://www.github.com/nonentityboy' },
        ],
        sidebar: {
            '/feInterview/': [
                ['JS_base', 'JS基础']
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