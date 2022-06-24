import { CloseButton } from "../../CloseButton";
import successImg from '../../../assets/success.svg'

interface FeedbackSuccessProps{
    onFeedbackRestartRequested: () => void
}


export function FeedbackSuccess({onFeedbackRestartRequested}: FeedbackSuccessProps) {
    return(
        <>
        <header>
            <CloseButton />
        </header>

        <div className="flex flex-col items-center py-10 w-[304px]">
            <img  src={successImg}alt="Sucesso" />

            <span className="mt-2 text-xl">Agradecemos o feedback!</span>

            <button
            type="button"
            onClick={onFeedbackRestartRequested}
            className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors
            focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none
            disabled:opacity-50 disabled:hover:bg-brand-500"

            > 
            Quero enviar outro</button>
        </div>

        
        </>
    )
}