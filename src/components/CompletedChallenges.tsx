import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChanges.module.css';
export function CompletedChanges() {
  const { challengeCompleted } = useContext(
    ChallengeContext
  );
  return (
    <div className={styles.completedChangesContainer}>
      <span>Desafio completos</span>
      <span>{challengeCompleted}</span>
    </div>
  );
}
