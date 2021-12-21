import { HeaderLogo } from "./headerLogo"
import { HeaderMenu } from "./headerMenu"
import { Container, Content } from "../../styles/components/headerStyles"

export const Header = () => {
  return (
    <Container>
      <Content>
        <HeaderMenu/>
        <HeaderLogo/>
      </Content>
    </Container>
  )
}
