import {Table} from 'react-bootstrap';

const CasesTable = ({currentDeclinedWord}: {currentDeclinedWord: string[]}) => {

    const items = currentDeclinedWord.map((item, i) => {
        const declines = [
            'Именительный падеж (ЕСТЬ кто? что?)',
            'Родительный падеж (НЕТ кого? чего?)',
            'Дательный падеж (РАД кому? чему?)',
            'Винительный падеж (ВИЖУ кого? что?)',
            'Творительный падеж (ЛЮБУЮСЬ кем? чем?)',
            'Предложный падеж (ГОВОРЮ о ком? о чем?)'
        ];
        return (
            <tr key={i}>
                <td>{declines[i]}</td>
                <td>{item}</td>
            </tr>
        )
    })

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Падеж</th>
                    <th>Склонение</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </Table>
    )
}

export default CasesTable;