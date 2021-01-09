const userId = "js-primer-example";

const main = () => {
  fetchUserInfo("kenzoukenzou")
    // ここではJSONオブジェクトで解決されるPromise
    .then((userInfo) => createView(userInfo))
    // ここではHTML文字列で解決されるPromise
    .then((view) => displayView(view))
    .catch((error) => {
      console.error(`Error happened: ${error}`);
    });
};

const fetchUserInfo = (userId) => {
  return fetch(
    `https://api.github.com/users/${encodeURIComponent(userId)}`
  ).then((response) => {
    if (!response.ok) {
      // エラーレスポンスからRejectedなPromiseを作成して返す
      return Promise.reject(
        new Error(`${response.status}: ${response.statusText}`)
      );
    } else {
      return response.json();
    }
  });
};

function createView(userInfo) {
  return escapeHTML`
    <h4>${userInfo.name} (@${userInfo.login})</h4>
    <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
    <dl>
        <dt>Location</dt>
        <dd>${userInfo.location}</dd>
        <dt>Repositories</dt>
        <dd>${userInfo.public_repos}</dd>
    </dl>
    `;
}

function displayView(view) {
  const result = document.getElementById("result");
  result.innerHTML = view;
}

const escapeSpecialChars = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const escapeHTML = (strings, ...values) => {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
};
