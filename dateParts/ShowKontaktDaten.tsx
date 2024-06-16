import EmailButton from './EmailButton'
import HomePageButton from './HomePageButton'
import styles from './styles.module.css'
import TelButton from './TelButton'

export default function ShowKontaktDaten() {
  return (
    <div className={styles.KontaktDatenContainer}>
      <p>{process.env.NEXT_PUBLIC_OWNER_NAME}</p>
      <p>{process.env.NEXT_PUBLIC_OWNER_STREET + " " + process.env.NEXT_PUBLIC_OWNER_STREET_NUMBER} </p>
      <p>{process.env.NEXT_PUBLIC_OWNER_PLZ + " " + process.env.NEXT_PUBLIC_OWNER_CITY}</p>
      <p>{process.env.NEXT_PUBLIC_OWNER_COUNTRY}</p>
      <br />
      <div style={{ maxWidth: '22rem' }} >
        <TelButton text={true} color={''} />
        <EmailButton />
        <br />
        <HomePageButton />
      </div>

    </div>
  )
}
