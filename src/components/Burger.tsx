'use client';

import '../app/styles/burger.css';
import '../app/styles/globals.css';
import { slide as Menu } from 'react-burger-menu';
import React from 'react';
import Link from 'next/dist/client/link';
import Image from 'next/image';

class Burger extends React.Component {
  showSettings(event: any) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="md:hidden">
        <Menu right customCrossIcon={<Image src="/images/common/cross.png" alt="✕" width="36" height="40" />}>
          <Link id="home" className="" href="/">
            トップ
          </Link>
          <Link id="profile" className="" href="/profile">
            プロフィール
          </Link>
          <Link id="contact" className="" href="/contact">
            お問い合わせ
          </Link>
          <Link id="twitter" className="" href="" target="_blank" rel="noopener nofollow">
            Twitter
          </Link>
          <Link
            id="github"
            className=""
            href="https://github.com/naohiko560"
            target="_blank"
            rel="noopener nofollow"
          >
            GitHub
          </Link>
        </Menu>
      </div>
    );
  }
}

export default Burger;
