import * as React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton'; // 库里的button
import SwipeableViews from 'react-swipeable-views'; // 安装拓展包：yarn add @包名
import { headStyles, PaperStyleshobby, TabStyles, TabHeadStyles } from './constants';
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
class Hobby extends React.Component<
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
    slideIndex: number
  }> {
  public state = {
    slideIndex: 0
  }; // 必须定义state初值，否则是null
  handleTabChange = (val: number) => {
    this.setState({ slideIndex: val });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Grid fluid={true}>
            <Tabs
              onChange={this.handleTabChange}
              value={this.state.slideIndex}
            >
              <Tab label="欧美圈" value={0} style={TabHeadStyles} buttonStyle={headStyles} />
              <Tab label="二次元" value={1} style={TabHeadStyles} buttonStyle={headStyles} />
              <Tab label="其他" value={2} style={TabHeadStyles} buttonStyle={headStyles} />
            </Tabs>
            <SwipeableViews
              index={this.state.slideIndex}
              onChangeIndex={this.handleTabChange}
            >
              <div>
                <Row center="xs">
                  <Col xs={8} md={6}>
                    <h1>电视剧</h1>
                  </Col>
                </Row>

                <Paper style={PaperStyleshobby} zDepth={1}>
                  <Row around="xs">
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/Viking.jpg" /><br />
                      <h3>维京传奇</h3>
                      2013年8月入坑<br />
                      只看了第一季，有些暴力。<br />
                      对历史还原不错。
                                        </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/GameofThrones.jpg" /><br />
                      <h3>冰与火之歌</h3>
                      2013年10月入坑<br />
                      书看完前五卷，剧正在追第七季<br />
                      很棒的作品，剧情特效表演都极佳<br />
                      就是书和剧在第四季开始分家<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/Sherlock.jpg" /><br />
                      <h3>神探夏洛克</h3>
                      2014年9月入坑<br />
                      追完了前四季<br />
                      很棒的作品，被卷福圈粉<br />
                      把19世纪的故事搬到现代背景很有创意<br />
                      希望早日更第五季（有生之年系列）
                                        </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/flash.jpg" /><br />
                      <h3>闪电侠</h3>
                      2015年8月入坑<br />
                      追完了前三季<br />
                      很棒的作品，将英雄故事与家庭生活结合起来，完美展现了西方生活，文化<br />
                      人物塑造很棒很有特点<br />
                    </Col>
                  </Row>
                </Paper>

                <Row center="xs">
                  <Col xs={8} md={6}>
                    <h1> 科幻电影 </h1>
                  </Col>
                </Row>
                <Paper style={PaperStyleshobby} zDepth={1}>
                  <Row around="xs">
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/marvel.jpg" /><br />
                      <h3>漫威+DC</h3>
                      2012年9月入坑<br />
                      主要系列电影都看过。<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/starwar.jpg" /><br />
                      <h3>星球大战</h3>
                      2016年2月入坑<br />
                      前传+正传+原力觉醒+侠盗一号都看过<br />
                      可以说是科幻，特效电影的鼻祖了<br />
                      17年底ep8要上映了<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/startrek.jpg" /><br />
                      <h3>星际迷航</h3>
                      2016年2月入坑<br />
                      新作三部电影都看了<br />
                      很棒的作品，有动作片的刺激也有科幻片的特效<br />
                      看完想去太空<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/mars.jpg" /><img src="images/inter.jpg" /><br />
                      <h3>硬科幻</h3>
                      近几年的硬科幻大片首推这两部<br />
                      《星际穿越》，《火星救援》<br />
                      既有专业科学家提供支持的科学理论<br />
                      也有天马行空的幻想<br />
                      看完想去太空+10086<br />
                    </Col>
                  </Row>
                </Paper>
                <Row center="xs">
                  <Col xs={8} md={6}>
                    <h1> 古装+奇幻电影 </h1>
                  </Col>
                </Row>
                <Paper style={PaperStyleshobby} zDepth={1}>
                  <Row around="xs">
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/KingdomofHeaven.jpg" /><br />
                      <h3>天国王朝</h3>
                      刷了很多遍的佳作<br />
                      很好的展现了中世纪战争，特效震撼<br />
                      演员的表演，剧情的推进也还不错<br />

                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/braveheart.jpg" /><br />
                      <h3>勇敢的心</h3>
                      也是刷了好多遍<br />
                      电影对历史，战争刻画很细腻<br />
                      梅尔·吉布森表演很棒<br />
                      苏格兰风笛的主题曲很好听<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/LordofRings.jpg" /><br />
                      <h3>魔戒+霍比特人</h3>
                      尽管每部电影三四个小时，我还是刷了三遍<br />
                      每部作品都非常震撼，从特效布景到剧情表演<br />
                      尤其是王者归来的决战，被誉为古代战争片难以超越的巅峰<br />
                      看完想回到中世纪<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/narnia.jpg" /><br />
                      <h3>纳尼亚传奇</h3>
                      小时候看过，然后15年12月二刷<br />
                      有中世纪的城堡和骑士<br />
                      也有人形动物，穿越，魔法<br />
                      很棒的系列<br />
                    </Col>
                  </Row>
                </Paper>

                <Row center="xs">
                  <Col xs={8} md={6}>
                    <h1> 音乐 </h1>
                  </Col>
                </Row>
                <Paper style={PaperStyleshobby} zDepth={1}>
                  <Row around="xs">
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/linkinpark.jpg" /><br />
                      <h3>Linkin Park</h3>
                      2012年9月入坑<br />
                      美国摇滚的先锋<br />
                      代表作：Numb，New Divide,Iredescent,<br />
                      In the End,What I've Done,Final Masquerade<br />
                      R.I.P for Chester<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/Globus.jpg" /><br />
                      <h3>Globus+Immediate Music</h3>
                      2014年1月入坑<br />
                      非常喜欢他们的燃向史诗<br />
                      代表作：Europa,Serenata Immortale,<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/Nightwish.jpg" /><br />
                      <h3>Nightwish</h3>
                      2015年1月入坑<br />
                      北欧的王牌哥特重金属+民谣<br />
                      代表作：Last of the Wilds，Escapist,<br />
                      I want my tears back,Elan<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/Imagine Dragons.jpg" /><br />
                      <h3>Imagine Dragons</h3>
                      2015年7月入坑<br />
                      新晋美国摇滚乐队！大爱！<br />
                      代表作：Radioactive,Demons,Warriors,<br />
                      Whatever it takes，Beliver<br />
                      买了他们2017年6月的新专Evolve<br />
                    </Col>
                  </Row>
                </Paper><br />
                <Paper style={PaperStyleshobby} zDepth={1}>
                  <Row around="xs">
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/tsfh.jpg" /><br />
                      <h3>Two Steps From Hell</h3>
                      2015年8月入坑<br />
                      史诗纯音乐的典范！<br />
                      代表作：Victory,Star Sky,El Dorado,<br />
                      For the Win,Compass,Birth of a Hero<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/fob.jpg" /><br />
                      <h3>Fall out Boys</h3>
                      2016年2月入坑<br />
                      极其有气势的美国摇滚乐队<br />
                      代表作：Centuries,Immortals,Phoenix,<br />
                      Champion,My song knows what you did in the dark<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/onerepublic.jpg" /><br />
                      <h3>One Republic</h3>
                      2016年8月入坑<br />
                      歌曲动人，充满正能量的美国流行乐队<br />
                      代表作：Counting Stars,Apologize,Secrets<br />
                      Stop and Stare,Future Looks Good,Rich Love<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/coldplay.jpg" /><br />
                      <h3>Coldplay</h3>
                      2016年8月入坑<br />
                      曲风深刻又飘逸的英国乐队<br />
                      代表作：Viva la Vida,Yellow,Paradise<br />
                      Hymn for the weekend,Something Just Like This<br />
                    </Col>
                  </Row>
                </Paper>
                <Row center="xs">
                  <Col xs={8} md={6}>
                    <RaisedButton backgroundColor="#000000" label="返回主页" href="/main" />
                  </Col>
                </Row>
              </div>

              <div style={TabStyles.slide}>
                <Row center="xs">
                  <Col xs={8} md={6}>
                    <h1>番剧</h1>
                  </Col>
                </Row>
                <Paper style={PaperStyleshobby} zDepth={1}>
                  <Row around="xs">
                    <Col xs={7 / 4} md={7 / 4}>
                      <img src="images/fate.jpg" /><br />
                      <h3>Fate系列</h3>
                      2015.1-6 UBW<br />
                      2017.2 FZ<br />
                      2017.7-9 Apocrypha<br />
                      特效吊炸天，大帝秒圈粉。<br />
                    </Col>
                    <Col xs={7 / 4} md={7 / 4}>
                      <img src="images/arslan.jpg" /><br />
                      <h3>亚尔斯兰战记</h3>
                      2015.4-9 第一季<br />
                      2016.8 第二季<br />
                      少有的正统历史战争番。<br />
                      中世纪欧洲中东的背景，三国的计谋故事。<br />
                    </Col>
                    <Col xs={7 / 4} md={7 / 4}>
                      <img src="images/banben.jpg" /><br />
                      <h3>在下坂本，有何贵干</h3>
                      2016.4-6<br />
                      坂本大佬简直吊炸天！<br />
                      宣传了社会正能量。<br />
                      可惜日本口碑不佳没第二季了。<br />
                    </Col>
                  </Row>
                </Paper>
                <Paper style={PaperStyleshobby} zDepth={1}>
                  <Row around="xs">
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/re.jpg" /><br />
                      <h3>Re:从零开始的异世界生活</h3>
                      2016.7-9<br />
                      剧情很吸引人。<br />
                      男主不再超神，而是会失败会痛的普通人。<br />
                      他从一个中二弱者成长为真正的强者。<br />
                      正视自己，谦逊，理性，永不放弃，我和男主一起改变。<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/bianzhouji.jpg" /><br />
                      <h3>编舟记</h3>
                      2017.2<br />
                      2013年一部日本电影改编。<br />
                      很安静小众。<br />
                      充分诠释了日本人的“工匠精神”。<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/atom.jpg" /><br />
                      <h3>阿童木·起源</h3>
                      2017.4-6<br />
                      阿童木前传<br />
                      似乎没看到什么童年回忆。<br />
                      但是人物刻画，还有对未来科技的描绘，还有对人工智能与人性的看法很不错。<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/zero.jpg" /><br />
                      <h3>从零开始的魔法书</h3>
                      2017.4-6<br />
                      很有趣的番剧，很治愈。<br />
                      男主（大喵）很萌，女主美如画<br />
                    </Col>
                  </Row>
                </Paper>
                <Row center="xs">
                  <Col xs={8} md={6}>
                    <h1>其他</h1>
                  </Col>
                </Row>
                <Paper style={PaperStyleshobby} zDepth={1}>
                  <Row around="xs">
                    <Col xs={7 / 4} md={7 / 4}>
                      <img src="images/guichu.jpg" /><br />
                      <h3>鬼畜</h3>
                      2014年1月接触鬼畜（入圈原因）<br />
                      先是元首金坷垃葛炮，<br />
                      又有王司徒雷军战地，<br />
                      之后是极乐净土达拉崩吧。<br />
                      鬼畜区啊，Excited!<br />
                    </Col>
                    <Col xs={7 / 4} md={7 / 4}>
                      <img src="images/vocaloid.jpg" /><br />
                      <h3>中文Vocaloid</h3>
                      2016年2月入坑<br />
                      代表作品：牵丝戏，锦鲤抄（都是翻唱），<br />
                      天朝理科生战歌，霜雪千年，前尘如梦，<br />
                      双生契，中华五行娘，三月雨，<br />
                      当然还有拜年祭的权御天下，九九八十一，万神纪<br />
                    </Col>
                    <Col xs={7 / 4} md={7 / 4}>
                      <img src="images/touhou.jpg" /><br />
                      <h3>东方project</h3>
                      2016.8入教<br />
                      打过原作后彻底放弃<br />
                      主要听原曲和同人曲（红茶馆，千年幻想乡之类），<br />
                      还看同人作品（万华镜，梦想夏乡等）<br />
                    </Col>
                  </Row>
                </Paper>
                <Row center="xs">
                  <Col xs={8} md={6}>
                    <RaisedButton backgroundColor="#000000" label="返回主页" href="/main" />
                  </Col>
                </Row>
              </div>

              <div style={TabStyles.slide}>
                <Row center="xs">
                  <Col xs={8} md={6}>
                    <h1>足球</h1>
                  </Col>
                </Row>
                <Paper style={PaperStyleshobby} zDepth={1}>
                  <Row around="xs">
                    <Col xs={7 / 4} md={7 / 4}>
                      <img src="images/soccer.jpg" /><br />
                      <h3>踢球</h3>
                      2014年3月开始踢球，<br />
                      主要是后卫，偶尔兼职后腰（谁叫我班没人踢），<br />
                      球技渣渣求轻虐。<br />
                    </Col>
                    <Col xs={7 / 4} md={7 / 4}>
                      <img src="images/Barcelona.jpg" /><br />
                      <h3>巴萨球迷</h3>
                      小学就跟哥哥一起看巴萨，<br />
                      高中看球也是巴萨球迷。<br />
                      然而原来的老将们大量退役，中场疲软，而对手皇马巨强无比。<br />
                      新赛季巴萨，还有很长的路要走。<br />
                    </Col>
                    <Col xs={7 / 4} md={7 / 4}>
                      <img src="images/PES.jpg" /><br />
                      <h3>实况足球</h3>
                      小学沉默PES8无法自拔，<br />
                      初中玩过PES2011,2013，<br />
                      高中没再碰过，<br />
                      大学可能会继续PES2017吧。<br />
                    </Col>
                  </Row>
                </Paper>
                <Row center="xs">
                  <Col xs={8} md={6}>
                    <h1>阅读</h1>
                  </Col>
                </Row>
                <Paper style={PaperStyleshobby} zDepth={1}>
                  <Row around="xs">
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/threebody.jpg" /><img src="images/galaxy.jpg" /><br />
                      <h3>科幻</h3>
                      2014年8月刷完三体<br />
                      2017年7月刷了帝国三部曲，<br />
                      打算继续刷银河帝国系列。<br />
                      科幻佳作们符合科学理论，逻辑自洽，剧情吸引人，值得一看。<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/news.jpg" /><br />
                      <h3>时评</h3>
                      2017上半年养成看新闻，时评习惯。<br />
                      这让我始终没有和时代脱节。<br />
                      时评也让我养成了理性的思维习惯。<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/mingzhu.jpg" /><br />
                      <h3>名著</h3>
                      小学就刷了三大名著（没看红楼梦）<br />
                      初高中也看了一些，<br />
                      虽然阅读名著的量不多，<br />
                      但是已经能体会到名著的好处了。<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/history.jpg" /><br />
                      <h3>历史</h3>
                      小学就很喜欢历史，<br />
                      看了中国，世界通史，<br />
                      还有明朝那些事儿，<br />
                      现在动不动就会百度/维基一些历史资料。<br />
                    </Col>
                  </Row>
                </Paper>
                <Row center="xs">
                  <Col xs={8} md={6}>
                    <h1>游戏</h1>
                  </Col>
                </Row>
                <Paper style={PaperStyleshobby} zDepth={1}>
                  <Row around="xs">
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/skyrim.jpg" /><br />
                      <h3>上古卷轴</h3>
                      2012年8月入坑老滚5，玩了三周目。<br />
                      2014年3月玩了老滚4。<br />
                      RPG沙盒神作，自由度很高，剧情很吸引人。<br />
                      很有代入感，让我对中世纪欧洲产生浓厚兴趣。<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/mb.jpg" /><br />
                      <h3>骑马与砍杀</h3>
                      2013年5月入坑火与剑。<br />
                      2013年8月入坑战团。<br />
                      2014年做了战团mod。<br />
                      很棒的游戏，还原了中世纪的战争。<br />
                      当然骑砍2吗，有生之年系列。<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/totalwar.jpg" /><br />
                      <h3>全面战争</h3>
                      2014年5月入坑帝战，<br />
                      2014年9月入坑中2。<br />
                      很棒的回合制策略游戏。<br />
                      战略战术都做的不错。<br />
                    </Col>
                    <Col xs={3 / 2} md={3 / 2}>
                      <img src="images/civ5.jpg" /><br />
                      <h3>文明</h3>
                      2017年7月入坑文明5。<br />
                      科技，政策，文明特点都符合历史。<br />
                      大大提高了我的词汇量和历史文化素养。<br />
                      就是太容易上瘾。。。<br />
                    </Col>
                  </Row>
                </Paper>
                <Row center="xs">
                  <Col xs={8} md={6}>
                    <RaisedButton backgroundColor="#000000" label="返回主页" href="/main" />
                  </Col>
                </Row>
              </div>
            </SwipeableViews>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}
export { Hobby, Router, Route, Switch };