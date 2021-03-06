import Head  from 'next/head'
import React, { useState } from 'react'

import { SideBar } from '../components/SideBar'
import { Loading } from '../components/Loading'
import { Container } from '../styles/pages/leaderboard'

interface users { 
  avatar_url: string,
  name:string,
  level: number,
  challengesCompleted: number,
  currentExperience: number,
}

const listUsers:users = {
    avatar_url: 'https://avatars.githubusercontent.com/u/29265016?v=4',
    name:'Diogo de Souza Miranda',
    level: 10,
    challengesCompleted: 4,
    currentExperience: 1000
  }

const Leaderboard: React.FC = () => {

  const [ loading , setLoading] = useState(false);
  const [ users , setUsers] = useState<users[]>([listUsers]);

  return (
    <Container>
      <Head>
        <title>pomo.up | Leaderboard</title>
      </Head>
      <SideBar />
      <section>
        <h2>
          Entre os melhores
        </h2>

        {loading ? <Loading /> : (
          <table>
            <thead>
              <tr>
                <th>POSIÇÃO</th>
                <th>USUÁRIO</th>
                <th>DESAFIOS</th>
                <th>EXPERIÊNCIA ATUAl</th>
              </tr>
            </thead>
            <tr className="separator"/>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>
                    <img src={item.avatar_url} alt={item.name}/>
                    <div>
                      <strong>{item.name}</strong>
                      <div>
                        <img src="icons/level.svg" alt="Level"/>
                        <span>Level {item.level}</span>
                      </div>
                    </div>
                  </th>
                  <th>
                    <span>{item.challengesCompleted}</span>
                    {' Completados'}
                  </th>
                  <th>
                    <span>{item.currentExperience}</span>
                    {' xp'}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </Container>
  )
}

export default Leaderboard;