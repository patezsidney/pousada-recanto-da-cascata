import Link from "next/link"
import { useRouter } from "next/router"
import { Button, Container } from "../../../styles/components/headerMenuStyles"

export const HeaderMenu = () => {

  const {route} = useRouter()

  return (
    <Container>
      <ul>
        <li>
          <Link href="/">
            <a className={route == '/' ? 'active' : 'default'} >Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/acomodacoes">
            <a className={route == '/acomodacoes' ? 'active' : 'default'} >Acomodações</a>
          </Link>
        </li>
        <li>
          <Link href="/a-pousada">
            <a className={route == '/a-pousada' ? 'active' : 'default'} >A Pousada</a>
          </Link>
        </li>
        <li>
          <Link href="/cidade">
            <a className={route == '/cidade' ? 'active' : 'default'} >Cidade</a>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <a className={route == '/contato' ? 'active' : 'default'} >Contato</a>
          </Link>
        </li>
        <li>
          <a href="https://reservations.fasthotel.com.br/169/195" target='_blank'>
            <Button>Reserva</Button>
          </a>
        </li>

      </ul>
    </Container>
  )
}

