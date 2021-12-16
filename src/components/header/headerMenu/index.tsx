import Link from "next/link"
import { Button, Container } from "../../../styles/components/headerMenuStyles"

export const HeaderMenu = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/acomodacoes">
            <a>Acomodações</a>
          </Link>
        </li>
        <li>
          <Link href="/a-pousada">
            <a>A Pousada</a>
          </Link>
        </li>
        <li>
          <Link href="/cidade">
            <a>Cidade</a>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <a>Contato</a>
          </Link>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=5519997647592" target='_blank'>
            <Button>Reserva</Button>
          </a>
        </li>

      </ul>
    </Container>
  )
}

