import React, { Component } from 'react';
import { Card, Button, Row, Col, Input, Divider } from 'antd';
import { Link } from 'react-router-dom';

class BvnVerificationPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		};
	}
	render() {
		return (
			<div style={{ marginTop: '10vh' }}>
				<Row>
					<Col>
						<h1 style={{ color: 'Blue', textAlign: 'center' }}>E - Voting System</h1>
					</Col>
				</Row>
				<Row style={{ marginTop: '5vh' }}>
					<Col span={8} offset={8}>
						<Card>
							<h1 style={{ textAlign: 'center', color: 'Blue' }}>Registration Portal</h1>
							<h3 style={{ textAlign: 'center' }}> Please enter your BVN to begin registration</h3>
							<Input
								style={{ textAlign: 'center' }}
								type="digit"
								maxLength={11}
								allowClear={true}
								placeholder="Input Biometric Verification Number"
								size="large"
							/>
							<div style={{ textAlign: 'center' }}>
								<Button
									onClick={() => this.props.history.push('/signin')}
									type="primary"
									color="red"
									size="large"
									style={{ margin: '15px' }}
								>
									Verify BVN
								</Button>
							</div>

							<Divider />
							<span
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<h5>Already Registerd?</h5>
								<div>
									<Button type="primary" style={{ marginRight: '15px' }}>
										Sign In
									</Button>
									<Button type="dashed">Forgot Password </Button>
								</div>
							</span>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default BvnVerificationPage;
