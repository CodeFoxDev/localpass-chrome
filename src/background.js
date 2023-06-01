// STATUS:
// - Optimal
// - Normal
// - Action
// - Risk

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ passwords: [] });
})

chrome.webNavigation.onCompleted.addListener(({ tabId, frameId }) => {
  if (frameId !== 0) return;

  chrome.scripting.executeScript({
    target: { tabId },
    function: newPageLoad,
  })
})

const newPageLoad = async () => {
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs.item(i);
    if (input.type !== "password") continue;

    const { passwords } = await chrome.storage.sync.get("passwords");
    const found = passwords.find(password => password.url === location.origin);

    if (found !== undefined) {
      input.value = found.password;
    } else {
      const label = document.createElement("div");
      label.className = "localpass-input-label";
      label.id = "localpass-input-label";
      label.innerHTML = /*html*/`
        
      `
    }
  }
}