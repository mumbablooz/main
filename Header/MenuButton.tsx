import React from 'react'
import ShowIcon from '../ShowIcon/ShowIcon'

type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    color: string
}

export default function MenuButton({isOpen,setIsOpen,color}: Props) {
    function handleOnClick(){
        setIsOpen(!isOpen)
            }
            return (
                <div className='iconButton'
                onClick={handleOnClick}
                        style={{cursor: 'pointer'}}>
                            <ShowIcon
                iconName={!isOpen ? 'menu' : 'cancel'}
                size={'25'}
                color={'/'+color}
                />
                </div>)
}