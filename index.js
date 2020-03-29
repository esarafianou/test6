function somethingTrue() {
  return true
}

function somethingFalse() {
  return false
}

function securetrue(a, c) {
  let foo = a.b
  if (!foo || somethingTrue()) {
    throw Error('error')
  }
  c(null)
}

function securefalse(a, c) {
  let foo = a.b
  if (!foo || somethingFalse()) {
    throw Error('error')
  }
  c(null)
}

function secure2a(a, c) {
  let foo = a.b
  if (!foo || !somethingFalse()) {
    throw Error('error')
  }
  c(null)
}

function secure2b(a, c) {
  let foo = a.b
  if (!foo || !somethingTrue()) {
    throw Error('error')
  }
  c(null)
}

function secure2c(a, c, d) {
  let foo = a.b
  let something = d === foo
  if (!foo || !something) {
    throw Error('error')
  }
  c(null)
}

function secure2d(a, c, d) {
  let foo = a.b
  let bar = d || null
  let something = bar === foo
  if (!foo || !something) {
    throw Error('error')
  }
  c(null)
}

function secure2e(a, c, d) {
  let foo = a.b
  let bar = d || null
  let something = bar === foo
  if (!foo || !something) {
    return c('error')
  }
  c(null)
}

function secure2g(a, c, d) {
  let foo = !a.b
  let bar = d || null
  let something = bar === !foo
  if (foo || !something) {
    return c('error')
  }
  c(null)
}

function secure2h(a, c, d) {
  let foo = !a.b
  if (foo) {
    return c('error')
  }
  c(null)
}

function secure2f(a, c, d) {
  let foo = a.b
  let bar = d || null
  let something = bar === foo
  if (!foo || !something) {
    return c('error')
  }
  let callback  = function () {
    c(null)
  }
  callback()
}

function insecuretrue(a, c) {
  let foo = a.b
  if (foo && somethingTrue()) {
    throw Error('error')
  }
  c(null)
}

function insecurefalse(a, c) {
  let foo = a.b
  if (foo && somethingFalse()) {
    throw Error('error')
  }
  c(null)
}

function insecure2(a, c) {
  let foo = a.b
  if (foo || somethingFalse()) {
    throw Error('error')
  }
  c(null)
}

function insecure3(a, c) {
  let foo = a.b
  if (!foo || somethingFalse()) {
    console.log("error")
  }
  c(null)
}


function insecure4(a, c) {
  let foo = a.b
  if (!foo) {
    console.log("error")
  }
  c(null)
}

function secure4(a, c) {
  let foo = a.b
  if (!foo) {
    throw Error("error")
  }
  c(null)
}
