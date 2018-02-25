/*
import cloneDR from "./deepCopy";
import Store from "./store";
*/
const cloneDR = require('./deepCopy');
const Store = require('./store');


const ADD_ITEM = 'ADD_ITEM';
const READ_ITEM = 'READ_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

class UserStore {

    static reducer(state, action) {
        this.state = cloneDR(state);
        switch (action.type) {
            case(ADD_ITEM):
                var id = this.state.sequence;
                action.payload.id = id;
                this.state.users.push(action.payload);
                this.state.sequence = Number.parseInt(this.state.sequence) + 1;
                break;
            case(READ_ITEM):
                id = this.state.users.findIndex(item => item.id === action.payload.id);
                if(id != -1) {
                    return this.state.users[id];
                } else {
                    throw "user not found";
                }
                break;
            case(UPDATE_ITEM):
                id = this.state.users.findIndex(item => item.id === action.payload.id);
                if(id != -1) {
                    this.state.users[id] = action.payload;
                } else {
                    throw "user not found";
                }
                break;
            case(DELETE_ITEM):
                id = this.state.users.findIndex(item => item.id === action.payload.id);
                if(id != -1) {
                    this.state.users.splice(id, 1);
                } else {
                    throw "user not found";
                }
                break;
            default:
                throw "no actions";
                break;
        }
    }

    static addItem(name, age = 0) {
        return {
            type: ADD_ITEM,
            payload: {
                name: name,
                age: age,
                status: 'new'
            }
        }
    }

    static updateItem(id, name, age, status) {
        return {
            type: UPDATE_ITEM,
            payload: {
                id: id,
                name: name,
                age: age,
                status: status,
                date: new Date().toDateString()
            }
        }
    }

    static deleteItem(id) {
        return {
            type: DELETE_ITEM,
            payload: {
                id: id
            }
        }
    }

    static getItem(id) {
        return {
            type: READ_ITEM,
            payload: {id: id}
        }
    }
}




const store = new Store(UserStore.reducer, {sequence: 0, users: []});

store.dispatch(UserStore.addItem('Кирил'));
store.dispatch(UserStore.addItem('Анна',25));
store.dispatch(UserStore.addItem('Саня',34));
store.dispatch(UserStore.addItem('Ваня',16));
store.dispatch(UserStore.addItem('Катя',23));
store.dispatch(UserStore.addItem('Маша',45));
console.log(store.state);

store.dispatch(UserStore.deleteItem(3));
console.log(store.state);

store.dispatch(UserStore.updateItem(5, 'Мария', 45, 'edited'));

console.log(store.dispatch(UserStore.getItem(5)));

