import { ContainerPost, Hero, NoContainerPost, SearchContainer } from './style'

import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Profile } from './Profile'
import { PostCard } from './PostCard'
import Cilpboard from '../../assets/Clipboard.png'
export interface IPost {
  title: string
  body: string
  created_at: string
  number: string
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[])
  const [postsCounter, setPostsCounter] = useState(0)

  const fetchPosts = useCallback(async (query: string | null) => {
    const response = await api.get(
      `search/issues?q=repo:BrunodaSilvaLeite/GitBlog/issues?q=is%3Aopen+${query}`,
    )

    setPosts(response.data.items)
    setPostsCounter(response.data.total_count)
  }, [])

  useEffect(() => {
    fetchPosts('')
  }, [fetchPosts])

  return (
    <div>
      <Hero>
        <Profile></Profile>
        <SearchContainer>
          <div>
            <h3>Publicações</h3>
            {postsCounter} publicaç{`${postsCounter > 1 ? 'ões' : 'ão'}`}
          </div>
          <input
            type="text"
            onKeyDown={(e) =>
              e.key === 'Enter' && fetchPosts(e.currentTarget.value)
            }
            onBlur={(e) => fetchPosts(e.currentTarget.value)}
            placeholder="Busque o conteúdo e tecle [Enter]"
          />
        </SearchContainer>
        <div>
          {posts.length > 0 ? (
            <ContainerPost>
              <div>
                {posts &&
                  posts.map((post) => (
                    <PostCard
                      key={`${post.title}-${post.number}`}
                      post={post}
                    ></PostCard>
                  ))}
              </div>
            </ContainerPost>
          ) : (
            <NoContainerPost>
              <img src={Cilpboard} alt="" />
              <p>
                <strong>Nenhum Post Encontrado</strong>
                <br />
                Esse tema não foi abordado por Bruno Silva
              </p>
            </NoContainerPost>
          )}
        </div>
      </Hero>
    </div>
  )
}
