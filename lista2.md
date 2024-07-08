Lista de 20 exercícios práticos sobre o hook `useState` em ReactJS. Cada exercício inclui um código base
que você deve alterar ou manter para praticar o uso do hook `useState`.

1. **Contador simples**
   ```jsx
   import React, { useState } from 'react';

   function Counter() {
       const [count, setCount] = useState(0);

       return (
           <div>
               <p>Count: {count}</p>
               <button onClick={() => setCount(count + 1)}>Increment</button>
           </div>
       );
   }

   export default Counter;
   ```

2. **Contador com decremento**
   ```jsx
   import React, { useState } from 'react';

   function Counter() {
       const [count, setCount] = useState(0);

       return (
           <div>
               <p>Count: {count}</p>
               <button onClick={() => setCount(count + 1)}>Increment</button>
               <button onClick={() => setCount(count - 1)}>Decrement</button>
           </div>
       );
   }

   export default Counter;
   ```

3. **Alternar estado entre verdadeiro e falso**
   ```jsx
   import React, { useState } from 'react';

   function Toggle() {
       const [isOn, setIsOn] = useState(false);

       return (
           <div>
               <p>{isOn ? "On" : "Off"}</p>
               <button onClick={() => setIsOn(!isOn)}>Toggle</button>
           </div>
       );
   }

   export default Toggle;
   ```

4. **Input controlado**
   ```jsx
   import React, { useState } from 'react';

   function ControlledInput() {
       const [text, setText] = useState('');

       return (
           <div>
               <input 
                   type="text" 
                   value={text} 
                   onChange={(e) => setText(e.target.value)} 
               />
               <p>{text}</p>
           </div>
       );
   }

   export default ControlledInput;
   ```

5. **Checkbox controlado**
   ```jsx
   import React, { useState } from 'react';

   function ControlledCheckbox() {
       const [isChecked, setIsChecked] = useState(false);

       return (
           <div>
               <input 
                   type="checkbox" 
                   checked={isChecked} 
                   onChange={(e) => setIsChecked(e.target.checked)} 
               />
               <p>{isChecked ? "Checked" : "Unchecked"}</p>
           </div>
       );
   }

   export default ControlledCheckbox;
   ```

6. **Mudar cor de fundo**
   ```jsx
   import React, { useState } from 'react';

   function BackgroundColor() {
       const [color, setColor] = useState('white');

       return (
           <div style={{ backgroundColor: color, height: '100vh' }}>
               <button onClick={() => setColor(color === 'white' ? 'blue' : 'white')}>
                   Change Color
               </button>
           </div>
       );
   }

   export default BackgroundColor;
   ```

7. **Exibir/ocultar texto**
   ```jsx
   import React, { useState } from 'react';

   function ToggleText() {
       const [isVisible, setIsVisible] = useState(true);

       return (
           <div>
               <button onClick={() => setIsVisible(!isVisible)}>
                   {isVisible ? "Hide" : "Show"} Text
               </button>
               {isVisible && <p>This is some text!</p>}
           </div>
       );
   }

   export default ToggleText;
   ```

8. **Gerenciar lista de itens**
   ```jsx
   import React, { useState } from 'react';

   function ItemList() {
       const [items, setItems] = useState([]);

       const addItem = () => {
           setItems([...items, `Item ${items.length + 1}`]);
       };

       return (
           <div>
               <button onClick={addItem}>Add Item</button>
               <ul>
                   {items.map((item, index) => (
                       <li key={index}>{item}</li>
                   ))}
               </ul>
           </div>
       );
   }

   export default ItemList;
   ```

9. **Gerenciar formulário de múltiplos inputs**
   ```jsx
   import React, { useState } from 'react';

   function MultiInputForm() {
       const [form, setForm] = useState({ name: '', email: '' });

       const handleChange = (e) => {
           setForm({
               ...form,
               [e.target.name]: e.target.value
           });
       };

       return (
           <div>
               <input 
                   type="text" 
                   name="name" 
                   value={form.name} 
                   onChange={handleChange} 
                   placeholder="Name"
               />
               <input 
                   type="email" 
                   name="email" 
                   value={form.email} 
                   onChange={handleChange} 
                   placeholder="Email"
               />
               <p>Name: {form.name}</p>
               <p>Email: {form.email}</p>
           </div>
       );
   }

   export default MultiInputForm;
   ```

10. **Contador com reset**
    ```jsx
    import React, { useState } from 'react';

    function CounterWithReset() {
        const [count, setCount] = useState(0);

        const resetCount = () => {
            setCount(0);
        };

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        );
    }

    export default CounterWithReset;
    ```

11. **Mudar texto de botão**
    ```jsx
    import React, { useState } from 'react';

    function ButtonText() {
        const [text, setText] = useState('Click me');

        const handleClick = () => {
            setText('Clicked');
        };

        return (
            <button onClick={handleClick}>{text}</button>
        );
    }

    export default ButtonText;
    ```

12. **Contador com valor inicial dinâmico**
    ```jsx
    import React, { useState } from 'react';

    function DynamicInitialValue() {
        const [count, setCount] = useState(() => {
            const initialValue = 10; // Pode ser calculado dinamicamente
            return initialValue;
        });

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
    }

    export default DynamicInitialValue;
    ```

13. **Mostrar/esconder senha**
    ```jsx
    import React, { useState } from 'react';

    function ShowHidePassword() {
        const [password, setPassword] = useState('');
        const [showPassword, setShowPassword] = useState(false);

        return (
            <div>
                <input 
                    type={showPassword ? "text" : "password"} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Hide" : "Show"} Password
                </button>
            </div>
        );
    }

    export default ShowHidePassword;
    ```

14. **Gerenciar múltiplas caixas de seleção**
    ```jsx
    import React, { useState } from 'react';

    function MultipleCheckboxes() {
        const [checkedItems, setCheckedItems] = useState({
            item1: false,
            item2: false,
            item3: false
        });

        const handleChange = (e) => {
            setCheckedItems({
                ...checkedItems,
                [e.target.name]: e.target.checked
            });
        };

        return (
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="item1" 
                        checked={checkedItems.item1} 
                        onChange={handleChange} 
                    />
                    Item 1
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="item2" 
                        checked={checkedItems.item2} 
                        onChange={handleChange} 
                    />
                    Item 2
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="item3" 
                        checked={checkedItems.item3} 
                        onChange={handleChange} 
                    />
                    Item 3
                </label>
            </div>
        );
    }

    export default MultipleCheckboxes;
    ```

15. **Formulário de login simples**
    ```jsx
    import React, { useState } from 'react';

    function LoginForm() {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            alert(`Username: ${username}, Password: ${password}`);
        };

        return (
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username

"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<button type="submit">Login</button>
</form>
);
}

    export default LoginForm;
    ```

16. **Contador com incremento e decremento dinâmico**
    ```jsx
    import React, { useState } from 'react';

    function DynamicCounter() {
        const [count, setCount] = useState(0);
        const [step, setStep] = useState(1);

        return (
            <div>
                <p>Count: {count}</p>
                <input 
                    type="number" 
                    value={step} 
                    onChange={(e) => setStep(Number(e.target.value))} 
                />
                <button onClick={() => setCount(count + step)}>Increment</button>
                <button onClick={() => setCount(count - step)}>Decrement</button>
            </div>
        );
    }

    export default DynamicCounter;
    ```

17. **Lista de tarefas**
    ```jsx
    import React, { useState } from 'react';

    function TodoList() {
        const [task, setTask] = useState('');
        const [tasks, setTasks] = useState([]);

        const addTask = () => {
            setTasks([...tasks, task]);
            setTask('');
        };

        return (
            <div>
                <input 
                    type="text" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                />
                <button onClick={addTask}>Add Task</button>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        );
    }

    export default TodoList;
    ```

18. **Gerenciar estado com objetos aninhados**
    ```jsx
    import React, { useState } from 'react';

    function NestedState() {
        const [user, setUser] = useState({
            name: '',
            address: {
                city: '',
                country: ''
            }
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setUser({
                ...user,
                [name]: value
            });
        };

        const handleAddressChange = (e) => {
            const { name, value } = e.target;
            setUser({
                ...user,
                address: {
                    ...user.address,
                    [name]: value
                }
            });
        };

        return (
            <div>
                <input 
                    type="text" 
                    name="name" 
                    value={user.name} 
                    onChange={handleChange} 
                    placeholder="Name"
                />
                <input 
                    type="text" 
                    name="city" 
                    value={user.address.city} 
                    onChange={handleAddressChange} 
                    placeholder="City"
                />
                <input 
                    type="text" 
                    name="country" 
                    value={user.address.country} 
                    onChange={handleAddressChange} 
                    placeholder="Country"
                />
                <p>{`Name: ${user.name}, City: ${user.address.city}, Country: ${user.address.country}`}</p>
            </div>
        );
    }

    export default NestedState;
    ```

19. **Formulario com validação**
    ```jsx
    import React, { useState } from 'react';

    function ValidationForm() {
        const [email, setEmail] = useState('');
        const [error, setError] = useState('');

        const validateEmail = (e) => {
            const value = e.target.value;
            setEmail(value);

            if (!value.includes('@')) {
                setError('Email is invalid');
            } else {
                setError('');
            }
        };

        return (
            <div>
                <input 
                    type="text" 
                    value={email} 
                    onChange={validateEmail} 
                    placeholder="Email"
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        );
    }

    export default ValidationForm;
    ```

20. **Incremento e decremento com useReducer**
    ```jsx
    import React, { useReducer } from 'react';

    function CounterWithReducer() {
        const initialState = { count: 0 };

        function reducer(state, action) {
            switch (action.type) {
                case 'increment':
                    return { count: state.count + 1 };
                case 'decrement':
                    return { count: state.count - 1 };
                default:
                    throw new Error();
            }
        }

        const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <div>
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            </div>
        );
    }

    export default CounterWithReducer;
    ```

Cada um desses exercícios oferece uma boa prática para entender e utilizar o hook `useState` em diferentes contextos e
cenários. Boa prática!