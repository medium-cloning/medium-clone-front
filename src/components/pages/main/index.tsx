import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import mediumLogo from 'images/medium_logo2.png';
import mediumLogoText from 'images/medium_logo.png';
import 'antd/dist/antd.css';
import AvatarComponent from './Avatar';


const Main = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const getUserInfo = () => {
        // 유저 정보를 가져와 리턴한다.
    };

    const onOpenModal = (e) => {
        const { value } = e.target;


        // sign in인지 sign up인지 판단
        // 각 역할에 맞는 title을 모달로 전달
        // 모달 컴포넌트 오픈
        setOpenModal(prev => !prev);
    };

    useEffect(() => {
        setIsLoggedIn(true);
    }, [])
    return(
        <>
            <div>
                <header style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    <span>
                        <img src={mediumLogo} alt='medium-logo' style={{ width: '100px'}}/>
                        <img src={mediumLogoText} alt='medium-logo-title' style={{ width: '150px', padding: '25px 25px 25px 0' }}/>
                    </span>
                    <div>
                        <Button type="text" onClick={onOpenModal}>{isLoggedIn ? 'Sign out' : 'Sign in'}</Button>
                        <Button type="text" onClick={onOpenModal}>{isLoggedIn ? <AvatarComponent /> : 'Get started'}</Button>
                    </div>
                    
                </header>
                <main>

                </main>
            </div>
            {openModal && console.log('모달 오픈')}
        </>
    );
};

export default Main;