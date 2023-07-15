import React from 'react'

const PublicRoutes = (children,...routeProps) => {

    const profile=true
    if(profile) {
       return  <Redirect to="/signin"/>
    }

  return <Route {...routeProps}>{children}</Route> 

}

export default PublicRoutes
