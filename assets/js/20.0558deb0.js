(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{379:function(s,a,t){"use strict";t.r(a);var e=t(25),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"git-ssh-key-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-ssh-key-配置"}},[s._v("#")]),s._v(" Git SSH Key 配置")]),s._v(" "),t("p",[s._v("user name和email：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Nonentityboy"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1138580559@qq.com"')]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("不输入账户/邮箱时，返回当前username、email。")])]),s._v(" "),t("p",[s._v("查看是否已经有了ssh密钥，有则需备份删除。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\n")])])]),t("p",[s._v("生成密钥")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),s._v("\n// 按3个回车，密码为空\nYour identification has been saved "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nYour public key has been saved "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])])]),t("p",[s._v("查看密钥：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cat ~/.ssh/id_rsa.pub\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);