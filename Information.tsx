
/*class Main extends React.Component<
    RouteComponentProps<{
        main: string
        show: string
        // here goes the matched params in route
        // for example, if a route is defined as "/:id",
        // you should declare
        // id:string
    }>,
    // 泛型的类型参数，第一个是props，第二个是state。目的：让子类的类型适配类型参数，防止类型混乱。
    {
        textFieldValue: string;
        DropDownMenuValueCity: number;
        DropDownMenuValueUniversity: number
    }> {
    public state = {
        textFieldValue: '',
        DropDownMenuValueCity: 0,
        DropDownMenuValueUniversity: 0
    }; // 必须定义state初值，否则是null
    public printValue: string;
    handletextFieldChange = (e: React.FormEvent<{}>, val: string) => {
        this.setState({ textFieldValue: val }); // 文本框函数，万金油
    }
    handleDropDownMenuChangeCity = (e: React.FormEvent<{}>, val: number) => {
        this.setState({ DropDownMenuValueCity: val });
    }
    handleDropDownMenuChangeUniversity = (e: React.FormEvent<{}>, val: number) => {
        this.setState({ DropDownMenuValueUniversity: val });
    }
    handleCancel = (e: React.FormEvent<{}>) => {
        this.setState({
            textFieldValue: '',
            DropDownMenuValueCity: 0,
            DropDownMenuValueUniversity: 0
        });
    }
    render() {
        store.set('imformation', {
            name: this.state.textFieldValue,
            city: dataSourcecity[this.state.DropDownMenuValueCity],
            university: dataSourceuniversity[this.state.DropDownMenuValueCity][this.state.DropDownMenuValueUniversity]
        }); // 非对象所属的一些东西只能在这里或者constructor定义
        return (  // 显示函数
            <MuiThemeProvider>
                <div>

                    姓名：<TextField
                        hintText="请输入您的姓名"
                        hintStyle={ButtonStyles.hintStyle}
                        value={this.state.textFieldValue}
                        onChange={this.handletextFieldChange}
                    /><br />
                    原班级：<AutoComplete
                        floatingLabelText="请选择您的班级"
                        filter={AutoComplete.noFilter}
                        openOnFocus={true}
                        dataSource={dataSourceclass}
                    /><br />
                    录取城市：<DropDownMenu
                        value={this.state.DropDownMenuValueCity}
                        style={DropDownMenuStyles.customWidth}
                        autoWidth={false}
                        onChange={this.handleDropDownMenuChangeCity}
                        openImmediately={true}
                    >
                        {dataSourcecity.map((val, id, arr) => (
                            <MenuItem value={id} primaryText={val} />             // ts必须同步执行。map同步，foreach异步，所以用map
                        ))}
                    </DropDownMenu><br />
                    录取大学：
                    <DropDownMenu
                        value={this.state.DropDownMenuValueUniversity}
                        style={DropDownMenuStyles.customWidth}
                        autoWidth={false}
                        onChange={this.handleDropDownMenuChangeUniversity}
                        openImmediately={true}
                    >
                        {dataSourceuniversity.map((val, id, arr) => (
                            <MenuItem
                                value={id}
                                primaryText={dataSourceuniversity[this.state.DropDownMenuValueCity][id]}
                            />
                            // 其实：二维数组：一维数组每个元素都是数组
                        ))}
                    </DropDownMenu><br />
                    <RaisedButton
                        backgroundColor="#66CCFF"
                        label="确认"
                        href="/show"
                    />&nbsp;&nbsp;&nbsp;&nbsp;
                    <RaisedButton
                        backgroundColor="#66CCFF"
                        label="取消"
                        onClick={this.handleCancel}
                    /><br />
                </div>
            </MuiThemeProvider>
        );
    }
}*/
