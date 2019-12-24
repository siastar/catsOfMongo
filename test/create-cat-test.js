const assert = require('assert');
const Cat = require('../src/cat.js');
const expect = require('expect');

describe('cat creation test', () => {
    it('saves a cat', () => {
        const buddyCat = new Cat{
            id: 1,
            name: 'Buddy',
            type: 'Sleepy',
            isfriendly: true
        };
        
        buddyCat.save().then((done) => {
            assert(!buddyCat.isNew);
        });
    });
});


it('should match creation conditions', () => {
    const cat  = new Cat(
        {
            id: 1,
            name: 'Buddy',
            type: 'Sleepy',
            isfriendly: true
        }
    );
    
    http://student.save (); 
    expect(http://student.name )
    .toExist()
    .toBeA('string')
    .toBe(""); 
});
