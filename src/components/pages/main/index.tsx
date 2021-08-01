import { Button } from 'antd';
import React from 'react';
import mediumLogo from 'images/medium_logo2.png';
import mediumLogoText from 'images/medium_logo.png';

const Main = () => {
    return(
        <div>
            <header>
                <span>
                    <img src={mediumLogo} alt='medium-logo'/>
                    <img src={mediumLogoText} alt='medium-logo-title'/>
                </span>
                <Button type="text">Write</Button>
                <Button type="text">Sign in</Button>
                <Button type="text">Get Started</Button>
            </header>
            <main>

            </main>
        </div>
    );
};

export default Main;