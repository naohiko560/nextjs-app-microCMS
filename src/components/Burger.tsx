'use client';

import '../app/styles/burger.css';
import '../app/styles/globals.css';
import { slide as Menu } from 'react-burger-menu';
import React, { useState } from 'react';
import Link from 'next/dist/client/link';
import Image from 'next/image';

const Burger = () => {
  const handleOnClose = () => {
    handleOnClose();
  };

  return (
    <div className="md:hidden">
      <Menu
        right
        customCrossIcon={<Image src="/images/common/cross.png" alt="✕" width="36" height="40" />}
        onClose={handleOnClose}
      >
        <Link id="home" className="" href="/" onClick={handleOnClose}>
          トップ
        </Link>
        <Link id="profile" className="" href="/profile" onClick={handleOnClose}>
          プロフィール
        </Link>
        <Link id="contact" className="" href="/contact" onClick={handleOnClose}>
          お問い合わせ
        </Link>
        <Link
          id="x"
          className=""
          href="https://twitter.com/naohiko_blog"
          target="_blank"
          rel="noopener nofollow"
          onClick={handleOnClose}
        >
          X
        </Link>
        <Link
          id="github"
          className=""
          href="https://github.com/naohiko560"
          target="_blank"
          rel="noopener nofollow"
          onClick={handleOnClose}
        >
          GitHub
        </Link>
      </Menu>
    </div>
  );
};

export default Burger;
