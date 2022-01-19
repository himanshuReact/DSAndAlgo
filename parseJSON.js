// print the  name  "something" as many times you get through out the json



const categories = [
  {
    name: "something",
    id: 1,
    child: [
      {
        name: "something",
        id: 1,
        child: [
          {
            name: "something",
            id: 1,
            child: [
              {
                name: "something",
                id: 1,
                child: [
                  {
                    name: "something",
                    id: 1,
                    child: []
                  }
                ]
              }
            ]
          },
          {
            name: "something",
            id: 1,
            child: []
          }
        ]
      }
    ]
  },
  {
    name: "something",
    id: 1,
    child: [
      {
        name: "something",
        id: 1,
        child: [
          {
            name: "something",
            id: 1,
            child: [
              {
                name: "something",
                id: 1,
                child: [
                  {
                    name: "something",
                    id: 1,
                    child: []
                  }
                ]
              }
            ]
          },
          {
            name: "something",
            id: 1,
            child: []
          }
        ]
      }
    ]
  }
];

const getData = (data) => {
	for(let i in data){
		console.log(data[i].name)
		if(typeof(data[i].child == "object") && data[i].child.length>0){
                         getData(jsonData[i].child)
		} 
	}
};

getData(categories);
VM2136:77 something
VM2136:79 Uncaught ReferenceError: jsonData is not defined
    at getData (<anonymous>:79:34)
    at <anonymous>:84:1
getData @ VM2136:79
(anonymous) @ VM2136:84
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const categories = [
  {
    name: "something",
    id: 1,
    child: [
      {
        name: "something",
        id: 1,
        child: [
          {
            name: "something",
            id: 1,
            child: [
              {
                name: "something",
                id: 1,
                child: [
                  {
                    name: "something",
                    id: 1,
                    child: []
                  }
                ]
              }
            ]
          },
          {
            name: "something",
            id: 1,
            child: []
          }
        ]
      }
    ]
  },
  {
    name: "something",
    id: 1,
    child: [
      {
        name: "something",
        id: 1,
        child: [
          {
            name: "something",
            id: 1,
            child: [
              {
                name: "something",
                id: 1,
                child: [
                  {
                    name: "something",
                    id: 1,
                    child: []
                  }
                ]
              }
            ]
          },
          {
            name: "something",
            id: 1,
            child: []
          }
        ]
      }
    ]
  }
];

const getData = (data) => {
	for(let i in data){
		console.log(data[i].name)
		if(typeof(data[i].child == "object") && data[i].child.length>0){
                         getData(data[i].child)
		} 
	}
};
