function loadCSS(url) {
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  window.onload = function() {
    loadCSS("./css/atoms.css");
    loadCSS("./css/molecules.css");
    loadCSS("./css/organisms.css");
    //console.log("yessir")
  };