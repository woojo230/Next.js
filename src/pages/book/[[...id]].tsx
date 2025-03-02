import { useRouter } from 'next/router';

// 동적인 URL 파라미터를 사용하는 페이지에서는 [name].tsx 형식으로 파일 생성
export default function Page() {
  const router = useRouter();
  const queryString = router.query.id;
  console.log(queryString);

  return <h1>book {queryString}</h1>;
}
