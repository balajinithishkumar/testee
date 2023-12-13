export function userValidation(user) {
  if (user.data?.Error) return user.data.Error;
  localStorage.setItem("user", JSON.stringify(user.data));
  return window.location.reload();
}

export function logoutvalidation(user) {
  if (user.data?.Error) return alert(user.data.Error);
  alert("Loged Out!");
  localStorage.setItem("user", null);
  return window.location.reload();
}
