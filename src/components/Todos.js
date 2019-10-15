import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todosList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <button
                        className="btn-floating red"
                        style={{marginRight: '1.1rem',}}
                        onClick={() => deleteTodo(todo.id)}>
                            &#10006; {/*Decimal code for 'x'*/}
                    </button>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">
            No todos, all done 
            <span role="img" desc="Smiley Emoji">&#128512;</span>
            {/*Decimal code for smiling emoji i.e. :) */}
        </p>
    );

    return(
        <div className="todos collection">
            {todosList}
        </div>
    );
};

export default Todos;