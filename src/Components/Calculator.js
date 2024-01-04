import React from "react";

function Calculator(){
    return (
        <div className="calculator">
            <div className="container">
                <div className="calculator__box">
                    <div className="calculator__output">
                        <div className="calculator__prev"></div>
                        <div className="calculator__current"></div>
                    </div>
                    <button className="calculator__clear">AC</button>
                    <button className="calculator__delete">DEL</button>
                    <button className="calculator__devide">/</button>
                    <button className="calculator__number">1</button>
                    <button className="calculator__number">2</button>
                    <button className="calculator__number">3</button>
                    <button className="calculator__multiply">*</button>
                    <button className="calculator__number">4</button>
                    <button className="calculator__number">5</button>
                    <button className="calculator__number">6</button>
                    <button className="calculator__plus">+</button>
                    <button className="calculator__number">7</button>
                    <button className="calculator__number">8</button>
                    <button className="calculator__number">9</button>
                    <button className="calculator__minus">-</button>
                    <button className="calculator__dot">.</button>
                    <button className="calculator__equal">=</button>                    
                </div>
            </div>
        </div>
    )
}

export default Calculator;