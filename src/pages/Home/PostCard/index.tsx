import { IPost } from '..'
import { Post } from './style'
import { ptBR } from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'

interface props {
  post: IPost
}
export function PostCard({ post }: props) {
  return (
    <div>
      <Post to={`/post/${post.number}`}>
        <div>
          <h3>{post.title}</h3>
          <span>
            {' '}
            {formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>
        <main>
          <p>{post.body}</p>
        </main>
      </Post>
    </div>
  )
}
