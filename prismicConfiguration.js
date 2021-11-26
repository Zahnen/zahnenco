// -- Prismic Repo Name
export const repoName = "zahnen";

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.prismic.io/api/v2`;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6InphaG5lbi04MTBkZDAwMi1mMmI1LTQ1YTItYmUxNC1mNjQ3MzBlNDExMjZfNCIsImRhdGUiOjE2Mzc5NjAxNTcsImRvbWFpbiI6InphaG5lbiIsImlhdCI6MTYzNzk2MDE1N30.bOwqvD870K6do1_9fBqAuuWZCHhLJAgUHZm0UQWdkwo";

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }
  return "/";
};

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const Router = {
  routes: [
    {
      type: "project",
      path: "/:uid",
    },
  ],
};
