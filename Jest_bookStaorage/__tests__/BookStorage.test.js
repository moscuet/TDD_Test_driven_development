'use strict';

const BookStorage = require('../BookStorage');
const dataStorage = require('../dataStorage.json');

describe('constructor', ()=>{
    test('object created', ()=>{
        const bookStorage = new BookStorage(dataStorage);
        expect(bookStorage.bookStorage).toEqual(dataStorage);
    });

    test('missing parameter throws an exception "data storage missing"', ()=>{
        expect(() => new BookStorage()).toThrow('data storage missing');
    });
});


describe('getById(value)', ()=>{
    const bookStorage=new BookStorage(dataStorage);
    
    test('missing parameter throws an exception', ()=>{
        expect(() => bookStorage.getById()).toThrow('parameter missing');
    });

    test(' Not existed id', ()=>{
        expect(bookStorage.getById('Not existed')).toEqual(null);
    });

    test('use id: 1', ()=>{
        expect(bookStorage.getById(1)).toEqual([dataStorage[0]]);
    });
    test('use id: 2', ()=>{
        expect(bookStorage.getById(2)).toEqual([dataStorage[1]]);
    });
    test('use id: 3', ()=>{
        expect(bookStorage.getById(3)).toEqual([dataStorage[2]]);
    });
    
});


describe('getAllIdsByName(value)', ()=>{
    const bookStorage=new BookStorage(dataStorage);
    
    test('parameter missing', ()=>{
        expect(bookStorage.getAllIdsByName()).toEqual([]);
    });
     
    test(' Not existed name', ()=>{
        expect(bookStorage.getAllIdsByName('Not existed')).toEqual([]);
    });

    test('use name: NoSql - New Hope', ()=>{
        expect(bookStorage.getAllIdsByName('NoSql - New Hope')).toEqual([dataStorage[0]]);
    });
    test('use name: Databases - The rise and fall', ()=>{
        expect(bookStorage.getAllIdsByName('Databases - The rise and fall')).toEqual([dataStorage[1]]);
    });
    test('use name: Hacking databases', ()=>{
        expect(bookStorage.getAllIdsByName('Hacking databases')).toEqual([dataStorage[2]]);
    });
    
});


describe('getAllBookAuthors()', ()=>{
    const bookStorage=new BookStorage(dataStorage);

    test('search all authors in default book storage', ()=>{
        expect(bookStorage.getAllBookAuthors()).toEqual(['Layla Jones','Antony Lee','Emily White']);
    });

    const dataWithoutAuthor =  [
        {
          "id": 1,
          "name": "NoSql - New Hope",
          "topics": ["noSql", "sql", "future databases"],
          "price": 25,
          "extras": [{
              "name": "hard cover",
              "price": 30
            },
            {
              "name": "cd",
              "price": 15
            }
          ]
        }
    ]

    test('if no author found return empty', ()=>{
        const bookStorage = new BookStorage(dataWithoutAuthor);
        expect(bookStorage.getAllBookAuthors()).toEqual([]);
    });

    const data =  [
        {
          "id": 1,
          "name": "NoSql - New Hope",
          "topics": ["noSql", "sql"],
          "price": 25,
          "author": "Jones",
          "extras": [{
              "name": "hard cover",
              "price": 30
            },
            {
              "name": "cd",
              "price": 15
            }
          ]
        },
        {
            "id": 1,
            "name": "NoSql - New Hope",
            "topics": ["future databases"],
            "author": "Jones",
            "price": 25,
            "extras": [{
                "name": "hard cover",
                "price": 30
              },
              {
                "name": "cd",
                "price": 15
              }
            ]
          }
    ]
    test('The author added only once', ()=>{
        const bookStorage = new BookStorage(data)
        expect(bookStorage.getAllBookAuthors().length).toEqual(1);
    });
    
})

describe('getAllBooksByAuthor(author)', ()=>{
    const bookStorage=new BookStorage(dataStorage);

    test('missing parameter throws an exception', ()=>{
        expect(()=>bookStorage.getAllBooksByAuthor()).toThrow('missing parameter');
    });
    test('search book of author: Layla Jones', ()=>{
        expect(bookStorage.getAllBooksByAuthor('Layla Jones')[0].author).toEqual('Layla Jones');
        expect(bookStorage.getAllBooksByAuthor('Layla Jones')[0].name).toEqual('NoSql - New Hope');
    });
    test('search book of author: Antony Lee', ()=>{
        expect(bookStorage.getAllBooksByAuthor('Antony Lee')[0].author).toEqual('Antony Lee');
        expect(bookStorage.getAllBooksByAuthor('Antony Lee')[0].name).toEqual('Databases - The rise and fall');
    });

    test('search book of author: Not existed', ()=>{
        expect(bookStorage.getAllBooksByAuthor('Not existed')).toEqual([]);
    });    
});

describe('hasTopics(id)', ()=>{ 
    const bookStorage= new BookStorage(dataStorage);
    const testValues = [
        [null, false],
        [1, true],
        [2, true],
        [3, false]
    ]
    test.each(testValues)('no topics or no parameter return false', (a,expected)=>{
       expect(bookStorage.hasTopics(a)).toBe(expected)

    })

})

describe('GetBookTopics(id)', ()=>{ 
    const bookStorage= new BookStorage(dataStorage);
    const testValues = [
        [1, ["noSql", "sql", "future databases"]],
        [2, ["data storages", "sql", "noSql"]],
        [3, []]
    ]
    test.each(testValues)('no topics return empty array', (a,expected)=>{
       expect(bookStorage.GetBookTopics(a)).toStrictEqual(expected)

    })

    test('parameter missing throw exception', ()=>{
        expect(()=>bookStorage.GetBookTopics()).toThrow("parameter missing")
    })
})

describe('getPriceWithoutExtras(id)', ()=>{
    const bookStorage= new BookStorage(dataStorage);
    const testValues = [
        [1,25],
        [2, 45],
        [3, 30],
    ]
    test.each(testValues)( 'check price without extra', (a,expected)=>{
       expect(bookStorage.getPriceWithoutExtras(a)).toEqual(expected)
    })
    test( 'parameter missing', ()=>{
        expect( ()=>bookStorage.getPriceWithoutExtras()).toThrow('parameter missing')
    })
    test( 'id not found', ()=>{
        expect( ()=>bookStorage.getPriceWithoutExtras(4)).toThrow('nothing found with given id')
    })

})


describe('getTotalPrice(id)', () =>{
    const bookStorage= new BookStorage(dataStorage);

    const testValues = [
        [1, 70],
        [2, 190],
        [3, 30]
    ]
    test.each( 'testing with existed id', (a,result)=>{
       expect(bookStorage.getTotalPrice(a)).toBe(result)
    })

    test( 'parameter missing', ()=>{
        expect( ()=>bookStorage.getPriceWithoutExtras()).toThrow('parameter missing')
    })

    test( 'id not found', ()=>{
        expect( ()=>bookStorage.getPriceWithoutExtras(4)).toThrow('nothing found with given id')
    })

})

describe('getPriceOfTheExtras(id)', ()=> {const bookStorage= new BookStorage(dataStorage);

    const testValues = [
        [1, 45],
        [2, 145],
        [3, 0]
    ]
    test.each( 'testing with existed id', (a,result)=>{
       expect(bookStorage.getTotalPrice(a)).toBe(result)
    })

    test( 'parameter missing', ()=>{
        expect( ()=>bookStorage.getPriceWithoutExtras()).toThrow('parameter missing')
    })

    test( 'id not found', ()=>{
        expect( ()=>bookStorage.getPriceWithoutExtras(4)).toThrow('nothing found with given id')
    })

})