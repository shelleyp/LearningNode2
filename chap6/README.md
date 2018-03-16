# Learning Node 2nd edition

## Updates to examples for upcoming Node.js 10 release

### Chapter 6

Node added times as numbers in v8.1.0. The output from example chap6-2.js differs from the book because of this change.

Another change from v7.6.0 is the addition of URL object support for fs (File Sysystem) modules. These depend on a specialized _file:_ protocol. 

To demonstrate, I created chap6-5new.js to test the use of the URL object. Note, as per Node documentation, there are platform-specific behaviors associated with _file:_. On Windows, I get

file:///C:/Users/shell/projects/new.txt

On Linux, I get

file:///home/projects/LearningNode2/chap6/new.txt

Other than that, everything is clean. I did clean up some example file labeling.

