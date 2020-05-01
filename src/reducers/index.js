import { combineReducers } from 'redux'
import events from './events'
import { reducer as form } from 'redux-form'

export default combineReducers({ events, form })
// export default combineReducers({foo, bar, baz}) //このように列挙
