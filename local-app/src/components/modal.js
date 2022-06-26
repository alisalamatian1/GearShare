import React from 'react';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.title;
        const dates = this.props.dates;
        const rate = this.props.rate;
        const description = this.props.description;
        const contact = this.props.contact;

            if (this.props.isDisplayed) {
                return (
                    <div id='overlay' >
                                <div id='pop-up'>
                                    <div id='close-button' onClick={this.props.onClose}>
                                        <div className='crossbar' id='left-crossbar'>
                                        </div>
                                        <div className='crossbar' id='right-crossbar'>
                                        </div>
                                    </div>
                                    <h1 className='main-text'>{title}</h1>
                                    <hr />
                                    <p className='main-text' id='dates'>
                                        {dates}
                                    </p>
                                    <p className='main-text' id='rate'>
                                        {rate}
                                    </p>
                                    <p className='main-text' id='description'>
                                        {description}
                                    </p>
                                    <p className='main-text' id='contact'>
                                        {contact}
                                    </p>
                                </div>
                            </div>
                        )
            } else {
                return null;
            }
   }
}
