/**
 * Created by sea35 on 2017/1/20.
 */
import React, {Component} from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class Login extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Layout>
                    <Header></Header>
                    <Content>Content</Content>
                    <Footer></Footer>
                </Layout>
            </div>
        )
    }
}

export default Login;