import { Fragment, useState, useEffect, Component } from 'react';
import UsersContext from '../store/users-context';
import classes from './UserFinder.module.css';
import ErrorBoundary from './ErrorBoundary';
import Users from './Users';

const DUMMY_USERS = [
    { id: "u1", name: "Max"},
    { id: "u2", name: "manuel"},
    {id: "u3", name: "Jonas"}
];

class UserFinder extends Component {
    static contextType = UsersContext;  

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    }

    componentDidMount() {
        // send Http request.....
        this.setState({filteredUsers: DUMMY_USERS})
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUsers: this.context.users.filter((user) => 
                    user.name.includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler(event) {
        // MUST PASS AN OBJECT INTO SETSTATE - 
        // React then merges that object with the state
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
          );
    }
}

// const UserFinder = () => {

//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input type='search' onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;