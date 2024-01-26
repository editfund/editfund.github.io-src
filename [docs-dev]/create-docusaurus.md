#

```
npm config get registry
npm config set registry https://registry.npmmirror.com
npm install --global create-docusaurus

create-docusaurus@latest editfund.github.io-src-ts classic
```
# yarn
原因是，本机的yarn 版本为3.2.2，高于2.x版本已废除registy关键字。 猜想可能是在新版本中此配置项改名了，使用 yarn config 列出配置项：
已改名成：npmRegistryServer

yarn config set npmRegistryServer https://registry.npmmirror.com

// 查询源
yarn config get npmRegistryServer

// 恢复官方源
yarn config set npmRegistryServer https://registry.yarnpkg.com

```
yarn set version stable
yarn config get npmRegistryServer
yarn config set npmRegistryServer https://registry.npmmirror.com
yarn config get npmRegistryServer
yarn dlx create-docusaurus
```