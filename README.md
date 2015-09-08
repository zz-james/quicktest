# Quick Test
quick test of javascript knowledge

There are several improvements to make if there was more time.

###Modules
First, and maybe most obviously is I have not used any kind of module/dependency system.

At this stage the dependency graph is pretty linear and not particulary problematic, although with time that always changes, so my recommendation would be to use common.js style modules and add a browserify task to the gulp build. I recommend this because should you need to transition to ES7 and Babel, this is the easiest to manage.

###Templates
The template system is very basic, I would include a templating library such as Hogan.JS for a real project and manage the templates as seperate files in their own /template directory.

###Unit Tests
Finally I would implement some unit tests. At this stage we could test using a simple setup/teardown with an assert method to console.log pass/fail. Since the model is injected into the view we can test the model with a simple console output, we could also place a mock model into the view. 

Apologies for my lack of available time, I hope I have done enough.

Many thanks for your time.
