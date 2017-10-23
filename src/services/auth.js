export default {
  DZIENNIKSID: null,
  login(context, creds, redirect) {
    return context.$http.post('auth', { login: creds.username, password: creds.password })
      .then(r => r.json())
      .then((j) => {
        this.DZIENNIKSID = j.DZIENNIKSID;
        context.$router.push(redirect);
      });
  },
};
