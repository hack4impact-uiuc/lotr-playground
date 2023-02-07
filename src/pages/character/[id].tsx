import Image from 'next/image';
import { useRouter } from 'next/router';
import { api } from '../../utils/api';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  // https://trpc.io/docs/nextjs#6-make-an-api-request
  const characterRequest = api.characterRouter.getCharacter.useQuery({
    id: id ? +id : 0,
  });

  // const allCharacters = api.characterRouter.getAllCharacters.useQuery();

  // console.log(characterRequest.data);
  const characterInfo = characterRequest.data;

  return (
    <>
      <p>{characterInfo?.name}</p>
      <p>{characterInfo?.gender}</p>
      <p>{characterInfo?.race}</p>
      <p>{characterInfo?.realm}</p>
      {characterInfo && (
        <Image
          src={characterInfo.imageUrl}
          alt={`Picture of ${characterInfo.name}`}
          width={300}
          height={400}
        />
      )}
    </>
  );
};

export default Post;
