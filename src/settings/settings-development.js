const settings = {
  meta: {
    rootUrl: "http://localhost:3000",
    title: "App",
    description: "The app description goes here.",
    social: {
      graphic: "https://avatars.githubusercontent.com/u/73821776?v=4",
      twitter: "@emreramazanoglu72"
    }
  },
  routes: {
    authenticated: {
      pathAfterFailure: "/login"
    },
    public: {
      pathAfterFailure: "/documents"
    }
  }
};

export default settings;
