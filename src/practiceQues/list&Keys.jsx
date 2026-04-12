const fruits = ["Apple", "Mango", "Banana"];
export const FruitList = () => {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

// ===========================================

const students = ["Amit", "Rahul", "Sneha", "Priya"];

export const Student = () => {
  return (
    <ul>
      {students.map((std) => (
        <li key={std}>{std}</li>
      ))}
    </ul>
  );
};

// =================================================

const F1 = ["Apple", "Banana", "Mango", "Orange"];

export const Fruits = () => {
  return (
    <ul>
      {F1.map((frt) => (
        <li key={frt}>{frt}</li>
      ))}
    </ul>
  );
};

// ================================================

const l1 = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Mango" },
];

export const RenderList = () => {
  return (
    <ul>
      {l1.map((lst) => (
        <li key={lst.id}>Name: {lst.name}</li>
      ))}
    </ul>
  );
};

// =============================================

// using filter we can filter data

const users = [
  { id: 1, name: "Amit", age: 22 },
  { id: 2, name: "Rahul", age: 25 },
  { id: 3, name: "Sneha", age: 20 },
];

export const RenderUser = () => {
  return (
    <ul>
      {users
        .filter((user) => user.age > 21)

        .map((user) => (
          <li key={user.id}>
            Id:- {user.id} /Name:{user.name} /Age:{user.age}
          </li>
        ))}
    </ul>
  );
};

// second way

// const users = [
//   { id: 1, name: "Amit", age: 22 },
//   { id: 2, name: "Rahul", age: 25 },
//   { id: 3, name: "Sneha", age: 20 },
// ];

// export const RenderUser = () => {
//   return (
//     <ul>
//       {users.map((user) => {
//         if (user.age > 21) {
//           return (
//             <li key={user.id}>
//               Id:- {user.id} /Name:{user.name} /Age:{user.age}
//             </li>
//           );
//         }
//         return null;
//       })}
//     </ul>
//   );
// };

// Third way

// const users = [
//   { id: 1, name: "Amit", age: 22 },
//   { id: 2, name: "Rahul", age: 25 },
//   { id: 3, name: "Sneha", age: 20 },
// ];

// export const RenderUser = () => {
//   return (
//     <ul>
//       {
//         users.map(user =>(
//             user.age > 21 && (
//         <li key={user.id}>
//           {user.name} - {user.age}
//         </li>
//             )
//         ))
//       }
//     </ul>
//   );
// };

// ==================================================

const tasks = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Practice JS", completed: false },
  { id: 3, title: "Build Project", completed: true },
];

export const ShowTask = () => {
  return (
    <ul>
      {tasks
        .filter((tasks) => tasks.completed)
        .map((Task) => (
          <li key={Task.id}>✅{Task.title}</li>
        ))}
    </ul>
  );
};

// ===================================================

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 },
];

export const ShowProduct = () => {
  return (
    <ul>
      {products.map((prod) => {
        if (prod.price > 25000) {
          return (
            <li key={prod.id}>
              {prod.name} - {prod.price}
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

// ============================================

const users1 = [
  { id: 1, name: "Amit", skills: ["React", "JS"] },
  { id: 2, name: "Rahul", skills: ["HTML", "CSS"] },
];

export const RenderUser1 = () => {
  return (
    <ul>
      {users1.map((userName) => (
        <li key={userName.id}>
          {userName.name}
          <ul>
            {userName.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
