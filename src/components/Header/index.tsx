import Cover from '../../assets/Cover.png'
import { ContainerHeader } from './style'

export function Header() {
  return (
    <ContainerHeader>
      <img src={Cover} alt="" />
    </ContainerHeader>
  )
}
