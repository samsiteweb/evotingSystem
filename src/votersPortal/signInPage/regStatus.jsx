import React from 'react';

import { Row, Col } from 'antd';
import Scan from '../../assets/Scan.jpg';

const RegStatus = () => {
	return (
		<div style={{ marginLeft: '20%', marginRight: '20%' }}>
			<Row>
				<Row>
					<Col>
						<span
							style={{
								display: 'flex',
								justifyContent: 'center',
								paddingBottom: '15px',
								fontSize: '32px',
								textAlign: 'center'
							}}
						>
							{' '}
							REGISTRATION SLIP
						</span>
					</Col>
				</Row>
				<Row style={{ textColor: 'white' }}>
					<Col span={7}>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<img src={Scan} />
						</div>
					</Col>

					<Col span={16} style={{ backgroundColor: '#011447', textColor: 'white', padding: '15px' }}>
						<Row>
							<Col>
								<h1 style={{ color: 'white' }}> REGISTRATION DETAILS</h1>
							</Col>
							<Col>
								<h1 style={{ color: 'white' }}>
									<b>Name:</b> <i>Lawal Samuel Olamide</i>
								</h1>
							</Col>
							<Col>
								<h1 style={{ color: 'white' }}>
									<b>Address:</b> <i>1 Jamde, Yidi Bus Stop Apete Ibadan </i>
								</h1>
							</Col>
							<Col>
								<h1 style={{ color: 'white' }}>
									<b>Local Govenment:</b> <i>Akinyele </i>
								</h1>
							</Col>
							<Col>
								<h1 style={{ color: 'white' }}>
									<b>Date of Birth:</b> <i>11/12/1994 </i>
								</h1>
							</Col>
							<Col>
								<h1 style={{ color: 'white' }}>
									<b>Biometric Validation:</b> <i>BVN Validated</i>
								</h1>
							</Col>
							<Col>
								<h1 style={{ color: 'white' }}>
									<b>Eligibility Status:</b> <i>eligible</i>
								</h1>
							</Col>
						</Row>
					</Col>
					<Col style={{ textAlign: 'center', fontSize: '20px' }}>
						<span style={{ paddingTop: '20px' }}>
							<b>Unique Identification Number:</b> HB42172389GC
						</span>
					</Col>
				</Row>
			</Row>
		</div>
	);
};

export default RegStatus;
