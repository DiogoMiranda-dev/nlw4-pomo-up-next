import { useChallenges } from '../hooks/useChallenges'
import { Container } from '../styles/components/CompletedChallenges'

export const CompletedChallenges: React.FC = () => {

  const { challengesCompleted } = useChallenges();

  return (
    <Container>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}
