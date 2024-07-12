Aqui está uma lista de 10 exercícios práticos em ReactJS focados no hook `useState`. Cada exercício inclui um código base e uma documentação com os requisitos para você implementar as alterações.

### Exercício 1: Contador Simples => feito
#### Código Base:
```jsx
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

#### Requisitos:
- Adicionar um botão para decrementar o contador.
- Adicionar um botão para resetar o contador para zero.

### Exercício 2: Input de Texto => feito
#### Código Base:
```jsx
import React, { useState } from 'react';

function InputTexto() {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
      <p>Você digitou: {texto}</p>
    </div>
  );
}

export default InputTexto;
```

#### Requisitos:
- Adicionar um botão que limpe o campo de texto.
- Mostrar a contagem de caracteres digitados.

### Exercício 3: Lista de Tarefas => feito
#### Código Base:
```jsx
import React, { useState } from 'react';

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa('');
  };

  return (
    <div>
      <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;
```

#### Requisitos:
- Adicionar a funcionalidade de remover uma tarefa da lista.
- Adicionar a funcionalidade de marcar uma tarefa como concluída.

### Exercício 4: Controle de Visibilidade => feito
#### Código Base:
```jsx
import React, { useState } from 'react';

function ControleVisibilidade() {
  const [visivel, setVisivel] = useState(true);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>Toggle Visibilidade</button>
      {visivel && <p>Este é um texto visível.</p>}
    </div>
  );
}

export default ControleVisibilidade;
```

#### Requisitos:
- Adicionar um botão para exibir/ocultar um elemento adicional (por exemplo, uma imagem).
- Adicionar uma animação de transição ao exibir/ocultar os elementos.

### Exercício 5: Alternar Tema (Claro/Escuro)
#### Código Base:
```jsx
import React, { useState } from 'react';

function AlternarTema() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const estilo = {
    backgroundColor: temaEscuro ? '#333' : '#FFF',
    color: temaEscuro ? '#FFF' : '#000',
    padding: '10px',
    textAlign: 'center',
  };

  return (
    <div style={estilo}>
      <p>Este é um exemplo de alternância de tema.</p>
      <button onClick={() => setTemaEscuro(!temaEscuro)}>
        Alternar para {temaEscuro ? 'Claro' : 'Escuro'}
      </button>
    </div>
  );
}

export default AlternarTema;
```

#### Requisitos:
- Adicionar a persistência do tema utilizando o `localStorage`.
- Adicionar a opção de escolher entre mais de dois temas (por exemplo, um tema azul).

### Exercício 6: Controle de Formulário
#### Código Base:
```jsx
import React, { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nome: ${nome}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
```

#### Requisitos:
- Adicionar validação de formulário (por exemplo, verificar se o nome não está vazio e se o email é válido).
- Exibir mensagens de erro abaixo dos campos inválidos.

### Exercício 7: Controle de Volume
#### Código Base:
```jsx
import React, { useState } from 'react';

function ControleVolume() {
  const [volume, setVolume] = useState(50);

  return (
    <div>
      <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(e.target.value)} />
      <p>Volume: {volume}</p>
    </div>
  );
}

export default ControleVolume;
```

#### Requisitos:
- Adicionar botões para aumentar e diminuir o volume em 10 unidades.
- Adicionar um botão para mutar o volume.

### Exercício 8: Preferências de Notificações
#### Código Base:
```jsx
import React, { useState } from 'react';

function PreferenciasNotificacoes() {
  const [notificacoes, setNotificacoes] = useState({
    email: false,
    sms: false,
    push: false,
  });

  const toggleNotificacao = (tipo) => {
    setNotificacoes({ ...notificacoes, [tipo]: !notificacoes[tipo] });
  };

  return (
    <div>
      <h3>Preferências de Notificações</h3>
      <div>
        <label>
          <input type="checkbox" checked={notificacoes.email} onChange={() => toggleNotificacao('email')} />
          Email
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={notificacoes.sms} onChange={() => toggleNotificacao('sms')} />
          SMS
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={notificacoes.push} onChange={() => toggleNotificacao('push')} />
          Push
        </label>
      </div>
    </div>
  );
}

export default PreferenciasNotificacoes;
```

#### Requisitos:
- Adicionar a persistência das preferências de notificações utilizando o `localStorage`.
- Adicionar um botão para resetar todas as preferências para o estado inicial.

### Exercício 9: Simulador de Lançamento de Moeda
#### Código Base:
```jsx
import React, { useState } from 'react';

function LancamentoMoeda() {
  const [resultado, setResultado] = useState('');

  const lancarMoeda = () => {
    const valor = Math.random() < 0.5 ? 'Cara' : 'Coroa';
    setResultado(valor);
  };

  return (
    <div>
      <p>Resultado: {resultado}</p>
      <button onClick={lancarMoeda}>Lançar Moeda</button>
    </div>
  );
}

export default LancamentoMoeda;
```

#### Requisitos:
- Exibir o histórico dos últimos 5 lançamentos.
- Adicionar um botão para limpar o histórico.

### Exercício 10: Contador com Passo Personalizado
#### Código Base:
```jsx
import React, { useState } from 'react';

function ContadorPasso() {
  const [contador, setContador] = useState(0);
  const [passo, setPasso] = useState(1);

  return (
    <div>
      <div>
        <label>Passo:</label>
        <input type="number" value={passo} onChange={(e) => setPasso(Number(e.target.value))} />
      </div>
      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + passo)}>Incrementar</button>
    </div>
  );
}

export default ContadorPasso;
```

#### Requisitos:
- Adicionar um botão para decrementar o contador pelo passo definido.
- Adicionar validação para impedir passos negativos e contadores negativos.

Espero que esses exercícios ajudem a entender melhor como utilizar o hook `useState` no ReactJS. Se precisar de mais alguma coisa, estou à disposição!