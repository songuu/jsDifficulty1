import React, { useState } from 'react';

import { Redirect, useLocation, useHistory } from 'react-router-dom';

import { RouteComponentProps, withRouter } from 'react-router';

import { Form, Input, Button, AutoComplete, Select } from 'antd';

import { FormComponentProps } from 'antd/lib/form/Form';

import { useAppDispatch, useAppSelector } from 'store/index';

import { LoginProps } from 'api/models/authModel';

import { login } from 'store/actions/index';

// @ts-ignore
import style from './index.module.less';

const { Option } = Select;

type ILoginProps = RouteComponentProps;

interface ActionProps {
  login: any;
}

interface IProps extends FormComponentProps, ILoginProps, ActionProps {}

const Login: React.FC<IProps> = ({ form, history }) => {
  const location = useLocation();

  // const history = useHistory()

  const dispatch = useAppDispatch();

  const { getFieldDecorator, validateFields } = form;

  const [loading, setLoading] = useState<boolean>(false);

  const [redirectToReferrer, setRedirectToReferrer] = useState<boolean>(false);

  const [searchList, setSearchList] = useState<any[]>([]);

  const handleSearch = (value: string) => {
    let searchList: string[] = [];
    if (!value || value.indexOf('@') >= 0) {
      searchList = [];
    } else {
      searchList = ['meiqia.com', '163.com', 'qq.com', 'gmail.com'].map(
        domain => `${value}@${domain}`
      );
    }
    setSearchList(searchList);
  };

  const onClick = () => {
    validateFields((error: Error, values: LoginProps) => {
      if (!error) {
        setLoading(true);
        dispatch<any>(login(values))
          .then((res: any) => {
            console.log(history);
            // setRedirectToReferrer(true);
            history.push('/');
          })
          .catch(() => {
            setLoading(false);
          });
      }
    });
  };

  const onEnter = (e: any) => {
    const { keyCode } = e;
    if (keyCode === 13) {
      onClick();
    }
  };

  const children = searchList.map(email => (
    <Option key={email}>{email}</Option>
  ));
  
  const from: any = location.state ? location.state : '/';

  /* if (redirectToReferrer) {
    console.log(from)
    return <Redirect to={from} />;
  } */

  return (
    <div className={style.login}>
      <div className={style.logo} />
      <Form>
        <Form.Item hasFeedback>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <AutoComplete
              className={style.input}
              onSearch={handleSearch}
              placeholder="用户名"
            >
              {children}
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              onKeyDown={onEnter}
              type="password"
              className={style.input}
              placeholder="密码"
            />
          )}
        </Form.Item>
        <Button
          loading={loading}
          type="primary"
          onClick={onClick}
          className={style.input}
        >
          登录
        </Button>
      </Form>
    </div>
  );
};

export default Form.create<IProps>({ name: 'Login' })(withRouter(Login));
