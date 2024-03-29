import { useTranslate } from "./hooks/useTranslate"
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from "./components/Icons"
import { LanguageSelector } from "./components/LanguageSelector"
import { TextArea } from "./components/TextArea"
import { Footer } from "./components/Footer"
import { AUTO_LANGUAGE, LANGUAGE_FOR_VOICE } from "./constants"
import { SectionType } from "./types.d"
import { Col, Container, Row, Button, Stack } from "react-bootstrap"
import { useEffect } from "react"
import { translate } from "./services/translate"
import { useDebounce } from "./hooks/useDebounce"
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
    const debouncedFromText = useDebounce(fromText, 500)

    useEffect(() => {
        const getTranslate = async () => {
            const traduction = await translate({ fromLanguage, toLanguage, text: debouncedFromText })
            if (traduction == null) {
                setToText("")
            } else {
                setToText(traduction)
            }
        }

        getTranslate()
    }, [debouncedFromText, fromLanguage, toLanguage])

    const handleClipboard = () => {
        navigator.clipboard.writeText(toText).catch((e) => {
            throw new Error("Failed to copy: " + e)
        })
    }

    const handleSpeak = () => {
        const utterance = new SpeechSynthesisUtterance(toText)
        utterance.lang = LANGUAGE_FOR_VOICE[toLanguage]
        window.speechSynthesis.speak(utterance)
    }

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
                            <div style={{ position: "absolute", left: 0, bottom: 0 }}>
                                <Button
                                    variant="link"
                                    onClick={handleClipboard}
                                >
                                    <ClipboardIcon />
                                </Button>
                                <Button
                                    variant="link"
                                    onClick={handleSpeak}
                                >
                                    <SpeakerIcon />
                                </Button>
                            </div>
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
