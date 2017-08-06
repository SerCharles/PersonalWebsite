// This is where you write the code,the core of the app.
import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import { BarStyles, headStyles, PaperStylesmain } from './constants';
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import * as store from 'store';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Entry } from './Entry';
import { Self } from './Self';
import { Education } from './Education';
import { Coding } from './Coding';
import { Hobby } from './Hobby';
class App extends React.Component<
    {
        name: string
    }, {}> {
    render() {
        // Router只有一个子节点，所以用div包裹他们
        return (
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={Entry} />
                    <Route path="/main" component={Main} />
                    <Route path="/self" component={Self} />
                    <Route path="/education" component={Education} />
                    <Route path="/coding" component={Coding} />
                    <Route path="/hobby" component={Hobby} />
                </Switch>
            </Router>
        );
    }
}
class Main extends React.Component<
    RouteComponentProps<{
        mmain: string
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
        let a = '';
        {
            if (store.get('name').sex === 1) { a = '先生'; }
            if (store.get('name').sex === 2) { a = '女士'; }
        }
        return (  // 显示函数
            // 图片相对路径是相对public（网站静态资源）的，把文件放到public里

            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <Grid fluid={true} >
                        <body >
                            <Row center="xs">
                                <Col xs={15} md={15}>
                                    <h1>
                                        {store.get('name').name}{a},您好,欢迎访问我的个人网站！
                                    </h1>
                                </Col>
                            </Row>
                        </body>
                        <body>
                            <Row>
                                <AppBar title="个人简介" style={BarStyles} titleStyle={headStyles} />
                            </Row>
                            <Row around="xs" middle="xs">
                                <Col xs={2} md={2}>
                                    <Card>
                                        <CardMedia>
                                            <img src="images/myself.jpg" />
                                        </CardMedia>
                                    </Card>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3>
                                        姓名：沈冠霖<br />
                                        English name: <br />
                                        Charles William Shen<br />
                                        生日：1999/2/8<br />
                                        年龄：18<br />
                                        性别：男<br />
                                        国籍：中华人民共和国<br />
                                        民族：汉族<br />
                                        职业：学生<br />
                                        现就读学校：清华大学<br />
                                        院系: 计算机系
                                    </h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3>
                                        电话：18309858512<br />
                                        QQ：1215129057<br />
                                        Wechat：SwadianKnight1492<br />
                                        知乎： Ser Charles<br />
                                        网易云音乐：Ser_Charles <br />
                                        Bilibili：星海-Charles <br />
                                        Email： ssa19990208@foxmail.com<br />
                                        swadianknight1492@gmail.com<br />
                                        百度云：SSAGOD<br />
                                        欢迎您与我交朋友！<br />
                                    </h3>
                                </Col>
                            </Row>
                        </body>
                        <body>
                            <Row>
                                <AppBar title="详细资料" style={BarStyles} titleStyle={headStyles} />
                            </Row>
                            <Row around="xs">
                                <Col xs={2} md={2}>
                                    <Paper style={PaperStylesmain} zDepth={1} >
                                        <FlatButton label="我的自述" href="/self" /><br />
                                        <Card>
                                            <CardMedia>
                                                <img src="images/self.jpg" />
                                            </CardMedia>
                                        </Card>
                                    </Paper>
                                </Col>
                                <Col xs={2} md={2}>
                                    <Paper style={PaperStylesmain} zDepth={1} >
                                        <FlatButton label="教育经历" href="/education" /><br />
                                        <Card>
                                            <CardMedia>
                                                <img src="images/education.jpg" />
                                            </CardMedia>
                                        </Card>
                                    </Paper>
                                </Col>
                                <Col xs={2} md={2}>
                                    <Paper style={PaperStylesmain} zDepth={1} >
                                        <FlatButton label="技术项目" href="/coding" /><br />
                                        <Card>
                                            <CardMedia>
                                                <img src="images/developing.jpg" />
                                            </CardMedia>
                                        </Card>
                                    </Paper>
                                </Col>
                                <Col xs={2} md={2}>
                                    <Paper style={PaperStylesmain} zDepth={1} >
                                        <FlatButton label="个人爱好" href="/hobby" /><br />
                                        <Card>
                                            <CardMedia>
                                                <img src="images/hobby.jpg" />
                                            </CardMedia>
                                        </Card>
                                    </Paper>
                                </Col>
                            </Row>
                        </body>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default App;