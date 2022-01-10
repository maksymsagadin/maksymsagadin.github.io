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
    }
];