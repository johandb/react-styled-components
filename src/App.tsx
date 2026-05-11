import { useState } from "react";
import { FaCreditCard, FaLock, FaMarker, FaUser } from "react-icons/fa";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/themes/themes";
import { Checkbox } from "./styled/checkbox/checkbox.styled";
import { Container } from "./styled/container/container.styled";
import GlobalStyle from "./styled/global";
import { NumberInput, PasswordInput, TextInput } from "./styled/input/input.styled";
import { Radio } from "./styled/radio/radio.styled";
import { Stack } from "./styled/stack/stack.styled";
import { Switch } from "./styled/switch/switch.styled";

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
        <Stack mt={10} ml={10}>
          <TextInput size="sm" label="Your name" leftIcon={<FaUser />} value={name} onChange={(value) => setName(value)} />
          <TextInput
            required
            size="md"
            label="Your name"
            leftIcon={<FaLock size={18} />}
            value={name}
            onChange={(value) => setName(value)}
          />
          <TextInput
            label="Your name"
            leftIcon={<FaUser color="blue" size={24} />}
            size="xl"
            value={name}
            onChange={(value) => setName(value)}
          />
          <TextInput
            required
            label="Your name"
            leftIcon={<FaMarker color="teal" size={28} />}
            size="lg"
            placeholder="Enter your name"
            value={name}
            onChange={(value) => setName(value)}
          />
          <PasswordInput onChange={(value) => setName(value)} value={name} />
          <NumberInput
            leftIcon={<FaCreditCard color="green" size={18} />}
            size="md"
            onChange={(value) => setCount(Number(value))}
            value={`${count}`}
          />
          <Switch label="I agree" />
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
            disabled
            value="agree"
            size="lg"
            checked={checkedRadio.r4}
            onChange={() => updateCheckedRadioValues("r4", !checkedRadio.r4)}
          >
            I agree
          </Radio>
          <Radio
            value="choose"
            size="xl"
            checked={checkedRadio.r3}
            onChange={() => updateCheckedRadioValues("r3", !checkedRadio.r3)}
          >
            Choose one
          </Radio>
          <Checkbox
            size="sm"
            color="indigo"
            checked={checked.r1}
            onChange={() => handleChangeChecked("r1", !checked.r1)}
            label="Accept terms"
          />
          <Checkbox disabled checked={checked.r2} onChange={() => handleChangeChecked("r2", !checked.r2)} label="Accept terms" />
          <Checkbox size="lg" checked={checked.r4} onChange={() => handleChangeChecked("r4", !checked.r4)} label="Accept terms" />
          <Checkbox size="xl" checked={checked.r3} onChange={() => handleChangeChecked("r3", !checked.r3)} label="Accept terms" />
        </Stack>
      </Container>
    </ThemeProvider>
  );

  /*
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Stack>
        <h1>Styled Components Demo</h1>
        <h2 style={{ color: "red" }}>Testing h2</h2>
        <h3>Testing h3</h3>
        <h4>Testing h4</h4>
        <h5>Testing h5</h5>
        <hr />
        <h5>Text</h5>
        <Stack>
          <Text size="xl" mt={10} label="Hello, Styled Components!" fw="500" />
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
        <Group>
          <Button onClick={handleButtonClick} size="sm">
            Small
          </Button>
          <Button onClick={handleButtonClick} size="md">
            Medium
          </Button>
          <Button onClick={handleButtonClick} size="lg">
            Large
          </Button>
          <Button radius={10} onClick={handleButtonClick} size="xl">
            Extra Large
          </Button>
          <Button onClick={handleButtonClick} color="purple" variant="outline">
            Click me
          </Button>
          <TextButton color="orange">Warning</TextButton>
        </Group>
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
        <Group>
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
        <Flex bg="orange" gap={1}>
          <FlexCol bg="blue" span={2}>
            <Stack>
              <Text color="white" label="1" />
              <Text label="Hoi" />
            </Stack>
          </FlexCol>
          <FlexCol span={3}>
            <Button onClick={() => {}}>Click</Button>
          </FlexCol>
          <FlexCol bg="green">
            <Text label="2" />
          </FlexCol>
        </Flex>
      </Stack>
    </ThemeProvider>
  );
  */
};

export default App;
