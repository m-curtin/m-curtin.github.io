# 生产工具

## Git SSH Key 配置

user name和email：

```bash
git config --global user.name "Nonentityboy"
git config --global user.email "1138580559@qq.com"
```

> 不输入账户/邮箱时，返回当前username、email。

查看是否已经有了ssh密钥，如果没有密钥则不会有此文件夹，有则备份删除。

```bash
cd ~/.ssh
```

生成密钥

```bash
ssh-keygen -t rsa -C "email"
// 按3个回车，密码为空
Your identification has been saved in ...
Your public key has been saved in ....
```

查看密钥：
```
cat ~/.ssh/id_rsa.pub
```

