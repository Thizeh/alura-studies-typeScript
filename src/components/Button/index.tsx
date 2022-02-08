import React from "react";

class Button extends React.Component {
    render() {
        const estaAtivo = true
        const styles = {
            backgroundColor: estaAtivo ? "green" : "red"
        }
        return (
            <button style={styles}>
                botão
            </button>
        )
    }
}

export default Button;