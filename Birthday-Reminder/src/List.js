import React , {useState} from 'react';
import data from './data.js';

const List = () => {

    const [person,setPerson] = useState(data);

    const [count, setCount] = useState(data.length);

    let decreaseCount = () => {
        setCount(count-1);
    }

    let removePerson = (id) => {
        let newPerson = person.filter( (person) => id !== person.id)

        setPerson(newPerson);
        decreaseCount();
    }

    let removeAllPerson = () => {
        setPerson([]);
        setCount(0);
    }

    return (
        <div className="container">
            {/* <h2>{count} Birthdays Today</h2> */}
            <h3>{count} Birthdays Today</h3>
            {
                person.map((item,index) => {
                    return (
                        <article key={item.id} className='person'>


                            <img src={item.image} alt='' />
                            <div>
                                <h4>{item.name}</h4>
                                
                                <h4>{item.age}</h4>
                                <button onClick={() => {removePerson(item.id)}}>Wished !</button>
                            </div>
                            

                        </article>
                    )
                })

            }

            <button onClick={() => {removeAllPerson()}} className = 'containerBtn'>Wished ALl !!!</button>

        </div>
    );
};

export default List;
