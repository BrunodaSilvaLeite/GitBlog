import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Post = styled(NavLink)`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  text-decoration: none;
  gap: 1.25rem;
  border: 2px solid transparent;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;
    max-width: 17.6rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 160%; /* 25.6px */
    max-height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }

  &&:hover {
    border-radius: 10px;
    border: 2px solid var(--Base-Label, #3a536b);
    background: var(--Base-Post, #112131);
  }
`
