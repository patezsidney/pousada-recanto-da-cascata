import { Button, Container, Title } from "../../../styles/components/headerLogoStyles"

export const HeaderLogo = () => {
  return (
      <Container>
        <p id="pousada">Pousada</p>
        <Title>
        <span id="recanto" >Recanto da</span><br/>
          Cascata</Title>
        <div>
          <a href="https://reservations.fasthotel.com.br/169/195" target='_blank'>
            <Button>Reservar</Button>
          </a>
        </div>
      </Container>
  )
}
