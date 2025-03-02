import { ReactNode } from 'react';
import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css';

export default function Home() {
  return (
    <>
      <h1 style={{ color: 'red' }}>인덱스 너가 메인이여</h1>
      <h2 className={style.h2}>인덱스 너가 메인이여</h2>
    </>
  );
}

// 자바스크립트의 함수는 모두 객체이기 때문에 다음과 같이 매서드도 추가가 가능함
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
