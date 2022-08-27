import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import Config from './config.json'

import LogoIcon         from "./assets/images/Logo/Logo-Dark.png"
import LogoDarkIcon     from "./assets/images/Logo/Logo-Light.png"

export const config = Config

export const Logo = LogoIcon
export const LogoDark = LogoDarkIcon

const getStore = (initialState: StoreObject) => {
    try {
    } catch (err) {
        console.log(err)
    }
    return initialState
}

const setStore = (state:any) => {
    delete state.L
    window.localStorage.setItem(config.appKey, JSON.stringify(state))
}
const initialState: StoreObject = {
    theme:              '',
    loading:            false
}

export const slice = createSlice({
    name: 'store',
    initialState: getStore(initialState),
    reducers: {
        update: (state: any, action) => {
            for (const k in action.payload) {
                if (state[k] === undefined) new Error(`undefined store key ${k}`)
                state[k] = action.payload[k]
            }
            setStore(state)
        }
    }
})

const useStore = () => {
    const G = useSelector((state: StoreObject) => state)

    const dispatch = useDispatch()
    const update = (payload:Partial<StoreObject>) => dispatch(slice.actions.update(payload))

    const showLoading = (visible: boolean) => update({loading: visible})

    return { ...G, dispatch, update, showLoading }
}

export default useStore