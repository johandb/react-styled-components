import { Accordion } from "./styled/accordion/accordion.styled";
import { Container } from "./styled/container/container.styled";

const App = () => {
  // const [country, setCountry] = useState("us");
  // const [checkValues, setCheckValues] = useState<string[]>(["vue"]);
  // const [checked, setChecked] = useState(false);

  // const header: ColumnHeader = {
  //   bg: "black",
  //   columns: [
  //     { id: "name", title: "Name" },
  //     { id: "country", title: "Country" },
  //   ],
  // };

  // const data = [
  //   ["Johan den Boer", "Netherlands"],
  //   ["Dilenia Ventura", "Dominicaanse Republiek"],
  //   ["Nikki Bellini", "America"],
  // ];

  // const newData = new Array(15).fill(1).map((_, index) => {
  //   return new Array(5).fill(1).map((_, cellIndex) => `row: ${index + 1}, col: ${cellIndex + 1}`);
  // });

  //console.log("newData:", newData);

  // const handleRowCick = (index: number) => {
  //   console.log("row:", index);
  // };

  // const values = [
  //   { label: "America", value: "us" },
  //   { label: "Netherlands", value: "nl" },
  //   { label: "Spain", value: "es" },
  // ];

  return (
    <Container>
      <Accordion m={10} bg="blue">
        <Accordion.Header title="Header 1" value="1">
          <Accordion.Panel>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Accordion.Panel>
        </Accordion.Header>
        <Accordion.Header title="Header 2" value="2">
          <Accordion.Panel>
            Donate: If you use this site regularly and would like to help keep the site on the Internet, please consider donating a
            small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click
            here to donate using PayPal. Thank you for your support. Donate bitcoin: 16UQLq1HZ3CNwhvgrarV6pMoA2CDjb4tyF
          </Accordion.Panel>
        </Accordion.Header>
      </Accordion>
    </Container>
    // <div>
    //   <Radio.Group value="vue">
    //     <Radio value="react">React</Radio>
    //     <Radio value="vue">Vue</Radio>
    //     <Radio value="angular">Angular</Radio>
    //   </Radio.Group>
    //   <br />
    //   <br />
    //   <Checkbox.Group values={checkValues} onChange={setCheckValues}>
    //     <Checkbox size="sm" value="react" checked={checkValues.includes("react")} label="React" />
    //     <Checkbox size="sm" value="vue" checked={checkValues.includes("vue")} label="Vue" />
    //     <Checkbox size="sm" value="angular" checked={checkValues.includes("angular")} label="Angular" />
    //   </Checkbox.Group>
    //   <br />
    //   <br />
    //   <Checkbox size="sm" label="I agree" checked={checked} onChange={setChecked} />
    //   <Alert m={5} title="Missing credentials">
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. AtIcon officiis, quae tempore necessitatibus placeat saepe.
    //   </Alert>
    //   <Alert m={5} color="red">
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. AtIcon officiis, quae tempore necessitatibus placeat saepe.
    //   </Alert>
    //   <Table handleRowClick={(index) => handleRowCick(index)} withBorder withColumnBorder data={data} header={header} />
    //   <Select label="Select a country" value={country} ml={10} mt={10} data={values} onChange={(value) => setCountry(value)} />
    // </div>
  );
};

export default App;
