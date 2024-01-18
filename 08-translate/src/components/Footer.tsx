import { FromLanguage, ToLanguage } from '../types'
import './Footer.css'

type Props = {
    loading: boolean
    fromLanguage: FromLanguage
    toLanguage: ToLanguage
    fromText: string
    toText: string
}

export function Footer({ loading, fromLanguage, toLanguage, fromText, toText }: Props) {
    const res = JSON.stringify({ loading, fromLanguage, toLanguage, fromText, toText })
    return (
        <footer className='footer'>
            <span>
                {res}
            </span>
        </footer>
    )
}