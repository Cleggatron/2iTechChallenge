# 2i Tech Challenge

  ## Description

  This is my attempt at the tech challenge provided by 2i. The specification provided was:

  In a language of your choice, using all best practice principles you’re aware of, could you please provide code that iterates in multiples of A until X, then in multiples of A + 1 until 2X, then multiples of A + 2 until 3X. Please state any assumptions you’ve made.
  
  ## Build Concepts

  I've elected to iterate once through all the possible values, and store valid numbers for all three iterations of the conditions in an object, as they arise.

  After this I am then taking the values for the objects, and iterating through each in turn logging out the values. 

  By doing this I have been able to return the object containing the values, This in turn has enabled me to create a basic test suite using Jest. I was then able to develop this function using Test Driven Development and Red Green Refactoring.

  This has added an addition loop iteration, slightly increasing time complexity, however this is kept within a linear scale. Additionally I feel that this method allows for easier scaling, should I need to add further iterations, as I would only need to increase the object size, the limit on the first loop, and a section of code to push the values up. All of this is reasonably concise, compared to coding 3 seperate loops for the three iterations.

  I have built in an error thrower should we get non numeric input. Additionally it will return automatically with a value of 0 should we receive inputs for either parameter that are <= to 0. This will prevent an infinite recursion in the case of the A parameter being <= 0.

  I have assumed a starting point of A in all instances of the first iteration, with A+1,and A+2 for the second and third respectively.

  ## Usage

  Once you clone the repository you can run the index.js file from the clommand line in the root directory using the command `node index.js`. The function call featuring non numeric output is commented out at the moment, to better see the output of a sucessful run. That line can be uncommented to check that it throws the expected error.

  If you wish to run the test suite you will need to run the command `npm i` to install Jest (assuming you have Node.js installed on your machine). These can then be run in the command line with the command `npm run test`.

 ## Contact

 If you want to get in contact with any questions please email to david.robert.clegg@gmail.com
