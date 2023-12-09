'use client';

import '../app/styles/burger.css';
import '../app/styles/globals.css';
import { slide as Menu } from 'react-burger-menu';
import React from 'react';
import Image from 'next/image';

const Burger = () => {
  return (
    <div className="md:hidden">
      <Menu
        right
        customCrossIcon={<Image src="/images/common/cross.png" alt="✕" width="36" height="40" />}
      >
        <a id="home" className="" href="/">
          トップ
        </a>
        <a id="profile" className="" href="/profile">
          プロフィール
        </a>
        <a id="contact" className="" href="/contact">
          お問い合わせ
        </a>
        <a
          id="x"
          className=""
          href="https://twitter.com/naohiko_blog"
          target="_blank"
          rel="noopener nofollow"
        >
          X
        </a>
        <a
          id="github"
          className=""
          href="https://github.com/naohiko560"
          target="_blank"
          rel="noopener nofollow"
        >
          GitHub
        </a>
      </Menu>
    </div>
  );
};

export default Burger;
