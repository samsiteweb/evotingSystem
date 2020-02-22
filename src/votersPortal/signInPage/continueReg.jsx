import React, { Component } from 'react';

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

import ImageUpload from '../../components/imageUpload';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake'
					}
				]
			}
		]
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men'
					}
				]
			}
		]
	}
];

class ContinueReg extends Component {
	state = {
		confirmDirty: false,
		autoCompleteResult: []
	};
	handleConfirmBlur = (e) => {
		const { value } = e.target;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};

	compareToFirstPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!');
		} else {
			callback();
		}
	};

	validateToNextPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && this.state.confirmDirty) {
			form.validateFields([ 'confirm' ], { force: true });
		}
		callback();
	};

	handleWebsiteChange = (value) => {
		let autoCompleteResult;
		if (!value) {
			autoCompleteResult = [];
		} else {
			autoCompleteResult = [ '.com', '.org', '.net' ].map((domain) => `${value}${domain}`);
		}
		this.setState({ autoCompleteResult });
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { autoCompleteResult } = this.state;

		const formItemLayout = {
			labelCol: {
				xs: { span: 8 },
				sm: { span: 6 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 }
			}
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0
				},
				sm: {
					span: 16,
					offset: 8
				}
			}
		};
		const prefixSelector = getFieldDecorator('prefix', {
			initialValue: '86'
		})(
			<Select style={{ width: 70 }}>
				<Option value="86">+234</Option>
			</Select>
		);

		const websiteOptions = autoCompleteResult.map((website) => (
			<AutoCompleteOption key={website}>{website}</AutoCompleteOption>
		));

		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<ImageUpload />
				<Form.Item label="Name">
					{getFieldDecorator('name')}
					<Input />
				</Form.Item>
				<Form.Item label="E-mail">
					{getFieldDecorator('email', {
						rules: [
							{
								type: 'email',
								message: 'The input is not valid E-mail!'
							},
							{
								required: true,
								message: 'Please input your E-mail!'
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="Password" hasFeedback>
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: 'Please input your password!'
							},
							{
								validator: this.validateToNextPassword
							}
						]
					})(<Input.Password />)}
				</Form.Item>
				<Form.Item label="Confirm Password" hasFeedback>
					{getFieldDecorator('confirm', {
						rules: [
							{
								required: true,
								message: 'Please confirm your password!'
							},
							{
								validator: this.compareToFirstPassword
							}
						]
					})(<Input.Password onBlur={this.handleConfirmBlur} />)}
				</Form.Item>
				<Form.Item label="Address">
					{getFieldDecorator('address')}
					<Input />
				</Form.Item>
				<Form.Item label="Local Government Area">
					{getFieldDecorator('LGC', {
						rules: [
							{
								required: true,
								message: 'Please enter your local government'
							}
						]
					})(<Input />)}
				</Form.Item>

				<Form.Item label="Phone Number">
					{getFieldDecorator('phone', {
						rules: [ { required: true, message: 'Please input your phone number!' } ]
					})(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
				</Form.Item>
				<Form.Item {...tailFormItemLayout}>
					{getFieldDecorator('agreement', {
						valuePropName: 'checked'
					})(
						<Checkbox>
							I have read the <a href="">agreement</a>
						</Checkbox>
					)}
				</Form.Item>
				<Form.Item {...tailFormItemLayout}>
					<Button type="primary" htmlType="submit">
						Register
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

const ContRegForm = Form.create({ name: 'register' })(ContinueReg);

export default ContRegForm;
