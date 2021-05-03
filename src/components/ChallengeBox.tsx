import { useState } from 'react';
import styles from '../styles/components/ChallengeBox.module.css';
export function ChallengeBox() {
  const [hasActiveChallenge, setHasActiveChallenge] = useState(true);

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
            <header>Ganha 400 px</header>
            <main>
                <img src="icons/body.svg" alt="body"/>
                <strong>Novo desafio</strong>
                <p>
                    levante e faça uma caminhada de 3 minutos.
                </p>
            </main>
            <footer>
                <button 
                type="button"
                className={styles.challengeFailedButton}
                >
                Falhei</button>
                <button 
                type="button"
                className={styles.challengeSucceededButton}
                >
                Completei</button>
            </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um clico para receber um desafio.</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
