'use client';
import Link from 'next/link';
import Search from '@/components/Search';
import {usePathname} from 'next/navigation';

const navigationItem = [
  {name: '개발', path: '/dev'},
  {name: '회고', path: '/memoir'},
  {name: '학습', path: '/learning'},
  {name: '독서', path: '/book'},
];
const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between pb-8">
      <div className="flex items-center">
        <Link
          className="py-2 px-3 mr-2 rounded-lg font-bold text-xl hover:bg-gradient-to-br hover:from-indigo-50 hover:via-purple-50 hover:to-blue-50"
          href="/">
          🦄
        </Link>
        <div className="hidden sm:block">
          {navigationItem.map(({name, path}) => (
            <Link
              key={path}
              className={`py-3 px-6 rounded-lg text-neutral-800 hover:bg-gradient-to-br hover:from-indigo-50 hover:via-purple-50 hover:to-blue-50 ${pathname === path ? 'font-semibold text-neutral-950' : 'font-normal'}`}
              href={path}>
              {name}
            </Link>
          ))}
        </div>
      </div>
      <Search />
    </nav>
  );
};

export default Navigation;
