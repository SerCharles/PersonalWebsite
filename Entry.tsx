import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton'; // 库里的button
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'; // 库里的文本框，可以直接用库里的属性方法事件
import { Styles, DropDownMenuStyles, dataSourcesex } from './constants';
import * as store from 'store';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from 'react-router-dom';
class Entry extends React.Component<
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
    textFieldValue: string;
    DropDownMenuSex: number;
    Defaultmessage: string;
    buttonhref: string;
    opened: boolean
  }> {
  public state = {
    textFieldValue: '',
    DropDownMenuSex: 0,
    Defaultmessage: '请输入您的姓名',
    buttonhref: '',
    opened: false
  }; // 必须定义state初值，否则是null
  handletextFieldChange = (e: React.FormEvent<{}>, val: string) => {
    this.setState({ textFieldValue: val }); // 文本框函数，万金油
  }
  handleCancel = (e: React.FormEvent<{}>) => {
    this.setState({
      textFieldValue: '',
      DropDownMenuSex: 0
    });
  }
  handleDropDownMenu = (e: React.FormEvent<{}>, val: number) => {
    this.setState({ DropDownMenuSex: val });
  }
  render() {
    if (this.state.textFieldValue === '') {
      this.state.Defaultmessage = '请输入您的姓名';
      this.state.buttonhref = '';
    } else {
      this.state.Defaultmessage = '';
      this.state.buttonhref = '/main';
    }
    store.set('name', {
      name: this.state.textFieldValue,
      sex: this.state.DropDownMenuSex
    }); // 非对象所属的一些东西只能在这里或者constructor定义
    return (
      <MuiThemeProvider>
        <div title="Welcome!">
          <Grid fluid={true}>
            <Row center="xs">
              <Col xs={4} md={3}>

                <h1>欢迎访问我的个人网站！</h1>
                <br />
                <TextField
                  hintText="请输入您的姓名"
                  hintStyle={Styles.hintStyle}
                  value={this.state.textFieldValue}
                  onChange={this.handletextFieldChange}
                  errorText={this.state.Defaultmessage}
                  errorStyle={Styles.errorStyle}
                  style={Styles.colorStyle}
                />
              </Col>
            </Row>
            <Row center="xs" middle="xs">
              <Col xs={2} md={2}>
                请选择您的性别:
                                  </Col>
              <Col>
                <DropDownMenu
                  value={this.state.DropDownMenuSex}
                  style={DropDownMenuStyles.customWidth}
                  autoWidth={false}
                  onChange={this.handleDropDownMenu}
                  openImmediately={true}
                  menuStyle={DropDownMenuStyles.menuStyle}
                  labelStyle={DropDownMenuStyles.textStyle}
                >
                  {dataSourcesex.map((val, id, arr) => (
                    <MenuItem value={id} primaryText={val} />
                    // ts必须同步执行。map同步，foreach异步，所以用map
                  ))}
                </DropDownMenu><br />
              </Col>
            </Row>
            <Row center="xs">
              <Col xs={4} md={1}>
                <RaisedButton
                  backgroundColor={Styles.colorStyle.color}
                  label="保存"
                  href={this.state.buttonhref}
                />
              </Col>
              <Col xs={4} md={1}>
                <RaisedButton
                  backgroundColor={Styles.colorStyle.color}
                  label="清空"
                  onClick={this.handleCancel}
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}
export { Entry, Router, Route, Switch };