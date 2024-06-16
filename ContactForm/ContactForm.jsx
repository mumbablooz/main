'use client'
import React, { useState } from 'react'
import styles from './styles.module.css'

export default function ContactForm() {

    const [loading, setLoading] = useState(false)
    const [sendSuccessfully, setSendSuccessfully] = useState(false)
    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        }

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            console.log("Message send successfully")
            setLoading(false)
            e.target.name.value = ""
            e.target.email.value = ""
            e.target.message.value = ""
            setSendSuccessfully(true)
            setTimeout(() => {
                setSendSuccessfully(false)
            }, 5000)

        }
        if (!response.ok) {
            console.log("Error sending message")
            setLoading(false)
        }
    }

    return (
        <div className={styles.formContainer} >
            <h3>Nehme Kontakt zu mir auf !</h3>
            <p>--Kontaktformular--</p>
            <form onSubmit={handleSubmit} className={styles.form}>

                <div className='w-full flex flex-col my-4'>
                    <label className={'font-bold'} htmlFor='name'>
                        Name
                    </label>
                    <input
                        className={styles.input}
                        type='text'
                        autoComplete='off'
                        id='name'
                        required
                        minLength={3}
                        maxLength={150} />
                </div>

                <div className='w-full flex flex-col my-4'>
                    <label className='font-bold' htmlFor='email'>
                        Email
                    </label>
                    <input
                        className={styles.input}
                        type='email'
                        autoComplete='off'
                        id='email'
                        required
                        minLength={5}
                        maxLength={150} />
                </div>

                <div className='w-full flex flex-col my-4'>
                    <label className='font-bold' htmlFor="message">Nachricht</label>
                    <textarea
                        className={styles.textarea}
                        name="message"
                        id="message"
                        rows={4}
                        required
                        minLength={10}
                        maxLength={500}
                        placeholder='Deine Nachricht' />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                        id='submitButton'
                        type='submit'
                        className={styles.submitButton + ' button'}>
                        abschicken</button>
                    {loading && <p>...einen Moment bitte !</p>}
                    {sendSuccessfully && <p>Deine Nachricht wurde verschickt !</p>}
                </div>

            </form>
        </div>
    )
}
