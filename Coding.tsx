import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton'; // 库里的button
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { BarStyles, headStyles, PaperStylescoding } from './constants';
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
class Coding extends React.Component<
  RouteComponentProps<{
    main: string
    show: string
    self: string
    education: string
    coding: string
    hobby: string
    // here goes the matched params in route
    // for example, if a route is defined as "/:id",
    // you should declare
    // id:string
  }>,
  // 泛型的类型参数，第一个是props，第二个是state。目的：让子类的类型适配类型参数，防止类型混乱。
  {

  }> {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Grid fluid={true} >
            <body>
              <Row>
                <AppBar title="程序设计项目" style={BarStyles} titleStyle={headStyles} />
              </Row>
              <Row around="xs">
                <Col xs={2} md={2}>
                  <Paper style={PaperStylescoding} zDepth={1}>
                    <img src="images/NOIP.jpg" />
                    <h2>NOIP</h2>
                    我从2014.1-2015.11学习信息学竞赛<br />
                    我在NOIP2014中获得290分，屈居省二<br />
                    我在NOIP2015中获得345分，得到省一（第8）<br />
                    以下是我在备战NOIP2015时的训练情况<br />
                    因为当时代码习惯差，代码可读性不好<br />
                    而且有些题始终也没做出来，请理解。<br />
                    <RaisedButton
                      label="我的OJ"
                      href="http://openjudge.cn/user/108612/"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                  </Paper>
                </Col>

                <Col xs={2} md={2}>
                  <Paper style={PaperStylescoding} zDepth={1}>
                    <img src="images/1302.jpg" />
                    <h2>单片机1302智能时钟</h2>
                    这个时钟使用STC15W402AS芯片，DS1302时钟模块,DS18B20温度传感器。<br />
                    能实现显示，修改时间，显示温度功能。<br />
                    整个电路设计，焊接，程序设计由我们团队独立完成。<br />
                    我负责电路设计和程序设计的一部分。<br />
                    指导老师：龚鹏<br />
                    电路：李沐东，沈冠霖，张子誉，柴轶晟<br />
                    焊接：李沐东，柴轶晟，王荣<br />
                    开发：柴轶晟，沈冠霖，王荣<br />
                    <RaisedButton
                      label="Github"
                      href="https://github.com/hackerchai/ds1302-stc15-clock"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <RaisedButton
                      label="技术博客"
                      href="https://blog.hackerchai.com/ds1302-ds18b20-stc15-led-clock/"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                  </Paper>
                </Col>

                <Col xs={2} md={2}>
                  <Paper style={PaperStylescoding} zDepth={1}>
                    <img src="images/lock.jpg" />
                    <h2>Prometheus（制作中）</h2>
                    这是一个智能锁，能用单片机的蓝牙模块接收用户的开锁请求，由树莓派验证权限，并由单片机开锁。<br />
                    使用STC15W408AS单片机芯片和树莓派<br />
                    我负责单片机部分<br />
                    指导老师：龚鹏<br />
                    树莓派：柴轶晟，戴钦润<br />
                    后端：傅禹泽，李晨宇<br />
                    单片机：沈冠霖，叶宇晨，赵翔宇<br />
                    <RaisedButton
                      label="Github"
                      href="https://github.com/NovaLock"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                  </Paper>
                </Col>
                <Col xs={2} md={2}>
                  <Paper style={PaperStylescoding} zDepth={1}>
                    <img src="images/sandra.jpg" />
                    <h2>Sandra（制作中）</h2>
                    这是一个爬虫项目，能从facebook，Twitter等网站中扒取用户订阅的信息，并显示在用户端上。<br />
                    我负责前端部分<br />
                    后端组：傅禹泽，李晨宇<br />
                    前端组：沈冠霖，游宗阳，张明琛<br />
                    安卓组：柴轶晟<br />
                    <RaisedButton
                      label="Github"
                      href="https://github.com/SANDRAProject"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                  </Paper>
                </Col>

              </Row>
              <Row center="xs">
                <Col xs={8} md={6}>
                  <RaisedButton
                    backgroundColor="#000000"
                    label="我的Github"
                    href="https://github.com/SerCharles"
                    target="_blank"
                  />
                </Col>
              </Row>
            </body>
            <body>
              <Row>
                <AppBar title="媒体展示项目" style={BarStyles} titleStyle={headStyles} />
              </Row>
              <Row around="xs">
                <Col xs={3 / 2} md={3 / 2}>
                  <Paper style={PaperStylescoding} zDepth={1}>
                    <img src="images/mountblade.jpg" />
                    <h2>领军者加强版</h2>
                    制作于2014年1-7月<br />
                    基于骑马与砍杀战团1.158版本<br />
                    我进行了模型贴图导入，新兵种设计，以及编程实现巡逻队，领主私兵功能。<br />
                    因为技术水平和时间有限，制作不够完善，请见谅<br />
                    <RaisedButton
                      label="百度云地址"
                      href="http://pan.baidu.com/s/1i5taiTB"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                  </Paper>
                </Col>

                <Col xs={3 / 2} md={3 / 2}>
                  <Paper style={PaperStylescoding} zDepth={1}>
                    <img src="images/publicclass.jpg" />
                    <h2>开学第一课</h2>
                    2015年8月的开学第一课：抗战公开课<br />
                    我负责第一部分：九一八事变的采访，以及视频，ppt制作，还有现场操作。<br />
                    在这次活动中，我学到了很多，包括历史，视频制作技术。<br />
                    好战必亡，忘战必危。铭记历史，展望未来。<br />
                    <RaisedButton
                      label="百度云地址"
                      href="http://pan.baidu.com/s/1geBKUor"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <RaisedButton
                      label="视频链接"
                      href="https://www.bilibili.com/video/av2859362/"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                  </Paper>
                </Col>

                <Col xs={3 / 2} md={3 / 2}>
                  <Paper style={PaperStylescoding} zDepth={1}>
                    <img src="images/ideal.jpg" />
                    <h2>道德模范采访</h2>
                    2016年2月，我们采访了沈阳市道德模范：亢秉铨大爷。<br />
                    作为组长，我承担了组织，联系，采访，后期制作工作。<br />
                    和身边的道德模范近距离接触，提高了自身思想道德素质。<br />
                    鸣谢组员：叶宇晨，游宗阳，柴轶晟，张子誉<br />
                    <RaisedButton
                      label="百度云地址"
                      href="http://pan.baidu.com/s/1pKXPpGn"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <RaisedButton
                      label="视频链接"
                      href="https://www.bilibili.com/video/av3979855"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                  </Paper>
                </Col>

                <Col xs={3 / 2} md={3 / 2}>
                  <Paper style={PaperStylescoding} zDepth={1}>
                    <img src="images/star.jpg" />
                    <h2>数字讲述MOOC</h2>
                    2016年2月，我参加了求师得数位学习课程。<br />
                    我制作了主题为“未来航天科技”的视频<br />
                    感谢：李海妹老师，闫北辰，赵翔宇，王雪彤。<br />
                    视频链接和详细文件如下<br />
                    <RaisedButton
                      label="百度云地址"
                      href="http://pan.baidu.com/s/1c2EjjqC"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <RaisedButton
                      label="视频链接"
                      href="https://www.bilibili.com/video/av3888808"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                  </Paper>
                </Col>

                <Col xs={3 / 2} md={3 / 2}>
                  <Paper style={PaperStylescoding} zDepth={1}>
                    <img src="images/connext.jpg" />
                    <h2>connext@shenyang 2016</h2>
                    2016年8月，我参与策划了connext@shenyang 2016 学生开发者大会活动，并发表了“单片机开发”的演讲。<br />
                    下方是我演讲的PPT下载地址，它是傅禹泽制作的。<br />
                    希望我的PPT能给你单片机学习，开发方面的帮助。<br />
                    <RaisedButton
                      label="百度云地址"
                      href="http://pan.baidu.com/s/1bo5h2Mz"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                  </Paper>
                </Col>

                <Col xs={3 / 2} md={3 / 2}>
                  <Paper style={PaperStylescoding} zDepth={1}>
                    <img src="images/graduate.jpg" />
                    <h2>毕业典礼</h2>
                    2017年6月，我参加了东北育才学校高中部毕业典礼的策划与技术制作。<br />
                    我主要负责节目策划和ppt制作，还有现场ppt播放。<br />
                    感谢田展铭大神带我做ppt。<br />
                    以下是小田做的宣传视频和整个典礼的文件地址<br />
                    <RaisedButton
                      label="百度云地址"
                      href="http://pan.baidu.com/s/1mhZXiZI"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <RaisedButton
                      label="视频链接"
                      href="https://www.bilibili.com/video/av11752810"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                  </Paper>
                </Col>

                <Col xs={3 / 2} md={3 / 2}>
                  <Paper style={PaperStylescoding} zDepth={1}>
                    <img src="images/qiutopia.jpg" />
                    <h2>动态数理（进行中）</h2>
                    我2015年8月参加了求师得的“动态数理”课程，并完成了作业。<br />
                    2016年，动态数理课程改版。2017年8月，我再次参加此课程，并担任助教。<br />
                    这次，我要比上一次更加认真钻研，更优秀地完成任务！<br />
                    也欢迎大家积极参加求师得课程！<br />
                    <RaisedButton
                      label="百度云（2015）"
                      href="http://pan.baidu.com/s/1boGCKPL"
                      target="_blank"
                      backgroundColor="#2196F3"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <RaisedButton
                      label="百度云（2017）"
                      href="http://pan.baidu.com/s/1o7PJQvo"
                      target="_blank"
                      backgroundColor="#2196F3"
                    /><br />
                    <RaisedButton
                      label="求师得主页"
                      href="http://www.qiusir.com/?page_id=997"
                      target="_blank"
                      backgroundColor="#CD2626"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <RaisedButton
                      label="动态数理课程"
                      href="http://mp.weixin.qq.com/s/4uv-t3DHubBo-nG6xU2q9w"
                      target="_blank"
                      backgroundColor="#CD2626"
                    />
                  </Paper>
                </Col>

              </Row>
            </body>
            <Row center="xs">
              <Col xs={8} md={6}>
                <RaisedButton backgroundColor="#000000" label="返回主页" href="/main" />
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}
export { Coding, Router, Route, Switch };
