// STATUS:
// - Optimal
// - Normal
// - Action
// - Risk

chrome.webNavigation.onCompleted.addListener(({ tabId, frameId }) => {
  if (frameId !== 0) return;

  chrome.scripting.executeScript({
    target: { tabId },
    function: pageLoaded
  })
});

const pageLoaded = async () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((inp) => {
    if (inp.type === "password") {
      inp.focus();
      inp.value = "hi";
    }
  });
}