import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/themes/themes";
import { Button, TextButton } from "./styled/button/button.styled";
import { Card } from "./styled/card/card.styled";
import { Checkbox } from "./styled/checkbox/checkbox.styled";
import { DatePicker } from "./styled/date/date.styled";
import GlobalStyle from "./styled/global";
import { Group } from "./styled/group/group.styled";
import { TextInput } from "./styled/input/input.styled";
import { Radio } from "./styled/radio/radio.styled";
import { Select } from "./styled/select/select.styled";
import { Stack } from "./styled/stack/stack.styled";
import { Text } from "./styled/text/styled.text";
import { TextArea } from "./styled/textarea/textarea.styled";

const App = () => {
  const [checked, setChecked] = useState({ r1: false, r2: false, r3: false, r4: false });
  const [checkedRadio, setCheckedRadio] = useState({ r1: false, r2: false, r3: false, r4: false });
  const [value, setValue] = useState("vue");
  const [description, setDescription] = useState("");
  const [selection, setSelection] = useState("2");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [name, setName] = useState("Johan den Boer");

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
    <div style={{ padding: "10px" }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Styled Components Demo</h1>
        <h2 style={{ color: "red" }}>Testing h2</h2>
        <h3>Testing h3</h3>
        <h4>Testing h4</h4>
        <h5>Testing h5</h5>
        <hr />
        <h5>Text</h5>
        <Stack>
          <Text label="Hello, Styled Components!" size="xl" />
          <Text label="Hello, Styled Components!" mt={20} mb={20} color="orange" fw="bold" />
          <Text label="Hello, Styled Components!" color="red" />
        </Stack>
        <hr />
        <h5>Dates</h5>
        <Group>
          <DatePicker value={selectedDate} label="Select a date" onChange={(value) => handleDateChange(value)} />
        </Group>
        <hr />
        <h5>Buttons</h5>
        {/* <Group> */}
        <Button onClick={handleButtonClick} size="sm">
          Small
        </Button>
        <Button onClick={handleButtonClick} size="md">
          Medium
        </Button>
        <Button onClick={handleButtonClick} size="lg">
          Large
        </Button>
        <Button radius={20} onClick={handleButtonClick} size="xl">
          Extra Large
        </Button>
        <Button onClick={handleButtonClick} color="purple" variant="outline">
          Click me
        </Button>
        <TextButton color="orange">Warning</TextButton>
        {/* </Group> */}
        <hr />
        <h5>Stack</h5>
        <Stack>
          <TextInput label="Geef uw naam" onChange={(value) => setName(value)} value={name} placeholder="Geef uw naam" />
          <Button onClick={handleButtonClick}>Click me</Button>
        </Stack>
        <br />
        <hr />
        <h5>Checkbox</h5>
        <Group>
          <Checkbox
            size="sm"
            color="indigo"
            checked={checked.r1}
            onChange={() => handleChangeChecked("r1", !checked.r1)}
            label="Accept terms"
          />
          <Checkbox disabled checked={checked.r2} onChange={() => handleChangeChecked("r2", !checked.r2)} label="Accept terms" />
          <Checkbox size="xl" checked={checked.r3} onChange={() => handleChangeChecked("r3", !checked.r3)} label="Accept terms" />
          <Checkbox size="lg" checked={checked.r4} onChange={() => handleChangeChecked("r4", !checked.r4)} label="Accept terms" />
        </Group>
        <hr />
        <h5>Radio Group</h5>
        <Group align="end">
          <Radio.Group value={value} onChange={(v) => handleChange(v)}>
            <Radio value="react">React</Radio>
            <Radio value="vue">Vue</Radio>
            <Radio disabled value="angular">
              Angular
            </Radio>
          </Radio.Group>
        </Group>
        <br />
        <br />
        <Radio
          value="click"
          color="orange"
          size="sm"
          checked={checkedRadio.r1}
          onChange={() => updateCheckedRadioValues("r1", !checkedRadio.r1)}
        >
          Click me
        </Radio>
        <Radio
          value="demo"
          color="orange"
          size="md"
          checked={checkedRadio.r2}
          onChange={() => updateCheckedRadioValues("r2", !checkedRadio.r2)}
        >
          Demo
        </Radio>
        <Radio
          value="choose"
          color="orange"
          size="xl"
          checked={checkedRadio.r3}
          onChange={() => updateCheckedRadioValues("r3", !checkedRadio.r3)}
        >
          Choose one
        </Radio>
        <Radio
          disabled
          value="agree"
          size="lg"
          checked={checkedRadio.r4}
          onChange={() => updateCheckedRadioValues("r4", !checkedRadio.r4)}
        >
          I agree
        </Radio>
        <br />
        <hr />
        <h5>Select</h5>
        <Group>
          <Select
            label="Selecteer een waarde"
            value={selection}
            data={[
              { label: "one", value: "1" },
              { label: "two waarden", value: "2" },
              { label: "three en nog meer", value: "3" },
            ]}
            onChange={(value) => setSelection(value)}
          />
        </Group>
        <br />
        <hr />
        <h5>Input</h5>
        <Group>
          <TextInput label="Geef uw naam" onChange={(value) => setName(value)} value={name} placeholder="Geef uw naam" />
          <TextInput label="Geef uw adres" disabled onChange={(value) => setName(value)} value={name} placeholder="Geef uw adres" />
          <br />
          <TextArea label="Enter a description" rows={10} value={description} onChange={(value) => setDescription(value)} />
        </Group>
        <br />
        <hr />
        <div>
          <Card>
            <div>Card demo</div>
          </Card>
        </div>
        <br />
        <br />
        <hr />
        <div style={{ display: "flex", gap: "0px", justifyContent: "stretch", height: "100px" }}>
          <div style={{ backgroundColor: "red", flex: "1 1" }}>Red</div>
          <div style={{ backgroundColor: "green", flex: "4 1" }}>Green</div>
          <div style={{ backgroundColor: "blue", flex: "2 1" }}>Blue</div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
