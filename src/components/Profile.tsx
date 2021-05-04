import { useRouter } from 'next/router';
import { Container } from '../styles/components/Profile';
import { FiLogOut } from 'react-icons/fi';
import { useProvider } from '../contexts/ChallengesContext';

interface IUserGithub {
  name: string;
  level: number;
  avatar_url: string;
}

export default function Profile(props: IUserGithub) {
  const { level } = useProvider();
  const route = useRouter();

  async function handleSignout() {
    route.push('/')
  }

  return (
    <Container>
      <img src={props?.avatar_url} alt={props?.name} />

      <div>
        <strong>{props?.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>

      <button type="button" onClick={handleSignout}>
        <FiLogOut size={40} />
      </button>
    </Container>
  );
}
