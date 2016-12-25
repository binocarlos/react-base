import tape from 'tape'

const testSuite = (opts = {}) => {
  tape('sanity check', (t) => {
    t.equal(10, 10, 'example test')
    t.end()
  })
}

export default testSuite