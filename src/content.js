chrome.runtime.onMessage.addListener((req, sender, res) => {
  switch (req.text) {
    case "inputs":
      const inputs = document.querySelectorAll("input");
      inputs.forEach(e => {
        if (e.type == "password") {
          console.log(e);
          e.value = "hi";
        }
      })
      res(inputs);
      break;
    default: 
      res(null);
      break;
  }
});