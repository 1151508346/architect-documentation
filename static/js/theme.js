
console.log('theme')

const menuTemplate = `
<ul class='menu-ul' style='overflow: initial;'>
  <li style='float:none;'><a href="../index.html">0.api</a></li>
  <li style='float:none;'><a href="../html/0.Async.html">0.Async</a></li>
  <li style='float:none;'><a href="../html/0.module.html">0.module</a></li>
  <li style='float:none;'><a href="../html/1.ES2015.html">1.ES2015</a></li>
  <li style='float:none;'><a href="../html/2.Promise.html">2.Promise</a></li>
  <li style='float:none;'><a href="../html/3.Node.html">3.Node</a></li>
  <li style='float:none;'><a href="../html/4.NodeInstall.html">4.NodeInstall</a></li>
  <li style='float:none;'><a href="../html/5.REPL.html">5.REPL</a></li>
  <li style='float:none;'><a href="../html/6.NodeCore.html">6.NodeCore</a></li>
  <li style='float:none;'><a href="../html/7.module&NPM.html">7.module&NPM</a></li>
  <li style='float:none;'><a href="../html/8.Encoding.html">8.Encoding</a></li>
  <li style='float:none;'><a href="../html/9.Buffer.html">9.Buffer</a></li>
  <li style='float:none;'><a href="../html/10.fs.html">10.fs</a></li>
  <li style='float:none;'><a href="../html/11.Stream-1.html">11.Stream-1</a></li>
  <li style='float:none;'><a href="../html/11.Stream-2.html">11.Stream-2</a></li>
  <li style='float:none;'><a href="../html/11.Stream-3.html">11.Stream-3</a></li>
  <li style='float:none;'><a href="../html/11.Stream-4.html">11.Stream-4</a></li>
  <li style='float:none;'><a href="../html/12-Network-2.html">12-Network-2</a></li>
  <li style='float:none;'><a href="../html/12.NetWork-3.html">12.NetWork-3</a></li>
  <li style='float:none;'><a href="../html/12.Network-1.html">12.Network-1</a></li>
  <li style='float:none;'><a href="../html/13.tcp.html">13.tcp</a></li>
  <li style='float:none;'><a href="../html/14.http-1.html">14.http-1</a></li>
  <li style='float:none;'><a href="../html/14.http-2.html">14.http-2</a></li>
  <li style='float:none;'><a href="../html/15.compress.html">15.compress</a></li>
  <li style='float:none;'><a href="../html/16.crypto.html">16.crypto</a></li>
  <li style='float:none;'><a href="../html/17.process.html">17.process</a></li>
  <li style='float:none;'><a href="../html/18.yargs.html">18.yargs</a></li>
  <li style='float:none;'><a href="../html/19.cache.html">19.cache</a></li>
  <li style='float:none;'><a href="../html/20.action.html">20.action</a></li>
  <li style='float:none;'><a href="../html/21.https.html">21.https</a></li>
  <li style='float:none;'><a href="../html/22.cookie.html">22.cookie</a></li>
  <li style='float:none;'><a href="../html/23.session.html">23.session</a></li>
  <li style='float:none;'><a href="../html/24.express-1.html">24.express-1</a></li>
  <li style='float:none;'><a href="../html/24.express-2.html">24.express-2</a></li>
  <li style='float:none;'><a href="../html/24.express-3.html">24.express-3</a></li>
  <li style='float:none;'><a href="../html/24.express-4.html">24.express-4</a></li>
  <li style='float:none;'><a href="../html/25.koa-1.html">25.koa-1</a></li>
  <li style='float:none;'><a href="../html/26.webpack-1-basic.html">26.webpack-1-basic</a></li>
  <li style='float:none;'><a href="../html/26.webpack-2-optimize.html">26.webpack-2-optimize</a></li>
  <li style='float:none;'><a href="../html/26.webpack-3-file.html">26.webpack-3-file</a></li>
  <li style='float:none;'<a href="../html/26.webpack-4.tapable.html">26.webpack-4.tapable</a></li>
  <li style='float:none;'><a href="../html/26.webpack-5-AST.html">26.webpack-5-AST</a></li>
  <li style='float:none;'><a href="../html/26.webpack-6-sources.html">26.webpack-6-sources</a></li>
  <li style='float:none;'><a href="../html/26.webpack-7-loader.html">26.webpack-7-loader</a></li>
  <li style='float:none;'><a href="../html/26.webpack-8-plugin.html">26.webpack-8-plugin</a></li>
  <li style='float:none;'><a href="../html/26.webpack-9-hand.html">26.webpack-9-hand</a></li>
  <li style='float:none;'><a href="../html/26.webpack-10-prepare.html">26.webpack-10-prepare</a></li>
  <li style='float:none;'><a href="../html/28.redux.html">28.redux</a></li>
  <li style='float:none;'><a href="../html/28.redux-jwt-back.html">28.redux-jwt-back</a></li>
  <li style='float:none;'><a href="../html/28.redux-jwt-front.html">28.redux-jwt-front</a></li>
  <li style='float:none;'><a href="../html/29.mongodb-1.html">29.mongodb-1</a></li>
  <li style='float:none;'><a href="../html/29.mongodb-2.html">29.mongodb-2</a></li>
  <li style='float:none;'><a href="../html/29.mongodb-3.html">29.mongodb-3</a></li>
  <li style='float:none;'><a href="../html/29.mongodb-4.html">29.mongodb-4</a></li>
  <li style='float:none;'><a href="../html/29.mongodb-5.html">29.mongodb-5</a></li>
  <li style='float:none;'><a href="../html/29.mongodb-6.html">29.mongodb-6</a></li>
  <li style='float:none;'><a href="../html/30.cms-1-mysql.html">30.cms-1-mysql</a></li>
  <li style='float:none;'><a href="../html/30.cms-2-mysql.html">30.cms-2-mysql</a></li>
  <li style='float:none;'><a href="../html/30.cms-3-mysql.html">30.cms-3-mysql</a></li>
  <li style='float:none;'><a href="../html/30.cms-4-nunjucks.html">30.cms-4-nunjucks</a></li>
  <li style='float:none;'><a href="../html/30.cms-5-mock.html">30.cms-5-mock</a></li>
  <li style='float:none;'><a href="../html/30.cms-6-egg.html">30.cms-6-egg</a></li>
  <li style='float:none;'><a href="../html/30.cms-7-api.html">30.cms-7-api</a></li>
  <li style='float:none;'><a href="../html/30.cms-8-roadhog.html">30.cms-8-roadhog</a></li>
  <li style='float:none;'><a href="../html/30.cms-9-yaml.html">30.cms-9-yaml</a></li>
  <li style='float:none;'><a href="../html/30.cms-10-umi.html">30.cms-10-umi</a></li>
  <li style='float:none;'><a href="../html/30.cms-12-dva.html">30.cms-12-dva</a></li>
  <li style='float:none;'><a href="../html/30.cms-13-dva-ant.html">30.cms-13-dva-ant</a></li>
  <li style='float:none;'><a href="../html/30.cms-14-front.html">30.cms-14-front</a></li>
  <li style='float:none;'><a href="../html/30.cms-15-deploy.html">30.cms-15-deploy</a></li>
  <li style='float:none;'><a href="../html/31.dva.html">31.dva</a></li>
  <li style='float:none;'><a href="../html/31.cms-13-dva-antdesign.html">31.cms-13-dva-antdesign</a></li>
  <li style='float:none;'><a href="../html/33.redis.html">33.redis</a></li>
  <li style='float:none;'><a href="../html/34.unittest.html">34.unittest</a></li>
  <li style='float:none;'><a href="../html/35.jwt.html">35.jwt</a></li>
  <li style='float:none;'><a href="../html/36.websocket-1.html">36.websocket-1</a></li>
  <li style='float:none;'><a href="../html/36.websocket-2.html">36.websocket-2</a></li>
  <li style='float:none;'><a href="../html/38.chat-api-1.html">38.chat-api-1</a></li>
  <li style='float:none;'><a href="../html/38.chat-api-2.html">38.chat-api-2</a></li>
  <li style='float:none;'><a href="../html/38.chat-3.html">38.chat-3</a></li>
  <li style='float:none;'><a href="../html/38.chat-api-3.html">38.chat-api-3</a></li>
  <li style='float:none;'><a href="../html/38.chat.html">38.chat</a></li>
  <li style='float:none;'><a href="../html/38.chat2.html">38.chat2</a></li>
  <li style='float:none;'><a href="../html/38.chat2.html">38.chat2</a></li>
  <li style='float:none;'><a href="../html/39.crawl-0.html">39.crawl-0</a></li>
  <li style='float:none;'><a href="../html/39.crawl-1.html">39.crawl-1</a></li>
  <li style='float:none;'><a href="../html/39.crawl-2.html">39.crawl-2</a></li>
  <li style='float:none;'><a href="../html/40.deploy.html">40.deploy</a></li>
  <li style='float:none;'><a href="../html/41.safe.html">41.safe</a></li>
  <li style='float:none;'><a href="../html/42.test.html">42.test</a></li>
  <li style='float:none;'><a href="../html/43.nginx.html">43.nginx</a></li>
  <li style='float:none;'><a href="../html/44.enzyme.html">44.enzyme</a></li>
  <li style='float:none;'><a href="../html/45.docker.html">45.docker</a></li>
  <li style='float:none;'><a href="../html/46.elastic.html">46.elastic</a></li>
  <li style='float:none;'><a href="../html/47.oauth.html">47.oauth</a></li>
  <li style='float:none;'><a href="../html/48.wxpay.html">48.wxpay</a></li>
  <li style='float:none;'><a href="../html/index.html">index</a></li>
  <li style='float:none;'><a href="../html/52.UML.html">52.UML</a></li>
  <li style='float:none;'><a href="../html/53.design.html">53.design</a></li>
  <li style='float:none;'><a href="../html/index.html">index</a></li>
  <li style='float:none;'><a href="../html/54.linux.html">54.linux</a></li>
  <li style='float:none;'><a href="../html/57.ts.html">57.ts</a></li>
  <li style='float:none;'><a href="../html/56.react-ssr.html">56.react-ssr</a></li>
  <li style='float:none;'><a href="../html/58.ts_react.html">58.ts_react</a></li>
  <li style='float:none;'><a href="../html/59.ketang.html">59.ketang</a></li>
  <li style='float:none;'><a href="../html/59.ketang2.html">59.ketang2</a></li>
  <li style='float:none;'><a href="../html/61.1.devops-linux.html">61.1.devops-linux</a></li>
  <li style='float:none;'><a href="../html/61.2.devops-vi.html">61.2.devops-vi</a></li>
  <li style='float:none;'><a href="../html/61.3.devops-user.html">61.3.devops-user</a></li>
  <li style='float:none;'><a href="../html/61.4.devops-auth.html">61.4.devops-auth</a></li>
  <li style='float:none;'><a href="../html/61.5.devops-shell.html">61.5.devops-shell</a></li>
  <li style='float:none;'><a href="../html/61.6.devops-install.html">61.6.devops-install</a></li>
  <li style='float:none;'><a href="../html/61.7.devops-system.html">61.7.devops-system</a></li>
  <li style='float:none;'><a href="../html/61.8.devops-service.html">61.8.devops-service</a></li>
  <li style='float:none;'><a href="../html/61.9.devops-network.html">61.9.devops-network</a></li>
  <li style='float:none;'><a href="../html/61.10.devops-nginx.html">61.10.devops-nginx</a></li>
  <li style='float:none;'><a href="../html/61.11.devops-docker.html">61.11.devops-docker</a></li>
  <li style='float:none;'><a href="../html/61.12.devops-jekins.html">61.12.devops-jekins</a></li>
  <li style='float:none;'><a href="../html/61.13.devops-groovy.html">61.13.devops-groovy</a></li>
  <li style='float:none;'><a href="../html/61.14.devops-php.html">61.14.devops-php</a></li>
  <li style='float:none;'><a href="../html/61.15.devops-java.html">61.15.devops-java</a></li>
  <li style='float:none;'><a href="../html/61.16.devops-node.html">61.16.devops-node</a></li>
  <li style='float:none;'><a href="../html/61.17.devops-k8s.html">61.17.devops-k8s</a></li>
  <li style='float:none;'><a href="../html/62.1.react-basic.html">62.1.react-basic</a></li>
  <li style='float:none;'><a href="../html/62.2.react-state.html">62.2.react-state</a></li>
  <li style='float:none;'><a href="../html/62.3.react-high.html">62.3.react-high</a></li>
  <li style='float:none;'><a href="../html/62.4.react-optimize.html">62.4.react-optimize</a></li>
  <li style='float:none;'><a href="../html/62.5.react-hooks.html">62.5.react-hooks</a></li>
  <li style='float:none;'><a href="../html/62.6.react-immutable.html">62.6.react-immutable</a></li>
  <li style='float:none;'><a href="../html/62.7.react-mobx.html">62.7.react-mobx</a></li>
  <li style='float:none;'><a href="../html/62.8.react-source.html">62.8.react-source</a></li>
  <li style='float:none;'><a href="../html/63.1.redux.html">63.1.redux</a></li>
  <li style='float:none;'><a href="../html/63.2.redux-middleware.html">63.2.redux-middleware</a></li>
  <li style='float:none;'><a href="../html/63.3.redux-hooks.html">63.3.redux-hooks</a></li>
  <li style='float:none;'><a href="../html/63.4.redux-saga.html">63.4.redux-saga</a></li>
  <li style='float:none;'><a href="../html/63.5.redux-saga-hand.html">63.5.redux-saga-hand</a></li>
  <li style='float:none;'><a href="../html/64.1.router.html">64.1.router</a></li>
  <li style='float:none;'><a href="../html/64.2.router-connected.html">64.2.router-connected</a></li>
  <li style='float:none;'><a href="../html/65.1.typescript.html">65.1.typescript</a></li>
  <li style='float:none;'><a href="../html/65.2.typescript.html">65.2.typescript</a></li>
  <li style='float:none;'><a href="../html/65.3.typescript.html">65.3.typescript</a></li>
  <li style='float:none;'><a href="../html/65.4.antd.html">65.4.antd</a></li>
  <li style='float:none;'><a href="../html/65.4.definition.html">65.4.definition</a></li>
  <li style='float:none;'><a href="../html/66-1.vue-base.html">66-1.vue-base</a></li>
  <li style='float:none;'><a href="../html/66-2.vue-component.html">66-2.vue-component</a></li>
  <li style='float:none;'><a href="../html/66-3.vue-cli3.0.html">66-3.vue-cli3.0</a></li>
  <li style='float:none;'><a href="../html/66-4.$message组件.html">66-4.$message组件</a></li>
  <li style='float:none;'><a href="../html/66-5.Form组件.html">66-5.Form组件</a></li>
  <li style='float:none;'><a href="../html/66-6.tree.html">66-6.tree</a></li>
  <li style='float:none;'><a href="../html/66-7.vue-router-apply.html">66-7.vue-router-apply</a></li>
  <li style='float:none;'><a href="../html/66-8.axios-apply.html">66-8.axios-apply</a></li>
  <li style='float:none;'><a href="../html/66-9.vuex-apply.html">66-9.vuex-apply</a></li>
  <li style='float:none;'><a href="../html/66-10.jwt-vue.html">66-10.jwt-vue</a></li>
  <li style='float:none;'><a href="../html/66-11.vue-ssr.html">66-11.vue-ssr</a></li>
  <li style='float:none;'><a href="../html/66-12.nuxt-apply.html">66-12.nuxt-apply</a></li>
  <li style='float:none;'><a href="../html/66-13.pwa.html">66-13.pwa</a></li>
  <li style='float:none;'><a href="../html/66-14.vue单元测试.html">66-14.vue单元测试</a></li>
  <li style='float:none;'><a href="../html/66-15.权限校验.html">66-15.权限校验</a></li>
  <li style='float:none;'><a href="../html/67-1-network.html">67-1-network</a></li>
  <li style='float:none;'><a href="../html/68-2-wireshark.html">68-2-wireshark</a></li>
  <li style='float:none;'><a href="../html/7.npm2.html">7.npm2</a></li>
  <li style='float:none;'><a href="../html/69-hooks.html">69-hooks</a></li>
  <li style='float:none;'><a href="../html/70-deploy.html">70-deploy</a></li>
  <li style='float:none;'><a href="../html/71-hmr.html">71-hmr</a></li>
  <li style='float:none;'><a href="../html/72.deploy.html">72.deploy</a></li>
  <li style='float:none;'><a href="../html/73.import.html">73.import</a></li>
  <li style='float:none;'><a href="../html/74.mobile.html">74.mobile</a></li>
  <li style='float:none;'><a href="../html/75.webpack-1.文件分析.html">75.webpack-1.文件分析</a></li>
  <li style='float:none;'><a href="../html/75.webpack-2.loader.html">75.webpack-2.loader</a></li>
  <li style='float:none;'><a href="../html/75.webpack-3.源码流程.html">75.webpack-3.源码流程</a></li>
  <li style='float:none;'><a href="../html/75.webpack-4.tapable.html">75.webpack-4.tapable</a></li>
  <li style='float:none;'><a href="../html/75.webpack-5.prepare.html">75.webpack-5.prepare</a></li>
  <li style='float:none;'><a href="../html/75.webpack-6.resolve.html">75.webpack-6.resolve</a></li>
  <li style='float:none;'><a href="../html/75.webpack-7.loader.html">75.webpack-7.loader</a></li>
  <li style='float:none;'><a href="../html/75.webpack-8.module.html">75.webpack-8.module</a></li>
  <li style='float:none;'><a href="../html/75.webpack-9.chunk.html">75.webpack-9.chunk</a></li>
  <li style='float:none;'><a href="../html/75.webpack-10.asset.html">75.webpack-10.asset</a></li>
  <li style='float:none;'><a href="../html/75.webpack-11.实现.html">75.webpack-11.实现</a></li>
  <li style='float:none;'><a href="../html/76.react_optimize.html">76.react_optimize</a></li>
  <li style='float:none;'><a href="../html/77.ts_ketang_back.html">77.ts_ketang_back</a></li>
  <li style='float:none;'><a href="../html/77.ts_ketang_front.html">77.ts_ketang_front</a></li>
  <li style='float:none;'><a href="../html/78.vue-domdiff.html">78.vue-domdiff</a></li>
  <li style='float:none;'><a href="../html/79.grammar.html">79.grammar</a></li>
  <li style='float:none;'><a href="../html/80.tree.html">80.tree</a></li>
  <li style='float:none;'><a href="../html/81.axios.html">81.axios</a></li>
  <li style='float:none;'><a href="../html/82.1.react.html">82.1.react</a></li>
  <li style='float:none;'><a href="../html/82.2.react-high.html">82.2.react-high</a></li>
  <li style='float:none;'><a href="../html/82.3.react-router.html">82.3.react-router</a></li>
  <li style='float:none;'><a href="../html/82.4.redux.html">82.4.redux</a></li>
  <li style='float:none;'><a href="../html/82.5.redux_middleware.html">82.5.redux_middleware</a></li>
  <li style='float:none;'><a href="../html/82.6.connected.html">82.6.connected</a></li>
  <li style='float:none;'><a href="../html/82.7.saga.html">82.7.saga</a></li>
  <li style='float:none;'><a href="../html/82.8.dva.html">82.8.dva</a></li>
  <li style='float:none;'><a href="../html/82.8.dva-source.html">82.8.dva-source</a></li>
  <li style='float:none;'><a href="../html/82.9.roadhog.html">82.9.roadhog</a></li>
  <li style='float:none;'><a href="../html/82.10.umi.html">82.10.umi</a></li>
  <li style='float:none;'><a href="../html/82.11.antdesign.html">82.11.antdesign</a></li>
  <li style='float:none;'><a href="../html/82.12.ketang-front.html">82.12.ketang-front</a></li>
  <li style='float:none;'><a href="../html/82.12.ketang-back.html">82.12.ketang-back</a></li>
  <li style='float:none;'><a href="../html/83.upload.html">83.upload</a></li>
  <li style='float:none;'><a href="../html/84.graphql.html">84.graphql</a></li>
  <li style='float:none;'><a href="../html/85.antpro.html">85.antpro</a></li>
  <li style='float:none;'><a href="../html/86.1.uml.html">86.1.uml</a></li>
  <li style='float:none;'><a href="../html/86.2.design.html">86.2.design</a></li>
  <li style='float:none;'><a href="../html/87.postcss.html">87.postcss</a></li>
  <li style='float:none;'><a href="../html/88.react16-1.html">88.react16-1</a></li>
  <li style='float:none;'><a href="../html/89.nextjs.html">89.nextjs</a></li>
  <li style='float:none;'><a href="../html/90.react-test.html">90.react-test</a></li>
  <li style='float:none;'><a href="../html/91.react-ts.html">91.react-ts</a></li>
  <li style='float:none;'><a href="../html/92.rbac.html">92.rbac</a></li>
  <li style='float:none;'><a href="../html/93.tsnode.html">93.tsnode</a></li>
  <li style='float:none;'><a href="../html/94.1.JavaScript.html">94.1.JavaScript</a></li>
  <li style='float:none;'><a href="../html/94.2.JavaScript.html">94.2.JavaScript</a></li>
  <li style='float:none;'><a href="../html/94.3.MODULE.html">94.3.MODULE</a></li>
  <li style='float:none;'><a href="../html/94.4.EventLoop.html">94.4.EventLoop</a></li>
  <li style='float:none;'><a href="../html/94.5.文件上传.html">94.5.文件上传</a></li>
  <li style='float:none;'><a href="../html/94.6.https.html">94.6.https</a></li>
  <li style='float:none;'><a href="../html/94.7. nginx.html">94.7. nginx</a></li>
  <li style='float:none;'><a href="../html/95.1. react.html">95.1. react</a></li>
  <li style='float:none;'><a href="../html/95.2.react.html">95.2.react</a></li>
  <li style='float:none;'><a href="../html/96.1.react16.html">96.1.react16</a></li>
  <li style='float:none;'><a href="../html/96.2.fiber.html">96.2.fiber</a></li>
  <li style='float:none;'><a href="../html/96.3.fiber.html">96.3.fiber</a></li>
  <li style='float:none;'><a href="../html/97.serverless.html">97.serverless</a></li>
  <li style='float:none;'><a href="../html/98.websocket.html">98.websocket</a></li>
  <li style='float:none;'><a href="../html/100.1.react-basic.html">100.1.react-basic</a></li>
  <li style='float:none;'><a href="../html/101.1.monitor.html">101.1.monitor</a></li>
  <li style='float:none;'><a href="../html/101.2.monitor.html">101.2.monitor</a></li>
  <li style='float:none;'><a href="../html/102.java.html">102.java</a></li>
  <li style='float:none;'><a href="../html/103.1.webpack-usage.html">103.1.webpack-usage</a></li>
  <li style='float:none;'><a href="../html/103.2.webpack-bundle.html">103.2.webpack-bundle</a></li>
  <li style='float:none;'><a href="../html/103.3.webpack-ast.html">103.3.webpack-ast</a></li>
  <li style='float:none;'><a href="../html/103.4.webpack-flow.html">103.4.webpack-flow</a></li>
  <li style='float:none;'><a href="../html/103.5.webpack-loader.html">103.5.webpack-loader</a></li>
  <li style='float:none;'><a href="../html/103.6.webpack-tapable.html">103.6.webpack-tapable</a></li>
  <li style='float:none;'><a href="../html/103.7.webpack-plugin.html">103.7.webpack-plugin</a></li>
  <li style='float:none;'><a href="../html/103.8.webpack-optimize1.html">103.8.webpack-optimize1</a></li>
  <li style='float:none;'><a href="../html/103.9.webpack-optimize2.html">103.9.webpack-optimize2</a></li>
  <li style='float:none;'><a href="../html/103.10.webpack-hand.html">103.10.webpack-hand</a></li>
  <li style='float:none;'><a href="../html/103.11.webpack-hmr.html">103.11.webpack-hmr</a></li>
  <li style='float:none;'><a href="../html/103.13.splitChunks.html">103.13.splitChunks</a></li>
  <li style='float:none;'><a href="../html/103.14.webpack-sourcemap.html">103.14.webpack-sourcemap</a></li>
  <li style='float:none;'><a href="../html/103.15.webpack-compiler1.html">103.15.webpack-compiler1</a></li>
  <li style='float:none;'><a href="../html/103.15.webpack-compiler2.html">103.15.webpack-compiler2</a></li>
  <li style='float:none;'><a href="../html/103.16.vite.basic.html">103.16.vite.basic</a></li>
  <li style='float:none;'><a href="../html/103.16.vite.source.html">103.16.vite.source</a></li>
  <li style='float:none;'><a href="../html/103.17.polyfill.html">103.17.polyfill</a></li>
  <li style='float:none;'><a href="../html/104.1.binary.html">104.1.binary</a></li>
  <li style='float:none;'><a href="../html/104.2.binary.html">104.2.binary</a></li>
  <li style='float:none;'><a href="../html/105.skeleton.html">105.skeleton</a></li>
  <li style='float:none;'><a href="../html/106.1.react.html">106.1.react</a></li>
  <li style='float:none;'><a href="../html/106.2.react_hooks.html">106.2.react_hooks</a></li>
  <li style='float:none;'><a href="../html/106.3.react_router.html">106.3.react_router</a></li>
  <li style='float:none;'><a href="../html/106.4.redux.html">106.4.redux</a></li>
  <li style='float:none;'><a href="../html/106.5.redux_middleware.html">106.5.redux_middleware</a></li>
  <li style='float:none;'><a href="../html/106.6.connected-react-router.html" >106.6.connected-react-router</a> </li>
  <li style='float:none;'><a href="../html/106.6.redux-first-history.html">106.6.redux-first-history</a></li>
  <li style='float:none;'><a href="../html/106.7.redux-saga.html">106.7.redux-saga</a></li>
  <li style='float:none;'><a href="../html/106.8.dva.html">106.8.dva</a></li>
  <li style='float:none;'><a href="../html/106.9.umi.html">106.9.umi</a></li>
  <li style='float:none;'><a href="../html/106.10.ketang.html">106.10.ketang</a></li>
  <li style='float:none;'><a href="../html/106.11.antdesign.html">106.11.antdesign</a></li>
  <li style='float:none;'><a href="../html/106.12.antpro.html">106.12.antpro</a></li>
  <li style='float:none;'><a href="../html/106.13.router-6.html">106.13.router-6</a></li>
  <li style='float:none;'><a href="../html/107.fiber.html">107.fiber</a></li>
  <li style='float:none;'><a href="../html/108.http.html">108.http</a></li>
  <li style='float:none;'><a href="../html/109.1.webpack_usage.html">109.1.webpack_usage</a></li>
  <li style='float:none;'><a href="../html/109.2.webpack_source.html">109.2.webpack_source</a></li>
  <li style='float:none;'><a href="../html/109.3.dll.html">109.3.dll</a></li>
  <li style='float:none;'><a href="../html/110.nest.js.html">110.nest.js</a></li>
  <li style='float:none;'><a href="../html/111.xstate.html">111.xstate</a></li>
  <li style='float:none;'><a href="../html/112.Form.html">112.Form</a></li>
  <li style='float:none;'><a href="../html/113.redux-saga.html">113.redux-saga</a></li>
  <li style='float:none;'><a href="../html/114.react+typescript.html">114.react+typescript</a></li>
  <li style='float:none;'><a href="../html/115.immer.html">115.immer</a></li>
  <li style='float:none;'><a href="../html/116.pro5.html">116.pro5</a></li>
  <li style='float:none;'><a href="../html/117.css-loader.html">117.css-loader</a></li>
  <li style='float:none;'><a href="../html/118.1.umi-core.html">118.1.umi-core</a></li>
  <li style='float:none;'><a href="../html/119.2.module-federation.html">119.2.module-federation</a></li>
  <li style='float:none;'><a href="../html/119.1.module-federation.html">119.1.module-federation</a></li>
  <li style='float:none;'><a href="../html/120.create-react-app.html">120.create-react-app</a></li>
  <li style='float:none;'><a href="../html/121.react-scripts.html">121.react-scripts</a></li>
  <li style='float:none;'><a href="../html/122.react-optimize.html">122.react-optimize</a></li>
  <li style='float:none;'><a href="../html/123.jsx-runtime.html">123.jsx-runtime</a></li>
  <li style='float:none;'><a href="../html/124.next.js.html">124.next.js</a></li>
  <li style='float:none;'><a href="../html/125.1.linux.html">125.1.linux</a></li>
  <li style='float:none;'><a href="../html/125.2.linux-vi.html">125.2.linux-vi</a></li>
  <li style='float:none;'><a href="../html/125.3.linux-user.html">125.3.linux-user</a></li>
  <li style='float:none;'><a href="../html/125.4.linux-auth.html">125.4.linux-auth</a></li>
  <li style='float:none;'><a href="../html/125.5.linux-shell.html">125.5.linux-shell</a></li>
  <li style='float:none;'><a href="../html/125.6.linux-install.html">125.6.linux-install</a></li>
  <li style='float:none;'><a href="../html/125.7.linux-system.html">125.7.linux-system</a></li>
  <li style='float:none;'><a href="../html/125.8.linux-service.html">125.8.linux-service</a></li>
  <li style='float:none;'><a href="../html/125.9.linux-network.html">125.9.linux-network</a></li>
  <li style='float:none;'><a href="../html/125.10.nginx.html">125.10.nginx</a></li>
  <li style='float:none;'><a href="../html/125.11.docker.html">125.11.docker</a></li>
  <li style='float:none;'><a href="../html/125.12.ci.html">125.12.ci</a></li>
  <li style='float:none;'><a href="../html/125.13.k8s.html">125.13.k8s</a></li>
  <li style='float:none;'><a href="../html/125.14.k8s.html">125.14.k8s</a></li>
  <li style='float:none;'><a href="../html/125.15.k8s.html">125.15.k8s</a></li>
  <li style='float:none;'><a href="../html/125.16.k8s.html">125.16.k8s</a></li>
  <li style='float:none;'><a href="../html/126.11.react-1.html">126.11.react-1</a></li>
  <li style='float:none;'><a href="../html/126.12.react-2.html">126.12.react-2</a></li>
  <li style='float:none;'><a href="../html/126.12.react-3.html">126.12.react-3</a></li>
  <li style='float:none;'><a href="../html/126.12.react-4.html">126.12.react-4</a></li>
  <li style='float:none;'><a href="../html/126.12.react-5.html">126.12.react-5</a></li>
  <li style='float:none;'><a href="../html/127.frontend.html">127.frontend</a></li>
  <li style='float:none;'><a href="../html/128.rollup.html">128.rollup</a></li>
  <li style='float:none;'><a href="../html/129.px2rem-loader.html">129.px2rem-loader</a></li>
  <li style='float:none;'><a href="../html/130.health.html">130.health</a></li>
  <li style='float:none;'><a href="../html/131.hooks.html">131.hooks</a></li>
  <li style='float:none;'><a href="../html/132.keepalive.html">132.keepalive</a></li>
  <li style='float:none;'><a href="../html/133.vue-cli.html">133.vue-cli</a></li>
  <li style='float:none;'><a href="../html/134.react18.html">134.react18</a></li>
  <li style='float:none;'><a href="../html/135.function.html">135.function</a></li>
  <li style='float:none;'><a href="../html/136.toolkit.html">136.toolkit</a></li>
  <li style='float:none;'><a href="../html/137.lerna.html">137.lerna</a></li>
  <li style='float:none;'><a href="../html/138.create-vite.html">138.create-vite</a></li>
  <li style='float:none;'><a href="../html/139.cli.html">139.cli</a></li>
  <li style='float:none;'><a href="../html/140.antd.html">140.antd</a></li>
  <li style='float:none;'><a href="../html/141.react-dnd.html">141.react-dnd</a></li>
  <li style='float:none;'><a href="../html/142.1.link.html">142.1.link</a></li>
  <li style='float:none;'><a href="../html/143.1.gulp.html">143.1.gulp</a></li>
  <li style='float:none;'><a href="../html/143.2.stream.html">143.2.stream</a></li>
  <li style='float:none;'><a href="../html/143.3.gulp.html">143.3.gulp</a></li>
  <li style='float:none;'><a href="../html/144.1.closure.html">144.1.closure</a></li>
  <li style='float:none;'><a href="../html/144.2.v8.html">144.2.v8</a></li>
  <li style='float:none;'><a href="../html/144.3.gc.html">144.3.gc</a></li>
  <li style='float:none;' class="active"><a href="../html/145.react-router-v6.html">145.react-router-v6</a></li>
  <li style='float:none;'><a href="../html/145.react-router-v6.html">145.react-router-v6</a></li>
  <li style='float:none;'><a href="../html/146.browser.html">146.browser</a></li>
  <li style='float:none;'><a href="../html/147.lighthouse.html">147.lighthouse</a></li>
  <li style='float:none;'><a href="../html/148.1.basic.html">148.1.basic</a></li>
  <li style='float:none;'><a href="../html/148.2.basic .html">148.2.basic </a></li>
  <li style='float:none;'><a href="../html/148.3.basic.html">148.3.basic</a></li>
  <li style='float:none;' class="active"><a href="../html/148.4.basic.html">148.4.basic</a></li>
  <li style='float:none;'><a href="../html/148.5.basic.html">148.5.basic</a></li>
  <li style='float:none;'><a href="../html/149.1.vite.html">149.1.vite</a></li>
  <li style='float:none;'><a href="../html/149.2.vite.html">149.2.vite</a></li>
  <li style='float:none;'><a href="../html/149.3.vite.html">149.3.vite</a></li>
  <li style='float:none;'><a href="../html/149.4.vite.html">149.4.vite</a></li>
  <li style='float:none;'><a href="../html/150.react-window.html">150.react-window</a></li>
  <li style='float:none;'><a href="../html/151.react-query.html">151.react-query</a></li>
  <li style='float:none;'><a href="../html/152.useRequest.html">152.useRequest</a></li>
  <li style='float:none;'><a href="../html/153.transition.html">153.transition</a></li>
  <li style='float:none;'><a href="../html/154.emotion.html">154.emotion</a></li>
  <li style='float:none;'><a href="../html/155.1.formily.html">155.1.formily</a></li>
  <li style='float:none;'><a href="../html/155.2.formily.html">155.2.formily</a></li>
  <li style='float:none;'><a href="../html/155.3.formily.html">155.3.formily</a></li>
  <li style='float:none;'><a href="../html/155.3.1.mobx.usage.html">155.3.1.mobx.usage</a></li>
  <li style='float:none;'><a href="../html/155.3.2.mobx.source.html">155.3.2.mobx.source</a></li>
  <li style='float:none;'><a href="../html/156.vue-loader.html">156.vue-loader</a></li>
  <li style='float:none;'><a href="../html/103.11.mf.html">103.11.mf</a></li>
  <li style='float:none;'><a href="../html/157.1.react18.html">157.1.react18</a></li>
  <li style='float:none;'><a href="../html/158.umi4.html">158.umi4</a></li>
  <li style='float:none;'><a href="../html/159.rxjs.html">159.rxjs</a></li>
  <li style='float:none;'><a href="../html/159.rxjs2.html">159.rxjs2</a></li>
  <li style='float:none;'><a href="../html/160.bff.html">160.bff</a></li>
  <li style='float:none;'><a href="../html/161.zustand.html">161.zustand</a></li>
  <li style='float:none;'><a href="../html/162.vscode.html">162.vscode</a></li>
  <li style='float:none;'><a href="../html/163.emp.html">163.emp</a></li>
</ul>

`

const menuList = [
  {
    href: '../index.html',
    name: '0.api'
  },
  {
    href: '../html/0.Async.html',
    name: '0.Async'
  },
  {
    href: '../html/0.module.html',
    name: '0.module'
  },
  {
    href: '../html/1.ES2015.html',
    name: '1.ES2015'
  },
  {
    href: '../html/2.Promise.html',
    name: '2.Promise'
  },
  {
    href: '../html/3.Node.html',
    name: '3.Node'
  },
  {
    href: '../html/4.NodeInstall.html',
    name: '4.NodeInstall'
  },
  {
    href: '../html/5.REPL.html',
    name: '5.REPL'
  },
  {
    href: '../html/6.NodeCore.html',
    name: '6.NodeCore'
  },
  {
    href: '../html/7.module&NPM.html',
    name: '7.module&NPM'
  },
  {
    href: '../html/8.Encoding.html',
    name: '8.Encoding'
  },
  {
    href: '../html/9.Buffer.html',
    name: '9.Buffer'
  },
  {
    href: '../html/10.fs.html',
    name: '10.fs'
  },
  {
    href: '../html/11.Stream-1.html',
    name: '11.Stream-1'
  },
  {
    href: '../html/11.Stream-2.html',
    name: '11.Stream-2'
  },
  {
    href: '../html/11.Stream-3.html',
    name: '11.Stream-3'
  },
  {
    href: '../html/11.Stream-4.html',
    name: '11.Stream-4'
  },
  {
    href: '../html/12-Network-2.html',
    name: '12-Network-2'
  },
  {
    href: '../html/12.NetWork-3.html',
    name: '12.NetWork-3'
  },
  {
    href: '../html/12.Network-1.html',
    name: '12.Network-1'
  },
  {
    href: '../html/13.tcp.html',
    name: '13.tcp'
  },
  {
    href: '../html/14.http-1.html',
    name: '14.http-1'
  },
  {
    href: '../html/14.http-2.html',
    name: '14.http-2'
  },
  {
    href: '../html/15.compress.html',
    name: '15.compress'
  },
  {
    href: '../html/16.crypto.html',
    name: '16.crypto'
  },
  {
    href: '../html/17.process.html',
    name: '17.process'
  },
  {
    href: '../html/18.yargs.html',
    name: '18.yargs'
  },
  {
    href: '../html/19.cache.html',
    name: '19.cache'
  },
  {
    href: '../html/20.action.html',
    name: '20.action'
  },
  {
    href: '../html/21.https.html',
    name: '21.https'
  },
  {
    href: '../html/22.cookie.html',
    name: '22.cookie'
  },
  {
    href: '../html/23.session.html',
    name: '23.session'
  },
  {
    href: '../html/24.express-1.html',
    name: '24.express-1'
  },
  {
    href: '../html/24.express-2.html',
    name: '24.express-2'
  },
  {
    href: '../html/24.express-3.html',
    name: '24.express-3'
  },
  {
    href: '../html/24.express-4.html',
    name: '24.express-4'
  },
  {
    href: '../html/25.koa-1.html',
    name: '25.koa-1'
  },
  {
    href: '../html/26.webpack-1-basic.html',
    name: '26.webpack-1-basic'
  },
  {
    href: '../html/26.webpack-2-optimize.html',
    name: '26.webpack-2-optimize'
  },
  {
    href: '../html/26.webpack-3-file.html',
    name: '26.webpack-3-file'
  },
  {
    href: '../html/26.webpack-4.tapable.html',
    name: '26.webpack-4.tapable'
  },
  {
    href: '../html/26.webpack-5-AST.html',
    name: '26.webpack-5-AST'
  },
  {
    href: '../html/26.webpack-6-sources.html',
    name: '26.webpack-6-sources'
  },
  {
    href: '../html/26.webpack-7-loader.html',
    name: '26.webpack-7-loader'
  },
  {
    href: '../html/26.webpack-8-plugin.html',
    name: '26.webpack-8-plugin'
  },
  {
    href: '../html/26.webpack-9-hand.html',
    name: '26.webpack-9-hand'
  },
  {
    href: '../html/26.webpack-10-prepare.html',
    name: '26.webpack-10-prepare'
  },
  {
    href: '../html/28.redux.html',
    name: '28.redux'
  },
  {
    href: '../html/28.redux-jwt-back.html',
    name: '28.redux-jwt-back'
  },
  {
    href: '../html/28.redux-jwt-front.html',
    name: '28.redux-jwt-front'
  },
  {
    href: '../html/29.mongodb-1.html',
    name: '29.mongodb-1'
  },
  {
    href: '../html/29.mongodb-2.html',
    name: '29.mongodb-2'
  },
  {
    href: '../html/29.mongodb-3.html',
    name: '29.mongodb-3'
  },
  {
    href: '../html/29.mongodb-4.html',
    name: '29.mongodb-4'
  },
  {
    href: '../html/29.mongodb-5.html',
    name: '29.mongodb-5'
  },
  {
    href: '../html/29.mongodb-6.html',
    name: '29.mongodb-6'
  },
  {
    href: '../html/30.cms-1-mysql.html',
    name: '30.cms-1-mysql'
  },
  {
    href: '../html/30.cms-2-mysql.html',
    name: '30.cms-2-mysql'
  },
  {
    href: '../html/30.cms-3-mysql.html',
    name: '30.cms-3-mysql'
  },
  {
    href: '../html/30.cms-4-nunjucks.html',
    name: '30.cms-4-nunjucks'
  },
  {
    href: '../html/30.cms-5-mock.html',
    name: '30.cms-5-mock'
  },
  {
    href: '../html/30.cms-6-egg.html',
    name: '30.cms-6-egg'
  },
  {
    href: '../html/30.cms-7-api.html',
    name: '30.cms-7-api'
  },
  {
    href: '../html/30.cms-8-roadhog.html',
    name: '30.cms-8-roadhog'
  },
  {
    href: '../html/30.cms-9-yaml.html',
    name: '30.cms-9-yaml'
  },
  {
    href: '../html/30.cms-10-umi.html',
    name: '30.cms-10-umi'
  },
  {
    href: '../html/30.cms-12-dva.html',
    name: '30.cms-12-dva'
  },
  {
    href: '../html/30.cms-13-dva-ant.html',
    name: '30.cms-13-dva-ant'
  },
  {
    href: '../html/30.cms-14-front.html',
    name: '30.cms-14-front'
  },
  {
    href: '../html/30.cms-15-deploy.html',
    name: '30.cms-15-deploy'
  },
  {
    href: '../html/31.dva.html',
    name: '31.dva'
  },
  {
    href: '../html/31.cms-13-dva-antdesign.html',
    name: '31.cms-13-dva-antdesign'
  },
  {
    href: '../html/33.redis.html',
    name: '33.redis'
  },
  {
    href: '../html/34.unittest.html',
    name: '34.unittest'
  },
  {
    href: '../html/35.jwt.html',
    name: '35.jwt'
  },
  {
    href: '../html/36.websocket-1.html',
    name: '36.websocket-1'
  },
  {
    href: '../html/36.websocket-2.html',
    name: '36.websocket-2'
  },
  {
    href: '../html/38.chat-api-1.html',
    name: '38.chat-api-1'
  },
  {
    href: '../html/38.chat-api-2.html',
    name: '38.chat-api-2'
  },
  {
    href: '../html/38.chat-3.html',
    name: '38.chat-3'
  },
  {
    href: '../html/38.chat-api-3.html',
    name: '38.chat-api-3'
  },
  {
    href: '../html/38.chat.html',
    name: '38.chat'
  },
  {
    href: '../html/38.chat2.html',
    name: '38.chat2'
  },
  {
    href: '../html/38.chat2.html',
    name: '38.chat2'
  },
  {
    href: '../html/39.crawl-0.html',
    name: '39.crawl-0'
  },
  {
    href: '../html/39.crawl-1.html',
    name: '39.crawl-1'
  },
  {
    href: '../html/39.crawl-2.html',
    name: '39.crawl-2'
  },
  {
    href: '../html/40.deploy.html',
    name: '40.deploy'
  },
  {
    href: '../html/41.safe.html',
    name: '41.safe'
  },
  {
    href: '../html/42.test.html',
    name: '42.test'
  },
  {
    href: '../html/43.nginx.html',
    name: '43.nginx'
  },
  {
    href: '../html/44.enzyme.html',
    name: '44.enzyme'
  },
  {
    href: '../html/45.docker.html',
    name: '45.docker'
  },
  {
    href: '../html/46.elastic.html',
    name: '46.elastic'
  },
  {
    href: '../html/47.oauth.html',
    name: '47.oauth'
  },
  {
    href: '../html/48.wxpay.html',
    name: '48.wxpay'
  },
  {
    href: '../html/index.html',
    name: 'index'
  },
  {
    href: '../html/52.UML.html',
    name: '52.UML'
  },
  {
    href: '../html/53.design.html',
    name: '53.design'
  },
  {
    href: '../html/index.html',
    name: 'index'
  },
  {
    href: '../html/54.linux.html',
    name: '54.linux'
  },
  {
    href: '../html/57.ts.html',
    name: '57.ts'
  },
  {
    href: '../html/56.react-ssr.html',
    name: '56.react-ssr'
  },
  {
    href: '../html/58.ts_react.html',
    name: '58.ts_react'
  },
  {
    href: '../html/59.ketang.html',
    name: '59.ketang'
  },
  {
    href: '../html/59.ketang2.html',
    name: '59.ketang2'
  },
  {
    href: '../html/61.1.devops-linux.html',
    name: '61.1.devops-linux'
  },
  {
    href: '../html/61.2.devops-vi.html',
    name: '61.2.devops-vi'
  },
  {
    href: '../html/61.3.devops-user.html',
    name: '61.3.devops-user'
  },
  {
    href: '../html/61.4.devops-auth.html',
    name: '61.4.devops-auth'
  },
  {
    href: '../html/61.5.devops-shell.html',
    name: '61.5.devops-shell'
  },
  {
    href: '../html/61.6.devops-install.html',
    name: '61.6.devops-install'
  },
  {
    href: '../html/61.7.devops-system.html',
    name: '61.7.devops-system'
  },
  {
    href: '../html/61.8.devops-service.html',
    name: '61.8.devops-service'
  },
  {
    href: '../html/61.9.devops-network.html',
    name: '61.9.devops-network'
  },
  {
    href: '../html/61.10.devops-nginx.html',
    name: '61.10.devops-nginx'
  },
  {
    href: '../html/61.11.devops-docker.html',
    name: '61.11.devops-docker'
  },
  {
    href: '../html/61.12.devops-jekins.html',
    name: '61.12.devops-jekins'
  },
  {
    href: '../html/61.13.devops-groovy.html',
    name: '61.13.devops-groovy'
  },
  {
    href: '../html/61.14.devops-php.html',
    name: '61.14.devops-php'
  },
  {
    href: '../html/61.15.devops-java.html',
    name: '61.15.devops-java'
  },
  {
    href: '../html/61.16.devops-node.html',
    name: '61.16.devops-node'
  },
  {
    href: '../html/61.17.devops-k8s.html',
    name: '61.17.devops-k8s'
  },
  {
    href: '../html/62.1.react-basic.html',
    name: '62.1.react-basic'
  },
  {
    href: '../html/62.2.react-state.html',
    name: '62.2.react-state'
  },
  {
    href: '../html/62.3.react-high.html',
    name: '62.3.react-high'
  },
  {
    href: '../html/62.4.react-optimize.html',
    name: '62.4.react-optimize'
  },
  {
    href: '../html/62.5.react-hooks.html',
    name: '62.5.react-hooks'
  },
  {
    href: '../html/62.6.react-immutable.html',
    name: '62.6.react-immutable'
  },
  {
    href: '../html/62.7.react-mobx.html',
    name: '62.7.react-mobx'
  },
  {
    href: '../html/62.8.react-source.html',
    name: '62.8.react-source'
  },
  {
    href: '../html/63.1.redux.html',
    name: '63.1.redux'
  },
  {
    href: '../html/63.2.redux-middleware.html',
    name: '63.2.redux-middleware'
  },
  {
    href: '../html/63.3.redux-hooks.html',
    name: '63.3.redux-hooks'
  },
  {
    href: '../html/63.4.redux-saga.html',
    name: '63.4.redux-saga'
  },
  {
    href: '../html/63.5.redux-saga-hand.html',
    name: '63.5.redux-saga-hand'
  },
  {
    href: '../html/64.1.router.html',
    name: '64.1.router'
  },
  {
    href: '../html/64.2.router-connected.html',
    name: '64.2.router-connected'
  },
  {
    href: '../html/65.1.typescript.html',
    name: '65.1.typescript'
  },
  {
    href: '../html/65.2.typescript.html',
    name: '65.2.typescript'
  },
  {
    href: '../html/65.3.typescript.html',
    name: '65.3.typescript'
  },
  {
    href: '../html/65.4.antd.html',
    name: '65.4.antd'
  },
  {
    href: '../html/65.4.definition.html',
    name: '65.4.definition'
  },
  {
    href: '../html/66-1.vue-base.html',
    name: '66-1.vue-base'
  },
  {
    href: '../html/66-2.vue-component.html',
    name: '66-2.vue-component'
  },
  {
    href: '../html/66-3.vue-cli3.0.html',
    name: '66-3.vue-cli3.0'
  },
  {
    href: '../html/66-4.$message组件.html',
    name: '66-4.$message组件'
  },
  {
    href: '../html/66-5.Form组件.html',
    name: '66-5.Form组件'
  },
  {
    href: '../html/66-6.tree.html',
    name: '66-6.tree'
  },
  {
    href: '../html/66-7.vue-router-apply.html',
    name: '66-7.vue-router-apply'
  },
  {
    href: '../html/66-8.axios-apply.html',
    name: '66-8.axios-apply'
  },
  {
    href: '../html/66-9.vuex-apply.html',
    name: '66-9.vuex-apply'
  },
  {
    href: '../html/66-10.jwt-vue.html',
    name: '66-10.jwt-vue'
  },
  {
    href: '../html/66-11.vue-ssr.html',
    name: '66-11.vue-ssr'
  },
  {
    href: '../html/66-12.nuxt-apply.html',
    name: '66-12.nuxt-apply'
  },
  {
    href: '../html/66-13.pwa.html',
    name: '66-13.pwa'
  },
  {
    href: '../html/66-14.vue单元测试.html',
    name: '66-14.vue单元测试'
  },
  {
    href: '../html/66-15.权限校验.html',
    name: '66-15.权限校验'
  },
  {
    href: '../html/67-1-network.html',
    name: '67-1-network'
  },
  {
    href: '../html/68-2-wireshark.html',
    name: '68-2-wireshark'
  },
  {
    href: '../html/7.npm2.html',
    name: '7.npm2'
  },
  {
    href: '../html/69-hooks.html',
    name: '69-hooks'
  },
  {
    href: '../html/70-deploy.html',
    name: '70-deploy'
  },
  {
    href: '../html/71-hmr.html',
    name: '71-hmr'
  },
  {
    href: '../html/72.deploy.html',
    name: '72.deploy'
  },
  {
    href: '../html/73.import.html',
    name: '73.import'
  },
  {
    href: '../html/74.mobile.html',
    name: '74.mobile'
  },
  {
    href: '../html/75.webpack-1.文件分析.html',
    name: '75.webpack-1.文件分析'
  },
  {
    href: '../html/75.webpack-2.loader.html',
    name: '75.webpack-2.loader'
  },
  {
    href: '../html/75.webpack-3.源码流程.html',
    name: '75.webpack-3.源码流程'
  },
  {
    href: '../html/75.webpack-4.tapable.html',
    name: '75.webpack-4.tapable'
  },
  {
    href: '../html/75.webpack-5.prepare.html',
    name: '75.webpack-5.prepare'
  },
  {
    href: '../html/75.webpack-6.resolve.html',
    name: '75.webpack-6.resolve'
  },
  {
    href: '../html/75.webpack-7.loader.html',
    name: '75.webpack-7.loader'
  },
  {
    href: '../html/75.webpack-8.module.html',
    name: '75.webpack-8.module'
  },
  {
    href: '../html/75.webpack-9.chunk.html',
    name: '75.webpack-9.chunk'
  },
  {
    href: '../html/75.webpack-10.asset.html',
    name: '75.webpack-10.asset'
  },
  {
    href: '../html/75.webpack-11.实现.html',
    name: '75.webpack-11.实现'
  },
  {
    href: '../html/76.react_optimize.html',
    name: '76.react_optimize'
  },
  {
    href: '../html/77.ts_ketang_back.html',
    name: '77.ts_ketang_back'
  },
  {
    href: '../html/77.ts_ketang_front.html',
    name: '77.ts_ketang_front'
  },
  {
    href: '../html/78.vue-domdiff.html',
    name: '78.vue-domdiff'
  },
  {
    href: '../html/79.grammar.html',
    name: '79.grammar'
  },
  {
    href: '../html/80.tree.html',
    name: '80.tree'
  },
  {
    href: '../html/81.axios.html',
    name: '81.axios'
  },
  {
    href: '../html/82.1.react.html',
    name: '82.1.react'
  },
  {
    href: '../html/82.2.react-high.html',
    name: '82.2.react-high'
  },
  {
    href: '../html/82.3.react-router.html',
    name: '82.3.react-router'
  },
  {
    href: '../html/82.4.redux.html',
    name: '82.4.redux'
  },
  {
    href: '../html/82.5.redux_middleware.html',
    name: '82.5.redux_middleware'
  },
  {
    href: '../html/82.6.connected.html',
    name: '82.6.connected'
  },
  {
    href: '../html/82.7.saga.html',
    name: '82.7.saga'
  },
  {
    href: '../html/82.8.dva.html',
    name: '82.8.dva'
  },
  {
    href: '../html/82.8.dva-source.html',
    name: '82.8.dva-source'
  },
  {
    href: '../html/82.9.roadhog.html',
    name: '82.9.roadhog'
  },
  {
    href: '../html/82.10.umi.html',
    name: '82.10.umi'
  },
  {
    href: '../html/82.11.antdesign.html',
    name: '82.11.antdesign'
  },
  {
    href: '../html/82.12.ketang-front.html',
    name: '82.12.ketang-front'
  },
  {
    href: '../html/82.12.ketang-back.html',
    name: '82.12.ketang-back'
  },
  {
    href: '../html/83.upload.html',
    name: '83.upload'
  },
  {
    href: '../html/84.graphql.html',
    name: '84.graphql'
  },
  {
    href: '../html/85.antpro.html',
    name: '85.antpro'
  },
  {
    href: '../html/86.1.uml.html',
    name: '86.1.uml'
  },
  {
    href: '../html/86.2.design.html',
    name: '86.2.design'
  },
  {
    href: '../html/87.postcss.html',
    name: '87.postcss'
  },
  {
    href: '../html/88.react16-1.html',
    name: '88.react16-1'
  },
  {
    href: '../html/89.nextjs.html',
    name: '89.nextjs'
  },
  {
    href: '../html/90.react-test.html',
    name: '90.react-test'
  },
  {
    href: '../html/91.react-ts.html',
    name: '91.react-ts'
  },
  {
    href: '../html/92.rbac.html',
    name: '92.rbac'
  },
  {
    href: '../html/93.tsnode.html',
    name: '93.tsnode'
  },
  {
    href: '../html/94.1.JavaScript.html',
    name: '94.1.JavaScript'
  },
  {
    href: '../html/94.2.JavaScript.html',
    name: '94.2.JavaScript'
  },
  {
    href: '../html/94.3.MODULE.html',
    name: '94.3.MODULE'
  },
  {
    href: '../html/94.4.EventLoop.html',
    name: '94.4.EventLoop'
  },
  {
    href: '../html/94.5.文件上传.html',
    name: '94.5.文件上传'
  },
  {
    href: '../html/94.6.https.html',
    name: '94.6.https'
  },
  {
    href: '../html/94.7. nginx.html',
    name: '94.7. nginx'
  },
  {
    href: '../html/95.1. react.html',
    name: '95.1. react'
  },
  {
    href: '../html/95.2.react.html',
    name: '95.2.react'
  },
  {
    href: '../html/96.1.react16.html',
    name: '96.1.react16'
  },
  {
    href: '../html/96.2.fiber.html',
    name: '96.2.fiber'
  },
  {
    href: '../html/96.3.fiber.html',
    name: '96.3.fiber'
  },
  {
    href: '../html/97.serverless.html',
    name: '97.serverless'
  },
  {
    href: '../html/98.websocket.html',
    name: '98.websocket'
  },
  {
    href: '../html/100.1.react-basic.html',
    name: '100.1.react-basic'
  },
  {
    href: '../html/101.1.monitor.html',
    name: '101.1.monitor'
  },
  {
    href: '../html/101.2.monitor.html',
    name: '101.2.monitor'
  },
  {
    href: '../html/102.java.html',
    name: '102.java'
  },
  {
    href: '../html/103.1.webpack-usage.html',
    name: '103.1.webpack-usage'
  },
  {
    href: '../html/103.2.webpack-bundle.html',
    name: '103.2.webpack-bundle'
  },
  {
    href: '../html/103.3.webpack-ast.html',
    name: '103.3.webpack-ast'
  },
  {
    href: '../html/103.4.webpack-flow.html',
    name: '103.4.webpack-flow'
  },
  {
    href: '../html/103.5.webpack-loader.html',
    name: '103.5.webpack-loader'
  },
  {
    href: '../html/103.6.webpack-tapable.html',
    name: '103.6.webpack-tapable'
  },
  {
    href: '../html/103.7.webpack-plugin.html',
    name: '103.7.webpack-plugin'
  },
  {
    href: '../html/103.8.webpack-optimize1.html',
    name: '103.8.webpack-optimize1'
  },
  {
    href: '../html/103.9.webpack-optimize2.html',
    name: '103.9.webpack-optimize2'
  },
  {
    href: '../html/103.10.webpack-hand.html',
    name: '103.10.webpack-hand'
  },
  {
    href: '../html/103.11.webpack-hmr.html',
    name: '103.11.webpack-hmr'
  },
  {
    href: '../html/103.13.splitChunks.html',
    name: '103.13.splitChunks'
  },
  {
    href: '../html/103.14.webpack-sourcemap.html',
    name: '103.14.webpack-sourcemap'
  },
  {
    href: '../html/103.15.webpack-compiler1.html',
    name: '103.15.webpack-compiler1'
  },
  {
    href: '../html/103.15.webpack-compiler2.html',
    name: '103.15.webpack-compiler2'
  },
  {
    href: '../html/103.16.vite.basic.html',
    name: '103.16.vite.basic'
  },
  {
    href: '../html/103.16.vite.source.html',
    name: '103.16.vite.source'
  },
  {
    href: '../html/103.17.polyfill.html',
    name: '103.17.polyfill'
  },
  {
    href: '../html/104.1.binary.html',
    name: '104.1.binary'
  },
  {
    href: '../html/104.2.binary.html',
    name: '104.2.binary'
  },
  {
    href: '../html/105.skeleton.html',
    name: '105.skeleton'
  },
  {
    href: '../html/106.1.react.html',
    name: '106.1.react'
  },
  {
    href: '../html/106.2.react_hooks.html',
    name: '106.2.react_hooks'
  },
  {
    href: '../html/106.3.react_router.html',
    name: '106.3.react_router'
  },
  {
    href: '../html/106.4.redux.html',
    name: '106.4.redux'
  },
  {
    href: '../html/106.5.redux_middleware.html',
    name: '106.5.redux_middleware'
  },
  {
    href: '../html/106.6.redux-first-history.html',
    name: '106.6.redux-first-history'
  },
  {
    href: '../html/106.7.redux-saga.html',
    name: '106.7.redux-saga'
  },
  {
    href: '../html/106.8.dva.html',
    name: '106.8.dva'
  },
  {
    href: '../html/106.9.umi.html',
    name: '106.9.umi'
  },
  {
    href: '../html/106.10.ketang.html',
    name: '106.10.ketang'
  },
  {
    href: '../html/106.11.antdesign.html',
    name: '106.11.antdesign'
  },
  {
    href: '../html/106.12.antpro.html',
    name: '106.12.antpro'
  },
  {
    href: '../html/106.13.router-6.html',
    name: '106.13.router-6'
  },
  {
    href: '../html/107.fiber.html',
    name: '107.fiber'
  },
  {
    href: '../html/108.http.html',
    name: '108.http'
  },
  {
    href: '../html/109.1.webpack_usage.html',
    name: '109.1.webpack_usage'
  },
  {
    href: '../html/109.2.webpack_source.html',
    name: '109.2.webpack_source'
  },
  {
    href: '../html/109.3.dll.html',
    name: '109.3.dll'
  },
  {
    href: '../html/110.nest.js.html',
    name: '110.nest.js'
  },
  {
    href: '../html/111.xstate.html',
    name: '111.xstate'
  },
  {
    href: '../html/112.Form.html',
    name: '112.Form'
  },
  {
    href: '../html/113.redux-saga.html',
    name: '113.redux-saga'
  },
  {
    href: '../html/114.react+typescript.html',
    name: '114.react+typescript'
  },
  {
    href: '../html/115.immer.html',
    name: '115.immer'
  },
  {
    href: '../html/116.pro5.html',
    name: '116.pro5'
  },
  {
    href: '../html/117.css-loader.html',
    name: '117.css-loader'
  },
  {
    href: '../html/118.1.umi-core.html',
    name: '118.1.umi-core'
  },
  {
    href: '../html/119.2.module-federation.html',
    name: '119.2.module-federation'
  },
  {
    href: '../html/119.1.module-federation.html',
    name: '119.1.module-federation'
  },
  {
    href: '../html/120.create-react-app.html',
    name: '120.create-react-app'
  },
  {
    href: '../html/121.react-scripts.html',
    name: '121.react-scripts'
  },
  {
    href: '../html/122.react-optimize.html',
    name: '122.react-optimize'
  },
  {
    href: '../html/123.jsx-runtime.html',
    name: '123.jsx-runtime'
  },
  {
    href: '../html/124.next.js.html',
    name: '124.next.js'
  },
  {
    href: '../html/125.1.linux.html',
    name: '125.1.linux'
  },
  {
    href: '../html/125.2.linux-vi.html',
    name: '125.2.linux-vi'
  },
  {
    href: '../html/125.3.linux-user.html',
    name: '125.3.linux-user'
  },
  {
    href: '../html/125.4.linux-auth.html',
    name: '125.4.linux-auth'
  },
  {
    href: '../html/125.5.linux-shell.html',
    name: '125.5.linux-shell'
  },
  {
    href: '../html/125.6.linux-install.html',
    name: '125.6.linux-install'
  },
  {
    href: '../html/125.7.linux-system.html',
    name: '125.7.linux-system'
  },
  {
    href: '../html/125.8.linux-service.html',
    name: '125.8.linux-service'
  },
  {
    href: '../html/125.9.linux-network.html',
    name: '125.9.linux-network'
  },
  {
    href: '../html/125.10.nginx.html',
    name: '125.10.nginx'
  },
  {
    href: '../html/125.11.docker.html',
    name: '125.11.docker'
  },
  {
    href: '../html/125.12.ci.html',
    name: '125.12.ci'
  },
  {
    href: '../html/125.13.k8s.html',
    name: '125.13.k8s'
  },
  {
    href: '../html/125.14.k8s.html',
    name: '125.14.k8s'
  },
  {
    href: '../html/125.15.k8s.html',
    name: '125.15.k8s'
  },
  {
    href: '../html/125.16.k8s.html',
    name: '125.16.k8s'
  },
  {
    href: '../html/126.11.react-1.html',
    name: '126.11.react-1'
  },
  {
    href: '../html/126.12.react-2.html',
    name: '126.12.react-2'
  },
  {
    href: '../html/126.12.react-3.html',
    name: '126.12.react-3'
  },
  {
    href: '../html/126.12.react-4.html',
    name: '126.12.react-4'
  },
  {
    href: '../html/126.12.react-5.html',
    name: '126.12.react-5'
  },
  {
    href: '../html/127.frontend.html',
    name: '127.frontend'
  },
  {
    href: '../html/128.rollup.html',
    name: '128.rollup'
  },
  {
    href: '../html/129.px2rem-loader.html',
    name: '129.px2rem-loader'
  },
  {
    href: '../html/130.health.html',
    name: '130.health'
  },
  {
    href: '../html/131.hooks.html',
    name: '131.hooks'
  },
  {
    href: '../html/132.keepalive.html',
    name: '132.keepalive'
  },
  {
    href: '../html/133.vue-cli.html',
    name: '133.vue-cli'
  },
  {
    href: '../html/134.react18.html',
    name: '134.react18'
  },
  {
    href: '../html/135.function.html',
    name: '135.function'
  },
  {
    href: '../html/136.toolkit.html',
    name: '136.toolkit'
  },
  {
    href: '../html/137.lerna.html',
    name: '137.lerna'
  },
  {
    href: '../html/138.create-vite.html',
    name: '138.create-vite'
  },
  {
    href: '../html/139.cli.html',
    name: '139.cli'
  },
  {
    href: '../html/140.antd.html',
    name: '140.antd'
  },
  {
    href: '../html/141.react-dnd.html',
    name: '141.react-dnd'
  },
  {
    href: '../html/142.1.link.html',
    name: '142.1.link'
  },
  {
    href: '../html/143.1.gulp.html',
    name: '143.1.gulp'
  },
  {
    href: '../html/143.2.stream.html',
    name: '143.2.stream'
  },
  {
    href: '../html/143.3.gulp.html',
    name: '143.3.gulp'
  },
  {
    href: '../html/144.1.closure.html',
    name: '144.1.closure'
  },
  {
    href: '../html/144.2.v8.html',
    name: '144.2.v8'
  },
  {
    href: '../html/144.3.gc.html',
    name: '144.3.gc'
  },
  {
    href: '../html/145.react-router-v6.html',
    name: '145.react-router-v6'
  },
  {
    href: '../html/145.react-router-v6.html',
    name: '145.react-router-v6'
  },
  {
    href: '../html/146.browser.html',
    name: '146.browser'
  },
  {
    href: '../html/147.lighthouse.html',
    name: '147.lighthouse'
  },
  {
    href: '../html/148.1.basic.html',
    name: '148.1.basic'
  },
  {
    href: '../html/148.2.basic .html',
    name: '148.2.basic '
  },
  {
    href: '../html/148.3.basic.html',
    name: '148.3.basic'
  },
  {
    href: '../html/148.4.basic.html',
    name: '148.4.basic'
  },
  {
    href: '../html/148.5.basic.html',
    name: '148.5.basic'
  },
  {
    href: '../html/149.1.vite.html',
    name: '149.1.vite'
  },
  {
    href: '../html/149.2.vite.html',
    name: '149.2.vite'
  },
  {
    href: '../html/149.3.vite.html',
    name: '149.3.vite'
  },
  {
    href: '../html/149.4.vite.html',
    name: '149.4.vite'
  },
  {
    href: '../html/150.react-window.html',
    name: '150.react-window'
  },
  {
    href: '../html/151.react-query.html',
    name: '151.react-query'
  },
  {
    href: '../html/152.useRequest.html',
    name: '152.useRequest'
  },
  {
    href: '../html/153.transition.html',
    name: '153.transition'
  },
  {
    href: '../html/154.emotion.html',
    name: '154.emotion'
  },
  {
    href: '../html/155.1.formily.html',
    name: '155.1.formily'
  },
  {
    href: '../html/155.2.formily.html',
    name: '155.2.formily'
  },
  {
    href: '../html/155.3.formily.html',
    name: '155.3.formily'
  },
  {
    href: '../html/155.3.1.mobx.usage.html',
    name: '155.3.1.mobx.usage'
  },
  {
    href: '../html/155.3.2.mobx.source.html',
    name: '155.3.2.mobx.source'
  },
  {
    href: '../html/156.vue-loader.html',
    name: '156.vue-loader'
  },
  {
    href: '../html/103.11.mf.html',
    name: '103.11.mf'
  },
  {
    href: '../html/157.1.react18.html',
    name: '157.1.react18'
  },
  {
    href: '../html/158.umi4.html',
    name: '158.umi4'
  },
  {
    href: '../html/159.rxjs.html',
    name: '159.rxjs'
  },
  {
    href: '../html/159.rxjs2.html',
    name: '159.rxjs2'
  },
  {
    href: '../html/160.bff.html',
    name: '160.bff'
  },
  {
    href: '../html/161.zustand.html',
    name: '161.zustand'
  },
  {
    href: '../html/162.vscode.html',
    name: '162.vscode'
  },
  {
    href: '../html/163.emp.html',
    name: '163.emp'
  }
];
function main() {
  settingLoginFonSize()
  toggleMenuState()


  // logo修改为输入框
  modifyLogo()



  // addMobileMenu()

}
function modifyLogo() {
  const logoDom = document.querySelector('.logo')
  const childNodes = logoDom.childNodes;
  if (childNodes[0].nodeType === 3) {
    childNodes[0].textContent = ''
  }
  const div = document.createElement('div')
  div.innerHTML = `
  <input id='searchInput' style='width:100%;height:100%;font-size: 14px;
  padding: 5px;' type='text' placeholder='查询列表'/>
  <div 
    id='searchList'
    style='position:absolute;
    bottom:0;
    left:0;
    width:100%;
    border:1px solid #61DAFB;
    display:none;
    position: absolute;
    z-index:2;
    top: 47px;
    left: 0px;
    width:auto;
    height: 500px;
    background: #666;
    border: 1px solid rgb(97, 218, 251);
    overflow-x: hidden;
    '
  >
  <div>
  `
  const divStyle = {
    // height: '28px',
    width: '150px',
    display: 'inline-block',
    position: 'relative',
  }
  for (let prop in divStyle) {
    div.style[prop] = divStyle[prop]
  }

  logoDom.insertBefore(div, childNodes[1]);
  searchInputList()

}

const getSearchTemplate = (value) => {
  let str = `<ul class='menu-ul' style='overflow: initial;'>`
  const existList = menuList.filter(item => {
    const {href,name} = item; 
    if(!value) return true;
    return name.indexOf(value) > -1 || value.indexOf(name) > -1
  })

  existList.forEach(item => {
    const {href,name} = item;
    const chunkStr = ` <li style='float:none;font-size:16px;'><a href="${href}">${name}</a></li>`
    str += chunkStr
  })
  str += '</ul>';
  return {
    existList,
    template:str
  }
}

const searchInputList = () => {
  const searchInput = document.getElementById('searchInput')

  const getMenuList = () => {
    const {existList,template} = getSearchTemplate(searchInput.value)
      if(existList.length){
        searchList.innerHTML = template
        searchList.style.display = 'block'
      }else{
        searchList.style.display = 'none'
      }
  }

  searchInput.onfocus = () => {
    getMenuList()
  }
  searchInput.oninput = () => {
    getMenuList()
  }
  searchInput.onblur = () => {
    setTimeout(() => {
      searchList.style.display = 'none';
    },200)
  }
}


window.onload = () => {
  const navNode = document.querySelector('.nav')
  navNode.style.position = 'relative'
}
main()

function addMobileMenu() {
  const navNode = document.querySelector('.nav')
  const divNode = document.createElement('div')
  divNode.style.position = 'absolute'
  divNode.style.top = '10px'
  divNode.style.right = '20px'
  divNode.style.color = '#fff'
  divNode.style.cursor = 'pointer'
  divNode.innerHTML = '菜单'
  navNode.appendChild(divNode)

  divNode.onclick = function (e) {
    e.stopPropagation()
    const b = document.body
    // if(document.querySelector('menu-template-container'))
    const dN = document.createElement('div')
    dN.className = 'menu-template-container'
    dN.innerHTML = menuTemplate
    dN.style.width = '80%';
    dN.style.position = 'fixed'
    dN.style.background = 'rgba(90,90,90,0.8)';
    dN.style.zIndex = 1000
    dN.style.height = '100%'
    dN.style.overflow = 'auto'
    dN.style.top = 0
    dN.style.right = 0
    dN.onclick = () => {
      dN.style.display = 'none'
    }
    b.appendChild(dN)
    b.style.position = 'relative'

  }
}

function toggleMenuState() {
  const pageToc = document.querySelector('.page-toc')
  // pageToc.style.transition  = '300ms';
  pageToc.style.cssText += `
        transition:300ms;
        padding-top:40px;
    `;
  pageToc.innerHTML += `
        <img src='/static/icon/toggle-left.png' id='toggleImg'/>
    `
  const imgEl = document.querySelector('#toggleImg')

  const setttingImgSrc = (darkImg, lightImg) => {
    if (selectTheme.selectedIndex === 1) {
      toggleImg.src = `/static/icon/${lightImg}.png`
    } else {
      toggleImg.src = `/static/icon/${darkImg}.png`
    }
  }
  if (imgEl) {
    imgEl.style.cssText = `
            position:absolute;
            z-index:1;
            right:15px;
            top:20px;
            width:20px;
            height:20px;
            cursor:pointer;
        `;
    setttingImgSrc('toggle-left', 'fff_toggle-left');
  }

  const contentEl = document.querySelector('.content.markdown-body')
  contentEl.style.transition = '300ms';
  imgEl.onclick = function () {
    console.log(this.src, 'src')
    if (this.getAttribute('src').indexOf('toggle-right.png') !== -1) {
      this.setAttribute('src', '/static/icon/toggle-left.png')
      setttingImgSrc('toggle-left', 'fff_toggle-left');
      this.parentElement.style.width = '';
      contentEl.style.marginLeft = ''
    } else {
      this.setAttribute('src', '/static/icon/toggle-right.png')
      setttingImgSrc('toggle-right', 'fff_toggle-right');
      this.parentElement.style.width = `60px`;
      contentEl.style.marginLeft = '60px';
    }


  }



}



function settingLoginFonSize() {
  const logo = document.querySelector('.nav .logo')
  logo.style.fontSize = '20px'
  logo.innerHTML += addThemeSelectList();
  bindEvent()

  if (selectTheme.selectedIndex === 1) {
    darkTheme()
  } else {
    lightTheme()
  }
}
function bindEvent() {
  selectTheme.onclick = function (e) {
    e.stopPropagation()
    const n = document.querySelector('.nav')
    setTimeout(() => {
      n.style.display = '';
    }, 0)
    console.log(n)
  }
  selectTheme.onchange = function (e) {
    const v = e.target.selectedIndex
    localStorage.setItem('$$_THEME_STYLE', v)

    if (v === 0) {
      lightTheme()
      if (toggleImg.src.indexOf('toggle-left') !== -1) {
        toggleImg.src = '/static/icon/toggle-left.png'
      } else {
        toggleImg.src = '/static/icon/toggle-right.png'
      }

    } else if (v === 1) {
      darkTheme()
      if (toggleImg.src.indexOf('toggle-left') !== -1) {
        toggleImg.src = '/static/icon/fff_toggle-left.png'
      } else {
        toggleImg.src = '/static/icon/fff_toggle-right.png'
      }
    }
  }
}
function lightTheme() {
  const contentDom = document.querySelector('.content.markdown-body')
  const b = document.body
  const pageToc = document.querySelector('.page-toc')
  // 亮白
  contentDom.style.backgroundColor = ''
  contentDom.style.color = ''
  if (document.getElementById('darkStyle')) {
    darkStyle.parentNode.removeChild(darkStyle)
  }
  pageToc.style.backgroundColor = ''
}
function darkTheme() {
  const contentDom = document.querySelector('.content.markdown-body')
  const b = document.body
  const pageToc = document.querySelector('.page-toc')
  // 深黑
  contentDom.style.backgroundColor = '#393939'
  contentDom.style.color = '#f9f9f9'
  const style = document.createElement('style')
  style.id = 'darkStyle'
  style.innerHTML = `
     .warpper .page-toc ul a{
         color:#f9f9f9;
     }
     `
  pageToc.style.backgroundColor = '#393939'
  b.appendChild(style)
}
function addThemeSelectList() {
  const h = new Date().getHours();
  const local = localStorage.getItem('$$_THEME_STYLE')
  let v = 0;
  console.log(local)
  if (local != null) {
    v = local
  } else {
    if (h > 12) {
      v = 1
    } else {
      v = 0
    }
  }
  let s = ``
  const map = {
    0: '亮白',
    1: '深夜'
  }
  for (let i = 0; i < 2; i++) {
    if (v == i) {
      s += `<option value='${i + 1}' selected> ${map[i]} </option>`
    } else {
      s += `<option value='${i + 1}' > ${map[i]} </option>`
    }
  }
  let html = `
        <select id='selectTheme' style='background-color:#393939;'>
            ${s}
        </select>
    `

  return html
}