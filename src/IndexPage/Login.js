/**
 * Created by sea35 on 2017/1/20.
 */
import React, {Component} from 'react';
import {
    Layout,
    Button,
    Row,
    Input,
    Form
} from 'antd';
const {Header, Footer, Sider, Content} = Layout;
const FormItem = Form.Item
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleOk=this.handleOk.bind(this);
    }

    handleOk() {
        this.props.form.validateFieldsAndScroll((errors, values) => {
            if (errors) {
                console.log(errors);
                return
            }
            this.props.loginClick(values)
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Layout>
                    <Header> <span>{this.props.logoText || "ZOE NET"}</span></Header>
                    <Content className="zoe-react-component-login-content">
                        <div className="zoe-react-component-login-content-layout">
                            <div className="zoe-react-component-login-content-left">

                            </div>
                            <div className="zoe-react-component-login-content-right">
                                <div className={"zoe-react-component-logos"}>
                                    <img src={this.props.logoSrc}/>
                                </div>
                                <form>
                                    <FormItem hasFeedback>
                                        {getFieldDecorator('username', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请填写用户名'
                                                }
                                            ]
                                        })(<Input size="large" placeholder="用户名"/>)}
                                    </FormItem>
                                    <FormItem hasFeedback>
                                        {getFieldDecorator('password', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请填写密码'
                                                }
                                            ]
                                        })(<Input size="large" type="password" placeholder="密码"/>)}
                                    </FormItem>
                                    <Row>
                                        <Button type="primary" size="large" onClick={this.handleOk}
                                                loading={this.props.loginButtonLoading}>
                                            登录
                                        </Button>
                                    </Row>
                                    <p>
                                        <span>账号：guest</span>
                                        <span>密码：guest</span>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        {this.props.footerText}
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default Form.create()(Login);