import React from "react";
import "./Popup.css"

interface Props {
    title: string,
    description: string,
    isVisible: boolean,
    handleSubmit: (e:React.MouseEvent<HTMLButtonElement>) => void,
    handleClose: (e:React.MouseEvent<HTMLButtonElement>) => void
}

const Popup: React.FC<Props> = (props) => {

    const s = (...styles:Array<string>) => styles.join(" ")
    const render = () => {
        if (props.isVisible){
            return (
                <div className={"popup"}>
                    <div className={"popup__title"}>{props.title}</div>
                    <p className={"popup__description"}>  {props.description}</p>
                    <form className={"form"}>
                        <input 
                        className={"form__input"} 
                        type="text"
                        placeholder={"Enter some info"}
                        />
                        <div className={"form__button-cnt"}>
                            <button className={s("button", "button__cancel")}  onClick={props.handleClose}>Cansel</button>
                            <button  className={s("button", "button__submit")} onClick={props.handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            )
        }
        return <div></div>
    }

    return render()
}

export default Popup