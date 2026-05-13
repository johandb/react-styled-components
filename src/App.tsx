import { ThemeProvider } from "styled-components";
import Header from "./components/header/header";
import { theme } from "./components/themes/themes";
import { Container } from "./styled/container/container.styled";
import { Flex, FlexCol } from "./styled/flex/flex.styled";
import GlobalStyle from "./styled/global";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Flex>
          <FlexCol bg="yellow" span={1}>
            <div>Left</div>
          </FlexCol>
          <FlexCol bg="green" span={5}>
            <div>Middle</div>
          </FlexCol>
          <FlexCol bg="blue" span={2}>
            <div>Right</div>
          </FlexCol>
        </Flex>
      </Container>
    </ThemeProvider>
  );
};

export default App;
