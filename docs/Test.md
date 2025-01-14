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

### 