import { useTranslate } from "./hooks/useTranslate"
import { ArrowsIcon } from "./components/Icons"
import { LanguageSelector } from "./components/LanguageSelector"
import { TextArea } from "./components/TextArea"
import { Footer } from "./components/Footer"
import { AUTO_LANGUAGE } from "./constants"
import { SectionType } from "./types.d"
import { Col, Container, Row, Button, Stack } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { useEffect } from "react"
import { translate } from "./services/translate"


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

    useEffect(() => {
        const getTranslate = async () => {
            const traduction = await translate({ fromLanguage, toLanguage, text: fromText })
            if (traduction == null) return
            setToText(traduction)
        }

        getTranslate()
    }, [fromText, fromLanguage, toLanguage, setToText])

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
            <Footer
                loading={loading}
                fromLanguage={fromLanguage}
                toLanguage={toLanguage}
                fromText={fromText}
                toText={toText}
            />
        </Container>
    )
}

export default App
