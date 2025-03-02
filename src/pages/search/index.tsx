import SearchableLayout from '@/components/searchable-layout';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function Page() {
  const router = useRouter(); // 쿼리 파라미터 -> 쿼리 스트링 가져올 수 있음
  const queryString = router.query.q;
  console.log(queryString);

  return <h1>page{queryString}</h1>;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
