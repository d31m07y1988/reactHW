module.exports = class Store {
        constructor(reducer, defState)
        {
            this.state = defState;
            this.reducer = reducer;
        }

        dispatch(action)
        {
            return this.reducer(this.state, action);
        }

        getState()
        {
            return this.state
        }
    }