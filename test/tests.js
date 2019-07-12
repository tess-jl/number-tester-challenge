import isEven from '../is-even.js';

const test = QUnit.test;

test('test if even', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 4;

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = isEven(x);


    //Assert
    // What should the result be?
    assert.equal(expected, true);
});

test('time if odd', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = isEven(x);


    //Assert
    // What should the result be?
    assert.equal(expected, false);
});
