import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { PostContainer, PostDetailCard, PostDetailContent } from './style'
import { Link, useParams } from 'react-router-dom'
import github from '../../assets/github.svg'
import calendar from '../../assets/calendar.svg'
import comment from '../../assets/comment.svg'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { api } from '../../lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import 'react-loading-skeleton/dist/skeleton.css'

interface IPostDetail {
  title: string
  comments: number
  createdAt: string
  githubUsername: string
  url: string
  body: string
}

export function Post() {
  const { postId } = useParams()

  const [post, setPost] = useState<IPostDetail>({} as IPostDetail)
  const fetchPost = useCallback(async () => {
    const response = await api.get(
      `/repos/BrunodaSilvaLeite/GitBlog/issues/${postId}`,
    )
    const {
      title,
      comments,
      created_at: createdAt,
      user,
      html_url: htmlUrl,
      body,
    } = response.data
    const newPostObj = {
      title,
      githubUsername: user.login,
      comments,
      createdAt: formatDistanceToNow(new Date(createdAt), {
        locale: ptBR,
        addSuffix: true,
      }),
      url: htmlUrl,
      body,
    }
    setPost(newPostObj)
  }, [postId])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostContainer>
      <PostDetailCard>
        <header>
          <Link to="/" type="button">
            <CaretLeft size={14} weight="bold" />
            VOLTAR
          </Link>
          <a href={post.url} target="_blank" rel="noreferrer">
            VER NO GITHUB
            <ArrowSquareOut size={14} fill="#3294F8" weight="bold" />
          </a>
        </header>
        <h1> {post.title}</h1>
        <footer>
          <span>
            <img src={github} alt="" />
            {post.githubUsername}
          </span>

          <span>
            <img src={calendar} alt="" />
            {post.createdAt}
          </span>

          <span>
            <img src={comment} alt="" />
            {post.comments}
          </span>
        </footer>
      </PostDetailCard>
      <PostDetailContent>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>
      </PostDetailContent>
    </PostContainer>
  )
}
