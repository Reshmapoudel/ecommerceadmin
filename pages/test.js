const obj = {
  name: "Main Object",
  nestedObject1: {
    name: "Nested Object 1",
    nestedProperty: {
      name: "Nested Property 1",
    },
  },
  nestedObject2: {
    name: "Nested Object 2",
    nestedProperty: "Nested Property 2 Value",
  },
};

// create a function in js where it takes param as string with dot notation

function get(path) {
  const data = { ...obj };
}

// expected result.
console.log(get("nestedObject1")); // result => '{name: 'Nested Object 1', nestedProperty: { name: 'Nested Property 1' }}'
console.log(get("nestedObject1.nestedProperty.name")); // result => 'Nested Property 1'

console.log(obj.nestedObject1.name);
