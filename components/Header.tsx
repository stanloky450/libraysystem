'use client';

import { cn, getInitials } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Avatar, AvatarImage,AvatarFallback } from '@/components/ui/avatar';
import { Session } from 'next-auth';

const Header = ({session} : {session: Session}) => {
  const pathname = usePathname();
  return (
    <main className="my-18 flex justify-between gap-5 text-white">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              'text-base cursor-pointer capitalize',
              pathname === 'library' ? 'text-light-200' : 'text-light-100'
            )}>
            Library
          </Link>
          </li>
          <li>
            <Link href='/my-profile'>
            <Avatar>
            <AvatarFallback className="bg-amber-100">{getInitials(session?.user?.name || "IN")}</AvatarFallback>
            </Avatar>
            </Link>
         
        </li>
      </ul>
    </main>
  );
};

export default Header;
