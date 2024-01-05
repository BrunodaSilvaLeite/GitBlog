import { ArrowSquareOut } from 'phosphor-react'
import {
  ContainerProfile,
  DescriptionProfile,
  FooterProfile,
  HeaderProfile,
  ContentProfile,
} from './style'

import github from '../../../assets/github.svg'
import userGroup from '../../../assets/userGroup.svg'
import bulding from '../../../assets/building.svg'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../lib/axios'

import 'react-loading-skeleton/dist/skeleton.css'

interface ProfileProps {
  name: string
  followers: number
  githubUsername: string
  company: string
  url: string
  imgUrl: string
  description: string
}

export function Profile() {
  const [userInfo, setUserInfo] = useState<ProfileProps>()

  const fetchUsers = useCallback(async () => {
    const response = await api.get('users/BrunodaSilvaLeite')

    const {
      name,
      followers,
      login,
      company,
      html_url: htmlUrl,
      avatar_url: avatarUrl,
      bio,
    } = response.data
    const newUserObj = {
      name,
      followers,
      githubUsername: login,
      company,
      url: htmlUrl,
      imgUrl: avatarUrl,
      description: bio,
    }
    setUserInfo(newUserObj)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  return (
    <ContainerProfile>
      <img src={userInfo?.imgUrl} alt="" />
      <ContentProfile>
        <HeaderProfile>
          <h1>{userInfo?.name}</h1>
          <a href={userInfo?.url} target="_blank" rel="noreferrer">
            <span>GITHUB</span>{' '}
            <ArrowSquareOut size={16} fill="#3294F8" weight="bold" />
          </a>
        </HeaderProfile>
        <DescriptionProfile>
          <p>{userInfo?.description}</p>
          <FooterProfile>
            <span>
              <img src={github} alt="" />
              <span>{userInfo?.name}</span>
            </span>

            <span>
              <img src={bulding} alt="" />
              <span>{userInfo?.company}</span>
            </span>

            <span>
              <img src={userGroup} alt="" />
              <span>{userInfo?.followers} Seguidores</span>
            </span>
          </FooterProfile>
        </DescriptionProfile>
      </ContentProfile>
    </ContainerProfile>
  )
}
