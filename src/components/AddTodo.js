import React, {Component} from 'react';

class AddTodo extends Component{
    state={
        content: ''
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        //Add new todo
        const {addTodo} = this.props;
        addTodo(this.state);
        this.setState({
            content: '',
        });
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Add new Todo:</label>
                    <input type='text'
                        name='content'
                        onChange={this.handleOnChange}
                        value={this.state.content}/>
                </form>
            </div>
        );
    };
}

export default AddTodo;