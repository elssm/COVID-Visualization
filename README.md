## COVID-Visualization

### 新冠疫情可视化

### 项目基于React+Echarts+axios

- spider对各大平台疫情数据进行爬取并存入csv文件，方便后续对数据进行分析

  API接口如下

  ```javascript
  https://api.inews.qq.com/newsqa/v1/automation/foreign/country/ranklist
  
  http://api.tianapi.com/txapi/ncovcity/index?key=964dc226dd5b57e892e6199735b6c55f
  
  https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoGlobalStatis,FAutoContinentStatis,FAutoGlobalDailyList,FAutoCountryConfirmAdd
  
  https://eyesight.news.qq.com/sars/toheros
  
  https://voice.baidu.com/newpneumonia/get?target=trend&isCaseIn=0&stage=publish&callback=jsonp_1608368713132_18169
  ```



- server是返回疫情数据的api服务器,包括最新的疫情新闻

  express+axios+node

  server端：

  ```javascript
  cd server
  node index.js
  ```

  接口如下

  ```
  http://localhost:8080
  http://localhost:8080/api/newsdata
  http://localhost:8080/api/news
  http://localhost:8080/api/province
  ```



- 前端：

  ```
  npm install
  npm start
  ```

  

