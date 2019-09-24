export default function ({ store, redirect }) {
  if(process.server){
    if(store.$cookies.get('_identity-frontend') !== undefined){
      redirect('/courses')
    }
  }
}
