import React, { Component } from 'react';
import './signin.css';

import ContRegForm from './continueReg';
import RegStatus from './regStatus';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SignInPage extends Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			collapsed: false
		};
	}
	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	};

	render() {
		const { match, location, history } = this.props;

		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
					<div className="logo" />
					<Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
						<Menu.Item
							key="1"
							onClick={() => {
								history.push(match.path);
							}}
						>
							<Icon type="pie-chart" />
							<span>Voters Registration</span>
						</Menu.Item>
						<Menu.Item
							key="2"
							onClick={() => {
								history.push(match.path + '/regstatus');
							}}
						>
							<Icon type="desktop" />
							<span>Check Voting Status</span>
						</Menu.Item>
						<SubMenu
							key="sub1"
							title={
								<span>
									<Icon type="user" />
									<span>User</span>
								</span>
							}
						>
							<Menu.Item key="3">Tom</Menu.Item>
							<Menu.Item key="4">Bill</Menu.Item>
							<Menu.Item key="5">Alex</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={
								<span>
									<Icon type="team" />
									<span>Team</span>
								</span>
							}
						>
							<Menu.Item key="6">Team 1</Menu.Item>
							<Menu.Item key="8">Team 2</Menu.Item>
						</SubMenu>
						<Menu.Item key="9">
							<Icon type="file" />
							<span>File</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: 'light-blue', padding: 0 }}>
						<h1 style={{ fontSize: '40px', textAlign: 'center', color: 'white' }}>
							Votters Registration Portal
						</h1>
					</Header>
					<Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Votters Porter</Breadcrumb.Item>
							<Breadcrumb.Item>Registration</Breadcrumb.Item>
						</Breadcrumb>

						<Switch>
							<Route exact path={match.url}>
								<ContRegForm />
							</Route>
							<Route path={match.url + '/regstatus'}>
								<RegStatus />
							</Route>
							{/* <Route path="/">
									<Home />
								</Route> */}
						</Switch>
						{/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div> */}
					</Content>
					<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default SignInPage;
