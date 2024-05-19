import _ from 'lodash';

const data = [
    {
        username: 'Pedro',
        role: 'admin'
    },
    {
        username: 'Valentina',
        role: 'seller'
    },
    {
        username: 'Zulema',
        role: 'seller'
    },
    {
        username: 'Ricardo',
        role: 'customer'
    }
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);