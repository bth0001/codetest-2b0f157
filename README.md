## Instructions

Hi. We like to code, and we want to hire people like us. Please read these instructions carefully and follow them the best you can. If you get stuck email us--there's a ```mailto:``` link at the bottom of these instructions to do that.

1. Fork this repository into your own GitHub space.
2. Solve the problem below, checking in to your fork as you go as if this were a real project you're working on. Note that we're also testing your familiarty with GIT.
3. Submit a pull request back to this repository with your solution when finished.

## Todo's

Everyone's so busy! We'd like an application to track everyone on our team's tasks that's intuitive, elegant, and fun to use. Your task is to build that experience for us and code it up using your favorite front end framework. You have the following [user stories](https://www.mountaingoatsoftware.com/agile/user-stories) to go on:

1. As a user, I should be able to view a page with a task list on it.
2. As a user, I should be able to add a new task to the global task list.
3. As a user, I should be able to remove a task from the global task list.
4. As a user, I should be able to reorder a task in the task list.
5. As a user, I should be able to edit the name of a task in the task list.
6. As a user, I should be able to mark a task in the list as completed.

A task is simply defined as a small piece of work with a description and can exist in one of two simple states: completed or not completed. As for the list, consider it empty any time someone first visits your index page; you don't have to worry about saving the state of your application between uses.

### MVP

In Agile, we have the concept of a Minimum Viable Product--or MVP. We'd like to define the MVP for this project as successful completion and testing of the **first and second user stories**, and **two additional user stories** of your choice. So, in addition to completing the first and second stories pick two that look interesting to you and implement them! If you can implement extra stuff like additional stories or some unique features that make your application more usable or beautiful, feel free--that's bonus points!

Make sure that you identify which user stories you're working on in your Git workflow. You may do this via a mechanism like [GitHub flow](https://guides.github.com/introduction/flow/), feature branches, or something as simple as check-in comments.

### Architecture

In order to build this solution, select a front end framework and implement the HTML, CSS, and JavaScript required. Don't spend too much time stressing on the form of your application at the outset; you should come back to that after you have some basic things working.

 We recommend that if you're familiar with engines like Yeoman, Gulp, or Grunt that you use them to orchestrate your front end engineering process. Also, be sure to include unit tests via your favorite framework for any business logic you implement. If you're unfamiliar with JavaScript testing we suggest [Mocha](https://mochajs.org/)--it's light weight and easy to get working.

For data access, use flat JSON files. Or, if you want to get really fancy, consider a tiny node.js backend running express, or something similar with all your routes preconfigured and serving fake JSON payloads. We're looking for how scrappy you can get and how decoupled your personal engineering process is--along with how well you test your code.

### If you finish the solution with lots of time left:

- Implement the rest of the user stories as described.
- Think of ways to make it easier to use and more performant. Implement performance improvements and usability enhancements.
- Spend some time automating your build process on the front end. Consider require.js for dependencies or implement minification.
- Did you write a quick and dirty solution? Now abstract it a bit more and make it elegant and reusable.
- Do you have enough test coverage? Write some load tests if you've run out of unit test targets.

### Rules of the game:

1. You can use any existing frameworks in the programming language of choice.
2. We expect unit tests in the appropriate framework of your choice. If you're using a more exotic programming language or feature set, please provide instructions on how to run your tests. We will be running them. Writing zero tests is a fairly huge penalty.
3. If your personal focus is more on design and beauty, then spend time on that after you've implemented the MVP described above.

Hope you have fun, and please email all questions to: code@imaginexconsulting.com.