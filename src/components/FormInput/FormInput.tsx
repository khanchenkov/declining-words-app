import {Dropdown, DropdownButton, InputGroup, FormControl} from "react-bootstrap";
import React, {useState} from "react";
import DeclineService from "../../services/DeclineService";

const FormInput = ({setCurrDeclinedWord}: {setCurrDeclinedWord: any}) => {

    const [inputText, setInputText] = useState('время');

    const DecService = new DeclineService(inputText);

    return (
        <InputGroup className="mb-3">
            <FormControl
                aria-label="Text input with dropdown button"
                value={inputText}
                placeholder="Введите существительное"
                onChange={(e) => setInputText(e.target.value)}
            />

            <DropdownButton
                variant="outline-secondary"
                title="Падежи"
                id="input-group-dropdown-2"
                align="end"
            >
                <Dropdown.Item onClick={() => alert(DecService.getNominativeNoun())}>Именительный падеж</Dropdown.Item>
                <Dropdown.Item onClick={() => alert(DecService.makeNounGenitive())}>Родительный падеж</Dropdown.Item>
                <Dropdown.Item onClick={() => alert(DecService.makeNounGenitive())}>Дательный падеж</Dropdown.Item>
                <Dropdown.Item onClick={() => alert(DecService.makeNounGenitive())}>Винительный падеж</Dropdown.Item>
                <Dropdown.Item onClick={() => alert(DecService.makeNounGenitive())}>Творительный падеж</Dropdown.Item>
                <Dropdown.Item onClick={() => alert(DecService.makeNounGenitive())}>Предложный падеж</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setCurrDeclinedWord(DecService.defineCases())}>Показать все падежи</Dropdown.Item>
            </DropdownButton>
        </InputGroup>
    )
}

export default FormInput;