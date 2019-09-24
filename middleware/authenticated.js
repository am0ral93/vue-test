export default function ({store, redirect}) {
  if (process.server) {
    if(store.$router.currentRoute.name === 'login-slug'){
      return;
    }
    if (store.$cookies.get('_identity-frontend') === undefined) {
      if (store.$router.currentRoute.name === 'index') {
        redirect('/startteaching')
      } else {
        redirect('/login')
      }
    }
  }
}
