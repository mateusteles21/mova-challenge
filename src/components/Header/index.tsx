import * as C from './styles'
import { useForm } from '../../contexts/ThemeContext'
import { themeActions } from '../../contexts/ThemeContext'

export const Header = () => {
    const { state, dispatch } = useForm()

    const handleChangeTheme = () => {
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme === 'light' ? 'dark' : 'light'
        })
    }
    
    return (
        <C.Header theme={state.theme}>
            <div className='container'>
                <img src='https://mova.vc/img/footer_mova.svg' width={80}/>
                <h1>MOVA Countries</h1>
                <p onClick={handleChangeTheme}>Dark Mode</p>
            </div>
        </C.Header>
    )
}