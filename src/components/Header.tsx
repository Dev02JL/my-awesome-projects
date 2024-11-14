"use client";

import React from 'react';
import Icon from "@/components/Icon";
import HeroTab from "@/components/HeroTab";
import { GlobeAltIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <header className="flex justify-between p-4 fixed z-30 top-0 left-0 w-full">
        <div className="flex items-center gap-2 pl-28">
          <Icon src="/logo_jp.webp" onClick={() => handleRedirect('/')} />
          <Icon src="/logo_en.webp" onClick={() => handleRedirect('/product')} />
        </div>
        <div className="flex items-center gap-20 pl-20 pt-2 hidden lg:flex">
          <HeroTab text="WOMEN" />
          <HeroTab text="MEN" />
          <HeroTab text="KIDS" />
          <HeroTab text="BABY" />
        </div>
        <div className="flex items-center gap-7 pr-32 pt-2 hidden md:flex">
          <GlobeAltIcon className="head-button" />
          <HeartIcon className="head-button" />
          <ShoppingCartIcon className="head-button" />
        </div>
      </header>
    </div>
  );
}

export default Header;