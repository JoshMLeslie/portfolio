Post lunch break

types / interfaces look good for the github stuff

set up the repos.service.ts function(s) using them
    Should be just a single GET to the repo url
    give it inputs for username, pagination, and page_num

plug REPO-GET into the component

style component to load repos into a nice column thing with a 'loading' spinner for each?
    fuckin cdk scroll not supporting multi-column
        tried using flex-wrapping before, but it just freaks out.
        maybe dig into cdk scroll source to see how they stagger HTML rendering

add component to home screen    
