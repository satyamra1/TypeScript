                                                                TypeScript

        Typescript is the superset of javascript
        TS = JS + few extra features

1. Why do we need TS?

- TypeScript extends JavaScript and enhances the developer experience. It helps software developers add type safety to their projects and provides features like type aliases, interfaces, abstract classes, encapsulation, inheritance, and function overloading. Overall, TypeScript makes it easier to create large and complex projects and compiles to JavaScript.

2. Is TypeScript Frontend or Backend?

- TypeScript is neither a frontend nor a backend programming language. It is a superset of the popular software language, JavaScript. This is why TypeScript naturally suits front-end applications. However, TypeScript also works well with the Node backend.

How to do Setup:-

- npm i -g typescript
- tsc -v (Check version)
- npm init -y
- npx tsc --init
- create 2 folder - src , dist
- configure where you have to save build files(modify tsconfig.json) - "rootDir": "./src" , "outDir": "./dist"

2. Why do we create dist folder

- We build our project ,where all the files are merged into single page code

3. what is Inference
   Ans- When datatype is not explicitely assigned but it automatically picks it up, that concept is called inference.


What is advantage of TypeScript

1. It shows error while coding, before complilation.
2. It uses Inference.
3. It stictly defines datatypes.
4. 

How to use typescript:-
When ever we create any variable then assign it datatype there for security
ex-let abc:String ="satyam";
 