import { useState } from "react";
import { FaPeopleArrows, FaSave, FaTimes, FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { Accordion } from "./styled/accordion/accordion.styled";
import { Alert } from "./styled/alert/alert.styled";
import { Button, TextButton } from "./styled/button/button.styled";
import { Checkbox } from "./styled/checkbox/checkbox.styled";
import { Group } from "./styled/group/group.styled";
import { NumberInput, PasswordInput, TextInput } from "./styled/input/input.styled";
import { Radio } from "./styled/radio/radio.styled";
import { Select } from "./styled/select/select.styled";
import { Stack } from "./styled/stack/stack.styled";
import { Switch } from "./styled/switch/switch.styled";
import { Table, type ColumnHeader } from "./styled/table/table.styled";
import { TestControl } from "./styled/test/test.styled";
import { Text } from "./styled/text/styled.text";
import { TextArea } from "./styled/textarea/textarea.styled";

import { Card } from "./styled/card/card.styled";
import { DatePicker } from "./styled/date/date.styled";
import { Modal } from "./styled/dialogs/modal.styled";
import { useDisclosure } from "./styled/hooks/use-disclosure";
import { Image } from "./styled/image/styled.image";

import "./App.css";
import DataGrid from "./components/datagrid/datagrid";
import type { DataGridColumn } from "./models/data.model";

const App = () => {
  const [country, setCountry] = useState("us");
  const [checkValues, setCheckValues] = useState<string[]>(["vue"]);
  const [checked, setChecked] = useState(true);
  const [radioChecked, setRadioChecked] = useState(false);
  const [radioDisabled, setRadioDisabled] = useState(true);
  const [radioValue, setRadioValue] = useState("react");
  const [inputValue, setInputValue] = useState("");
  const [age, setAge] = useState("0");
  const [opened, { open, close }] = useDisclosure(false);

  const header: ColumnHeader = {
    bg: "#A00000",
    columns: [
      { id: "name", title: "Name" },
      { id: "country", title: "Country" },
    ],
  };

  const data = [
    ["Johan den Boer", "Netherlands"],
    ["Dilenia Ventura", "Dominicaanse Republiek"],
    ["Nikki Bellini", "America"],
  ];

  const handleToggle = (size: string, value: boolean) => {
    console.log("toggle:", size, ", value:", value);
  };

  const handleRowCick = (index: number) => {
    console.log("row:", index);
  };

  const values = [
    { label: "America", value: "us" },
    { label: "Netherlands", value: "nl" },
    { label: "Spain", value: "es" },
  ];

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  //console.log("checkValues:", checkValues);
  //console.log("radioChecked:", radioChecked);
  //console.log("radioValue:", radioValue);
  // console.log("selected country:", country);

  const showCheckboxes = () => {
    return (
      <div>
        <h4>Checkbox</h4>
        <Group>
          <Checkbox color="orange" size="xs" label="XS : I agree" checked={checked} onChange={setChecked} />
          <Checkbox color="blue" size="sm" label="SM : I agree" checked={checked} onChange={setChecked} />
          <Checkbox color="blue" size="md" label="MD : I agree" checked={checked} onChange={setChecked} />
          <Checkbox color="blue" size="lg" label="LG : I agree" checked={checked} onChange={setChecked} />
          <Checkbox color="blue" size="xl" label="XL : I agree" checked={checked} onChange={setChecked} />
        </Group>
        <br />
        <Checkbox.Group values={checkValues} onChange={setCheckValues}>
          <Checkbox value="react" checked={checkValues.includes("react")} label="React" />
          <Checkbox disabled value="vue" checked={checkValues.includes("vue")} label="Vue" />
          <Checkbox color="orange" value="angular" checked={checkValues.includes("angular")} label="Angular" />
        </Checkbox.Group>
        <br />
        <hr />
        <br />
      </div>
    );
  };

  const showRadios = () => {
    return (
      <div>
        <h4>Radio</h4>
        <Group>
          <Radio.Group value={radioValue} onChange={setRadioValue}>
            <Radio value="react">React</Radio>
            <Radio value="vue">Vue</Radio>
            <Radio value="angular">Angular</Radio>
          </Radio.Group>
        </Group>
        <Group>
          <Radio size="xs" checked={radioChecked} onChange={(e) => setRadioChecked(!e)} value="angular">
            Xs:ok
          </Radio>
          <Radio color="indigo" size="sm" checked={radioChecked} onChange={(e) => setRadioChecked(!e)} value="angular">
            Sm:ok
          </Radio>
          <Radio size="md" disabled checked={radioDisabled} onChange={(e) => setRadioDisabled(!e)} value="angular">
            Md:ok
          </Radio>
          <Radio size="lg" checked={radioChecked} onChange={(e) => setRadioChecked(!e)} value="angular">
            Lg:ok
          </Radio>
          <Radio size="xl" checked={radioChecked} onChange={(e) => setRadioChecked(!e)} value="angular">
            Xl:ok
          </Radio>
        </Group>
        <br />
        <hr />
        <br />
      </div>
    );
  };

  const showInputs = () => {
    return (
      <div>
        <h4>Inputs</h4>
        <Stack mt={10} ml={5}>
          <TextInput leftIcon={<FaPeopleArrows />} size="xs" value={inputValue} onChange={setInputValue} />
          <TextInput leftIcon={<FaUser />} size="sm" value={inputValue} onChange={setInputValue} />
          <TextInput leftIcon={<FaUser />} size="md" value={inputValue} onChange={setInputValue} />
          <TextInput leftIcon={<FaLock />} size="lg" value={inputValue} onChange={setInputValue} />
          <TextInput size="lg" value={inputValue} onChange={setInputValue} />
          <TextInput leftIcon={<FaUser size={24} />} label="Your username" size="xl" value={inputValue} onChange={setInputValue} />
          <PasswordInput leftIcon={<FaUser />} label="Your password" size="sm" value={inputValue} onChange={setInputValue} />
          <NumberInput label="Enter your age" size="sm" value={age} onChange={setAge} />
          <TextArea label="Omschrijving" value="Hello" onChange={(value) => console.log("textvalue:", value)} />
        </Stack>
        <br />
        <hr />
        <br />
      </div>
    );
  };

  const showSwitches = () => {
    return (
      <div>
        <h4>Switches</h4>
        <Stack>
          <Switch m={5} onChange={(b) => handleToggle("xs", b)} size="xs" label="Xs I agree" color="orange" />
          <Switch m={5} onChange={(b) => handleToggle("sm", b)} size="sm" label="Sm I agree" color="orange" />
          <Switch m={5} onChange={(b) => handleToggle("md", b)} size="md" label="Md I agree" color="orange" />
          <Switch m={5} onChange={(b) => handleToggle("lg", b)} size="lg" label="Lg I agree" color="orange" />
          <Switch m={5} onChange={(b) => handleToggle("xl", b)} size="xl" label="Xl I agree" color="orange" />
        </Stack>
        <br />
        <hr />
        <br />
      </div>
    );
  };

  const showAccordion = () => {
    return (
      <div>
        <h4>Accordion</h4>
        <Accordion m={5}>
          <Accordion.Header title="Header 1" value="1">
            <Accordion.Panel>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Accordion.Panel>
          </Accordion.Header>
          <Accordion.Header title="Header 2" value="2">
            <Accordion.Panel>
              Donate: If you use this site regularly and would like to help keep the site on the Internet, please consider donating
              a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated -
              click here to donate using PayPal. Thank you for your support. Donate bitcoin: 16UQLq1HZ3CNwhvgrarV6pMoA2CDjb4tyF
            </Accordion.Panel>
          </Accordion.Header>
        </Accordion>
        <br />
        <hr />
        <br />
      </div>
    );
  };

  const showAlerts = () => {
    return (
      <div>
        <h4>Alerts</h4>
        <Alert w={500} m={10} title="Missing credentials">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. AtIcon officiis, quae tempore necessitatibus placeat saepe.
        </Alert>
        <Alert m={5} color="red">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. AtIcon officiis, quae tempore necessitatibus placeat saepe.
        </Alert>
        <br />
        <hr />
        <br />
      </div>
    );
  };

  const showButtons = () => {
    return (
      <div>
        <h4>Buttons</h4>
        <Button ml={10} mt={10} width={200} onClick={handleButtonClick}>
          Custom
        </Button>
        <Button m={10} size="xs" leftIcon={<FaSave width={12} color="white" />} onClick={handleButtonClick}>
          Button XS
        </Button>
        <Button m={10} size="sm" onClick={handleButtonClick}>
          Button SM
        </Button>
        <Button m={10} size="md" leftIcon={<FaSave width={24} color="white" />} onClick={handleButtonClick}>
          Button MD
        </Button>
        <Button m={10} variant="outline" color="indigo" size="md" onClick={handleButtonClick}>
          Button MD
        </Button>
        <Button m={10} size="lg" onClick={handleButtonClick}>
          Button LG
        </Button>
        <Button m={10} size="xl" onClick={handleButtonClick}>
          Button XL
        </Button>
        <TextButton color="orange" onClick={handleButtonClick}>
          Text button
        </TextButton>
        <br />
        <hr />
        <br />
      </div>
    );
  };

  const showText = () => {
    return (
      <div>
        <h4>Text</h4>
        <Text m={5} size="xs">
          Dit is een text
        </Text>
        <Text ml={5} size="sm">
          Dit is een text
        </Text>
        <Text ml={5} size="md">
          Dit is een text
        </Text>
        <Text ml={5} size="2.0">
          Dit is een text 2 rem
        </Text>
        <Text ml={5} size="lg" fs="italic">
          Dit is een text
        </Text>
        <Text ml={5} fw="normal" size="xl">
          Dit is een text
        </Text>
        <br />
        <hr />
        <br />
      </div>
    );
  };

  const showTable = () => {
    return (
      <>
        <h4>Table</h4>
        <Table m={10} handleRowClick={(index) => handleRowCick(index)} withBorder withColumnBorder data={data} header={header} />
      </>
    );
  };

  const showSelect = () => {
    return (
      <>
        <h4>Select</h4>
        <Select label="Select a country" value={country} m={10} data={values} onChange={(value) => setCountry(value)} />
      </>
    );
  };

  const showCard = () => {
    return (
      <>
        <h4>Card</h4>
        <Card color="blue" m={10}>
          <DatePicker onChange={() => {}} />
          <Text color="white" size="xl">
            Test
          </Text>
        </Card>
      </>
    );
  };

  const showDialog = () => {
    return (
      <>
        <h4>Dialog</h4>
        <Button size="sm" mt={20} onClick={open}>
          Open Dialog
        </Button>
        {opened && (
          <Modal onClose={close} opened={opened} modal title="This is a modal dialog for een lange header">
            <Stack mt={10}>
              <TextInput label="Your name" value={inputValue} onChange={setInputValue} />
              <TextInput label="Your address" value={inputValue} onChange={setInputValue} />
              <Group mt={20}>
                <Button leftIcon={<FaSave size="14" />} width={100} onClick={close}>
                  Ok
                </Button>
                <Button leftIcon={<FaTimes size="14" />} width={100} color="red" onClick={close}>
                  Cancel
                </Button>
              </Group>
            </Stack>
          </Modal>
        )}
      </>
    );
  };

  const TestControls = () => {
    return (
      <>
        <TestControl size="xs" color="orange" m={20} leftIcon={<FaSave size="10" color="white" />}>
          Save Xs
        </TestControl>
        <TestControl size="sm" color="orange" m={20} leftIcon={<FaSave size="14" color="white" />}>
          Save Sm
        </TestControl>
        <TestControl size="md" color="orange" m={20} leftIcon={<FaSave size="18" color="white" />}>
          Save Md
        </TestControl>
        <TestControl variant="outline" size="md" color="orange" m={20}>
          Save Md
        </TestControl>
        <TestControl size="lg" color="orange" m={20} leftIcon={<FaSave size="22" color="white" />}>
          Save Lg
        </TestControl>
        <TestControl size="xl" color="orange" m={20} leftIcon={<FaSave size="26" color="white" />}>
          Save Xl
        </TestControl>
      </>
    );
  };

  const showImages = () => {
    return (
      <Group>
        <Image h={300} src="assets/pic-1.png" />
      </Group>
    );
  };

  const showGroup = () => {
    return (
      <Group gap={10}>
        <div className="box">Red-1</div>
        <div className="box">Red-2</div>
      </Group>
    );
  };

  const showDatagrid = () => {
    // Definieer het type voor onze bestellingen (optioneel, maar netjes in TypeScript)
    interface Bestelling {
      id: number;
      customer: string;
      product: string;
      price: string;
      status: "Geleverd" | "In behandeling";
    }

    // State om de geselecteerde rijen in op te slaan
    const [selectedOrders, setSelectedOrders] = useState<Bestelling[]>([]);

    // 1. Kolom-definities met gebruik van de DataGridColumn interface
    const columns: DataGridColumn[] = [
      { field: "id", headerName: "Bestel ID" },
      { field: "customer", headerName: "Klantnaam" },
      { field: "product", headerName: "Product" },
      { field: "price", headerName: "Totaalprijs" },
      {
        field: "status",
        headerName: "Status",
        // Custom rendering om de status een mooi kleurtje te geven
        renderCell: (row: Bestelling) => (
          <span
            style={{
              color: row.status === "Geleverd" ? "#2e7d32" : "#ed6c02",
              fontWeight: "bold",
            }}
          >
            {row.status}
          </span>
        ),
      },
    ];

    // 2. De data voor de tabel
    const orders: Bestelling[] = [
      { id: 101, customer: "Anouk de Jong", product: "Draadloze Muis", price: "€ 25,00", status: "Geleverd" },
      { id: 102, customer: "Bram Bakker", product: "Mechanisch Toetsenbord", price: "€ 85,00", status: "In behandeling" },
      { id: 103, customer: "Carla Smits", product: "Gaming Monitor", price: "€ 299,00", status: "Geleverd" },
      { id: 104, customer: "Daan van Dijk", product: "USB-C Kabel 2m", price: "€ 12,50", status: "In behandeling" },
      { id: 105, customer: "Elsa de Wit", product: "Laptop Standaard", price: "€ 45,00", status: "Geleverd" },
      { id: 106, customer: "Freek Mulder", product: "Grote Muismat", price: "€ 20,00", status: "In behandeling" },
    ];

    // 3. Voorbeeld actie voor de geselecteerde rijen
    const handleVerwerkBestellingen = () => {
      const ids = selectedOrders.map((o) => o.id).join(", ");
      alert(`Bestellingen met ID [${ids}] worden nu verwerkt!`);
      // Hier kun je bijvoorbeeld een API-aanroep doen
    };

    return (
      <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "5px" }}>Bestellingenbeheer</h1>
        <p style={{ color: "#666", marginBottom: "30px" }}>Overzicht van openstaande en geleverde bestellingen</p>

        {/* Actiebalk: Alleen zichtbaar als er minimaal 1 rij is geselecteerd */}
        {selectedOrders.length > 0 && (
          <div
            style={{
              padding: "15px 20px",
              backgroundColor: "#e8f0fe",
              marginBottom: "20px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #d2e3fc",
            }}
          >
            <span style={{ fontWeight: 500, color: "#1967d2" }}>{selectedOrders.length} bestelling(en) geselecteerd</span>
            <button
              onClick={handleVerwerkBestellingen}
              style={{
                padding: "8px 16px",
                backgroundColor: "#1a73e8",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Geselecteerde bestellingen verwerken
            </button>
          </div>
        )}

        {/* Het DataGrid component met alle benodigde props */}
        <DataGrid
          columns={columns}
          data={orders}
          initialRowsPerPage={4}
          selectedRows={selectedOrders}
          onSelectionChange={setSelectedOrders}
        />
      </div>
    );
  };

  return (
    <>
      <h2>Demo Controls</h2>

      {/* <Container></Container> */}
      {/* <Stack> */}
      {/* {showGroup()} */}
      {/* {showCheckboxes()} */}
      {/* {showRadios()} */}
      {/* {showInputs()} */}
      {/* {showSwitches()} */}
      {/* {showAccordion()} */}
      {/* {showAlerts()} */}
      {/* {showButtons()} */}
      {/* {showText()} */}
      {/* {showImages()} */}
      {/* {showTable()} */}
      {/* {showSelect()} */}
      {/* </Stack> */}
      {/* </Container> */}
      {/* {showCard()} */}
      {/* {showDialog()} */}
      {/* {TestControls()} */}
      {showDatagrid()}
    </>
  );
};

export default App;
