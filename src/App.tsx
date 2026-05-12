import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/themes/themes";
import { Accordion, AccordionHeader, AccordionPanel } from "./styled/accordion/accordion.styled";
import { Container } from "./styled/container/container.styled";
import GlobalStyle from "./styled/global";

const App = () => {
  const [checked, setChecked] = useState({ r1: false, r2: false, r3: false, r4: false });
  const [checkedRadio, setCheckedRadio] = useState({ r1: false, r2: false, r3: false, r4: false });
  const [value, setValue] = useState("vue");
  const [description, setDescription] = useState("");
  const [selection, setSelection] = useState("2");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [name, setName] = useState("Johan den Boer");
  const [count, setCount] = useState<number>(0);

  const handleChangeChecked = (key: string, b: boolean) => {
    console.log("handleChangeChecked key:", key, ", value:", b);
    let updatedChecked = { ...checked, [key]: b };
    console.log("updatedChecked:", updatedChecked);
    setChecked(updatedChecked);
  };

  console.log("App value:", value);
  console.log("App checkedRadio :", checkedRadio);

  const handleChange = (value: string) => {
    console.log("handleChange data:", value);
    setValue(value);
  };

  const updateCheckedRadioValues = (key: string, b: boolean) => {
    console.log("updateCheckedRadioValues key:", key, ", value:", b);
    let updatedCheckedRadio = { ...checkedRadio, [key]: b };
    console.log("updatedCheckedRadio:", updatedCheckedRadio);
    setCheckedRadio(updatedCheckedRadio);
  };

  const handleDateChange = (date: Date) => {
    console.log("handleDateChange date:", date);
    setSelectedDate(date);
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Accordion multiple={false}>
          <AccordionHeader value="1" title="Orde van dienst">
            <AccordionPanel>
              <div>Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
            </AccordionPanel>
          </AccordionHeader>
          <AccordionHeader value="2" title="Bemoediging">
            <AccordionPanel>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</AccordionPanel>
          </AccordionHeader>
          <AccordionHeader value="4" title="Test">
            <AccordionPanel>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            </AccordionPanel>
          </AccordionHeader>
        </Accordion>
      </Container>
    </ThemeProvider>
  );
};

export default App;
