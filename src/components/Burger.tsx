'use client';

import '../app/styles/burger.css';
import '../app/styles/globals.css';
import { slide as Menu } from 'react-burger-menu';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 現在のisOpenと逆のブール値になる
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // isOpenをfalseにする
  const closeBurger = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Menu
        right
        customCrossIcon={<Image src="/images/common/cross.png" alt="✕" width="36" height="40" />}
        isOpen={isOpen} // ハンバーガーメニューの開閉管理
        onOpen={handleIsOpen} // ハンバーガーメニューが開いた場合に呼び出される
        onClose={handleIsOpen} // ハンバーガーメニューが閉じた場合に呼び出される
      >
        <Link id="home" className="" href="/" onClick={closeBurger}>
          トップ
        </Link>
        <Link id="profile" className="" href="/profile" onClick={closeBurger}>
          プロフィール
        </Link>
        <Link id="contact" className="" href="/contact" onClick={closeBurger}>
          お問い合わせ
        </Link>
        <Link
          id="x"
          className=""
          href="https://twitter.com/naohiko_blog"
          target="_blank"
          rel="noopener nofollow"
          onClick={closeBurger}
        >
          X
        </Link>
        <Link
          id="github"
          className=""
          href="https://github.com/naohiko560"
          target="_blank"
          rel="noopener nofollow"
          onClick={closeBurger}
        >
          GitHub
        </Link>
      </Menu>
    </div>
  );
};

export default Burger;
