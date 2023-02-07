import { useRouter } from 'next/router';
import { api } from '../../utils/api';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  // https://trpc.io/docs/nextjs#6-make-an-api-request
  const character = api.characterRouter.getCharacter.useQuery({
    id: id ? +id : 0,
  });

  console.log(character);

  return <p>Post: {id}</p>;
};

export default Post;
