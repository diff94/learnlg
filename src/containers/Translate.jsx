import { useEffect, useState } from "react";
import getLg from "../services/getlg";
import translate from "../services/translate";
import {
  Heading,
  Select,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuItemOption,
//   MenuGroup,
//   MenuOptionGroup,
//   MenuDivider,
// } from "@chakra-ui/react";
export default function Translate() {
  const [sourcelg, setSourcelg] = useState(""); // text
  const [targetlg, setTargetlg] = useState("");
  const [targetSelect, setTargetSelect] = useState("zh-TW"); //target
  const [sourceSelect, setSourceSelect] = useState("en"); //source
  const [supportLg, setSupportLg] = useState({});

  // console.log(sourcelg);
  useEffect(() => {
    //USE開頭就是個HOOK
    //containters 有 useEffect: mount 這個component or containers (translate.jsx) 要執行的事情
    const getLanguage = async () => {
      const languages = await getLg();
      // console.log(languages);
      setSupportLg(languages.supported_languages);
    };
    getLanguage();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault(); //form submit deafult 會重整頁面 所以我們要禁止他
    // console.log(e.target);
    // console.log("submit",sourcelg);
    // console.log("submit",targetSelect);
    // console.log("submit",sourceSelect);
    // console.log("submit",sourcelg);
    const translatedText = await translate({
      text: sourcelg,
      source: sourceSelect,
      target: targetSelect,
    });
    //先consle.log 知道結構後 再來set state
    // console.log(translatedText);
    setTargetlg(translatedText.translations.translation);
  };

  return (
    <div>
      {/* <h1>Translate </h1> */}
      {/* <p>
        The optgroup tag is used to group related options in a drop-down list:
      </p> */}
      <Heading
        size="lg"
        fontSize="50px"
        bgGradient="linear(to-l, yellow.200, pink.300)"
      >
        Translate
      </Heading>

      <FormControl onSubmit={handleSubmit}>
        <FormLabel as="legend" htmlFor="sourcelg">
          Choose a source language:
        </FormLabel>
        <Select
          placeholder="Select option"
          size="md"
          variant="outline"
          bg="sky"
          borderColor="blue"
          color="darkblue"
          name="sourcelg"
          id="sourcelg"
          value={sourceSelect}
          onChange={(e) => {
            setSourceSelect(e.target.value);
          }}
        >
          {Object.entries(supportLg).map((entry, index) => {
            const [option, value] = entry;
            return (
              <option key={`${value}-${index}`} value={value}>
                {option}
              </option>
            );
          })}
          {/* <optgroup label="Estern Language">
            <option value="english">English</option>
            <option value="german">German</option>
          </optgroup>
          <optgroup label="Asian Language">
            <option value="chinese">Chinese</option>
            <option value="japanese">Japanese</option>
            <option value="korea">Korea</option>
          </optgroup> */}
        </Select>
        <FormLabel as="legend" htmlFor="targetlg">
          Choose a target language:
        </FormLabel>
        <Select
          placeholder="Select option"
          size="md"
          variant="outline"
          bg="sky"
          borderColor="blue"
          color="darkblue"
          name="targetlg"
          id="targetlg"
          value={targetSelect}
          onChange={(e) => {
            setTargetSelect(e.target.value);
          }}
        >
          {Object.entries(supportLg).map((entry, index) => {
            const [option, value] = entry;
            return (
              <option key={`${value}-${index}`} value={value}>
                {option}
              </option>
            );
          })}
          {/* <optgroup label="Estern Language">
            <option value="english">English</option>
            <option value="german">German</option>
          </optgroup>
          <optgroup label="Asian Language">
            <option value="chinese">Chinese</option>
            <option value="japanese">Japanese</option>
            <option value="korea">Korea</option>
          </optgroup> */}
        </Select>

        <input type="submit" value="Submit" />
      </FormControl>

      <p>
        <FormLabel as="legend" htmlFor="sourcelg">
          Source Language:
        </FormLabel>
      </p>
      <Textarea
        id="sourcelg"
        name="sourcelg"
        rows="15"
        cols="50"
        size="sm"
        value={sourcelg}
        placeholder="請輸入要翻譯的文字QQ"
        onChange={(e) => {
          setSourcelg(e.target.value);
        }}
      />
      <p>
        <FormLabel as="legend" htmlFor="targetlg">
          Target Language:
        </FormLabel>
      </p>
      <Textarea
        id="targetlg"
        name="targetlg"
        rows="15"
        cols="50"
        size="sm"
        value={targetlg}
        placeholder="Translatred texts will be placed here.QuQ"
        onChange={(e) => {
          setTargetlg(e.target.value);
        }}
      />
    </div>
  );
}
