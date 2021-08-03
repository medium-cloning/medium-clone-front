import { Button } from 'antd';
import React from 'react';
import mediumLogo from 'images/medium_logo2.png';
import mediumLogoText from 'images/medium_logo.png';

const Main = () => {

    const getUserInfo = () => {
        // 유저 정보를 가져와 리턴한다.
    };

    const onOpenModal = () => {
        // sign in인지 sign up인지 판단
        // 각 역할에 맞는 title을 모달로 전달
        // 모달 컴포넌트 오픈
    }
    return(
        <div>
            <header>
                <span>
                    <img src={mediumLogo} alt='medium-logo' style={{ width: '100px'}}/>
                    <img src={mediumLogoText} alt='medium-logo-title' style={{ width: '150px', padding: '25px 25px 25px 0' }}/>
                </span>
                <Button type="text" onClick={onOpenModal}>Sign in</Button>
                <Button type="text" onClick={onOpenModal}>Get Started</Button>
            </header>
            <main>

            </main>
        </div>
    );
};

export default Main;