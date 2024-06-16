import React from 'react'
import Akkordeon from '../Akkordeon/Akkordeon'

type Props = {
    showAkkordeon: boolean
}

type OeffnungszeitenType = {
    day: string,
    open: string,
    close: string
}

export default function ShowOeffnungszeiten({ showAkkordeon }: Props) {
    const oeffnungZeiten: OeffnungszeitenType[] = [
        {
            day: "Montag",
            open: "08:00",
            close: "20:00"
        },
        {
            day: "Dienstag",
            open: "08:00",
            close: "19:00"
        },
        {
            day: "Mittwoch",
            open: "08:00",
            close: "19:00"
        },
        {
            day: "Donnerstag",
            open: "08:00",
            close: "20:00"
        },
        {
            day: "Freitag",
            open: "08:00",
            close: "18:00"
        },
        {
            day: "Samstag",
            open: "Geschlossen",
            close: "Geschlossen"
        },
        {
            day: "Sonntag",
            open: "Geschlossen",
            close: "Geschlossen"
        }
    ]

    function Content() {
        return (oeffnungZeiten.map((day, index) => {

            if (day.open === 'Geschlossen') return (<div
                key={'Öffnungszeiten' + index}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                <p style={{ marginRight: '1rem' }}>{day.day}</p><p>Geschlossen</p>
            </div>)

            return (<div
                key={'Öffnungszeiten' + index}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                <p style={{ marginRight: '1rem' }}>{day.day}</p><p>{day.open}-{day.close}</p>
            </div>)
        }))
    }

    if (showAkkordeon) return (<div>
        <h4 style={{ marginBottom: '0.5rem' }}>Unser Öffnungszeiten</h4>
        <Akkordeon contentHtml={<Content />} isOpenBooleen={false} color={''} />
    </div>)

    return (
        <div>
            <h4 style={{ marginBottom: '0.5rem' }}>Unser Öffnungszeiten</h4>
            <Content />

        </div>
    )
}