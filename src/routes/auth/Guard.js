export  function routeGuard(req, _, next) {
    req.user = {
      _id: "62d4217476ef6ded82812322",
      name: "john ajala",
      email: "john@ajala.com",
      phone: "+2349034343884",
      contacts: ["62d4485ccc9254b99b5025c2"],
      // 62d46be4f05c2f64aeb84e87
      __v: 0
    },
      
    next()
}

export function canActivate(_, __, next) {
    next()
}