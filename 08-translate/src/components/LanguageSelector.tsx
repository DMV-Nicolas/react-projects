import { Form } from "react-bootstrap"
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants"
import { FromLanguage, Language, SectionType, ToLanguage } from "../types.d"

type Props =
    { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void } |
    { type: SectionType.To, value: ToLanguage, onChange: (language: ToLanguage) => void }

export function LanguageSelector({ type, value, onChange }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as Language)
    }

    return (
        <Form.Select aria-label="Select the idiom" onChange={handleChange} value={value}>
            {type === SectionType.From &&
                <option key={AUTO_LANGUAGE} value={AUTO_LANGUAGE}>Detect idiom</option>
            }
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))
            }
        </Form.Select>
    )
}