import "./card.css";
import users from "../../components/data/users.json";

export const Card = () => {
    console.log(users);
    return(
        <div className="card_wrapper">
            {users.map((user)=>{
                return(
                    <div className="card key={user.id">
                        <h2>First name: {user.first_name}</h2>
                        <h2>Last name: {user.last_name}</h2>
                        <p>Age:{user.age}</p>
                    </div>
                );
            })}

        </div>
    );
};