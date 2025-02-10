import Link from "next/link"
import { useState } from "react"
import { Container, StyledDrawer } from "../../../styles/components/mobileHeaderMenu"
import { Button } from "@mui/material"
import { FaBars, FaTimes, FaCalendarAlt } from "react-icons/fa"
import { useRouter } from "next/router"

export const MobileHeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  const {route} = useRouter()

  return (
    <Container>
      <FaBars
        onClick={handleMenu}
      />

      <StyledDrawer
        anchor="top"
        open={isOpen}
        onClose={handleMenu}
      >
        <FaTimes
          onClick={handleMenu}
        />
        <ul>
          <li>
            <Link href="/">
              <a className={route == '/' ? 'active' : 'default'}  >Inicio</a>
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
              <Button
            variant="contained"
            startIcon={<FaCalendarAlt />}
            sx={{
              "backgroundColor": "#199BB7", 
              "&:hover": {"backgroundColor": "#137085"},
              "fontWeight": "bold",
              "fontSize": "1rem",
            }}
            >
              Reservar
            </Button>
            </a>
          </li>
        </ul>
      </StyledDrawer>
    </Container>
  )
}
