import { NATIONALITIES } from 'constants/nationalities';

function getStatistikNat(nat) {
    
    function groupBy(arr, property) {
        return arr.reduce(function (memo, x) {
            if (!memo[x[property]]) { memo[x[property]] = []; }
            memo[x[property]].push(x);
            return memo;
        }, []);
    }
    const done = groupBy(nat, 'nat');

    const newObj = Object.keys(done).map((key, index) => {
        return {
            id: index,
            title: key,
            value: done[key].length,
        };
    });
    const newObjNAt = Object.keys(NATIONALITIES).map((key) => {
        return {
            nat: NATIONALITIES[key].name,
        };
    });

    let third = newObj.map((item, index) => ({ ...item, ...newObjNAt[index] }));
    return third;
}

export  {getStatistikNat}