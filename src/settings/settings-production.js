const settings = {
    graphql: {
      uri: "",
    },
    meta: {
      rootUrl: "",
      title: "App",
      description: "The app description goes here.",
      social: {
        graphic:
          "https://avatars.githubusercontent.com/u/73821776?v=4",
        twitter: "@emreramazanoglu72",
      },
    },
    routes: {
      authenticated: {
        pathAfterFailure: "/login",
      },
      public: {
        pathAfterFailure: "/documents",
      },
    },
  };
  
  export default settings;