import { ReactNode } from 'react';
import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item';

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {books.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {books.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section></section>
      </div>
    </>
  );
}

// 자바스크립트의 함수는 모두 객체이기 때문에 다음과 같이 매서드도 추가가 가능함
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
