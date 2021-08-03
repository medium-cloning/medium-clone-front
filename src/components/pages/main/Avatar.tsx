import React from 'react';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';

const AvatarComponent = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <Button type='text'>id 출력</Button>
            </Menu.Item>

            <Menu.Divider />

            <Menu.Item>
                <Button type='text'>Write a story</Button>
            </Menu.Item>
            <Menu.Item>
                <Button type='text'>Follwers</Button>
            </Menu.Item>
            <Menu.Item>
                <Button type='text'>Design your profile</Button>
            </Menu.Item>

            <Menu.Divider />

            <Menu.Item>
                <Button type='text'>Settings</Button>
            </Menu.Item>
            <Menu.Item>
                <Button type='text'>Sign out</Button>
            </Menu.Item>
        </Menu>
    )
    return(
        <Dropdown overlay={menu}>
            <Avatar icon={<UserOutlined />} />
        </Dropdown>
    )
};

export default AvatarComponent;