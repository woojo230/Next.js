import { useRouter } from 'next/router';
import style from './[id].module.css';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import fetchOneBooks from '@/lib/fetch-one-books';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const book = await fetchOneBooks(Number(id));

  return {
    props: { book },
  };
};

// 동적인 URL 파라미터를 사용하는 페이지에서는 [name].tsx 형식으로 파일 생성
export default function Page({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const router = useRouter();
  // const queryString = router.query.id;
  // console.log(queryString);

  if (!book) {
    return '문제발생! 공습경보!';
  }

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} alt="backgroundImg" />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
