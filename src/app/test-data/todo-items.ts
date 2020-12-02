import { TodoItem } from './../model';
import * as moment from 'moment';


export const TODO_ITEMS: TodoItem[] = [
    {
        id: 1,
        done: false,
        text: 'Item 1',
        dueDate: moment(new Date()).add(7, 'days').toDate()
    },

    {
        id: 2,
        done: false,
        text: 'Item 2',
        dueDate: moment(new Date()).add(10, 'days').toDate()
    },

    {
        id: 3,
        done: false,
        text: 'Item 3',
        dueDate: moment(new Date()).add(-7, 'days').toDate()
    },

    {
        id: 4,
        done: true,
        text: 'Item 4asdadasd',
        dueDate: moment(new Date()).add(0, 'days').toDate()
    }
];