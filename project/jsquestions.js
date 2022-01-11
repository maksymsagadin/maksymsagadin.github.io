data = [
    {
      questionText: 'Which operator returns true if the two compared values are not equal?',
      choices: [
        {
          choiceText: '<>',
          correct: false
        },
        {
          choiceText: '~',
          correct: false
        },
        {
          choiceText: '==!',
          correct: false
        },
        {
          choiceText: '!==',
          correct: true
        },
      ]
    },
    {
      questionText: 'How is a forEach statement different from a for statement?',
      choices: [
        {
          choiceText: 'Only a for statement uses a callback function.',
          correct: false
        },
        {
          choiceText: 'A for statement is generic, but a forEach statement can be used only with an array.',
          correct: true
        },
        {
          choiceText: 'Only a forEach statement lets you specify your own iterator.',
          correct: false
        },
        {
          choiceText: 'A forEach statement is generic, but a for statement can be used only with an array.',
          correct: false
        },
      ]
    },
    {
      questionText: 'Which statement is the correct way to create a variable called rate and assign it the value 100?',
      choices: [
        {
          choiceText: 'let rate = 100;',
          correct: true
        },
        {
          choiceText: 'let 100 = rate;',
          correct: false
        },
        {
          choiceText: '100 = let rate;',
          correct: false
        },
        {
          choiceText: 'rate = 100;',
          correct: false
        }
      ]
    },
    {
      questionText: 'Which statement creates a new Person object called "student"?',
      choices: [
        {
          choiceText: 'var student = new Person();',
          correct: true
        },
        {
          choiceText: 'var student = construct Person;',
          correct: false
        },
        {
          choiceText: 'var student = Person();',
          correct: false
        },
        {
          choiceText: 'var student = construct Person();',
          correct: false
        },
      ]
    },
    {
      questionText: 'How does a function create a closure?',
      choices: [
        {
          choiceText: 'It reloads the document whenever the value changes.',
          correct: false
        },
        {
          choiceText: 'It returns a reference to a variable in its parent scope.',
          correct: true
        },
        {
          choiceText: 'It completes execution without returning.',
          correct: false
        },
        {
          choiceText: 'It copies a local variable to the global scope.',
          correct: false
        },
      ]
    },
    {
      questionText: 'You need to match a time value such as "12:00:32". Which regular expression would work for your code?',
      choices: [
        {
          choiceText: '/[0-9]{2,}:[0-9]{2,}:[3-9]{2,}/',
          correct: false
        },
        {
          choiceText: '/\\d\\d:\\d\\d:\\d\\d/',
          correct: true
        },
        {
          choiceText: '/[0-9]+:[0-9]:[0-9]+/',
          correct: false
        },
        {
          choiceText: '/ : : /',
          correct: false
        }
      ]
    },
    {
      questionText: 'How would you reference the text "avenue" in this code:<br> let roadTypes = ["street", "road", "avenue", "circle"];',
      choices: [
        {
          choiceText: 'roadTypes.2',
          correct: false
        },
        {
          choiceText: 'roadTypes[3]',
          correct: false
        },
        {
          choiceText: 'roadTypes.3',
          correct: false
        },
        {
          choiceText: 'roadTypes[2]',
          correct: true
        }
      ]
    },
    {
      questionText: 'What is the result of running this statement:<br> console.log(typeof 42);',
      choices: [
        {
          choiceText: '"float"',
          correct: false
        },
        {
          choiceText: '"value"',
          correct: false
        },
        {
          choiceText: '"number"',
          correct: true
        },
        {
          choiceText: '"integer"',
          correct: false
        },
      ]
    },
    {
      questionText: 'Which property references the DOM object that dispatched an event?',
      choices: [
        {
          choiceText: 'self',
          correct: false
        },
        {
          choiceText: 'object',
          correct: false
        },
        {
          choiceText: 'target',
          correct: true
        },
        {
          choiceText: 'source',
          correct: false
        },
      ]
    },
    {
      questionText: 'Which method converts JSON data to a JavaScript object?',
      choices: [
        {
          choiceText: 'JSON.fromString( )',
          correct: false
        },
        {
          choiceText: 'JSON.parse( )',
          correct: true
        },
        {
          choiceText: 'JSON.toObject( )',
          correct: false
        },
        {
          choiceText: 'JSON.stringify( )',
          correct: false
        }
      ]
    },
    {
      questionText: 'When would you use a conditional statement?',
      choices: [
        {
          choiceText: 'When you want to reuse a set of statements multiple times.',
          correct: false
        },
        {
          choiceText: 'When you want your code to choose between multiple options.',
          correct: true
        },
        {
          choiceText: 'When you want to group data together.',
          correct: false
        },
        {
          choiceText: 'When you want to loop through a group of statement.',
          correct: false
        },
      ]
    },
    {
      questionText: 'Which Object method returns an iterable that can be used to iterate over the properties of an object?',
      choices: [
        {
          choiceText: 'Object.get( )',
          correct: false
        },
        {
          choiceText: 'Object.loop( )',
          correct: false
        },
        {
          choiceText: 'Object.each( )',
          correct: false
        },
        {
          choiceText: 'Object.keys( )',
          correct: true
        },
      ]
    },
    {
      questionText: 'What is one difference between collections created with Map and collections created with Object?',
      choices: [
        {
          choiceText: 'You can iterate over values in a Map in their insertion order.',
          correct: false
        },
        {
          choiceText: 'You can count the records in a Map with a single method call.',
          correct: true
        },
        {
          choiceText: 'Keys in Maps can be strings.',
          correct: false
        },
        {
          choiceText: 'You can access values in a Map without iterating over the whole collection.',
          correct: false
        }
      ]
    },
    {
      questionText: '0 && hi',
      choices: [
        {
          choiceText: 'ReferenceError',
          correct: false
        },
        {
          choiceText: 'True',
          correct: false
        },
        {
          choiceText: '0',
          correct: true
        },
        {
          choiceText: 'false',
          correct: false
        },
      ]
    },
    {
      questionText: 'Which of the following operators can be used to do a short-circuit evaluation?',
      choices: [
        {
          choiceText: '++',
          correct: false
        },
        {
          choiceText: '--',
          correct: false
        },
        {
          choiceText: '==',
          correct: false
        },
        {
          choiceText: '||',
          correct: true
        },
      ]
    },
    {
      questionText: 'Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?',
      choices: [
        {
          choiceText: 'Student.parent = Person;',
          correct: false
        },
        {
          choiceText: 'Student.prototype = new Person( );',
          correct: true
        },
        {
          choiceText: 'Student.prototype = Person;',
          correct: false
        },
        {
          choiceText: 'Student.prototype = Person( );',
          correct: false
        },
      ]
    },
    {
      questionText: 'Why would you include a "use strict" statement in a JavaScript file?',
      choices: [
        {
          choiceText: 'to tell parsers to interpret your JavaScript syntax loosely',
          correct: false
        },
        {
          choiceText: 'to tell parsers to enforce all JavaScript syntax rules when processing your code',
          correct: true
        },
        {
          choiceText: 'to instruct the browser to automatically fix any errors it finds in the code',
          correct: false
        },
        {
          choiceText: 'to enable ES6 features in your code',
          correct: false
        },
      ]
    },
    {
      questionText: 'Which variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?',
      choices: [
        {
          choiceText: 'all of them',
          correct: false
        },
        {
          choiceText: 'const',
          correct: false
        },
        {
          choiceText: 'var',
          correct: true
        },
        {
          choiceText: 'let',
          correct: false
        },
      ]
    },
    {
      questionText: 'Which of the following values is not a Boolean false?',
      choices: [
        {
          choiceText: 'Boolean(0)',
          correct: false
        },
        {
          choiceText: 'Boolean("")',
          correct: false
        },
        {
          choiceText: 'Boolean(NaN)',
          correct: false
        },
        {
          choiceText: 'Boolean("false")',
          correct: true
        },
      ]
    },
    {
      questionText: 'Which of the following is not a keyword in JavaScript?',
      choices: [
        {
          choiceText: 'this',
          correct: false
        },
        {
          choiceText: 'catch',
          correct: false
        },
        {
          choiceText: 'function',
          correct: false
        },
        {
          choiceText: 'array',
          correct: true
        },
      ]
    },
    {
      questionText: 'Which variable is an implicit parameter for every function in JavaScript?',
      choices: [
        {
          choiceText: 'Arguments',
          correct: true
        },
        {
          choiceText: 'args',
          correct: false
        },
        {
          choiceText: 'argsArray',
          correct: false
        },
        {
          choiceText: 'argumentsList',
          correct: false
        },
      ]
    },
    {
      questionText: 'Why is it usually better to work with Objects instead of Arrays to store a collection of records?',
      choices: [
        {
          choiceText: 'Objects are more efficient in terms of storage.',
          correct: false
        },
        {
          choiceText: 'Adding a record to an object is significantly faster than pushing a record into an array.',
          correct: false
        },
        {
          choiceText: 'Most operations involve looking up a record, and objects can do that better than arrays.',
          correct: true
        },
        {
          choiceText: 'Working with objects makes the code more readable.',
          correct: false
        },
      ]
    },
    {
      questionText: 'Which statement is true about the "async" attribute for the HTML script tag?',
      choices: [
        {
          choiceText: 'It can be used for both internal and external JavaScript code.',
          correct: false
        },
        {
          choiceText: 'It can be used only for internal JavaScript code.',
          correct: false
        },
        {
          choiceText: 'It can be used only for internal or external JavaScript code that exports a promise.',
          correct: false
        },
        {
          choiceText: 'It can be used only for external JavaScript code.',
          correct: true
        },
      ]
    },
    {
      questionText: 'How do you import the lodash library making it top-level Api available as the "_" variable?',
      choices: [
        {
          choiceText: 'import _ from "lodash";',
          correct: true
        },
        {
          choiceText: 'import "lodash" as _ ;',
          correct: false
        },
        {
          choiceText: 'import "_" from "lodash";',
          correct: false
        },
        {
          choiceText: 'import lodash as _ from "lodash";',
          correct: false
        },
      ]
    },
    {
      questionText: 'What does the following expression evaluate to:<br> [] == [];',
      choices: [
        {
          choiceText: 'True',
          correct: false
        },
        {
          choiceText: 'undefined',
          correct: false
        },
        {
          choiceText: '[ ]',
          correct: false
        },
        {
          choiceText: 'False',
          correct: true
        },
      ]
    },
    {
      questionText: 'What type of function can have its execution suspended and then resumed at a later point?',
      choices: [
        {
          choiceText: 'Generator function',
          correct: true
        },
        {
          choiceText: 'Arrow function',
          correct: false
        },
        {
          choiceText: 'Async/ Await function',
          correct: false
        },
        {
          choiceText: 'Promise function',
          correct: false
        },
      ]
    },
    {
      questionText: 'Which statement is true about Functional Programming?',
      choices: [
        {
          choiceText: 'Every object in the program has to be a function.',
          correct: false
        },
        {
          choiceText: 'Code is grouped with the state it modifies.',
          correct: false
        },
        {
          choiceText: 'Date fields and methods are kept in units.',
          correct: false
        },
        {
          choiceText: 'Side effects are not allowed.',
          correct: true
        },
      ]
    },
    {
      questionText: 'Your code is producing the error: TypeError: Cannot read property "reduce" of undefined. What does that mean?',
      choices: [
        {
          choiceText: 'You are calling a method named reduce on an object that is declared but has no value.',
          correct: true
        },
        {
          choiceText: 'You are calling a method named reduce on an object that does not exist.',
          correct: false
        },
        {
          choiceText: 'You are calling a method named reduce on an empty array.',
          correct: false
        },
        {
          choiceText: 'You are calling a method named reduce on an object that has a null value.',
          correct: false
        },
      ]
    },
    {
      questionText: 'How many prototype objects are in the chain for the following array:<br> let arr = [ ];',
      choices: [
        {
          choiceText: '3',
          correct: false
        },
        {
          choiceText: '2',
          correct: true
        },
        {
          choiceText: '1',
          correct: false
        },
        {
          choiceText: '0',
          correct: false
        },
      ]
    },
    {
      questionText: 'Which choice is not a unary operator?',
      choices: [
        {
          choiceText: 'typeof',
          correct: false
        },
        {
          choiceText: 'delete',
          correct: false
        },
        {
          choiceText: 'instanceof',
          correct: true
        },
        {
          choiceText: 'void',
          correct: false
        },
      ]
    },
    {
      questionText: 'What will the value of y be in this code:<br> const x = 6 % 2;<br> const y = x ? "One" : "Two";',
      choices: [
        {
          choiceText: 'One',
          correct: false
        },
        {
          choiceText: 'undefined',
          correct: false
        },
        {
          choiceText: 'TRUE',
          correct: false
        },
        {
          choiceText: 'Two',
          correct: true
        },
      ]
    },
    {
      questionText: 'Which keyword is used to create an error?',
      choices: [
        {
          choiceText: 'throw',
          correct: true
        },
        {
          choiceText: 'exception',
          correct: false
        },
        {
          choiceText: 'catch',
          correct: false
        },
        {
          choiceText: 'error',
          correct: false
        },
      ]
    },
    {
      questionText: 'What is one difference between the async and defer attributes of the HTML script tag?',
      choices: [
        {
          choiceText: 'The defer attribute can work synchronously.',
          correct: false
        },
        {
          choiceText: 'The defer attribute works only with generators.',
          correct: false
        },
        {
          choiceText: 'The defer attribute works only with promises.',
          correct: false
        },
        {
          choiceText: 'The defer attribute will asynchronously load the scripts in order.',
          correct: true
        },
      ]
    }
];