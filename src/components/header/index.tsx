import { HeaderLogo } from "./headerLogo"
import { HeaderMenu } from "./headerMenu"
import { Container, Content } from "../../styles/components/headerStyles"
import { MobileHeaderMenu } from "./mobileHeaderMenu"

export const Header = () => {
  return (
    <Container>
      <Content>
        <MobileHeaderMenu/>
        <HeaderMenu/>
        <HeaderLogo/>
      </Content>
    </Container>
  )
}
