
import Children from "./Children";
import '../App.css';

const FirstComponent = () => {

    let myWidth="100px";
    let textComp="другой текст";

   return( 
    <div className="first">
        <h1> Первый текст</h1>
        <p>
            Текст 2
        </p>
       <Children text={textComp} width={myWidth} />
    </div>
   );
}

export default FirstComponent