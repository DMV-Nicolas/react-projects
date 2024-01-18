import { useTranslate } from "./hooks/useTranslate"
import { ArrowsIcon } from "./components/Icons"
import { LanguageSelector } from "./components/LanguageSelector"
import { TextArea } from "./components/TextArea"
import { AUTO_LANGUAGE } from "./constants"
import { SectionType } from "./types.d"
import { Col, Container, Row, Button, Stack } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"


function App() {
    const {
        loading,
        fromLanguage,
        toLanguage,
        setFromLanguage,
        setToLanguage,
        fromText,
        setFromText,
        toText,
        setToText,
        interchangeLanguages
    } = useTranslate()
    return (
        <Container fluid>
            <h2>Translate</h2>

            <Row>
                <Col>
                    <Stack gap={2}>
                        <LanguageSelector
                            type={SectionType.From}
                            value={fromLanguage}
                            onChange={setFromLanguage}
                        />

                        <TextArea
                            type={SectionType.From}
                            value={fromText}
                            onChange={setFromText}
                        />
                    </Stack>

                </Col>

                <Col xs='auto' >
                    <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
                        <ArrowsIcon />
                    </Button>
                </Col>

                <Col>
                    <Stack gap={2}>
                        <LanguageSelector
                            type={SectionType.To}
                            value={toLanguage}
                            onChange={setToLanguage}
                        />
                        <div style={{ position: 'relative' }}>
                            <TextArea
                                loading={loading}
                                type={SectionType.To}
                                value={toText}
                                onChange={setToText}
                            />
                        </div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default App
