import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ExperienceBar } from '../components/ExperienceBar';
import { SideBar } from '../components/SideBar';
import Profile from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';

import { ChallengeBox } from '../components/ChallengeBox';
import { CountDownProvider } from '../contexts/CountDownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import { Container, LeftSide, RightSide } from '../styles/pages/home';
interface IProps {
  username: string;
  name: string;
  avatar_url: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home: React.FC<IProps> = (props) => {
  return (
    <ChallengesProvider {...props}>
      <Container>
        <Head>
          <title>pomo.up | Home</title>
        </Head>
        <SideBar />
        <ExperienceBar />

        <CountDownProvider>
          <section>
            <LeftSide>
              <Profile {...props} />
              <CompletedChallenges />
              <CountDown />
            </LeftSide>

            <RightSide>
              <ChallengeBox />
            </RightSide>
          </section>
        </CountDownProvider>
      </Container>
    </ChallengesProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Home;
