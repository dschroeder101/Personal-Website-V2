//Returns repos that are not a Fork and are classified as JavaScript Project
exports.filterRepos = (repos) => {
    return repos.filter(isFork).filter(isJS);
  }
  
  function isFork(value) {
    return !value.fork;
  }
  
  function isJS(value) {
    return value.language === "JavaScript";
  }
  