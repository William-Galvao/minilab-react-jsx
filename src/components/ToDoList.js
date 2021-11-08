const tasks = [
    "Fazer compras",
    "Renovar CNH",
    "Pagar contas",
    "Estudar React",
    "Fazer Minilab",
];

function ToDoList() {
    return (<div>
        <ul className="list-group">
            {tasks.map((task) => {
                return <li className="list-group-item">{task}</li>

            }
            )}

        </ul>

    </div>)
}

export default ToDoList;