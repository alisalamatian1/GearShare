import React from 'react';
import Navbar from './navbar';

export default class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            dates: '',
            rate: '',
            contact: '',
            description: '',
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDatesChange = this.handleDatesChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    render() {
        return (
            <div id='post-page' className='section'>
                <Navbar />
                <h1 className='main-text'>Make a Post</h1>
                <div id='post-container'>
                    <form id='post' onSubmit={this.handleSubmit}>
                        <label htmlFor='title'>
                            Post Title <br />
                            <input 
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                            />
                        </label>
                        <label htmlFor='dates'>
                            Available Dates <br />
                                <input 
                                value={this.state.dates}
                                onChange={this.handleDatesChange}
                            />
                        </label>
                        <label htmlFor='rate'>
                            Rate<br />
                                <input 
                                value={this.state.rate}
                                onChange={this.handleRateChange}
                            />
                        </label>
                        <label id='contact' htmlFor='contact'>
                            Contact<br />
                                <input 
                                value={this.state.contact}
                                onChange={this.handleContactChange}
                            />
                                <label htmlFor='default-contact'>
                                    <input 
                                    type='checkbox'
                                    id='default-c'
                                    onChange={this.handleCheckboxChange}/>
                                    Use my registered e-mail as my preferred 
                                    contact
                                </label>
                        </label>
                        <label htmlFor='description'>
                            Description<br />
                                <input 
                                value={this.state.description}
                                onChange={this.handleDescriptionChange}
                            />
                        </label>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        );
        }

            handleSubmit(e) {
                e.preventDefault();
                const title = this.state.title;
                const dates = this.state.dates;
                const rate = this.state.rate;
                const contact = this.state.contact;
                const description = this.state.description;

                this.setState({title: ''});
                this.setState({dates: ''});
                this.setState({rate: ''});
                this.setState({contact: ''});
                this.setState({description: ''});
                this.props.onSubmit({
                    title,
                    dates,
                    rate,
                    contact,
                    description,
                });
            }

            handleTitleChange(e) {
                this.setState({title: e.target.value});
            }

            handleDatesChange(e) {
                this.setState({dates: e.target.value});
            }

            handleRateChange(e) {
                this.setState({rate: e.target.value});
            }

            handleContactChange(e) {
                this.setState({contact: e.target.value});
            }

            handleDescriptionChange(e) {
                this.setState({description: e.target.value});
            }

            handleCheckboxChange(e) {
                if (e.target.checked) {
                    this.setState({contact: this.props.defaultContact});
                }
            }
}
