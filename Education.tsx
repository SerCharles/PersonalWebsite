import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'; // 库里的button
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';
import { PaperStyles } from './constants';
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
class Education extends React.Component<
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
  }>, {
    expanded1: boolean,
    buttonlabel1: string,
    expanded2: boolean,
    buttonlabel2: string,
    expanded3: boolean,
    buttonlabel3: string,
    expanded4: boolean,
    buttonlabel4: string
  }> {
  public state = {
    expanded1: false,
    buttonlabel1: '展开',
    expanded2: false,
    buttonlabel2: '展开',
    expanded3: false,
    buttonlabel3: '展开',
    expanded4: false,
    buttonlabel4: '展开'
  }; // 必须定义state初值，否则是null
  handleExpand1 = (e: React.FormEvent<{}>) => {
    this.setState({
      expanded1: !this.state.expanded1
    });
    if (this.state.expanded1 === true) {
      this.setState({
        buttonlabel1: '展开'
      });
    } else {
      this.setState({
        buttonlabel1: '收起'
      });
    }
  }
  handleExpand2 = (e: React.FormEvent<{}>) => {
    this.setState({
      expanded2: !this.state.expanded2
    });
    if (this.state.expanded2 === true) {
      this.setState({
        buttonlabel2: '展开'
      });
    } else {
      this.setState({
        buttonlabel2: '收起'
      });
    }
  }
  handleExpand3 = (e: React.FormEvent<{}>) => {
    this.setState({
      expanded3: !this.state.expanded3
    });
    if (this.state.expanded3 === true) {
      this.setState({
        buttonlabel3: '展开'
      });
    } else {
      this.setState({
        buttonlabel3: '收起'
      });
    }
  }
  handleExpand4 = (e: React.FormEvent<{}>) => {
    this.setState({
      expanded4: !this.state.expanded4
    });
    if (this.state.expanded4 === true) {
      this.setState({
        buttonlabel4: '展开'
      });
    } else {
      this.setState({
        buttonlabel4: '收起'
      });
    }
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div title="Education">
          <Grid fluid={true} >
            <Row around="xs" middle="xs">
              <Col xs={2} md={2}>
                <Paper style={PaperStyles} zDepth={1} >
                  <h3>小学</h3>
                  2005-2010<br />南十二路小学 <br /><br />
                  <FlatButton
                    label="点击进入学校主页"
                    href="http://jiaoyu65318600.e-fa.cn/"
                    target="_blank"
                  />

                  <Card expanded={this.state.expanded1} >
                    <CardMedia expandable={false}>
                      <img src="images/primaryschool.jpg" />
                    </CardMedia >
                    <CardText expandable={true}>
                      本人是南十二路小学05级2班学生。<br />
                      在校期间担任学习委员，<br />
                      多次获得语文，数学，英语竞赛一等奖。<br />
                      然而因为幼稚淘气也没少给老师添麻烦。
                                        </CardText>
                    <CardActions>
                      <FlatButton label={this.state.buttonlabel1} onClick={this.handleExpand1} />
                    </CardActions>
                  </Card><br />
                </Paper>
              </Col>

              <Col xs={2} md={2}>
                <Paper style={PaperStyles} zDepth={1} >
                  <h3>初中</h3>2010-2013<br />东北育才学校<br />少儿部&初中部 <br />
                  <FlatButton
                    label="点击进入学校主页"
                    href="http://www.neyc.cn/"
                    target="_blank"
                  />
                  <Card expanded={this.state.expanded2}>
                    <CardMedia>
                      <img src="images/middleschool.jpg" />
                    </CardMedia>
                    <CardText expandable={true}>
                      我在2010年夏季通过笔试和试读考试进入少25甲班。<br />
                      然而因我心智不成熟，缺乏方法，纪律差，<br />
                      我没能通过少儿部分流考试。<br />
                      于是我被分配到初中部11常态2班。<br />
                      在初中，虽然仍Naive，但我没有放弃，<br />
                      我不断进取，改变，从初一的年级一百多名<br />
                      提高到初三的年级前30.<br />
                      最终我在分流考试以常态第二升入高中部。
                                        </CardText>
                    <CardActions>
                      <FlatButton label={this.state.buttonlabel2} onClick={this.handleExpand2} />
                    </CardActions>
                  </Card><br />
                </Paper>
              </Col>

              <Col xs={2} md={2}>
                <Paper style={PaperStyles} zDepth={1} >
                  <h3>高中</h3>2014-2017<br />东北育才学校<br />高中部 <br />
                  <FlatButton
                    label="点击进入学校主页"
                    href="http://www.neyc.cn/"
                    target="_blank"
                  />
                  <Card expanded={this.state.expanded3}>
                    <CardMedia>
                      <img src="images/highschool.jpg" />
                    </CardMedia>
                    <CardText expandable={true}>
                      我在2014年进入直升5班学习<br />
                      在直升班我学习物理，信息竞赛，掌握了许多新知识，也对历史，足球产生了深入兴趣<br />
                      之后我考入2014级科技创新实验班<br />
                      高一，高二，我成绩基本稳定在年级前十<br />
                      我还获得了NOIP2015省一等奖（第8），2016全国中学生英语能力大赛二等奖，以及各种优秀学生荣誉。<br />
                      我坚持锻炼，每天跑1500m，踢球一节课，在2015,2016参加了运动会3000项目，参加了高一足球联赛<br />
                      我还担任电子科技社团技术部部长，参与组织了社团的蓝牙智能小车，以及connext@shenyang2016活动<br />
                      高三，我不断改进学习方法，努力学习<br />
                      最终，我以691分（高中部第3，全校第7，全省13）的成绩考入清华大学计算机系。
                                        </CardText>
                    <CardActions>
                      <FlatButton label={this.state.buttonlabel3} onClick={this.handleExpand3} />
                    </CardActions>
                  </Card><br />
                </Paper>
              </Col>

              <Col xs={2} md={2}>
                <Paper style={PaperStyles} zDepth={1} >
                  <h3>大学本科</h3>2017-2021<br />清华大学<br />计算机系<br />
                  <FlatButton
                    label="点击进入学校主页"
                    href="http://www.tsinghua.edu.cn/publish/newthu/index.html"
                    target="_blank"
                  />
                  <Card expanded={this.state.expanded4}>
                    <CardMedia>
                      <img src="images/THU.jpg" />
                    </CardMedia>
                    <CardText expandable={true}>
                      与清华结缘，是在2016暑校<br />
                      我当时代表N3班参加暑校文艺汇演的答题环节，进入了半决赛。<br />
                      最终我获得“通过”评价，并获得“紫荆学员”荣誉。<br />
                      在2017年领军计划中，我获得30分降分。<br />
                      我将在8月进入计算机系学习。<br />
                      前路漫漫，吾当求索。
                                        </CardText>
                    <CardActions>
                      <FlatButton label={this.state.buttonlabel4} onClick={this.handleExpand4} />
                    </CardActions>
                  </Card><br />
                </Paper>
              </Col>
            </Row>
            <br />
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
export { Education, Router, Route, Switch };