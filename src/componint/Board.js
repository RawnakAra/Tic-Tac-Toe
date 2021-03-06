import React from "react";
import Square from "./Square";
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       
        }
    }

    render() {
        return (

            <div className='container'>

                {
                    this.props.SQ.map((val, index) => {
                        return <Square value={val} key={index} method={()=>this.props.onClick(index)} />
                    })
                }
            </div>
        )
    }
}
export default Board