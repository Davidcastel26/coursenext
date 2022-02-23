import { useRouter } from 'next/router'

const something = () => {

  // hooks 
  const router = useRouter();

  // console.log(router.query.newsId)

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId

  return (
    <div>something</div>
  )
}

export default something