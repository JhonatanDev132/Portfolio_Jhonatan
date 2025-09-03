import './styles.css'
import { useTranslation } from "react-i18next"


export default function Header() {

  const { t, i18n } = useTranslation()

  return (
    <div className="header">
      <h1 className="header-title">
        {t("greeting")}
      </h1>
      <div className='language-switcher'>
        <button className='lgn-btn' onClick={() => i18n.changeLanguage("en")}>🇺🇸</button>
        <button className='lgn-btn' onClick={() => i18n.changeLanguage("pt")}>🇧🇷</button>
      </div>
    </div>
  )
}