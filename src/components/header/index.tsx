import { HeaderLogo } from "./headerLogo"
import { HeaderMenu } from "./headerMenu"
import { Container } from "../../styles/components/headerStyles"

export const Header = () => {
  return (
    <Container>
      <div>

      <HeaderMenu/>
      <HeaderLogo/>
      </div>
    </Container>
  )
}
