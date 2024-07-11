import React, {useState} from 'react';

function ListaTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa('');
    };
    const removerTarefa = () => {
        setTarefas(tarefas.filter((tarefa) => tarefa !== novaTarefa));
        setNovaTarefa('');
    };

    return (
        <div>
            <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)}/>
            <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
            <button onClick={removerTarefa}>Remover Tarefa</button>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaTarefas;


// #### Requisitos:
// - Adicionar a funcionalidade de remover uma tarefa da lista.
// - Adicionar a funcionalidade de marcar uma tarefa como concluída.
