import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton'; // 库里的button
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { PaperStylesself } from './constants';
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
class Self extends React.Component<
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
  }>, {}> {
  render() {

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Grid fluid={true}>
            <Row around="xs">
              <Col xs={3 / 2} md={3 / 2}>
                <Paper style={PaperStylesself} zDepth={1}>
                  <img src="images/character.jpg" />
                  <h2>我的性格</h2>
                  对于学习，我比较喜欢钻研，认为只有自己获取的知识才真正是自己的。<br />
                  我认为理论应该与实践并行，理论指导实践，实践验证，强化理论。<br />
                  对于生活 ，我的性格比较开朗，愿意与陌生人交朋友。<br />
                  面对困难，我能积极，主动面对，能坚持，不放弃。<br />
                  为人处世方面，我的情商并不高。虽然我懂得换位思考，<br />
                  但是在有些情况下，我仍旧不能用理性的思考控制冲动，<br />
                  这导致我性格有时温和有时暴躁。而且，我不擅长揣度他人心思，也不太愿意这么做。<br />
                </Paper>
              </Col>

              <Col xs={3 / 2} md={3 / 2}>
                <Paper style={PaperStylesself} zDepth={1}>
                  <img src="images/dream.jpg" />
                  <h2>人生追求</h2>
                  对于个人，我觉得，首先要尽到家庭和社会的责任。<br />
                  之后，我觉得应该用技术为祖国，为人类做些贡献，<br />
                  再之后，我觉得应该凭技术创新改变世界，这样才能青史留名，不白活这一生。<br />
                  最终，我希望晚年能享受我亲手创造的美好生活。<br />
                  对于世界，我希望在我退休时，可控核聚变，太阳能，风能成为主要能源；<br />
                  太空电梯，新材料蓬勃发展；医学，生态学取得突破；<br />
                  新型计算机普及，推进物联网，大数据，人工智能不断发展，人类生产生活高度智能化，自动化；<br />
                  人类有能力移民外星，探索宇宙，地球环境也不恶劣；<br />
                  社会不断进步，封建余孽被清除，不再有贫穷与饥饿。<br />
                </Paper>
              </Col>

              <Col xs={3 / 2} md={3 / 2}>
                <Paper style={PaperStylesself} zDepth={1}>
                  <img src="images/politics.jpg" />
                  <h2>政治主张</h2>
                  个人觉得现在中国的制度足够保障人民的民主与自由。<br />
                  但是因为法治建设不完善，部分领导干部观念落后，信息公开程度不够，互联网平台管制太严，<br />
                  我们的民主，自由权利并未被很好保护。<br />
                  希望政府能够敢于触动部分利益集团的蛋糕，锐意改革，大力打击腐败（尤其是基层），<br />
                  进一步公开政务信息，拓宽百姓参与政治的渠道。<br />
                  同时也希望墙的通透性更强，在抵御外国的恶意攻击，谣言，非法内容的同时，<br />
                  不要阻断国际经济，文化，技术与学术交流的通道。
                                </Paper>
              </Col>

            </Row>
            <Row center="xs">
              <Col xs={4} md={1}>
                <RaisedButton backgroundColor="#000000" label="返回主页" href="/main" />
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}
export { Self, Router, Route, Switch };