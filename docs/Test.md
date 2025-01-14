## Angular Unit Test

### Significance of Angular Testing

Angular applications are typically tested using tools like Jasmine and Karma for unit testing, Protractor for end-to-end testing, and TestBed for integration testing. These tools help developers write and run tests efficiently, covering various aspects of the application's functionality.

### What is Unit Testing Angular?

In Angular it is recommand use AAA (Arrange, Act, Assert) progress. 

**Arrange**
it involves arranging data from selected test groups or environments for testing.

**Act**
it involves performing actual logic on arranged data.

**Assert**
it involves the verification of test results.

### What are karma and jasmine in angular testing?

Jasmine:
jasmine is a behavior-driven development (BDD) testing framework. It provides a test suite and helps you to write unit test cases in a human-readable format. You simply write test cases for your code to achieve a requirement.

Karma:
karma is a test runner that runs test cases that are written by using the Jasmine framework. It provides some features like code coverage, live reloading test files, and integration with continuous integration (CI) tools.


#### What is the difference between Jasmine and Cypress?


Cypress
For validating end-user experiences, workflows, and UI behavior.
Ideal for testing integration between front-end and back-end systems.
When real browser execution is a priority.

Jasmine
For isolated unit tests to ensure individual components, services, or directives behave as expected.
Best for TDD (Test-Driven Development) and BDD during application development.
Focused on testing small, isolated pieces of logic.

https://medium.com/@maremallasaihemanth/cypress-vs-jasmine-in-angular-a-comprehensive-comparison-35d4bcd6855a


### First unit test

```javascript
it(`should return app title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let restult = app.getTittle();
    expect(restult).toEqual('angular-18-test');
  })
```

### What is TestBed?

ngular testing package includes testBed class which is a utility that provides a configured environment for testing angular applications. It includes all necessary components other than test frameworks and a configuration file is required for testing the system. Tests are performed by providing data and evaluating results to ensure correct results. Thus, TestBed provides a controlled environment to identify defects, improve quality, and achieve requirements.

TestBed provides some methods that are useful while testing functionality. One of those is TestBed.configureTestingModule() is used to configure the testing module before running test cases in an angular application. TestBed.createComponent() which is used to create angular component instances.

### Mock data

fakeAsync

tick

### Spy

Spy is a feature of Jasmine that allows you to take a control of class, function, or object and modify the behavior in such a way as you want.

when use Spy, we don't need to use mockProductService.

#### Why should we use Jasmine Spy Object in Angular Unit Testing?

Answer: Because when you create spy , you get the power to do below tasks in unit tests:

You can check whether the function has been called or not (by using `expect(component.method).toHaveBeenCalled())

You can even override the actual implementation (written inside service.ts) and return some dummy data to create several scenarios for unit test cases.

You check this article where I used Stubs unlike what you can see in angular guide. I used Stubs because I can reuse it other other-component.spec.ts which uses the same service, by simply injecting in providers using useClass. Take your time and see how I used .toHaveBeenCalled() [ to understand my point 1 ] , and also how I used .returnValue() to recreate the error behavior of service.

### Testing asynchronous code

Angular provides three ways to test asynchronous code

Using "async" and "fixture.whenStable"

Using "fakeAsync" and "tick"

Using "done: DoneFn"


### Code coverage

Code coverage is a feature provided by the Jasmine framework that shows how much code is covered in unit testing.

Line coverage
It measures the total percentage of lines which is covered by unit test cases.

Function coverage
Measures the percentage of functions covered by test cases. Useful for detecting unused functions.

Branch coverage
Measures the percentage of branches executed by a test cases.

```shell
=============================== Coverage summary ===============================
Statements   : 88.23% ( 15/17 )
Branches     : 100% ( 0/0 )
Functions    : 88.88% ( 8/9 )
Lines        : 86.66% ( 13/15 )
```

### Best Practices for Writing Effective Test Cases

- Unitwise testing
- Expect pure test output
- Write readable test cases
- Don't write business logic inside test cases
- Test cases should be up to date
- It should meet the standard code coverage percentage

### In a Nutshell

Unit testing in Angular is a very important practice for ensuring the dependable and estimated outcomes of Angular applications. By using the power of Jasmine and Karma, you can write multiple test cases, to test angular components and structures independently of each other, configure the testing environment with TestBed, and leverage mocking and spying to achieve independent and isolated execution.

With karma and jasmine with best practices in hand, you can definitely validate your code’s functionality, enhance its testing workflow, and build robust Angular applications that meet AAA practices. Explore the realm of unit testing using Jasmine and Karma to unlock the complete capabilities of your Angular apps and projects.

The origin article is [here](https://www.angularminds.com/blog/writing-your-first-angular-unit-test-step-by-step-tutorial)

